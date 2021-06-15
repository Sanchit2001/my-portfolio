import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import  imageUrlBuilder  from '@sanity/image-url';
const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}
const SinglePost = () => {
    const [singlePost,setSinglePost]=useState(null);
    const {slug} = useParams();
    useEffect(()=>{
        sanityClient.fetch(`*[slug.current=="${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image 
        }`).then((data)=> setSinglePost(data[0]))
        .catch(console.error);
    },[slug]);
    if(!singlePost) return <div>Loading......</div>
    return (
        <main className="bg-green-100 min-h-screen p-12">
            <article className="container mx-auto rouned-lg">
                <header className="relative">
                
                    <div className=" w-full h-full flex items-center justify-start p-4">
                        <div className="bg-white bg-opacity-90 roundd p-2">
                            <h1 className="cursive text-xl lg:text-2xl mb-4 text-red-600">
                                {singlePost.title}
                            </h1>
                            <img src={singlePost.mainImage.asset.url} alt={singlePost.title} className="w-full object-cover rounded-t"
                            />
                            <div className="flex justify-start text-gray-800 pt-4 pb-4">
                                <img src={urlFor(singlePost.authorImage).url()}
                                alt={singlePost.name}
                                className="w-16 h-16 rounded-full"/>
                                <p className="cursive flex items-center pl-4 text-lg">
                                    {singlePost.name}
                                </p>
                            </div>
                        </div>
                    </div>
                                      
                </header>
                
            </article>
            
                
        </main>
    )
}

export default SinglePost
