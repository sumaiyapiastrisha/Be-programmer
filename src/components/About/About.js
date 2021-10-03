import React from 'react';
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
            {
                teachers.length === 0 ?
                    <Spinner animation="border" variant="primary" />
                    :
                    <Row xs={1} md={3} className="g-4 h-100 m-5 mx-5" >
                        {
                            teachers.map(teacher => <Teacher
                                key={teacher.id}
                                teacher={teacher}></Teacher>)
                        }
                    </Row>
            }
        </div>


    );


};

export default About;