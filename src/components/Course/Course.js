import React from 'react';
import './Course.css'
import { Button, Card, Col } from 'react-bootstrap';

const Course = (props) => {
    console.log(props.course)
    const { name, price, vedio, img } = props.course
    return (
        <div className="courseInfo text-center">
            {

                <Col>
                    <Card className="h-100">
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>Course : {name}</Card.Title>
                            <Card.Text>
                                <h1>Vedio:{vedio}</h1>
                                <h1> Price : {price}</h1>

                            </Card.Text>
                        </Card.Body>
                        <Card>
                            <Button> Add to cart</Button>
                        </Card>
                    </Card>
                </Col>

            }
        </div>
    );
};

export default Course;