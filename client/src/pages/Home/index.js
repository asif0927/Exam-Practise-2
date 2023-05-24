import React from 'react'
import Globally from '../Globally'
import Made from '../Made'
import FeatureArea from "../../sections/FeatureArea";
import BrandArea from "../../sections/BrandArea";
import BlogArea from "../../sections/BlogArea";
import RobotArea from "../../sections/RobotArea";

import Style from "./index.module.css"
const Home = () => {
  return (
    <>
    <div className={Style.home}>
        
        <div className={Style.paragraf}>
          <p className={Style.one}> Improved Production level with Robotics</p>
          <p className={Style.two}>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</p>
          <button className={Style.buttons}>View Details</button>
        </div>
        <div className={Style.rights}>

        </div>
    </div>
    <RobotArea/>
   <Globally/>
   <Made/>
   <FeatureArea/>
   <BrandArea/>
   <BlogArea/>
    </>
  )
}

export default Home