import React from 'react';
import './Portfolio.css';


export default function Portfolio(){
    return (
        <>
            <section className='portfolio section' id='portfolio'>
                <h2 className='section__title'>Portfolio</h2>
                <span className='section__subtitle'>Most recent works</span>
                <div className='portfolio__container container swiper-container'>
                    <div className='swiper-wrapper'>
                        <div className='portfolio__content grid swiper-slide'>
                            <img src='assets/images/netflix.png' className='portfolio__img'></img>
                            <div className='portfolio__data'>
                                <h3 className='portfolio__title'>Netflix Clone</h3>
                                <p className='portfolio__description'>React App using firebase (firestore, Auth), styled components and hooks</p>
                                <a href="https://quocthinh861.github.io/netflix-clone/" className='button button__flex button__small portfolio__button'>Demo <i class="icofont-caret-right button__icon"></i></a>
                            </div>
                        </div>
                        <div className='portfolio__content grid swiper-slide'>
                            <img src='assets/images/movies.png' className='portfolio__img'></img>
                            <div className='portfolio__data'>
                                <h3 className='portfolio__title'>Movies Website</h3>
                                <p className='portfolio__description'>React Movies Website using Hooks, Dbmovies API and Material UI</p>
                                <a href="https://quocthinh861.github.io/movies-react/" className='button button__flex button__small portfolio__button'>Demo <i class="icofont-caret-right button__icon"></i></a>
                            </div>
                        </div>
                        <div className='portfolio__content grid swiper-slide'>
                            <img src='assets/images/pizza.png' className='portfolio__img'></img>
                            <div className='portfolio__data'>
                                <h3 className='portfolio__title'>Pizza Banner</h3>
                                <p className='portfolio__description'>Simple React using styled components and hooks</p>
                                <a href="https://quocthinh861.github.io/pizza-banner/" className='button button__flex button__small portfolio__button'>Demo <i class="icofont-caret-right button__icon"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </section>
        </>
    )
}