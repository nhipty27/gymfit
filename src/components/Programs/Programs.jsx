import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        <div className="programs-header">
            <span className="stroke-text">Explore our</span>
            <span>Programs</span>
            <span className="stroke-text">to shape you</span>
        </div>

        <div className="programs-categories">
            {programsData.map((item,index) => (
                <div className="category" key={index}>
                    {item.image}
                    <span>{item.heading}</span>
                    <span>{item.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt=""/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs
