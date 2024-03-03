import React from "react";
import '../Pages/Home.css'
import image1 from '../images/image1.jpg';
import image7 from '../images/image7.jpg'
import image4 from '../images/image4.jpg';



export const Home = () => {
  return (
    <>
      <section class="container">
        <div class="slider-wrapper">
            <div class="slider">
                <img id="slide-1" src={image1} alt="image1" />
            </div>
            <div class="slider-nav">
                <a href="slide-1"></a>
                <a href="slide-2"></a>
                <a href="slide-3"></a>
            </div>
        </div>
        <div className="hero-text">
          <h1>Savana Laundry and Delivery Sevices</h1>
          <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."</p>
          <button>Get Started</button>
        </div>
    </section>
    <section className="service-description">
      <h2>Your Laundry Experts</h2>
      <div className="service-container">
      <div className="service-image">
        <img src={image7} alt="washing machine" style={{width: "100%"}} />
        </div>
        <div className="service-text">
        <p>We call it “wash & fold” (some say “fluff & fold”), but it’s so much more. We take individual care of each of your machine washable laundry items – clothing, delicates, linens, blankets, comforters – you name it! Whites, colors, and delicates are separately washed and returned to you fresh, clean and neatly folded and hung on hangers.</p>
        </div>
        
      </div>
    </section>
    </>
  );
};
