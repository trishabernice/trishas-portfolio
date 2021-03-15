import React from 'react';
import '../../App.css';
import Button from 'react-bootstrap/Button';
import MyResume from '../../assets/my-resume.pdf';

const About = () => {
    return(
        <div id="about" className="about">
            <h1 className="section-titles" style = {{color: '#28262B'}}>About</h1>
            <p>Suspendisse potenti. Nunc vitae neque ex. Nunc aliquam aliquet ex, non tempus quam sollicitudin vulputate. Sed odio augue, placerat nec luctus eu, eleifend eget orci. Sed leo leo, egestas auctor placerat id, tincidunt at ligula. Maecenas viverra porttitor tempus. Etiam mollis vitae ante et sollicitudin. Nulla libero urna, maximus in malesuada non, hendrerit a dolor. Integer semper ante eget nunc rutrum interdum. Maecenas porta nunc sed neque fringilla, in rhoncus urna luctus. Aenean nec consectetur lectus, vitae blandit ex.</p>
            <p>Aliquam fringilla ante non augue placerat dapibus. Sed condimentum euismod turpis, at aliquet nibh tristique eget. Nam vitae leo vel ligula pellentesque facilisis. Nulla metus orci, scelerisque eu mattis bibendum, pharetra quis mauris. Etiam non ullamcorper ligula. Nunc ornare sem nec accumsan porttitor. Cras ut odio sit amet enim tempus finibus. Nulla facilisi. Curabitur fringilla a lectus a tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam nec urna nisl. Nam gravida 
                pellentesque nisi, at rutrum massa condimentum et. Phasellus malesuada hendrerit dolor, quis tempus enim rutrum in.</p>
            <p>Proin venenatis nisl sed gravida interdum. Proin at arcu vitae nisi auctor congue. Vestibulum commodo ornare nunc nec sollicitudin. Ut a neque ultrices, sagittis felis eu, euismod sem. Nulla tincidunt sapien vulputate blandit sollicitudin. Vestibulum a neque ullamcorper, mattis leo malesuada, vulputate urna. Duis id felis elit. Nulla cursus leo ut neque cursus egestas. </p>
            <Button variant="dark" className="download-button" href={MyResume} download="Trisha Bernice Resume">Download my Resume</Button>
        </div>
    );
}

export default About;