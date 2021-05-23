import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <>
           <header className='header' id='header'>
                <nav className='nav container'>
                    <a to='/' className='link nav__logo'>Thinh Lang</a>
                    <div className='nav__menu' id='nav-menu'>
                        <ul className='nav__list grid'>
                            <li className='nav__item'>
                                <a href='#' className='link nav__link'><i class="icofont-home nav__icon"></i> Home</a>
                            </li>
                            <li className='nav__item'>
                                <a href='#about' className='link nav__link'><i class="icofont-ui-user nav__icon"></i> About</a>
                            </li>
                            <li className='nav__item'>
                                <a href='#skills' className='link nav__link'><i class="icofont-code-alt nav__icon"></i> Skills</a>
                            </li>
                            <li className='nav__item'>
                                <a href='#services' className='link nav__link'><i class="icofont-briefcase nav__icon"></i> Services</a>
                            </li>
                            <li className='nav__item'>
                                <a href='#portfolio' className='link nav__link'><i class="icofont-file-image nav__icon"></i> Portfolio</a>
                            </li>
                            <li className='nav__item'>
                                <a href='#contact' className='link nav__link'><i class="icofont-send-mail nav__icon"></i> Contact Me</a>
                            </li>
                        </ul>
                        <i class="icofont-close" id="nav-close"></i>
                    </div>
                    <div className='nav__btns'>
                        <div className='nav__toggle' id='nav-toggle'>
                            <i class="icofont-brand-microsoft"></i>
                        </div>
                    </div>
                </nav>
           </header>
        </>
    )
}