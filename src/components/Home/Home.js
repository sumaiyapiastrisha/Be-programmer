import React from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

import './Home.css'
const Home = () => {
    const [courses] = useCourses();
    const slicedCourses = courses.slice(0, 4);
    console.log(courses)
    return (
        <div >
            <div className='header-content' >
                <h1 className="text-center text-white mt-5">Learn programming with us</h1>
                <h1 className="text-center text-white mt-5">Learn programming with us</h1>
                <h1 className="text-center text-white mt-5">Learn programming with us</h1>

            </div>

            <div>
                {
                    <Row xs={1} md={3} className="g-4 h-100 mt-5  mx-5" >
                        {
                            slicedCourses.map(course => <Course

                                key={course.id}
                                course={course}></Course>)
                        }
                    </Row>
                }
            </div>
        </div >
    );
};

export default Home;