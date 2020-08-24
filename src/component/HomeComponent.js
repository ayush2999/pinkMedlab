import React,{Component} from 'react';
import LifeCycle from './LifeCyclePackage'
import  ImgCarousel  from './Carousel';
import WhatMakes from './whatMakes';
import HealthCare from './HealthCare';
import ReportForm from './ReportForm';
import {HealthReport} from './HealthReport'
class Home extends Component{
   render(){
       return(
         <>
         {console.log(window.screen.height)}
         <ImgCarousel/>
         <WhatMakes/>
         <HealthReport/>
         <LifeCycle/>
         </>
       )
   }
}

export default Home