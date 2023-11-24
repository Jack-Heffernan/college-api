import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

//import components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

//import pages
import Home from "./pages/Home";
import CourseForm from "./pages/CourseForm";
import CourseShow from "./pages/Courses/Show";

function App() {
	return (
		<>
			<Navbar />
			<div className="routes-center">
				<Router>
					<div className="sidebar">
						<Sidebar />
					</div>
					<div className="main-content">
					<Routes>
					    <Route path="/" element={<Home />} />
					    <Route path="/course/create" element={<CourseForm className="create-course"/>}  />
						<Route path="/course/:id" element={<CourseShow />} />
					</Routes>
					</div>
				</Router>
			</div>
		</>
	);
}

export default App;
