import React from 'react';
import Header from './Header';

function History( {setPage} ) {

    return (
        <div className="w-100 vh-100 bg-light">
            <Header setPage={setPage}/>
            This is the History page!
        </div>
    );
}

export default History;