import React, { useState } from 'react'
import { data } from '../data/courses'
import '../Styles/home.css'

function Home() {
    const [courses, setCourses]  =  useState(data)
  return (
    <div mt-5>
      <center>
        <h1>AVAILABLE COURSE</h1>
       <div className="courses-container container-fluid bg-light">
       <div className="row">
       {
            courses.map((item, index)=>(
                <div className="col-12 col-md-3">
                  <div className="course-card card p-2 mb-3 text-start" key={index}>
                   
                    <img src={item.courseImage} alt="" className='w-100 mb-2' />
                    <h1 className='fs-4 course-card-heading fw-bold'>{item.courseName}</h1>
                    <p className="fs-6 text-dark">{item.courseDescription}</p>
                    <div className="card-footer">
                    <div className="btns d-flex gap-3">
                    <a href={`/courses/${item.id}`} className='btn btn-primary w-100'>Learn More</a>
                    <a href={`/courses/${item.id}`} className='btn btn-outline-primary w-100'>Register</a>
                    </div>
                    </div>
                </div>
                </div>
            ))
        }
       </div>
       </div>
      </center>
    </div>
  )
}

export default Home
