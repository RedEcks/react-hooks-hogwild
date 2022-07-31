import React, {useState} from "react";




function handleWeight({weightOfHog,setHogWeight}){

    function weightButton(){
        if(weightOfHog===false){
            return(<div>Weight by Decending Order</div>)
        }else{
            return(<div>Weight by Ascending Order</div>)
        }
    }

    function filterByWeight(){
        setHogWeight(!weightOfHog)
    }

    return(
        <div>
            <button onClick={filterByWeight}>
                {weightButton()}
            </button>
        </div>
    )

}


export default handleWeight