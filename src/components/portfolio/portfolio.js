import React, {Component} from 'react';

export default class Portfolio extends Component {
    render() {
        return(
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-01" rel="noopener noreferrer" title>
                                        <img alt="" src="images/portfolio/checkbox.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Custom checkbox</h5>
                                                <p>Webdesign</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-02" rel="noopener noreferrer" title>
                                        <img alt="" src="images/portfolio/clock.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Clock UI</h5>
                                                <p>Web Development</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-03" title>
                                        <img alt="" src="images/portfolio/custom-progress-bar.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Custom progress bar</h5>
                                                <p>Webdesign</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-04" title>
                                        <img alt="" src="images/portfolio/progressbar.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Progress Bar</h5>
                                                <p>Web Intégration, Web Design</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-05" title>
                                        <img alt="" src="images/portfolio/newsletter.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Newsletter subscriber</h5>
                                                <p>Web Intégration, Webdesign</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-06" title>
                                        <img alt="" src="images/portfolio/facedetection.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Face recognition</h5>
                                                <p>I.A, Web Intégration</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-07" title>
                                        <img alt="" src="images/portfolio/piano.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Piano</h5>
                                                <p>Web Development</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-08" title>
                                        <img alt="" src="images/portfolio/spinner.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Loader Animated</h5>
                                                <p>Web Development</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus" /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="modal-01" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/m-checkbox.jpg" alt="" />
                        <div className="description-box">
                            <h4>Custom checkbox</h4>
                            <p>Checkbox customized with CSS.</p>
                            <span className="categories"><i className="fa fa-tag" />Webdesign</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/Illuminaxx/custom-checkbox" target="_blank" rel="noopener noreferrer">Details</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-02" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/m-clock.jpg" alt="" />
                        <div className="description-box">
                            <h4>Clock UI</h4>
                            <p>A simple clock created with JS HTML CSS</p>
                            <span className="categories"><i className="fa fa-tag" />Web Development</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/Illuminaxx/clockTime" target="_blank" rel="noopener noreferrer">Details</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-03" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/m-custom-progressbar.jpg" alt="" />
                        <div className="description-box">
                            <h4>Custom progressbar</h4>
                            <p>A custom progress bar realized with hooks react.</p>
                            <span className="categories"><i className="fa fa-tag" />Web Design</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/Illuminaxx/custom-progress-react-bar" target="_blank" rel="noopener noreferrer">Details</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-04" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/m-progressbar.jpg" alt="" />
                        <div className="description-box">
                            <h4>Progress Bar</h4>
                            <p>Progress bar inspiring by Collect UI Users</p>
                            <span className="categories"><i className="fa fa-tag" />Web Intégration, Webdesign</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/Illuminaxx/progressbar" target="_blank" rel="noopener noreferrer">Details</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-05" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/m-newsletter.jpg" alt="" />
                        <div className="description-box">
                            <h4>Newsletter subscriber</h4>
                            <p>This repository contain an newsletter subscriber created with React, and implements an image found in unDraw</p>
                            <span className="categories"><i className="fa fa-tag" />Webdesign, Web Intégration</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/Illuminaxx/newsletter-subscriber" target="_blank" rel="noopener noreferrer">Details</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-06" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/m-facedetection.jpg" alt="" />
                        <div className="description-box">
                            <h4>Face detection</h4>
                            <p>A Face detection with FaceApi library</p>
                            <span className="categories"><i className="fa fa-tag" />I.A, Web Intégration</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/Illuminaxx/recognition-javascript" target="_blank" rel="noopener noreferrer">Details</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-07" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/m-piano.jpg" alt="" />
                        <div className="description-box">
                            <h4>Piano</h4>
                            <p>A piano from scratch with HTML CSS Javascript and audio MP3.</p>
                            <span className="categories"><i className="fa fa-tag" />Web Development</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/Illuminaxx/PianoJS" target="_blank" rel="noopener noreferrer">Details</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    <div id="modal-08" className="popup-modal mfp-hide">
                        <img className="scale-with-grid" src="images/portfolio/modals/m-spinner.jpg" alt="" />
                        <div className="description-box">
                            <h4>Loader animated</h4>
                            <p>Create an loader animated by CSS</p>
                            <span className="categories"><i className="fa fa-tag" />Web Development</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/Illuminaxx/spinner-loader" target="_blank" rel="noopener noreferrer">Details</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
