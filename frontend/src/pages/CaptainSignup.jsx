import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainSignup = () => {

	const navigate = useNavigate()

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [vehicleColor, setVehicleColor] = useState('')
	const [vehiclePlate, setVehiclePlate] = useState('')
	const [vehicleCapacity, setVehicleCapacity] = useState('')
	const [vehicleType, setVehicleType] = useState('')

	const { captain, setCaptain } = React.useContext(CaptainDataContext)

	const submitHandler = async (e) => {
		e.preventDefault()

		const captainData = {
			fullname: {
				firstname: firstName,
				lastname: lastName
			},
			email: email,
			password: password,
			vehicle: {
				color: vehicleColor,
				plate: vehiclePlate,
				capacity: vehicleCapacity,
				vehicleType: vehicleType
			}
		}

		const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

		if (response.status === 201) {
			const data = response.data
			setCaptain(data.captain)
			localStorage.setItem('token', data.token)
			navigate('/captain-home')
		}

		setFirstName('')
		setLastName('')
		setEmail('')
		setPassword('')
		setVehicleColor('')
		setVehiclePlate('')
		setVehicleCapacity('')
		setVehicleType('')
	}

	return (
		<div className='py-7 px-5 flex flex-col justify-between h-screen'>

			<div>
				<img className='w-24 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

				<form onSubmit={(e) => submitHandler(e)} className='mt-1'>

					<h4 className='text-lg font-medium mb-1'>What's your Name</h4>
					<div className='flex gap-4 mb-5'>
						<input
							required
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base'
							type="text"
							placeholder='First Name'
						/>
						<input
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base'
							type="text"
							placeholder='Last Name'
						/>
					</div>

					<h4 className='text-lg font-medium mb-1'>What's your email</h4>
					<input
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
						type="email"
						placeholder='email@example.com'
					/>

					<h4 className='text-lg font-medium mb-1'>Enter your password</h4>
					<input
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
						type="password"
						placeholder='password'
					/>

					<h4 className='text-lg font-medium mb-2'>Vehicle Information</h4>
					<div className='flex gap-4 mb-5'>
						<input
							required
							className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base'
							type="text"
							placeholder='Vehicle Color'
							value={vehicleColor}
							onChange={(e) => setVehicleColor(e.target.value)}
						/>
						<input
							required
							className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base'
							type="text"
							placeholder='Vehicle Plate'
							value={vehiclePlate}
							onChange={(e) => setVehiclePlate(e.target.value)}
						/>
					</div>
					<div className='flex gap-4 mb-7'>
						<input
							required
							className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base'
							type="number"
							placeholder='Vehicle Capacity'
							value={vehicleCapacity}
							onChange={(e) => setVehicleCapacity(e.target.value)}
						/>
						<select
							required
							className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg'
							value={vehicleType}
							onChange={(e) => setVehicleType(e.target.value)}
						>
							<option value="" disabled>Select Vehicle Type</option>
							<option value="car">Car</option>
							<option value="auto">Auto</option>
							<option value="moto">Moto</option>
						</select>
					</div>

					<button className='bg-[#111] font-semibold text-white mb-3 rounded px-4 py-2 w-full text-lg'>
						Create Captain Account
					</button>

				</form>

				<p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-700'>Login</Link></p>

			</div>

			<div>
				<p className='text-[11px] leading-tight'>This site is protected by reCAPTCHA and the {' '}
					<span className='underline'>Google Privacy Policy</span> and{' '}
					<span className='underline'>Terms of Service apply</span>.</p>
			</div>

		</div>
	)
}

export default CaptainSignup