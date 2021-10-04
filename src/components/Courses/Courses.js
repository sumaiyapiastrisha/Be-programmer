import React from 'react';
import './Courses.css'
import { Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const Courses = () => {
    const [courses] = useCourses();

    return (
        <div className="courses py-5">
            <div>
                <h1 className=" text-center text-primary">Our Running Courses</h1>
            </div>

            {


                <Row xs={1} md={3} className="  mx-5 g-4 h-100 m-5 mx-5" >
                    {

                        courses.map(course => <Course

                            key={course.id}
                            course={course}></Course>)
                    }
                </Row>
            }
        </div>
    );
};

export default Courses;