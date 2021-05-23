import React from 'react';
import './Main.css';
export default function Main(){
    return (
        <>
            <main className='main'>
                <section className='home section' id='home'>
                    <div className='home__container container grid'>
                        <div className='home__content grid'>
                            <div className='home__social'>
                                <a href='https://github.com/quocthinh861' className='home__social-icon' target='_blank'>
                                    <i class="icofont-github"></i>
                                </a>
                                <a href='https://www.facebook.com/lang.thinh.146/' className='home__social-icon' target='_blank'>
                                    <i class="icofont-facebook"></i>
                                </a>
                                <a href='https://www.instagram.com/thinh.lang/' className='home__social-icon' target='_blank'>
                                    <i class="icofont-instagram"></i>        
                                </a>
                            </div>

                            <div className='home__img'>
                                <img src='assets/images/img1.jpg'></img>
                            </div>
                            <div className='home__data'>
                                <h1 className='home__title'>Hi, I'am Thinh</h1>
                                <h3 className='home__subtitle'>Frontend developer</h3>
                                <p className='home__description'>Highly interested in web design and learning new knowledge, producing quality work.</p>
                                <a href='#contact' className='button button__flex link'>
                                    Contact Me <i class="icofont-meetme button__icon"></i>
                                </a>
                            </div>
                        </div>
                
                        <div className='home__scroll'>
                            <a href="#about" className='home__scroll-button button__flex link'>
                                <i class="icofont-wireless-mouse home__scroll-mouse"></i>
                                <span className='home__scroll-name'>Scroll down</span>
                                <i class="icofont-arrow-down home__scroll-arrow"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}