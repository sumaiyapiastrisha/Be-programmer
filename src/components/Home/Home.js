
import React from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

import './Home.css'
const Home = () => {
    const [courses] = useCourses();//custom hooks calling
    const slicedCourses = courses.slice(0, 4);
    console.log(courses)
    return (
        <div >
            {/* header container */}
            <div className='header' >
                <div className="header-content" >
                    <h1 className="text-wrap text-primary fw-bold">Grave the oppurchunity to <span className=" fw-lighter "> Be programmer</span></h1>
                    <h4 className="   mt-5">For every student, every classroom.  Real results.
                    </h4>
                    <p >We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.</p>
                </div>


            </div>
            {/* course container */}
            <div className="home-course-container  px-5">
                <div className="text-center  pt-5">
                    <h1 className="text-primary">
                        Our Courses
                    </h1>
                </div>
                {
                    <Row xs={1} md={4} className="g-4  mt-5  mx-5 my-5" >
                        {
                            slicedCourses.map(course => <Course

                                key={course.id}
                                course={course}></Course>)
                        }
                    </Row>
                }

            </div>
            <div>
                <button className="button mb-5">
                    See more
                </button>
            </div>

        </div >
    );
};

export default Home;