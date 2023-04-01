import React from 'react'

function SidebarOption({Icon,size,text}) {
  return (
    <div className = "py-2 cursor-pointer hover:bg-neutral-300 hover:rounded-full text-xl duration-500">
        <div className = "flex text-4.25xl"><Icon className = "ml-20 mx-5" size = {size}/>
        {text}
        </div>
    </div>
  )
}

export default SidebarOption