import React, { useState } from 'react'
import { data } from '../data/courses'

function Modules() {
    const [courseData,setCourseData] = useState(data)
  return (
    <div className="container-fluid bg-light">
        <div className='modules container py-5'>
      <div class="accordion" id="accordionExample">
        <h1 className="fw-bold fs-1">Course Modules</h1>
        <p className="fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, rerum.</p>
        {
            courseData.map((item, index)=>{
                item.modules.map((module, moduleIndex)=>(
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       {module.title}
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                       <p>
                        {module.description}
                       </p>
                    </div>
                    </div>
                </div>
                ))
            })
        }

</div>
    </div>
    </div>
  )
}

export default Modules
