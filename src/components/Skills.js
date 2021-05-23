import React from 'react';
import './Skills.css';


export default function Skills(){
    return (
        <>
            <section className='skills section' id='skills'>
                <h2 className='section__title'>Skills</h2>
                <span className='section__subtitle'>My technical level</span>
                <div className='skills__container container grid'>
                    
                        <div className='skills__content skills__open'> 
                            <div className='skills__header'>
                                <i class="icofont-code skills__icon"></i>
                                <div>
                                    <h1 className='skills__main__title'>Frontend developer</h1>
                                    <span className='skills__subtitle'>Practice even more</span>
                                </div>
                                <i class="icofont-caret-down skills__icon skills__arrow"></i>
                            </div>
                            
                            <div className='skills__list grid'>
                                <div className='skills__data'>
                                    <div className='skills__title'>
                                        <h3 className='skills__name'>
                                            HTML
                                        </h3>
                                        <span className='skills__number'>90%</span>
                                    </div>
                                    <div className='skills__bar'>
                                        <span className='skills__percentage skills__html'></span>
                                    </div>
                                </div>
                                <div className='skills__data'>
                                    <div className='skills__title'>
                                        <h3 className='skills__name'>
                                            CSS
                                        </h3>
                                        <span className='skills__number'>80%</span>
                                    </div>
                                    <div className='skills__bar'>
                                        <span className='skills__percentage skills__css'></span>
                                    </div>
                                </div>
                                <div className='skills__data'>
                                    <div className='skills__title'>
                                        <h3 className='skills__name'>
                                            Javascript
                                        </h3>
                                        <span className='skills__number'>60%</span>
                                    </div>
                                    <div className='skills__bar'>
                                        <span className='skills__percentage skills__js'></span>
                                    </div>
                                </div>
                                <div className='skills__data'>
                                    <div className='skills__title'>
                                        <h3 className='skills__name'>
                                            React
                                        </h3>
                                        <span className='skills__number'>65%</span>
                                    </div>
                                    <div className='skills__bar'>
                                        <span className='skills__percentage skills__react'></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='skills__content skills__close'> 
                            <div className='skills__header'>
                                <i class="icofont-network skills__icon"></i>
                                <div>
                                    <h1 className='skills__main__title'>Backend developer</h1>
                                    <span className='skills__subtitle'>Try your best</span>
                                </div>
                                <i class="icofont-caret-down skills__icon skills__arrow"></i>
                            </div>
                            <div className='skills__list grid'>
                                <div className='skills__data'>
                                    <div className='skills__title'>
                                        <h3 className='skills__name'>
                                            PHP
                                        </h3>
                                        <span className='skills__number'>65%</span>
                                    </div>
                                    <div className='skills__bar'>
                                        <span className='skills__percentage skills__php'></span>
                                    </div>
                                </div>
                                <div className='skills__data'>
                                    <div className='skills__title'>
                                        <h3 className='skills__name'>
                                            Node js 
                                        </h3>
                                        <span className='skills__number'>60%</span>
                                    </div>
                                    <div className='skills__bar'>
                                        <span className='skills__percentage skills__nodejs'></span>
                                    </div>
                                </div>
                                <div className='skills__data'>
                                    <div className='skills__title'>
                                        <h3 className='skills__name'>
                                            SQL
                                        </h3>
                                        <span className='skills__number'>60%</span>
                                    </div>
                                    <div className='skills__bar'>
                                        <span className='skills__percentage skills__sql'></span>
                                    </div>
                                </div>
                                <div className='skills__data'>
                                    <div className='skills__title'>
                                        <h3 className='skills__name'>
                                            Python
                                        </h3>
                                        <span className='skills__number'>55%</span>
                                    </div>
                                    <div className='skills__bar'>
                                        <span className='skills__percentage skills__python'></span>
                                    </div>
                                </div>

                            </div>
                        
                    </div>
                </div>
            </section>  
        </>
    )
}