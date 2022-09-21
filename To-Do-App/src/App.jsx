import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

export default function App() {
	return (
		<>
			<div className="wrapper">
				<Navbar />
				<Form />
			</div>
		</>
	);
}
