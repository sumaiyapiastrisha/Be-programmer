import React from 'react';
import './Teacher.css'
import { Card, Col } from 'react-bootstrap';

const Teacher = (props) => {
    const { name, qualification, img } = props.teacher;
    return (
        <div className="teachers-info text-center">
            {

                <Col>
                    <Card className="h-100">
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {qualification}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>

            }
        </div>
    );
};

export default Teacher;