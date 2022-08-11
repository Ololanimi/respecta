import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const data = JSON.parse(localStorage.getItem("userData")) 

    console.log(data)

    if (data) {
        return children
    }

    return <Navigate to={"/"}/>
}

export default ProtectedRoute