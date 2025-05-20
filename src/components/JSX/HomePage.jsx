import React from 'react'
import '../CSS/App.css'

function HomePage() {
    return (        
        <div className="w-100 vh-100 bg-light d-flex flex-column justify-content-around align-items-center">
          
          <h1 className="m-0">JoshuaHouse.dev</h1>
          <p className="m-0"><em>Hello! My name is Joshua House. This is a website to display my education, work, and project history.</em></p>

          <div className="w-75 h-75 bg-white rounded shadow-sm d-flex flex-column justify-content-center align-items-center p-3 gap-3"> 
            
            <div className="row flex-fill container-fluid justify-content-around">
              
              <div className="col-4 p-3 d-flex flex-column justify-content-end align-items-end bg-light rounded fs-4">
                <em>About Me {'>>'}</em>
              </div>
              
              <div className="col-7 p-3 d-flex flex-column justify-content-end align-items-end bg-light rounded fs-4">
                <em>My Projects {'>>'}</em>
              </div>
            
            </div>
            

            <div className="row flex-fill container-fluid justify-content-around">
              
              <div className="col-7 p-3 d-flex flex-column justify-content-end align-items-end bg-light rounded fs-4">
                <em>My Education and Work History {'>>'}</em>
              </div>
              
              <div className="col-4 p-3 d-flex flex-column justify-content-end align-items-end bg-light rounded fs-4">
                <em>Contact Me {'>>'}</em>
              </div>

            </div>
            
          </div>
        

        </div>
    )
}

export default HomePage