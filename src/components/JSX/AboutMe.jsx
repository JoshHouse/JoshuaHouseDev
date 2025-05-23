import React from 'react';
import Header from './Header';

function AboutMe( {setPage} ) {

    return (
        <div className="w-100 vh-100 bg-light">
            <Header setPage={setPage}/>
            This is the AboutMe page!
        </div>
    );
}

export default AboutMe;