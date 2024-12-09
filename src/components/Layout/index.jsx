import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom';


export default function Layout() {
  return (
    <>
    <Header/>
    <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
   
    <Footer/>      
    </>
  )
}
