import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
	const [color, setColor] = useState("white");

	const buttons = [
		{
			label: "red",
			color: "red",
		},
		{
			label: "blue",
			color: "blue",
		},
		{
			label: "green",
			color: "green",
		},
		{
			label: "yellow",
			color: "yellow",
		},
		{
			label: "orange",
			color: "orange",
		},
		{
			label: "violet",
			color: "violet",
		},
		{
			label: "black",
			color: "black",
		},
		{
			label: "pink",
			color: "pink",
		},
		{
			label: "brown",
			color: "brown",
		},
		{
			label: "teal",
			color: "teal",
		},
		{
			label: "cyan",
			color: "cyan",
		},
		{
			label: "tomato",
			color: "tomato",
		},
	];

	const handleButtonClick = (clr) => {
		setColor(clr);
	};
	return (
		<div className="container" style={{ background: color }}>
			<div className="btn-box">
				{buttons.map((btn) => {
					return (
						<Button
							key={btn.label}
							label={btn.label}
							color={btn.color}
							onClick={() => handleButtonClick(btn.color)}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
