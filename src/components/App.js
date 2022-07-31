import React, {useState} from "react";
import Nav from "./Nav";
import Image from "./Image";
import hogs from "../porkers_data";
import HogFilter from "./HogFilter";
import HogWeight from "./HogWeight"

function App() {
    const [ filterState, setFilterState] = useState(false)
    const [weightOfHog,setHogWeight] = useState(false)

    let hogImages=[]
    let sortedHogs=[]

    if(weightOfHog===false){
        sortedHogs=hogs.sort((hogOne,hogTwo)=>hogTwo.weight-hogOne.weight)
    }else{
        sortedHogs=hogs.sort((hogOne,hogTwo)=>hogOne.weight-hogTwo.weight)
    }

    if(filterState===true){

        hogImages=sortedHogs.filter((hog)=> hog.greased===true).map((hog)=><Image hog={hog}/>)
    }else{

        hogImages=sortedHogs.map((hog)=><Image hog={hog}/>)
    }



	return (
		<div className="App">
            
			<Nav />
            <HogFilter filterState={filterState} setFilterState={setFilterState}/>
            <HogWeight weightOfHog={weightOfHog} setHogWeight={setHogWeight}/>
            {hogImages}
		</div>
	);
}

export default App;
