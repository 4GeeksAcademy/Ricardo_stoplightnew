import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home() {
	const [selectedColor, setselectedColor] = useState("red");
	return(
	<div className="traffic-light">
		<div onClick={() => setselectedColor("red")}
		className ={"light red " + ((selectedColor =="red") ? "glow" :"")}></div>
		<div onClick={() => setselectedColor("yellow")}
		className ={"light yellow " + ((selectedColor =="yellow") ? "glow" :"")}></div>
		<div onClick={() => setselectedColor("green")}
		className ={"light green " + ((selectedColor =="green") ? "glow" :"")}></div>
		</div>
		

	);
}
export default Home
			

		
	
	

	

