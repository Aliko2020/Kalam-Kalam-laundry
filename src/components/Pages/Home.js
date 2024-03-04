import React from "react";
import '../Pages/Home.css'
import image1 from '../images/image1.jpg';
import image7 from '../images/image7.jpg'
import image4 from '../images/image4.jpg';
import PNG1 from '../images/Mask-Group-41.png';
import PNG2 from '../images/Mask-Group-42.png';
import PNG3 from '../images/Mask-Group-43.png';
import PNG4 from '../images/Group-218.png';



export const Home = () => {
  return (
    <>
      <section class="container">
        <div class="slider-wrapper">
            <div class="slider">
                <img id="slide-1" src={image1} alt="image1" />
            </div>
            <div className="slider-nav">
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
    <section className="how-it-works">
      <h1>HOW IT WORKS: IN 4 EASY STEPS</h1>
      <div className="how-container">
          <div className="how-box">
            <img src={PNG1} alt="" />
            <h3>Step 1</h3>
            <p><span className="primary-color">You Bag up</span> all your dirty clothes</p>
          </div>
          <div className="how-box">
            <img src={PNG2} alt="" />
            <h3>Step 1</h3>
            <p><span className="primary-color">We pick up</span> your dirty clothes</p>
          </div>
          <div className="how-box">
            <img src={PNG3} alt="" />
            <h3>Step 1</h3>
            <p><span className="primary-color">We clean up</span> your dirty clothes</p>
          </div>
          <div className="how-box">
            <img src={PNG4} alt="" />
            <h3>Step 1</h3>
            <p><span className="primary-color">We deliver</span> clean folded/ironed cloths</p>
          </div>
      </div>

    </section>
    </>
  );
};
