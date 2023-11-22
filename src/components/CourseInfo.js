import { Link } from "react-router-dom";

const CourseCard = (props) => {
	return (
		<>
			<div className="card card-side bg-base-100 shadow-xl m-10">
					<img
                        class="max-w-[600px] rounded"
						src="https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="Movie"
					/>
				<div className="card-body">
					<h2 className="card-title">{props.title}</h2>
					<p>{props.description}</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Watch</button>
					</div>
				</div>
			</div>
		</>
	);
};



export default CourseCard;
