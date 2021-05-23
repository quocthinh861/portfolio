import React from 'react';
import './Contact.css';


export default function Contact(){
    return (
        <>
            <section className='contact section' id='contact'>
                <h2 className='section__title'>Contact Me</h2>
                <span className='section__subtitle'>Get in touch</span>
                <div className='contact__container container grid'>
                    <div>
                        <div className='contact__information'>
                            <i class="icofont-phone contact__icon"></i>
                            <div>
                                <h3 className='contact__title'>Call Me</h3>
                                <span className='contact__subtitle'>0909483537</span>
                            </div>
                        </div>
                        <div className='contact__information'>
                            <i class="icofont-envelope contact__icon"></i>
                            <div>
                                <h3 className='contact__title'>Email</h3>
                                <span className='contact__subtitle'>quocthinh861@gmail.com</span>
                            </div>
                        </div>
                        <div className='contact__information'>
                            <i class="icofont-location-pin contact__icon"></i>
                            <div>
                                <h3 className='contact__title'>Location</h3>
                                <span className='contact__subtitle'>Go Vap Distreet HCM City VN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}