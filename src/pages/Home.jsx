import React, { useState } from 'react'
import { data } from '../data/courses'
import '../Styles/home.css'
import { Link } from 'react-router-dom'
import Hero from './hero/Hero'

function Home() {
    const [courses, setCourses]  =  useState(data)
   
  return (
    <div className='course-container'>
      <Hero title={'MBA from Golden Gate University'} desc={`Cultivate strong business leadership skills with Silicon Valley's Golden Gate University as you earn the same U.S. MBA degree awarded on-campus and gain a competitive edge in the industry.`} img={'https://img.freepik.com/free-photo/abstract-flames-exploding-multi-colored-ink-paint-generated-by-ai_188544-15568.jpg?w=1380&t=st=1710950772~exp=1710951372~hmac=9a97ceeae9bb738859655fb7424c7f0087ada6f3c890d6a82682bfb2be3d401d'}/>
      <center>
        <h1>AVAILABLE COURSE</h1>
       <div className=" container ">
       <div className="row">
       {
            courses.map((item, index)=>(
                <div className="col-12 col-md-4 mb-3">
                  
                <div className="courses-card card h-100 border-0">
                  <img src={item.courseImage} alt="" className='w-100' />
                  <div className="tag">
                    <small>Get out Courses</small>

                  </div>
                  <div className="card-body text-start">
                    <p className='fs-5'>#Courses For students</p>
                    <h1 className="fs-5">{item.courseName}</h1>
                    <ul type="none" className='p-0'>
                      <li className='fs-6'><i class="bi bi-clipboard"></i>Live Classes</li>
                      <li className='fs-6'><i class="bi bi-hourglass-split"></i>15 months</li>
                      <li className='fs-6'> <i class="bi bi-file-check-fill"></i>Recognized Certificate</li>
                    </ul>
                    <div className="btns d-flex flex-nowrap gap-2">
                      <Link to={`/courses/${item.id}`} className="btn light-btn w-100 p-2 fs-6">View program</Link>
                      <button className="btn dark-btn w-100 p-2 fs-6"> <i className="bi bi-download text-light fz-2"></i> Syllubus</button>
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


