import React, {useState, useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const  [selectedColor, setselectedColor] = useState("red")
	const handleButton = () => {
		if (selectedColor === "red"){
			setselectedColor("yellow")
		} else if (selectedColor === "yellow"){
			setselectedColor("green")
		} else {
			setselectedColor("red")
		}
	}
	return (
		<div className="container">
			<h1 className="text-center">Traffic Light</h1>
			 <div></div>
             <div className="traffic-light">
			    <div className={"light red"+((selectedColor === "red") ? " glow" : " ")}></div>
			    <div className={"light yellow"+((selectedColor === "yellow") ? " glow" : " ")}></div>
				<div className={"light green"+((selectedColor === "green") ? " glow" : " ")}></div>
			</div>
			<div className="gap-2 d-md-block mt-0">
				<button className="btn btn-outline-primary mx-2" type="button" onClick={handleButton}>cambiar luz </button>
			</div>

		</div>
		
	);
};

export default Home;
