import React from 'react';
import '../../App.css';
import Button from 'react-bootstrap/Button';
import MyResume from '../../assets/my-resume.pdf';

const About = () => {
    return(
        <div id="about" className="about">
            <h1 className="section-titles" style = {{color: '#28262B'}}>About</h1>
            <p>My name is Trisha, and I am currently a Software Engineer at PT Bussan Auto Finance in Jakarta, Indonesia. I graduated from University of Wisconsin- Madison in 2020 with a bachelor’s degree in Computer Science as well as certificates in Mathematics and Entrepreneurship, and I have since been enjoying being a part of the working community! </p>
            <p>Throughout my college career, I have experienced and worked with multiple programming languages, such as JavaScript, Python, Java, SQL and more. I have also learnt to design and develop an array of exciting programming projects, including full stack mobile applications. Apart from that, I also love making impact in my community, and hence served leadership roles in student governments and organisations on campus. </p>
            <p>For a while now, I have been focusing on front-end development, as it gives me the platform to be creative and innovative. From exploring new frameworks like React Native and React.js to experimenting with JavaScript and CSS, I love every part of it. Though on another note, I am also a curious George, and I would take any opportunity any day, to learn and absorb as much as I can from similar or different IT career paths!</p>
            <p>Apart from coding, I like to spend my time baking new things, reading, writing, or just going on short walks with my dog Snoopy. Lastly I’d like to say: there is more to me than all I’ve stated, so remember to connect with me and let’s go from there! </p>
            <Button variant="dark" className="download-button" href={MyResume} download="Trisha Bernice Resume">Download my Resume</Button>
        </div>
    );
}

export default About;