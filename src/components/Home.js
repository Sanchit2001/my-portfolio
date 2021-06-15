import React from 'react'
import image from "../assets/profile.jpg";
export const Home = () => {
    return (
        <main  style={{background:"rgb(255, 191, 118)"}}>
            
            <section className="relative justify-center min-h-screen pt-12 lg:pt-32"  style={{margin:"auto"}}>
                <img  src={image} alt="profile" style={{clipPath:"circle(50%)",width:"300px",height:"300px",margin:"auto"}}/>
                <h1 className="text-green-600 font-bold cursive text-center sm: text-2xl md: text-5xl "  style={{margin:'auto',textAlign:"center",padding:"20px"}}>
                    Hello. I'am Sanchit Jain.
                </h1>
                
            </section>
            
        </main>
    )
}

export default Home
