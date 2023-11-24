import { Link, useNavigate } from "react-router-dom";
import { Row } from "react-bootstrap";
import axios from "axios";

const apiURL = "https://college-api.vercel.app/api";
const token =
	"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDlmYWY3NGIwMmVjMWFlOTM1YzY4YWJmZDhmNzhjOGZiNzFjZjcwNzVmOWI0M2QxNmYwMTI5MGNlZWM4ZGYzYzdmYmU5ZDRhOThjYzNmYmIiLCJpYXQiOiIxNzAwNjM2MTg1Ljg1OTM2NyIsIm5iZiI6IjE3MDA2MzYxODUuODU5MzcxIiwiZXhwIjoiMTczMjI1ODU4NS44MDk5NTQiLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.eXuyeAdVyhwsw_x0TvIg5U0kj-_HYxsORwfLVIgviKa8JAC3yT0H5YtTmooiR_5LuVvEHX0kjJ7rYUfVWtwDhi74tum6oC2nzlUttz1-z4-Sjm18v2nIEspbv2e71VUsS5gVymdiSP-tVEe5OrV56wnIT523eZY6MtQq0rBKcWJGM1HbpOePs4VeMJRaQ-iZdgN1NdiEdZUH6nxZIcpmNaY-ZlAlIWzocFODDRFw-86OgyhV1DKT51wLZK24RogBIT8X_2y07NojavyibHLckfFH3mh85FmoIP6CY2CxXy_uifkuKsWOAYncQQwThtECM3FAUL4NfElj_bQMpIhjWktW-XtebuLVyp4D_qUGyQ0rKhA3O-6pf7k57uGRAkY1qkk1x9utRtZB2DaXAUAne4xfyMAEZ_Bu3VYtSDhksqUwQDwTPZhX7tOFyEhLyfFnyoqS6e3HIQLAQByJdClT7mF8pQiVmkrzrW4xX9XtCD5ciNdpmH9LIltUCtPbze5qNgu2sZRb3JfABAMlmHCxQu64hyLpTswyNWvTjRylAzUkjFxLqf_PvDvrbvLtSLVSDmzX7iPhnuzZbq23EWDcq7TjoU6606ofITXE4FIz-aUJA8FypE3iyzddhZaHDhAnHWVnZZAI61dqfRC2yz16uLT2a2qWZEpsw7alm0R1Bkc";

const CourseCard = (props) => {
	const navigate = useNavigate();

	const handleDelete = (id) => {
		axios
			.delete(`${apiURL}/courses/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				console.log("Course deleted successfully:", response);
				navigate("/");
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<>
			<div className="card card-side bg-base-100 shadow-xl m-10">
				<img
					className="max-w-[500px] rounded-2xl"
					src="https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt="Movie"
				/>
				<div className="card-body max-w-[450px]">
					<h2 className="card-title ">{props.title}</h2>
					<br />
					<hr />
					<br />
					<p className="max-w-[400px]">{props.description}</p>
                    <div className="flex justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
                        // onClick={() => handleEdit(props.id)}
                    >
                        Edit
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={() => handleDelete(props.id)}
                    >
                        Delete
                    </button>
                </div>

				</div>

				<div className="stats stats-vertical shadow no-scrollbar">
					<div className="stat">
						<div className="stat-title">Points</div>
						<div className="stat-value">{props.points}</div>
						<div className="stat-desc">2023 ↗︎ (22%)</div>
					</div>

					<div className="stat">
						<div className="stat-title">Level</div>
						<div className="stat-value">{props.level}</div>
						<div className="stat-desc"></div>
					</div>

					<div className="stat">
						<div className="stat-title">Code</div>
						<div className="stat-value">{props.code}</div>
						<div className="stat-desc">↘︎ 90 (14%)</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CourseCard;
