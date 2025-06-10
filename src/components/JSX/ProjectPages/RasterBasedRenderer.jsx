import React from 'react';
import Header from '../Header';

function RasterBased( {setPage} ) {

    return (
        <div className="w-100 bg-primary-subtle">
            
            <Header setPage={setPage}/>
            
            <div className="container py-4 px-4 my-2 rounded bg-light">
                
                {/* Title */}
                <h1 className="text-primary text-start fw-bold">Raster-Based Renderer</h1>
                <hr className="my-4 border border-primary border-2"/>

                This is the Raster Based Renderer project page!
            </div>

        </div>
    );
}

export default RasterBased;