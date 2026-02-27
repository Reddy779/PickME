import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/vehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'

const Home = () => {

	const [pickup, setPickup] = useState('')
	const [destination, setDestination] = useState('')
	const [panelOpen, setPanelOpen] = useState(false)
	const vechiclePanelRef = useRef(null)
	const confirmRidePanelRef = useRef(null)
	const vehicleFoundRef = useRef(null)
	const waitingForDriverRef = useRef(null)
	const panelRef = useRef(null)
	const panelCloseRef = useRef(null)
	const [vehiclePanel, setVehiclePanel] = useState(false)
	const [confirmRidePanel, setConfirmRidePanel] = useState(false)
	const [vehicleFound, setVehicleFound] = useState(false)
	const [waitingForDriver, setWaitingForDriver] = useState(false)



	const submitHandler = (e) => {
		e.preventDefault()
	}

	useGSAP(() => {
		if (panelOpen) {
			gsap.to(panelRef.current, {
				height: '70%',
				padding: '20px',
				duration: 0.5,
				ease: 'power2.inOut'
			})
			gsap.to(panelCloseRef.current, {
				opacity: 1,
			})
		} else {
			gsap.to(panelRef.current, {
				height: '0%',
				duration: 0.5,
				padding: '0px',
				ease: 'power2.inOut'
			})
			gsap.to(panelCloseRef.current, {
				opacity: 0,
			})
		}
	}, [panelOpen])

	useGSAP(() => {

		if (vehiclePanel) {
			gsap.to(vechiclePanelRef.current, {
				transform: 'translateY(0%)',
			})
		} else {
			gsap.to(vechiclePanelRef.current, {
				transform: 'translateY(100%)',
			})
		}
	}, [vehiclePanel])

	useGSAP(() => {

		if (confirmRidePanel) {
			gsap.to(confirmRidePanelRef.current, {
				transform: 'translateY(0%)',
			})
		} else {
			gsap.to(confirmRidePanelRef.current, {
				transform: 'translateY(100%)',
			})
		}
	}, [confirmRidePanel])

	useGSAP(() => {

		if (vehicleFound) {
			gsap.to(vehicleFoundRef.current, {
				transform: 'translateY(0%)',
			})
		} else {
			gsap.to(vehicleFoundRef.current, {
				transform: 'translateY(100%)',
			})
		}
	}, [vehicleFound])

	useGSAP(() => {

		if (waitingForDriver) {
			gsap.to(waitingForDriverRef.current, {
				transform: 'translateY(0%)',
			})
		}
		else {

			gsap.to(waitingForDriverRef.current, {
				transform: 'translateY(100%)',
			})
		}
	}, [waitingForDriver])


	return (
		<div className='h-screen relative overflow-hidden'>

			<img className='w-18 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

			<div className='h-screen w-screen'>
				{/* image fro temporary use */}
				<img className='h-full w-full object-cover' src="https://imgs.search.brave.com/tmoq6bLynPVoA6jQQlFCIzyCar75FxmH9XDf0OYOdkM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/ODM5NDA5My92ZWN0/b3IvcGVyc29uLXVz/aW5nLWEtcmlkZS1z/aGFyaW5nLXRlY2hu/b2xvZ3ktbW9iaWxl/LWFwcGxpY2F0aW9u/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1oTUFRTlVEOHFJ/QUd6NmtNNktTNFhZ/LXdXME9KOXlWLTMw/SXlYNS15dFdnPQ" alt="" />
			</div>

			<div className='flex flex-col justify-end absolute h-screen top-0 w-full '>
				<div className='h-[30%] p-6 bg-white relative'>
					<h5 ref={panelCloseRef} onClick={() => {
						setPanelOpen(false)
					}} className='absolute opacity-0 top-4 right-6 text-xl'>
						<i className="ri-arrow-down-wide-line"></i>
					</h5>
					<h4 className='text-2xl font-semibold'>Find a trip</h4>
					<form onSubmit={(e) => {
						submitHandler(e)
					}}>
						<div className='line absolute h-16 w-1 top-[45%] left-12 bg-gray-600 rounded-full '></div>
						<input
							onClick={() => {
								setPanelOpen(true)
							}}
							value={pickup}
							onChange={(e) => {
								setPickup(e.target.value)
							}}
							className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
							type="text"
							placeholder='Add a pick-up location' />
						<input
							onClick={() => {
								setPanelOpen(true)
							}}
							value={destination}
							onChange={(e) => {
								setDestination(e.target.value)
							}}
							className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Enter destination location' />
					</form>
				</div>

				<div ref={panelRef} className=' h-0 bg-white'>
					<LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
				</div>
			</div>

			<div ref={vechiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12 rounded-t-2xl'>
				<VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
			</div>

			<div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12 rounded-t-2xl'>
				<ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
			</div>

			<div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12 rounded-t-2xl'>
				<LookingForDriver setVehicleFound={setVehicleFound} />
			</div>

			<div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 rounded-t-2xl'>
				<WaitingForDriver waitingForDriver={waitingForDriver} />
			</div>


		</div>
	)
}

export default Home