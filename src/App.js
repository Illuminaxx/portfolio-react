import React, { Component, Suspense } from 'react';
import $ from 'jquery';
import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import About from './components/About';
// import Resume from './components/Resume';
// import Contact from './components/Contact';
// import Portfolio from './components/Portfolio';

const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const About = React.lazy(() => import('./components/About'));
const Resume = React.lazy(() => import('./components/Resume'));
const Contact = React.lazy(() => import('./components/Contact'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: {}
    };

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Suspense fallback={<span>Loading...</span>}>
          <Header data={this.state.resumeData.main}/>
          <About data={this.state.resumeData.main}/>
          <Resume data={this.state.resumeData.resume}/>
          <Portfolio data={this.state.resumeData.portfolio}/>
          <Contact data={this.state.resumeData.main}/>
          <Footer data={this.state.resumeData.main}/>
        </Suspense>
      </div>
    );
  }
}

export default App;
