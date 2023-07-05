import React from "react";
import './Header.css'
import mealsImg from '../Assets/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.avif'
const Header=()=>{
return(
    <div>
        <header className="header">
         <h1>Welcome to FoodArena</h1>
        </header>
        <div className='main-image'>
            <img src={mealsImg} alt='Food items' />
        </div>
    </div>
);
}
export default Header;