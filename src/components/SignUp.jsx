import React, { useState } from 'react'
import { data } from '../data/courses'
import {useNavigate} from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate()
    const [courses, setCourses] = useState(data)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [selectedCourse, setSelectedCourse] = useState("")

    const [studentDetails, setStudentDetails] = useState({})

    const registerHandler = (e) =>{
      e.preventDefault()
        setStudentDetails(
            {
        studentName:name,
        studentEmail:email,
        studentMobile:mobile,
        selectedstudentCourse:selectedCourse
        }
        )
        console.log(studentDetails)
        navigate('/home')
      
    }
    
  return (
    <div>
        <div>
      <div className="container mt-5" id='register'>
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="display-3 text-light">Create Account</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12  offset-lg-3">
              <div className="card">
                <div className="card-body">
                  <form autoComplete='off'>
                    <div className="form-group mt-2">
                      <label htmlFor="name">NAME</label>
                      <input type="text" placeholder='Enter Student name' name='username' value={name} onChange={(e)=>setName(e.target.value)} className='form-control' />
                    </div>
                     <div className='form-group mt-2'>
                      <label htmlFor="email">EMAIL</label>
                      <input type="email" placeholder='Enter Student email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
                     </div>
                     <div className="form-group mt-2">
                      <label htmlFor="mobile">MOBILE</label>
                      <input type="tel" placeholder='Enter Phone Number' name='mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} className='form-control' />
                     </div>
                     <div className="form-group mt-2">
                      <label htmlFor="courses">select the course</label>
                      <select name="" id="" value={selectedCourse} onChange={(e)=>setSelectedCourse(e.target.value)} class="form-select" aria-label="Default select example">
                       <option value="" selected disabled>---select course---</option>
            {
               courses.map((item, index)=>(
               <>
                <option value={item.id}>{item.courseName}</option>
               </>
               ))
            }
        </select>
                     </div>

                     <button  onClick={registerHandler} className='btn btn-dark text-light mt-5 '>Register</button>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default SignUp
