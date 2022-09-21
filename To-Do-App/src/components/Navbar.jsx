import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid justify-content-center gap-5">
				<a
					href=""
					className="navbar-brand"
					style={{ fontSize: "2em", color: "black", fontWeight: "bold" }}
				>
					To-Do Application
				</a>
			</div>
		</nav>
	);
}
