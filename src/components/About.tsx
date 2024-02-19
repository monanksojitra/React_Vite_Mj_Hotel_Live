import React from 'react'; 
import { Link } from "react-router-dom"; 
 
function About() { 
  return ( 
    <div className="h-40 py-10 bg-lime-200 text-black  text-4xl flex flex-col gap-3 items-center justify-center" > 
      <h1>About</h1> 
      <p>Welcome to the About  Page!</p> 
<Link className="px-6 py-3 bg-blue-300" to="/">go to Home</Link > 
    </div > 
  ); 
} 
 
export default About; 
