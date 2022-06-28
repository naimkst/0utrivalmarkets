import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

export default function Layout({children}: any) {
  return (
    <div className='overflow-x-hidden'>
    <Header/>
    { children }
    <Footer/>
    </div>
  )
}
