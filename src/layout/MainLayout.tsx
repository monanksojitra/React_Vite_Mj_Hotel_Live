import React from 'react'; 
import Footer from "./Footer"; 
import Navbar from "./Navbar"; 
 
function MainLayout({ children }) { 
  return ( 
<> 
<Navbar /> 
{children} 
<Footer /> 
</> 
); 
} 
 
export default MainLayout; 
