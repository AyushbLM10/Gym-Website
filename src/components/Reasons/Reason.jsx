import React from "react";
import './Reason.css';
import '../../App.css'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import tick from '../../assets/tick.png';
import nb from '../../assets/nb.png';
import nike from '../../assets/nike.png';
import adidas from '../../assets/adidas.png';
function Reason(){
    return(
        <div className="reasons">
            <div className="reason-left">
                <img src={image1} alt="Gym Image"/>
                <img src={image2} alt="Gym Image"/>
                <img src={image3} alt="Gym Image"/>
                <img src={image4} alt="Gym Image"/>


            </div>
            <div className="reason-right">
                <span>Some Reasons</span>
                <div>
                    <span className="stroke-text">Why </span>
                    <span>Choose us?</span>
                </div>
                <div className="details-right">
                    <div>
                        <img src ={tick} alt=""/>
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src ={tick} alt=""/>
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src ={tick} alt=""/>
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src ={tick} alt=""/>
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span style={{
                    color: "var(--gray)",
                    fontWeight: "normal",
                }}>OUR PARTNERS
                </span>
                <div className="partners">
                    <img src = {nb}/>
                    <img src = {adidas}/>
                    <img src = {nike}/>
                </div>


            </div>

        </div>
    )
}
export default Reason;