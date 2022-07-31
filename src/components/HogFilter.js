import React from "react";



function HogFilter({setFilterState,filterState}){


    function filterToggle(){
        setFilterState(!filterState)
    }

    function buttonName(){
        if(filterState===true){
            return(<div>All Hogs</div>)
        }else{
            return(<div>Greased</div>)
        }
    }


    return (<div>
        <button onClick={filterToggle}>
            {buttonName()}
        </button>
    </div>)
}


export default HogFilter