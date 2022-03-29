import React, { useRef } from 'react';
import './MainScreen.css';
import { FaAmazon } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { FaEvernote } from "react-icons/fa";

import { IconBase } from 'react-icons';
import Right1 from './Right1';
import LatestNews from './LatestNews';
import Exams from './Exams';
import SamplePapers from './SamplePapers';
import CollegeRanking from './CollegeRanking';
import CollegePredictors from './CollegePredictors';
import { Link } from 'react-scroll';
import RankPredictors from './RankPredictors';
import Listofcareers from './Listofcareers';
import OtherProducts from './OtherProducts';
import AdmissionsOpen from './AdmissionsOpen';
import QnA from './QnA';

const DATA=[
    {   
        icon:(<FaAmazon size={20} />),
        title:'Featured Articles', 
    },
    {   
        icon:(<FaRegNewspaper size={20} />),
        title:'Latest News',
    },
    {   
        icon:(<FaRegFileAlt size={20} />),
        title:'Exams'
    },
    {
        icon:(<FaRegFile size={20} />),
        title:'Sample Papers'
    },
    {
        icon:(<FaAppStoreIos size={20} />),
        title:'College Ranking'
    },
    {
        icon:(<FaCcAmazonPay size={20} />),
         title:'QnA'
    },
    {
        icon:(<FaChrome size={20} />),
        title:'Admissions Open'
    },
    {
        icon:(<FaDiscord size={20} />),
         title:'List of careers'
    }, 
    {
        icon:(<FaFacebook size={20} />),
        title:'College Predictors'
    },
    {
        icon:(<FaEthereum size={20} />),
       title:'Rank Predictors'
    },
    {
        icon:(<FaEvernote size={20} />),
        title:'Other Products'
    },
    
]


const MainScreen=()=>{

return(
        <div className='container'>
            <div className='header'>
<text className='headerText'>Management and Business Administration</text>
            </div>
            <div className='View'>
        <div className='leftView'>
      {
          DATA.map(DATA=>(
<Link to={DATA.title} smooth={true} >
                  <div className='left'>
                      <IconBase className='icon'>{DATA.icon}</IconBase>
                  <text  className='elements'>{DATA.title}</text>
                  </div>
                  </Link>
              )
          )
      }
      </div>
      <div className='right' >
      
          <Right1 />
         <LatestNews /> 
         <Exams />
         <SamplePapers />
        <CollegeRanking />
        <CollegePredictors />
        <RankPredictors />
        <Listofcareers />
        <QnA />
        <OtherProducts />
      
<AdmissionsOpen />
<SamplePapers />
      </div>
     
            </div>
        </div>
    );
}
export default MainScreen;