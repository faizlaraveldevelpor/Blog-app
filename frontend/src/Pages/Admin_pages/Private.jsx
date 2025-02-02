import  { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Compunents/Admin/Sidebar'

function Private() {
    let [hover,sethover]=useState(false)
    let user_data=JSON.parse(localStorage.getItem("user"))||[]
    if(user_data){
if (user_data.role=='admin') {
    return (
        <div className='relative'>
            <div className='absolute z-30 top-4'>
               <Sidebar hover={hover} sethover={sethover}/> 
            </div>
           <div className={`${hover?"":""}`}>
           <Outlet/>
           </div>
        </div>
      )
}else{
    return(
        <div className='text-center pt-40 font-bold text-[40px] h-screen'>
      Not found
    </div>
    )
  
}
    }

}

export default Private