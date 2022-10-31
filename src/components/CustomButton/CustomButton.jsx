import React, { useState } from 'react';
import "./CustomButton.css"

const CustomButton = (props) => {

    const [buttonClass1, setButtonClass1] = useState("inactive");
    const [buttonClass2, setButtonClass2] = useState("inactive");

    function handleClick(buttonStatus, buttonType){
        if (buttonType === "Like"){
            if(buttonStatus === "inactive"){
                setButtonClass1("activeLike");
                setButtonClass2("inactive")
            }
            else{
                setButtonClass1("inactive");
            }
        }
        if (buttonType === "Dislike"){
            if(buttonStatus === "inactive"){
                setButtonClass1("inactive");
                setButtonClass2("activeDislike")
            }
            else{
                setButtonClass2("inactive");
            }
        }
        
    }
   
    return (  
        <div>
            <button className={buttonClass1} onClick={() => handleClick(buttonClass1, "Like")}>{props.message1}</button>
            <button className={buttonClass2} onClick={() => handleClick(buttonClass2, "Dislike")}>{props.message2}</button>
        </div>
    );
}
 
export default CustomButton;



