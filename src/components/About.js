import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

export default function About(){
    return (
        <>
            <section className='about section' id='about'>
                <h2 className='section__title'>About Me</h2>
                <span className='section__subtitle'>My introduction</span>
                <div className='about__container container grid'>
                    <img src='assets/images/background.jpg' className='about__img'></img>
                    <div className='about__data'>
                        <p className='about__description'>Highly interested in web design and learning new knowledge, producing quality work.</p>
                        <div className='about__info'>
                            <div>
                                <span className='about__info-title'>03+</span>
                                <span className='anout__info-name'>Years <br />learning</span>
                            </div>
                            <div>
                                <span className='about__info-title'>04+</span>
                                <span className='anout__info-name'> Big <br />projects</span>
                            </div>
                            <div>
                                <span className='about__info-title'>08+</span>
                                <span className='anout__info-name'>Small <br />projects </span>
                            </div>
                        </div>
                        <div className='about__buttons'>
                            <a href='assets/images/img1.jpg' download>
                                Download CV <i class="icofont-download"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}