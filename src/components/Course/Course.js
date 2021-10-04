import React from 'react';
import './Course.css'
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    console.log(props.course)
    const { name, price, vedio, img } = props.course
    return (
        <div className="courseInfo text-center">
            {

                <Col>
                    <Card className=" course h-100 shadow rounded  bg-body rounded">
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title className="text-primary">Course name : {name}</Card.Title>
                            <Card.Text>
                                <p>Vedio:{vedio}</p>
                                <b> Price : $ {price}</b>

                            </Card.Text>
                            <button className="  btn-addToCart text-black"> Add to cart</button>
                        </Card.Body>



                    </Card>
                </Col>

            }
        </div>
    );
};

export default Course;