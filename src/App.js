import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

//import components
import Navbar from "./components/Navbar";

//import pages
import Home from "./pages/Home";
import CourseForm from "./pages/CourseForm";
import CourseInfo from "./components/CourseInfo"

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/course/create" element={<CourseForm />} />
					<Route path='/course/:id' element={<CourseInfo />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
