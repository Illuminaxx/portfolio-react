import React, { useState } from "react";
import axios from 'axios';


const Contact = ({ data }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [result, setResult] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault();
    axios.post('/api/send', {name, subject, email, message})
    .then(response => {
      setResult(response.data);
      setName('')
      setSubject('')
      setEmail('')
      setMessage('')
    })
    .catch(() => {
      setResult({
        success: false,
        message: 'Try again !'
      })
    })
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Contactez-moi</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{data?.message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          {result && (
            <p className={`${result.success ? 'success' : 'error'}`}>
              {result.message}
            </p>
          )}
          <form id="contactForm" name="contactForm" onSubmit={sendEmail}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Nom <span className="required">*</span>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  size="35"
                  id="contactName"
                  name="contactName"
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Sujet</label>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="50"
                  rows="7"
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button type="submit" className="submit">
                  <i className="fa fa-envelope"></i> Envoyer
                </button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h1 className="coordonnees">Coordonnées</h1>
            <p className="address">
              {data?.name}
              <br />
              {data?.address.street} <br />
              {data?.address.city}, {data?.address.state} {data?.address.zip}
              <br />
              <span>{data?.phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
