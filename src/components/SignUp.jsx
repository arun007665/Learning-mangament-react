import React, { useState } from 'react'
import { data } from '../data/courses'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import '../Styles/sigup.css'

function SignUp() {
  

  
  

  const navigate = useNavigate()
    const [courses, setCourses] = useState(data)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [pass, setPass] = useState("")
    const [selectedCourse, setSelectedCourse] = useState("")

    const [studentDetails, setStudentDetails] = useState({})

    const registerHandler = (e) =>{
      e.preventDefault()
        setStudentDetails(
            {
        studentName:name,
        studentEmail:email,
        studentMobile:mobile,
        studentPassword:pass,
        selectedstudentCourse:selectedCourse
        }
        )
        console.log(studentDetails)
        navigate('/home')
      
    }
    
  return (
    <div>
        <div>
      <div className="container-fluid mt-2" id='register'>
        <div className="row align-items-center">
          <div className="col-12 text-center ">
            <h3 className=" text-light text-center fw-bold oranges">Create Account</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12">
            {/* <div className="card">
              <card className="header">
                <h2 className="text-danger bg-light fw-bold text-center">REGESTER NOW </h2>
              </card>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    <h1 className="text-dark fs-4">
                        <i class="bi bi-check-circle text-success fs-2" ></i>
                          Study where ever and when ever
                    </h1>
                  </li>
                  <li className="list-group-item">
                    <h1 className="text-dark fs-4">
                        <i class="bi bi-check-circle  text-success fs-2"></i>
                        Assignment on each and every module
                    </h1>
                  </li>
                  <li className="list-group-item  ">
                    <h1 className="text-dark fs-4">
                        <i class="bi bi-check-circle text-success fs-2"></i>
                        Certification on every course
                    </h1>
                  </li>
                  <li className="list-group-item  ">
                    <h1 className="text-dark fs-4">
                        <i class="bi bi-check-circle text-success fs-2"></i>
                        Separate Mentorship
                    </h1>
                  </li>
                  <li className="list-group-item  ">
                    <h1 className="text-dark fs-4">
                        <i class="bi bi-check-circle text-success fs-2"></i>
                         Return amount if not gained knowledge
                    </h1>
                  </li>
                  
                </ul>
              </div>
            </div> */}
            <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?t=st=1710337953~exp=1710341553~hmac=08ecd3b6f3468294acf63f4ed65f2223116faedeea3ba3bf4e994e30590d238e&w=740" alt="" className="w-100" />
          </div>
          
          
          <div className="col-md-6 col-lg-6 col-sm-12 mt-5">
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
                      <label htmlFor="pass">PASSWORD</label>
                      <input type="password" placeholder='Enter Your Password' name='pass' value={mobile} onChange={(e)=>setMobile(e.target.value)} className='form-control' />
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

                     <button  onClick={registerHandler} className='btn btn-orange mt-5 w-100 '>Register</button>
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
