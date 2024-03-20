import React from 'react'

function Dialog({url, close}) {
  return (
    <div className='dialog'>
        
         <iframe
            src={`${url}?autoplay=1&mute=1`}  // Ensure the correct query parameter separator (?)
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className='bg-dark w-100 rounded-4'
            style={{height:"300px"}}
            ></iframe>
            <button className='close-btn fs-5' onClick={close}><i className="bi bi-x"></i></button>
    </div>
  )
}

export default Dialog
