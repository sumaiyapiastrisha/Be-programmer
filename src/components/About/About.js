import React from 'react';
import './About.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';

const About = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./teachersInfo.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div>
            <div className="about-teacher py-5">
                <div className="text-center">
                    <h1 className="py-5 text-primary">Teachers Information</h1>
                </div>
                {
                    teachers.length === 0 ?
                        <Spinner animation="border" variant="primary" />
                        :
                        <Row xs={1} md={3} className="g-4 h-100  mx-5" >
                            {
                                teachers.map(teacher => <Teacher
                                    key={teacher.id}
                                    teacher={teacher}></Teacher>)
                            }
                        </Row>
                }
            </div>

            <div>
                <div className="awards-section py-5 text-center ">
                    <div>
                        <h1 className="text-primary">Be programmers Achivement</h1>
                    </div>
                    <div className="d-flex gallery py-5 justify-content-center ">
                        <div className="ps-5"><img src="https://www.creativecertificates.com/wp-content/files/2011/06/teacher-appreciation-7.jpg" alt="" /></div>
                        <div className="ps-5"><img src="https://www.rewardcharts4kids.com/wp-content/uploads/2011/06/teacher-of-the-year-51.jpg" alt="" /></div>
                        <div className="ps-5"><img src="https://th.bing.com/th/id/OIP.RUQALCa5e0L6vU4xCGujfgHaEV?pid=ImgDet&rs=1" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>

    );


};

export default About;