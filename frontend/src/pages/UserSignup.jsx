import { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [userData, setUserDate] = useState({})

	const submitHandler = (e) => {
		e.preventDefault()

		setUserDate({
			fullName: {
				firstName: firstName,
				lastName: lastName	
			},
			email: email,
			password: password
		})

		console.log(userData)

		setFirstName('')
		setLastName('')
		setEmail('')
		setPassword('')
	}

	return (
		<div className='p-7 flex flex-col justify-between h-screen'>

			<div>
				<img className='w-20 absolute left-5 top-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

				<form onSubmit={(e) => {
					submitHandler(e)
				}} className='mt-18'>

					<h4 className='text-lg font-medium mb-1'>What's your Name</h4>
					<div className='flex gap-4 mb-5'>

						<input
							required
							value={firstName}
							onChange={(e) => {
								setFirstName(e.target.value)
							}}
							className='bg-[#eeeeee] w-1/2 rounded px-4 py-2  text-lg placeholder:text-base'
							type="text"
							placeholder='First Name'
						/>

						<input
							value={lastName}
							onChange={(e) => {
								setLastName(e.target.value)
							}}
							className='bg-[#eeeeee] w-1/2 rounded px-4 py-2  text-lg placeholder:text-base'
							type="text"
							placeholder='Last Name'
						/>

					</div>

					<h4 className='text-lg font-medium mb-1'>What's your email</h4>
					<input
						required
						value={email}
						onChange={(e) => {
							setEmail(e.target.value)
						}}
						className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
						type="email"
						placeholder='email@example.com'
					/>

					<h4 className='text-lg font-medium mb-1'>Enter your password</h4>
					<input
						required
						value={password}
						onChange={(e) => {
							setPassword(e.target.value)
						}}
						className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
						type="password"
						placeholder='password'
					/>

					<button className='bg-[#111] font-semibold text-white mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>

				</form>

				<p className='text-center'>Already have an account?  <Link to='/login' className='text-blue-700'>Login</Link></p>

			</div>

			<div>

				<p className='text-[11px] leading-tight'>This site is protected by reCAPTCHA and the {' '}
					<span className='underline'>Google Privacy Policy</span> and{' '}
					<span className='underline'>Terms of Service apply</span>.</p>

			</div>
		</div>
	)
}

export default UserSignup
