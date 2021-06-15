import React,{useEffect,useState} from 'react'
import  sanityClient  from '../client.js'
import  imageUrlBuilder  from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

const About = () => {
    const [author, setAuthor] =useState(null);
    useEffect(()=>{
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data)=>{setAuthor(data[0])})
        .catch(console.error);
    },[]);
    if(!author) return <div>Loading....</div>
    return (
      <main className="relative bg-green-100">
          <div className="p-10 lg:pt-32 containier mx-auto relative">
              <section className="bg-green-500 rounded-lg shadow-2xl lg:flex p-20">
                  <img src={urlFor(author.authorImage).url()} alt={author.name} className="rounded w-32 h-32 lg:h-64 lg:w-64 mr-8"
                  style={{clipPath:"circle(50%)"}}/>
                  <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-red-300 mb-4">
                          Hey there. I'm{" "}
                          <span className="text-yellow-200">{author.name}</span> 
                        </h1>
                        <div className="prose lg:prose-xl text-gray-100">
                            <BlockContent blocks={author.bio} projectId="lvj7qkf3" dataset="production"/>
                        </div>  
                  </div>
              </section>
          </div>
      </main>
    )
}

export default About
