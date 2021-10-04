import React from 'react';
import './ClientsReview.css'

const ClientsReview = () => {
    return (
        <div className="clients-review py-5 ">
            <div className="py-5 d-flex client-review-container">
                <div>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.M_sJRtUbhviCxr9VfTURlwHaE8&pid=Api&P=0&w=277&h=186" alt=""></img>
                </div>
                <div className=" justify-content-center mt-5 text-center m-5">
                    <h3>Hi , I am Nahida Akhter Rekha </h3>
                    <p>“I come from a poor family. At home it’s one room, just a room we live in. When I was a child, I used to fear mathematics. But now, I am in love with mathematics because of <span className="text-primary">Be programmer</span>.”</p>
                </div>
                <hr></hr>
            </div>
            <div className="d-flex py-5 ">

                <div className="justify-content-center mt-5 text-center m-5">
                    <h3>Hi , I am Sumaiya Pias Trisha</h3>
                    <p>“I come from a poor family. At home it’s one room, just a room we live in. When I was a child, I used to fear mathematics. But now, I am in love with mathematics because of <span className="text-primary">Be programmer</span>.”</p>
                </div>
                <div>
                    <img src="https://i.pinimg.com/736x/a9/2f/7f/a92f7ff65645af6fb9b71f251d51ed10.jpg" alt=""></img>
                </div>
            </div>
            <div className="d-flex py-5 ">
                <div>
                    <img src="http://ikuzokids.com/wp-content/uploads/2014/10/Boys-Formal-Wear.jpg" alt=""></img>
                </div>
                <div className="justify-content-center mt-5 text-center m-5">
                    <h3>Hi , I am Rafiqul Islam</h3>
                    <p>“I come from a poor family. At home it’s one room, just a room we live in. When I was a child, I used to fear mathematics. But now, I am in love with mathematics because of <span className="text-primary">Be programmer</span>.”</p>
                </div>
            </div>


        </div>
    );
};

export default ClientsReview;