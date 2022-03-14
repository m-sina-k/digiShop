import React from 'react'
import { BeatLoader } from "react-spinners";
import logo from '../../assets/images/logo.png'
import './PageLoading.scss'

const PageLoading = () => {


  return (
    <div className='page-loading'>
      <img src={logo} alt="logo" className='logo' />
        <BeatLoader color="#222222" size={8} margin={5}/>
    </div>
  )
}

export default PageLoading