import React, { useState } from 'react'
import './style.css'
import Dialog from '../../components/Dialog';
function Hero({title, desc, url1, img, durl }) {
    const [fullscreen, setFullscreen] = useState(false);
    const [url, setUrl] = useState(false);

    function storeUrl(url){
      setUrl(url)
      localStorage.setItem('documetURL', url)
    }
  
    function closer(){
      setFullscreen(!fullscreen);
    }
  return (
    <div className='hero p-2 p-md-5'>
        <div className="container hero-inner p-0" style={{background:`url(${img})`}}>
        <div className="row">
                <div className="col-12 col-md-8">
                    <div className="hero-left p-2 p-md-5 bg-white">
                    <div className="hero-top mb-3 d-flex gap-2 align-items-center">
                        <button className="btn btn-dark mt-3 rounded-pill">POLPULAR</button>
                        <button className="p-2 btn btn-light mt-3 rounded-pill ">AMONG TOP 10% US UNIVERSITIES</button>
                    </div>
                    <h1 className="fs-1">{title}</h1>
                    <p className="fs-5">{desc}</p>
                    <div className="info d-flex gap-4 mt-5">
                        <div className="">
                            <span className="fs-6">Type</span>
                            <p className="fs-5 text-danger fw-bold">Degree</p>
                        </div>
                        <div className="">
                            <span className="fs-6">Type</span>
                            <p className="fs-5 text-danger fw-bold">Degree</p>
                        </div>
                        <div className="">
                            <span className="fs-6">Type</span>
                            <p className="fs-5 text-danger fw-bold">Degree</p>
                        </div>
                    </div>
                    <div className="btns d-flex mt-5 gap-3">
                    <a href ={`/viewdocumet`} onClick={()=>{setUrl(durl)}} className="btn-outline-dark btn p-3">Download Syllubus</a>
                        <button className="dark-btn btn p-3">Download Syllubus</button>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="hero-right h-100">
                        <div className="play"  onClick={()=>setFullscreen(true)} >
                            <i className='bi bi-play'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
    fullscreen?( <Dialog url={url1} close={closer}/>):(null)
   }
    </div>
  )
}

export default Hero
