import Layout from '../../components/Layout'
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import Template1 from './Template1'
import { useNavigate, useParams } from 'react-router-dom'
import Templates2 from './Templates2'

const Templates = () => {
  const navigate = useNavigate();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

  const params = useParams();
  const getTemplate = () => {
    switch (params.id) {
      case '1': {
        return <Template1 />
      }
      case '2': {
        return <Templates2 />
        }
    }
  };
  return (
      <>
      <Layout> 
        <div className='d-flex justify-content-end my-5 mx-5'>
        <button className='back-btn' style={{background:'white', color:'black'}} onClick={()=>navigate('/home')}>Back</button>
        <button className='mx-5' onClick={handlePrint} >Print</button>
        </div>
        <div ref={componentRef}>
        {getTemplate(1)}
        </div>
          </Layout>
      </>
  )
}

export default Templates
