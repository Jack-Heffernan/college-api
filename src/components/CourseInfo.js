import { Link } from "react-router-dom";
import { Row } from 'react-bootstrap'

const CourseCard = (props) => {
	return (
		<>
			<div className="card card-side bg-base-100 shadow-xl m-10">
				<img
					class="max-w-[600px] rounded-2xl"
					src="https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt="Movie"
				/>
				<div className="card-body max-w-[450px]">
					<h2 className="card-title ">{props.title}</h2>
                    <br/>
                    <hr/>
                    <br/>
					<p>{props.description}</p>
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
