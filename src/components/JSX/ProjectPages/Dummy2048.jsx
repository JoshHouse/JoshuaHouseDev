import React from 'react';
import Header from '../Header';

function Dummy2048( {setPage} ) {

    return (
        <div className="w-100 bg-primary-subtle">
            
            <Header setPage={setPage}/>
            
            <div className="container py-4 px-4 my-2 rounded bg-light">
                
                {/* Title */}
                <h1 className="text-primary text-start fw-bold">Dummy2048: Modeling & Animation</h1>
                <hr className="my-4 border border-primary border-2"/>

                This is the Dummy2048 project page!
            </div>

        </div>
    );
}

export default Dummy2048;