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
                contentStyle={{ background: "#F6F6F4", color: '#1D3C5E', borderRadius: '15px', borderTop: '5px solid #DA6C89'}}
                contentArrowStyle={{ borderRight: '7px solid #F6F6F4' }}
                iconStyle={{ background: "#DA6C89", color: '#F6F6F4' }}
                icon={<MdWork/>}
              >
                <img src={BAFLogo} alt="BAFLogo" className="exp-logos"/>
                <h3 className="exp-title">Software Engineer</h3>
                <h5 className="exp-subtitle">PT Bussan Auto Finance</h5>
                <p>
                Vestibulum commodo ornare nunc nec sollicitudin.                
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="exp-item"
                contentStyle={{ background: "#F6F6F4", color: '#1D3C5E', borderRadius: '15px', borderTop: '5px solid #DA6C89'}}
                contentArrowStyle={{ borderRight: '7px solid #F6F6F4' }}
                iconStyle={{ background: "#DA6C89", color: '#F6F6F4' }}
                icon={<MdWork/>}
              >
                <img src={UWMadisonLogo} alt="UWMadisonLogo" className="exp-logos"/>
                <h3 className="exp-title">IT Assistant</h3>
                <h5 className="exp-subtitle">MERIT Library at UW-Madison</h5>
                <p>
                Vestibulum commodo ornare nunc nec sollicitudin.                
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentStyle={{ background: "#F6F6F4", color: '#1D3C5E', borderRadius: '15px', borderTop: '5px solid #DA6C89' }}
                contentArrowStyle={{ borderRight: '7px solid #F6F6F4' }}
                iconStyle={{ background: "#DA6C89", color: '#F6F6F4' }}
                icon={<MdWork/>}
              >
                <img src={IlluminateLogo} alt="IlluminateLogo" className="exp-logos"/>
                <h3 className="exp-title">Technical Intern</h3>
                <h5 className="exp-subtitle">Illuminate Education</h5>
                <p>
                Vestibulum commodo ornare nunc nec sollicitudin.                
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentStyle={{ background: "#F6F6F4", color: '#1D3C5E', borderRadius: '15px', borderTop: '5px solid #DE7D97'}}
                contentArrowStyle={{ borderRight: '7px solid #F6F6F4' }}
                iconStyle={{ background: "#DE7D97", color: '#F6F6F4' }}
                icon={<IoSchool/>}
              >
                <img src={PERMIASLogo} alt="PERMIASLogo" className="exp-logos"/>
                <h3 className="exp-title">Vice President</h3>
                <h4 className="exp-subtitle">PERMIAS Madison</h4>
                <p>
                Vestibulum commodo ornare nunc nec sollicitudin.                
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentStyle={{ background: "#F6F6F4", color: '#1D3C5E', borderRadius: '15px', borderTop: '5px solid #DE7D97'}}
                contentArrowStyle={{ borderRight: '7px solid #F6F6F4' }}
                iconStyle={{ background: "#DE7D97", color: '#F6F6F4' }}
                icon={<IoSchool/>}
              >
                <img src={DASBLogo} alt="DASBLogo" className="exp-logos"/>
                <h3 className="exp-title">Senator</h3>
                <h4 className="exp-subtitle">De Anza Associated Student Body</h4>
                <p>
                Vestibulum commodo ornare nunc nec sollicitudin.                
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: "#DE7D97", color: '#F6F6F4' }}
                icon={<BiRadioCircle/>}
              />
            </VerticalTimeline>
        </div>
    );
}

export default Experience;