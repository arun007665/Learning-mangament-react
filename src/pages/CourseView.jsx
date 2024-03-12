import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/courses'
import '../Styles/coursePage.css'
import Modules from '../components/Modules'

function CourseView() {
    const {id} = useParams()
    const [isChange, setIsChange] = useState(false);
    const [courses, setCourses] = useState(data)
    const [presentCourse, setPresentCourse] = useState({})

  return (
    <div>
     {
        
        courses.map((item, index)=>{
            if(item.id==id){
                return (
                  <div className="course-page container-fluid p-0 m-0">
                    <div className="course-hero p-2 p-md-5 text-white">
                       <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                      <div className="course-hero-right">
                      <h1 className='display-4 fw-bold'>Learn Best <span className="text-dark">
                        {item.courseName}</span> from our College</h1>
                        <p className='lead'>{item.courseDescription}</p>
                        <div className="search">
                            <input type="text" placeholder='Find More Courses' onChange={(e)=>{
                                if(e.target.value.length>0){
                                    setIsChange(true)
                                }
                                else{
                                    setIsChange(false)
                                }
                            }} />
                            <button className="btn-search">Find Course</button>
                            <div className={`dropdown-courses ${isChange?'d-block':'d-none'}`} >
                                <button className='btn-close bg-transparent float-end'></button>
                                <ul className="list-group w-100">
                                {
                                    courses.map((item, index)=>(
                                        <li className="list-group-item fs-5 d-flex justify-content-between bg-transparent text-white">{item.courseName} <a href={`/courses/${item.id}`} className="btn btn-outline-light rounded-pill px-3">view</a></li>
                                        
                                    ))
                                }
                                </ul>

                            </div>
                        </div>

                       <div className="btns d-flex gap-2 mt-3 flex-wrap">
                       <button className="btn btn-light p-3 px-5 rounded-pill">Learn more</button>
                       <button className="btn btn-outline-light p-3 px-5 rounded-pill">Modules</button>
                       </div>
                      </div>
                        </div>
                        <div className="col-12 col-md-6">
                      <div className="course-hero-left p-2 p-md-5">
                        {/* <img src={item.courseImage} alt="" className='w-100' /> */}
                      </div>
                        </div>
                       </div>
                    </div>
                    <Modules/>
                  </div>
                )
            }
            else{
                return null
            }
        })
     }
    </div>
  )
}

export default CourseView
