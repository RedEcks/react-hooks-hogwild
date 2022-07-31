import React, {useState} from "react";
import HogDetails from "./HogDetails";

function Image({hog}){

    const [buttonState,setButtonState]=useState(true)

    function handleButton(){
        setButtonState(!buttonState)
    }

    const tile = {
        backgroundColor: "pink",
    };

    
        return(
        <div key={hog.name} style={tile}>
            <button onClick={handleButton}>
                <h1>{hog.name}</h1>
                <img id="image" src={hog.image} alt="error"/>
                {buttonState?null:<HogDetails hog={hog}/>}
            </button>
        </div>)    


}

export default Image