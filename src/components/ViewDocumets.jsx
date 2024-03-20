import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ViewDocumets() {
    const [documetURL, setDocumetURL] = useState('');
    useEffect(()=>{
            const getUrl = () =>{
                setDocumetURL(localStorage.getItem('documetURL'));
            }
            getUrl();
    }, [])
   
  return (
    <div className='viewdocument'>
      <iframe src='https://heyzine.com/flip-book/90b30a4061.html' frameborder="0" className='w-100 bg-dark'></iframe>
    </div>
  )
}

export default ViewDocumets
