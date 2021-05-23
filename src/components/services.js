import React from 'react';
import './services.css';
export default function Services() {
    return (
        <>
            <section className='services section' id='services'>
                <h2 className='section__title'>Services</h2>
                <span className='section__subtitle'>What i offer</span>
                <div className='services__container container grid'>
                    <div className='services__content'>
                        <div>
                            <i class="icofont-code-alt services__icon"></i>
                            <h3 className='services__title'>Frontend <br/> Developer</h3>
                        </div>
                        <span className='button button__flex button__small button__link services__button'>
                            View More <i class="icofont-caret-right button__icon"></i>
                        </span>

                        <div className='services__modal'>
                            <div className='services__modal-content'>
                                <h4 className='services__modal-title'>Frontend <br/> Developer</h4>
                                <i class="icofont-close services__modal-close"></i>
                                <ul className='services__modal-services grid'>
                                    <li className='services__modal-service'>
                                        <i class="icofont-check-circled services__modal-icon"></i>
                                        <p>I develop the user interface</p>
                                    </li>
                                    <li className='services__modal-service'>
                                        <i class="icofont-check-circled services__modal-icon"></i>
                                        <p>Web page development</p>
                                    </li>
                                    <li className='services__modal-service'>
                                        <i class="icofont-check-circled services__modal-icon"></i>
                                        <p>I dedicate to your company</p>
                                    </li>
                                </ul>
                            </div>     
                        </div>
                    </div>
                    <div className='services__content'>
                        <div>
                            <i class="icofont-layout services__icon"></i>
                            <h3 className='services__title'>UI/UX <br/> Designer</h3>
                        </div>
                        <span className='button button__flex button__small button__link services__button'>
                            View More <i class="icofont-caret-right button__icon"></i>
                        </span>

                        <div className='services__modal'>
                            <div className='services__modal-content'>
                                <h4 className='services__modal-title'>UI/UX <br/> Designer</h4>
                                <i class="icofont-close services__modal-close"></i>
                                <ul className='services__modal-services grid'>
                                    <li className='services__modal-service'>
                                        <i class="icofont-check-circled services__modal-icon"></i>
                                        <p>I develop the user interface</p>
                                    </li>
                                    <li className='services__modal-service'>
                                        <i class="icofont-check-circled services__modal-icon"></i>
                                        <p>Web page development</p>
                                    </li>
                                    <li className='services__modal-service'>
                                        <i class="icofont-check-circled services__modal-icon"></i>
                                        <p>I dedicate to your company</p>
                                    </li>
                                </ul>
                            </div>     
                        </div>
                    </div>
            
                </div>
            </section>
        </>
    )
}