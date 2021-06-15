import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';

const Mycirtificate = () => {
    const [cirt,setCirt]=useState(null);
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
            "name": institute,
            
        }`).then((data)=> setCirt(data[0]))
        .catch(console.error);
    },[slug]);
    if(!cirt) return <div>Loading......</div>
    return (
        <main className="bg-green-100 min-h-screen p-12">
            <article className="container mx-auto rouned-lg">
                <header className="relative">
                
                    <div className=" w-full h-full flex items-center justify-center p-4">
                        <div className="bg-white bg-opacity-90 roundd p-2">
                            <h1 className="cursive text-xl lg:text-2xl mb-4 text-red-600">
                                {cirt.title}
                            </h1>
                            <img src={cirt.mainImage.asset.url} alt={cirt.title} className="w-full object-cover rounded-t"
                            />
                            <div className="flex justify-start text-gray-800 pt-4 pb-4">
                                
                                <p className="cursive flex items-center pl-4 text-lg">
                                    {cirt.name}
                                </p>
                            </div>
                        </div>
                    </div>
                                      
                </header>
                
            </article>
            
                
        </main>
    )
}

export default Mycirtificate
