import React, {Component} from 'react';
import resumeData from "../../resumeData";

export default class Footer extends Component {
    render() {
        return(
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            {
                                resumeData.socialLinks && resumeData.socialLinks.map(item => {
                                    return(
                                        <li>
                                            <a href={item.url} target="_blank">
                                                <i className={item.className}/>
                                            </a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        <ul className="copyright">
                            <li>© Copyright 2014 CeeVee</li>
                            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                        </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                </div>
            </footer>
        );
    }
}
