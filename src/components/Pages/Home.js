import React from "react";
import '../Pages/Home.css'
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.png'

export const Home = () => {
  return (
    <>
      <section class="container">
        <div class="slider-wrapper">
            <div class="slider">
                <img id="slide-1" src={image1} alt="image1" />
                <img id="slide-2" src={image3} alt="image2" />
                <img id="slide-3" src={image2} alt="image3" />
            </div>
            <div class="slider-nav">
                <a href="slide-1"></a>
                <a href="slide-2"></a>
                <a href="slide-3"></a>
            </div>
        </div>
    </section>
    </>
  );
};
