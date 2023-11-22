import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import CourseCard from '../components/CourseCard';

const apiURL = "https://college-api.vercel.app/api";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDlmYWY3NGIwMmVjMWFlOTM1YzY4YWJmZDhmNzhjOGZiNzFjZjcwNzVmOWI0M2QxNmYwMTI5MGNlZWM4ZGYzYzdmYmU5ZDRhOThjYzNmYmIiLCJpYXQiOiIxNzAwNjM2MTg1Ljg1OTM2NyIsIm5iZiI6IjE3MDA2MzYxODUuODU5MzcxIiwiZXhwIjoiMTczMjI1ODU4NS44MDk5NTQiLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.eXuyeAdVyhwsw_x0TvIg5U0kj-_HYxsORwfLVIgviKa8JAC3yT0H5YtTmooiR_5LuVvEHX0kjJ7rYUfVWtwDhi74tum6oC2nzlUttz1-z4-Sjm18v2nIEspbv2e71VUsS5gVymdiSP-tVEe5OrV56wnIT523eZY6MtQq0rBKcWJGM1HbpOePs4VeMJRaQ-iZdgN1NdiEdZUH6nxZIcpmNaY-ZlAlIWzocFODDRFw-86OgyhV1DKT51wLZK24RogBIT8X_2y07NojavyibHLckfFH3mh85FmoIP6CY2CxXy_uifkuKsWOAYncQQwThtECM3FAUL4NfElj_bQMpIhjWktW-XtebuLVyp4D_qUGyQ0rKhA3O-6pf7k57uGRAkY1qkk1x9utRtZB2DaXAUAne4xfyMAEZ_Bu3VYtSDhksqUwQDwTPZhX7tOFyEhLyfFnyoqS6e3HIQLAQByJdClT7mF8pQiVmkrzrW4xX9XtCD5ciNdpmH9LIltUCtPbze5qNgu2sZRb3JfABAMlmHCxQu64hyLpTswyNWvTjRylAzUkjFxLqf_PvDvrbvLtSLVSDmzX7iPhnuzZbq23EWDcq7TjoU6606ofITXE4FIz-aUJA8FypE3iyzddhZaHDhAnHWVnZZAI61dqfRC2yz16uLT2a2qWZEpsw7alm0R1Bkc";

const Home = () => {
	const [courses, setCourses] = useState([]);
    
 
    useEffect(() => {
        axios.get(`${apiURL}/courses`, {headers: {"Authorization" : `Bearer ${token}`}})
            .then(response => {
                console.log(response.data)
                setCourses(response.data.data);
                
            }
            )
            .catch(error => {
                console.error(error);
            })
    }, []);

    console.log(courses)

	let courseCards = courses.map((course, i) => {
        return <CourseCard key={i} id= {i+1} title={course.title} description={course.description} />;
    });

	return (
		<>
            <div className='grid grid-cols-3 gap-4 place-items-center'>
                {courseCards}
            </div>
            
		</>
	);
};

export default Home;
