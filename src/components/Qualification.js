import React from 'react';
import './Qualification.css';

export default function Qualification() {
    return (
        <>
           <section className='qualification section'>
                <h2 className='section__title'>Qualification</h2>
                <span className='section__subtitle'>My personal journey</span>
                <div className='qualification__container container'>
                    <div className='qualification__tabs'>
                        <div className='qualification__button button__flex'>
                            <i class="icofont-graduate"></i>
                            Education
                        </div>
                    </div>
                    <div className='qualification__sections'>
                        <div className='qualification__content'>
                            <div className='qualification__data'>
                                    <div>
                                        <h3 className='qualification__title'>Grades (10-12) </h3>
                                        <span className='qualification__subtitle'>Nguyen Cong Tru - High school</span>
                                    </div>
                                    <div className='qualification__calendar'>
                                        <i class="icofont-calendar qualification__icon"></i>
                                        2014 - 2017
                                    </div>
                            </div>
                            <div className='qualification__data'>
                                <div>
                                    <h3 className='qualification__title'>Computer Science</h3>
                                    <span className='qualification__subtitle'>Back Khoa - University</span>
                                </div>
                                    <div className='qualification__calendar'>
                                        <i class="icofont-calendar qualification__icon"></i>
                                        2018 - 2022
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}