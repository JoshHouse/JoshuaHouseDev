import React from 'react';
import Header from './Header';

function MyProjects( {setPage} ) {

    return (
        <div className="w-100 vh-100 bg-light">
            <Header setPage={setPage}/>
            This is the MyProjects page!
        </div>
    );
}

export default MyProjects;