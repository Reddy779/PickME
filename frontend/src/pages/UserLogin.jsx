import { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [userData, setUserDate] = useState({})




	const submitHandler = (e) => {
		e.preventDefault()

		setUserDate({
			email: email,
			password: password
		})

		console.log(userData)

		setEmail('')
		setPassword('')
	}


	return (
		<div className='p-7 flex flex-col justify-between h-screen'>
			<div>
				<img className='w-20 mb-10 absolute left-5 top-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

				<form onSubmit={(e) => {
					submitHandler(e)
				}} className='mt-18'>
					<h4 className='text-lg font-medium mb-2'>What's your email</h4>
					<input
						required
						value={email}
						onChange={(e) => {
							setEmail(e.target.value)
						}}
						className='bg-[#eeeeee] mb- rounded px-4 py-2 w-full text-lg placeholder:text-base'
						type="email"
						placeholder='email@example.com'
					/>

					<h4 className='text-lg font-medium mb-2'>Enter your password</h4>
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
				<p className='text-center'>New hear?  <Link to='/signup' className='text-blue-700'>Create new Account</Link></p>
			</div>

			<div>
				<Link
					to="/captain-login"
					className='bg-[#7bc459] flex items-center justify-center font-semibold text-white mb-5 rounded px-4 py-2 w-full text-lg '>Sign in as captain</Link>
			</div>
		</div>
	)
}

export default UserLogin
