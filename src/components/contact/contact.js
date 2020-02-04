import React, {Component} from 'react';
import resumeData from "../../resumeData";

export default class Contact extends Component {
    render() {
        return(
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">
                            Feel free to contact me for any work or suggestions below
                        </p>
                    </div>
                </div>
                <div className="row">
                    <aside className="eight columns footer-widgets">
                        {
                            resumeData.contact && resumeData.contact.map(item => {
                                return(
                                    <div className="widget">
                                        <a href={item.url} target="_blank">
                                          <i className={item.className}/>
                                        </a>
                                    </div>
                                );
                            })
                        }
                    </aside>
                </div>
            </section>
        );
    }
}
