import { Link } from "react-router-dom";

const CourseCard = (props) => {
	return (
		<>
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure className="px-10 pt-10">
					<img
						src="https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="Shoes"
						className="rounded-xl"
					/>
				</figure>
				<div className="card-body items-center text-center">
					<h2 className="card-title">{props.title}</h2>
					<p>{props.description}</p>
					<div className="card-actions">
						<a href={`/course/${props.id}`}>
						<button className="btn btn-primary">View</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default CourseCard;
