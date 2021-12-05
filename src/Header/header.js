import React, { useEffect, useState } from "react";
import './header.css';


const Header = () => {
    
  //  Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        
    });

           
    /* Method that will fix header after a specific scrollable */
           const isSticky = (e) => {
                const header = document.querySelector('.header-section');
                let scrollTop = window.scrollY;
                scrollTop =  header.classList.add('is-sticky') ;
            };
        return (
    <>
     <header className="is-sticky d-none d-xl-block">
          React Video Player
     </header>
    </>
  );   
}

export default Header