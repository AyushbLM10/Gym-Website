import React from "react";
import './program.css';
import '../../App.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'
function Program(){
    return(
        <div className="programs" id="programs">
        {/*Header */}
            <div className="program-heading">
                <span className="stroke-text">EXPLORE OUR </span>
                <span>PROGRAMS </span> 
                <span className="stroke-text">TO SHAPE YOU</span>
            </div>
            <div className="program-category">
                {programsData.map((program)=>
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <button>Join Now</button>
                            <img src = {RightArrow}/>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}
export default Program;