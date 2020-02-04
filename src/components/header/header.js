import React, {Component} from 'react';
import resumeData from "../../resumeData";

export default class Header extends Component {
    render() {
        return(
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Accueil</a></li>
                        <li><a className="smoothscroll" href="#about">A propos</a></li>
                        <li><a className="smoothscroll" href="#resume">Expériences</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Projets</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">{resumeData.name}</h1>
                        <h3>Je suis un {resumeData.role} basé à Arras. {resumeData.roleDescription}. <a className="smoothscroll" href="#about">Visitez </a>
                            et apprenez en plus <a className="smoothscroll" href="#about">à mon propos</a> </h3>
                        <hr />
                        <ul className="social">
                            {
                                resumeData.socialLinks && resumeData.socialLinks.map(item => {
                                    return(
                                        <li key={item.name}>
                                            <a href={item.url} target="_blank"><i className={item.className}/></a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                </p>
            </header>
        );
    }
}
