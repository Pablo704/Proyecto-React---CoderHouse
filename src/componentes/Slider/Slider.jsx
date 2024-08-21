import React, { useEffect } from 'react'
import futbol from '../../assets/img/Futbol.png'
import Basket from '../../assets/img/BasketBall.png'
import Hockey from '../../assets/img/Hockey.png'
import Rugby from '../../assets/img/Rugby.png'
import MotorSpT from '../../assets/img/MotorSport.png'
import Leviatan from '../../assets/img/Leviatan.png'
import './Slider.css'


const Slider = () => {
    useEffect(() => {
        const wrapper = document.querySelector(".sliderWrapper");
        const menuItems = document.querySelectorAll(".menuItem");

        const handleMenuItemClick = (index) => {
            wrapper.style.transform = `translateX(${-83 * index}vw)`; // Cambié el -83 por -100 para ajustar la visualización
        };

        const clickHandlers = Array.from(menuItems).map((item, index) => {
            const handler = () => handleMenuItemClick(index);
            item.addEventListener("click", handler);
            return { item, handler };
        });

        return () => {
            clickHandlers.forEach(({ item, handler }) => {
                item.removeEventListener("click", handler);
            });
        };
    }, []);
    return (
        <div className='slider'>
            <div className='sliderWrapper'>
                <div className='sliderItem'>
                    <img src={Leviatan} alt="E-Sport" className='sliderImg'/>
                    <div className='sliderBg'></div>
                    <h1 className='sliderTitle'>LEVIATÁN<br />VCT AMERICAS</h1>
                    <h2 className="sliderPrice"> $45</h2>
                    
                </div> 
                <div className='sliderItem'>
                    <img src={Basket} alt="Basket" className='sliderImg'/>
                    <div className='sliderBg'></div>
                    <h1 className='sliderTitle'>Los Angeles Lakers<br /> LeBron James #23</h1>
                    <h2 className="sliderPrice">$139,99</h2>
                    
                </div>
                <div className='sliderItem'>
                    <img src={futbol} alt="Futbol" className='sliderImg'/>
                    <div className='sliderBg'></div>
                    <h1 className='sliderTitle'>SELECCION<br /> ARGENTINA 2024</h1>
                    <h2 className="sliderPrice">$45,95</h2>
                    
                </div>
                <div className='sliderItem'>
                    <img src={Hockey} alt="Hockey" className='sliderImg'/>
                    <div className='sliderBg'></div>
                    <h1 className='sliderTitle'>LAS LEONAS<br /> Seleccion ARG</h1>
                    <h2 className="sliderPrice">$45,95</h2>
                    
                </div>  
                <div className='sliderItem'>
                    <img src={Rugby} alt="Rugby" className='sliderImg'/>
                    <div className='sliderBg'></div>
                    <h1 className='sliderTitle'>LOS PUMAS <br />Seleccion ARG</h1>
                    <h2 className="sliderPrice">$45,95</h2>
                    
                </div> 
                <div className='sliderItem'>
                    <img src={MotorSpT} alt="MotorSport" className='sliderImg'/>
                    <div className='sliderBg'></div>
                    <h1 className='sliderTitle'>Polo Replic<br />RedBull Racing</h1>
                    <h2 className="sliderPrice">€59,95</h2>
                    
                </div> 
            </div>
        </div>
    )
}

export default Slider
