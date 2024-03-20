import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/courses'
import '../Styles/coursePage.css'
import Modules from '../components/Modules'
import Hero from './hero/Hero'


function CourseView() {
    const {id} = useParams()
    const [isChange, setIsChange] = useState(false);
    const [courses, setCourses] = useState(data)
    const [presentCourse, setPresentCourse] = useState({})
    const [courseselect,setCourseselect]=useState("")
   


  return (
    <div className='bg-light'>
     {
        
        courses.map((item, index)=>{
            if(item.id==id){
           
                return (
                  <div className="course-page container-fluid p-0 m-0">
                      <Hero title={item.courseName} desc={item.courseDescription} url1={'https://www.youtube.com/embed/L_eF8az2cSA'} img={item.courseImage} durl={'https://heyzine.com/flip-book/90b30a4061.html'}/>
                    {/* <div className="course-hero p-2 p-md-5 text-white">
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
                        <div className="card">
                          <div className="card-header">
                            <h2 className=" text-center text-dark">REGISTER NOW  !!</h2>
                          </div>
                          <div className="card-body">
                            <ul className="list-group">
                            </ul>
                              <li className="list-group-item">
                                <label htmlFor="name">Username</label>
                                <input type="text" name="name" id="name" className="form-control" />
                              </li>
                              <li className="list-group-item">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" className="form-control" />
                              </li>
                              <li className="list-group-item">
                                <label htmlFor="mobile">mobile</label>
                                <input type="number" name="mobile" id="mobile" className="form-control" />
                              </li>
                              <li className="list-group-item">
                                <label htmlFor="select">select</label>
                                <select name="" id="" value={courseselect}  class="form-select" aria-label="Default select example">
                       <option value="" selected disabled>---select course---</option>
            {
               courses.map((item, index)=>(
               <>
                <option value={item.id}>{item.courseName}</option>
               </>
               ))
            }
        </select>

                                
                              </li>
                              <button className="btn btn-info btns text-light mt-4 w-100 p-2">Register</button>
                          </div>
                        </div>
                      </div>
                        </div>
                       </div>
                    </div> */}

                    <div className="row mt-3">
                      <div className="col-md-12 text-center ">
                          <h2 className="display-6 text-dark fw-bold">Course Snapshot</h2>
                      </div>
                    </div>

                    <div className="row p-5 ">
                      <div className="col-md-8">
                        <ul type ='none' className='display-6'>
                          <li className='mt-2' >
                            <i className="bi bi-star-fill text-warning"></i>
                              A Top 10% Techincal subjects
                          </li>
                          <li className='mt-2' >
                            <i className="bi bi-star-fill text-warning"></i>
                              Certificate after the course complete
                          </li>
                          <li className='mt-2'>
                            <i className="bi bi-star-fill text-warning"></i>
                              Live clases from anywhere
                          </li>
                          <li className='mt-2' >
                            <i className="bi bi-star-fill text-warning"></i>
                              Mentor for each and induvidual student
                          </li>
                          <li className='mt-2' >
                            <i className="bi bi-star-fill text-warning"></i>
                              Daily live sesions
                          </li>
                          
                        </ul>
                      </div>
                      <div className="col-md-4 mr-5 mt-2">
                        <img src="https://img.freepik.com/free-photo/pretty-business-woman_1098-19602.jpg?t=st=1710923448~exp=1710927048~hmac=26a0c8d9b12fe2f30f31cc09743681ef004f1bb54e57ebbb54d48eeff41041a0&w=1060" alt="no-img"  className='w-100 image-course' />
                      </div>
                    </div>
                    <Modules courseId={id}/>
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
