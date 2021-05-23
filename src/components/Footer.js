import React from 'react';
import './Footer.css';


export default function Footer(){
    return (
        <>
            <footer className='footer'>
                <div className='footer__bg'>
                    <div className='footer__container container grid'>
                        <div>
                            <h1 className='footer__title'>Thinh Lang</h1>
                            <span className='footer__subtitle'>Frontend developer</span>
                        </div>
                        <ul className='footer__links'>
                            <a href='#services' className='footer__link'>Services</a>
                            <a href='#portfolio' className='footer__link'>Portfolio</a>
                            <a href='#contact' className='footer__link'>Contact Me</a>
                        </ul>
                    </div>
                    <p className='footer__copy'>&#169; ThinhLang. All right reserved</p>
                </div>
            </footer>
        </>
    )
}