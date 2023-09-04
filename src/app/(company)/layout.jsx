import React from "react"
import Sidebar from "../Components/Sidebar"
const DashboardLayout=({children})=>{
    return(
        <>
<Sidebar/>
{children}
        </>
    )
}
export default DashboardLayout