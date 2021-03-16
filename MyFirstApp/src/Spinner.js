import React from 'react';

const Spinner = (props) => {
    return (
        <div className="display-3 container-fluid" >

            <style>
                {'body {background: #f5f5f5; background: linear-gradient(to bottom, #f5f5f5, #cfdef3); }'}
            </style>

            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                </div>
            </div>
        </div>    
        
    );
}

export default Spinner;