import React, {Component} from 'react';
import resumeData from "../../resumeData";
import pdf from "../../files/CV.pdf";

export default class About extends Component {
    render() {
        //let resumeData = this.props.resumeData;
        return(
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>A Propos</h2>
                        <p>{resumeData.aboutme}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{resumeData.name}</span><br />
                                    <span>{resumeData.address}<br />
                                          {resumeData.zipCode}</span><br />
                                    <span>{resumeData.numberPhone}</span><br />
                                    <span>{resumeData.mailPro}</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href={pdf} className="button" download="CV_aurelien-hennuyer.pdf"><i className="fa fa-download" />Obtenir le CV</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
