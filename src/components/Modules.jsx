import React, { useState } from 'react'
import { data } from '../data/courses'
import '../Styles/module.css'
import Dialog from './Dialog'

function Modules({courseId}) {
    const [courseData,setCourseData] = useState(data)
    const [url, setUrl] = useState(null)
    const [videoUrl, setVideoUrl] = useState(null)
    const [fullscreen, setFullscreen] = useState(false)
    function storeUrl(url){
      setUrl(url)
      localStorage.setItem('documetURL', url)
    }
  
    function closer(){
      setFullscreen(!fullscreen);
    }

  return (
    <div className="container-fluid">
        <div className='modules container py-5'>
      <div class="accordion mt-2 border-5 " id="accordionExample">
        <h1 className="fw-bold fs-1">Course Modules</h1>
        
       <div className="row">
        <div className="col-12 col-md-6 ">
          <div className="module-left ">
          {
            courseData.map((item, index)=>(
            item.id== courseId?(
              item.id==courseId?(
                item.modules.map((item, moduleIndex)=>(
                  <div class="accordion-item    mt-3  ">
                  <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button module-css" type="button" data-bs-toggle="collapse" data-bs-target={`#${moduleIndex}`} aria-controls="collapseOne">
                     {item.title}
                     
                  </button>
                  </h2>
                  <div id={moduleIndex} class="accordion-collapse  collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                     <p>
                      {item.description}
                     </p>
                     <h1 className="fs-4">Materials</h1>
                     <div className="d-flex justify-content-center  gap-2">
                     {
                      item.matierial.map((item, index)=>(
                        <a href={`viewdocumet`} class="btn btn-primary w-50" onClick={()=>{storeUrl(item.documentLink)}}> Document</a>
                      ))
                     }
                     <br />
                    <button onClick={()=>setVideoUrl(item.modulevedio)} className='btn btn-light w-50 '>Play Video</button>
                     </div>
                  </div>
                  </div>
              </div>
              ))
                ):(
                  null
                )
              
             
            ):(null)
            )
              
              
              
            )
        }
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="module-right">
            {
              videoUrl!=null?(
                <>
                          <div className="card">
                            <div className="card-body">
                            <iframe
                                    src={`${videoUrl}?autoplay=1&mute=1`}  // Ensure the correct query parameter separator (?)
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                    className='bg-dark w-100 rounded-4'
                                    style={{height:"300px"}}
            ></iframe>
            <button onClick={()=>setFullscreen(true)}>View Fullscreen</button>
                            </div>
                          </div>

                </>
              ):(
               <div className="card">
                
                <div className="card-body">
                <img src="https://it.eku.edu/sites/it.eku.edu/files/bbissue2.png" alt="no-image " className='w-100 rounded-2' />
                </div>
               </div>
              )
            }
          </div>
        </div>
       </div>

</div>
    </div>
   {
    fullscreen?( <Dialog url={videoUrl} close={closer}/>):(null)
   }
    </div>
  )
}

export default Modules
