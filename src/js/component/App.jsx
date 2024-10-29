import React from "react";
import SecondsCounter from "./SecondsCounter";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const App = () => {

	let count = 0;
	return (
		<SecondsCounter count={count}/>
	);
};

export default App;
