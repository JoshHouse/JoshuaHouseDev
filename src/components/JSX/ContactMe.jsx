import React from 'react';
import Header from './Header';

function ContactMe( {setPage} ) {

    return (
        <div className="w-100 vh-100 bg-light">
            <Header setPage={setPage}/>
            This is the ContactMe page!
        </div>
    );
}

export default ContactMe;