import React, { useState } from "react";
import axios from "axios";

const apiURL = "https://college-api.vercel.app/api";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDlmYWY3NGIwMmVjMWFlOTM1YzY4YWJmZDhmNzhjOGZiNzFjZjcwNzVmOWI0M2QxNmYwMTI5MGNlZWM4ZGYzYzdmYmU5ZDRhOThjYzNmYmIiLCJpYXQiOiIxNzAwNjM2MTg1Ljg1OTM2NyIsIm5iZiI6IjE3MDA2MzYxODUuODU5MzcxIiwiZXhwIjoiMTczMjI1ODU4NS44MDk5NTQiLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.eXuyeAdVyhwsw_x0TvIg5U0kj-_HYxsORwfLVIgviKa8JAC3yT0H5YtTmooiR_5LuVvEHX0kjJ7rYUfVWtwDhi74tum6oC2nzlUttz1-z4-Sjm18v2nIEspbv2e71VUsS5gVymdiSP-tVEe5OrV56wnIT523eZY6MtQq0rBKcWJGM1HbpOePs4VeMJRaQ-iZdgN1NdiEdZUH6nxZIcpmNaY-ZlAlIWzocFODDRFw-86OgyhV1DKT51wLZK24RogBIT8X_2y07NojavyibHLckfFH3mh85FmoIP6CY2CxXy_uifkuKsWOAYncQQwThtECM3FAUL4NfElj_bQMpIhjWktW-XtebuLVyp4D_qUGyQ0rKhA3O-6pf7k57uGRAkY1qkk1x9utRtZB2DaXAUAne4xfyMAEZ_Bu3VYtSDhksqUwQDwTPZhX7tOFyEhLyfFnyoqS6e3HIQLAQByJdClT7mF8pQiVmkrzrW4xX9XtCD5ciNdpmH9LIltUCtPbze5qNgu2sZRb3JfABAMlmHCxQu64hyLpTswyNWvTjRylAzUkjFxLqf_PvDvrbvLtSLVSDmzX7iPhnuzZbq23EWDcq7TjoU6606ofITXE4FIz-aUJA8FypE3iyzddhZaHDhAnHWVnZZAI61dqfRC2yz16uLT2a2qWZEpsw7alm0R1Bkc";

const CourseForm = () => {
	const [course, setCourse] = useState({
		title: "",
		code: "",
		description: "",
		points: "",
		level: "",
	});

	const handleChange = (e) => {
		setCourse({
			...course,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios.post(
				`${apiURL}/courses`, 
                course,
				{ headers: { Authorization: `Bearer ${token}`, 
                'Content-Type': 'application/json' } }
				
			)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});

		console.log("Course Form Submitted:", course);
	};

	return (
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md ">
                <h2 className="text-2xl font-semibold mb-6">Create a Course</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={course.title}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="code" className="block text-sm font-medium text-gray-600">
                            Code
                        </label>
                        <input
                            type="text"
                            id="code"
                            name="code"
                            value={course.code}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={course.description}
                            onChange={handleChange}
                            rows="4"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="points" className="block text-sm font-medium text-gray-600">
                            Points
                        </label>
                        <input
                            type="text"
                            id="points"
                            name="points"
                            value={course.points}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="level" className="block text-sm font-medium text-gray-600">
                            Level
                        </label>
                        <input
                            type="text"
                            id="level"
                            name="level"
                            value={course.level}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        Create Course
                    </button>
                </form>
            </div>
        
	);
};

export default CourseForm;
