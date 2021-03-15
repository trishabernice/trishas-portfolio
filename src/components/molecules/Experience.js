import React from 'react';
import '../../App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { MdWork } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { BiRadioCircle } from "react-icons/bi";

import BAFLogo from '../../assets/logos/BAFLogo.png';
import UWMadisonLogo from '../../assets/logos/UWMadisonLogo.png';
import IlluminateLogo from '../../assets/logos/IlluminateLogo.png';
import PERMIASLogo from '../../assets/logos/PERMIASLogo.png';
import DASBLogo from '../../assets/logos/DASBLogo.png';

const Experience = () => {
    return(
        <div id="experience" className="experience">
          <h1 className="section-titles">Experience</h1>
          <VerticalTimeline>
              <VerticalTimelineElement
                contentStyle={{ background: "#F6F6F4", color: '#1D3C5E', borderRadius: '15px', borderTop: '5px solid #D39CA1'}}
                contentArrowStyle={{ borderRight: '7px solid #F6F6F4' }}
                iconStyle={{ background: "#C68087", color: '#F6F6F4' }}
                icon={<MdWork/>}
              >
                <img src={BAFLogo} alt="BAFLogo" className="exp-logos"/>
                <h3 className="exp-title">Software Engineer</h3>
                <h5 className="exp-subtitle">PT Bussan Auto Finance</h5>
                <p>November 2020 - present </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="exp-item"
                contentStyle={{ background: "#F6F6F4", color: '#1D3C5E', borderRadius: '15px', borderTop: '5px solid #D39CA1'}}
                contentArrowStyle={{ borderRight: '7px solid #F6F6F4' }}
                iconStyle={{ background: "#C68087", color: '#F6F6F4' }}
                icon={<MdWork/>}
              >
                <img src={UWMadisonLogo} alt="UWMadisonLogo" className="exp-logos"/>
                <h3 className="exp-title">IT Assistant</h3>
                <h5 className="exp-subtitle">MERIT Library at UW-Madison</h5>
                <p>June 2019 - May 2020</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentStyle={{ background: "#F6F6F4", color: '#1D3C5E', borderRadius: '15px', borderTop: '5px solid #D39CA1' }}
                contentArrowStyle={{ borderRight: '7px solid #F6F6F4' }}
                iconStyle={{ background: "#C68087", color: '#F6F6F4' }}
                icon={<MdWork/>}
              >
                <img src={IlluminateLogo} alt="IlluminateLogo" className="exp-logos"/>
                <h3 className="exp-title">Technical Intern</h3>
                <h5 className="exp-subtitle">Illuminate Education</h5>
                <p>April 2018 - July 2018</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentStyle={{ background: "#F6F6F4", color: '#1D3C5E', borderRadius: '15px', borderTop: '5px solid #D39CA1'}}
                contentArrowStyle={{ borderRight: '7px solid #F6F6F4' }}
                iconStyle={{ background: "#D39CA1", color: '#F6F6F4' }}
                icon={<IoSchool/>}
              >
                <img src={PERMIASLogo} alt="PERMIASLogo" className="exp-logos"/>
                <h3 className="exp-title">Vice President</h3>
                <h4 className="exp-subtitle">PERMIAS Madison</h4>
                <p>September 2018 - May 2020</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentStyle={{ background: "#F6F6F4", color: '#1D3C5E', borderRadius: '15px', borderTop: '5px solid #D39CA1'}}
                contentArrowStyle={{ borderRight: '7px solid #F6F6F4' }}
                iconStyle={{ background: "#D39CA1", color: '#F6F6F4' }}
                icon={<IoSchool/>}
              >
                <img src={DASBLogo} alt="DASBLogo" className="exp-logos"/>
                <h3 className="exp-title">Senator</h3>
                <h4 className="exp-subtitle">De Anza Associated Student Body</h4>
                <p>April 2017 - March 2018</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: "#D39CA1", color: '#F6F6F4' }}
                icon={<BiRadioCircle/>}
              />
            </VerticalTimeline>
        </div>
    );
}

export default Experience;