import React from 'react';
import './intro.scss';

function Intro (){
    return (
        <div className='intro'>
            <div className="intro-text">
                <h1 className='text-center animate__animated animate__zoomIn'>The Photo Booth Lady</h1>
                <hr />
                <h3 className='text-center animate__animated animate__fadeIn animate__delay-1s'>Your Event Deserves a Photo Booth!</h3>
                <p className='text-center w-50 m-auto animate__animated animate__fadeIn animate__delay-1s'>Serving North & South Carolina, Georgia, and Tennessee</p>
            </div>
        </div>
    )
}
export default Intro;