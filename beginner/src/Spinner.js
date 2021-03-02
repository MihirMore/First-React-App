import React from 'react';

const Spinner = (props) => {
    return (
        <div className="display-3 container-fluid" >

            <style>
                {'body {background: #780206; background: linear-gradient(to bottom, #e0eafc, #cfdef3); }'}
            </style>

            <div className="container">
                <span className="text-center d-flex justify-content-center pt-5">
                    <img alt="preloader" src="./loader.gif"></img>
                </span>

                <div className="text-center d-flex justify-content-center pt-5">


                    {props.msg}
                </div>
            </div>


        </div>
    );
}

export default Spinner;