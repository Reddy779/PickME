import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainProtectWrapper = ({ children }) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
            return
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setCaptain(response.data.captain)
                setIsLoading(false)
            }
        }).catch(error => {
            console.error('Error fetching captain profile:', error)
            localStorage.removeItem('token')
            navigate('/captain-login')
        })

    }, [token])

    if (isLoading) {
        return (
            <div className='flex items-center justify-center h-screen w-screen'>
                <div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black'></div>
            </div>
        )
    }

    return (
        <>{children}</>
    )
}

export default CaptainProtectWrapper