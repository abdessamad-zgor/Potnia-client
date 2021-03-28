//import React, {useState, useEffect} from 'react';
import Main from '../../home.png';
import Service from '../Service';

function Home(props) {

    return (
        <div className="Home">
            <section className="home-header">
                <div className="description">
                    <h4 className="tag">great service with the best people</h4>
                    <h1 className="head-title">
                        Welcome to your digital haven
                    </h1>
                    <button className="call-to-action">SEE MORE</button>
                </div>
                <img src={Main} alt="illustration" />
            </section>
            <section className="home-2">
                <div className="title">
                    <h1>Services</h1>
                </div>
                <div className="services-home">
                    <Service title="web developement" description="brand specific web application to help boost your sales and push your business to the next level" path="/services" />
                    <Service title="digital marketing" description="get a first place hold in the market with an air thight strategy and great follow through" />
                </div>
                <button className='call-to-action'>See More</button>
            </section>


        </div>
    )
}


export default Home;

