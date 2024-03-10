import React from "react";
import '../Pages/Home.css'
import image1 from '../images/image1.jpg';
import image3 from '../images/image3.png';
import image7 from '../images/image7.jpg';
import PNG1 from '../images/Mask-Group-41.png';
import PNG2 from '../images/Mask-Group-42.png';
import PNG3 from '../images/Mask-Group-43.png';
import PNG4 from '../images/Group-218.png';
import Pickup from '../images/pickup.jpg';
import image2 from '../images/image2.jpg'
import { Link } from "react-router-dom";



export const Home = () => {
  return (
    <>
      <section className="container">
        <div className="slider-wrapper">
            <div className="slider">
                <img id="slide-1" src={image3} alt="image1" />
            </div>
            <div className="slider-nav">
                <a href="slide-1"></a>
                <a href="slide-2"></a>
                <a href="slide-3"></a>
            </div>
        </div>
        <div className="hero-text">
          <h1 >kalam kalam Laundry.</h1>
          <p>We are a laundry service at your door step, now in Bolgatanga and its sourounding.</p>
          <button className="btn-primary"><Link to="/login" >Get Started</Link></button>
        </div>
    </section>
    <section className="service-description">
        <h2>Laundry Experts</h2>
        <div className="service-text">
        <p>We call it “wash & fold” (some say “fluff & fold”), but it’s so much more. We take individual care of each of your machine washable laundry items – clothing, delicates, linens, blankets, comforters – you name it! Whites, colors, and delicates are separately washed and returned to you fresh, clean and neatly folded and hung on hangers.</p>
        </div>
    </section>
    <section className="how-it-works">
      <h2>HOW IT WORKS: IN 4 EASY STEPS</h2>
      <div className="how-container">
          <div className="how-box">
            <img src={PNG1} alt="" />
            <h3>Step 1</h3>
            <p><span className="primary-color">You Bag up</span> all your dirty clothes,schedule a pickup any day of the week.</p>
          </div>
          <div className="how-box">
            <img src={PNG2} alt="" />
            <h3>Step 2</h3>
            <p><span className="primary-color">We pick up</span> your dirty clothes,any where in Bolgatanga</p>
          </div>
          <div className="how-box">
            <img src={PNG3} alt="" />
            <h3>Step 3</h3>
            <p><span className="primary-color">We clean up</span> your dirty clothes.Lights and darks are separated and washed in cold water.</p>
          </div>
          <div className="how-box">
            <img src={PNG4} alt="" />
            <h3>Step 4</h3>
            <p><span className="primary-color"></span>Your clothes are delivered to your door, crisply folded and your socks paired, ready to be worn or put into drawers.</p>
          </div>
      </div>
    </section>
    <section className="pick-up">
      <div className="pick-up-box">
        <img className="pick-up-image" src={Pickup} style={{width:"100%"}}  alt="biker on a motobike" />
      </div>
      <div className="pick-up-box-two">
        <Link  className="btn-primary" to='/login'>schedule Pickup</Link>
        <p>scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        
      </div>
    </section>
    </>
  );
};
