import React from "react";

function HogDetails({hog}){
    
        return(
                <div>
                    <h3>specialty: {hog.specialty}</h3>
                    <h3>weight: {hog.weight}</h3>
                    <h3>greased: {hog.greased===true? "Yes":"No"}</h3>
            </div>)  
}


export default HogDetails;