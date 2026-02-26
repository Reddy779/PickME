import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>

            <h5 onClick={() => {
                props.setVehiclePanel(false)
            }} className='p-1 text-center w-[93%] absolute top-0'><i className=" text-3xl text-gray-500  ri-arrow-down-wide-line"></i></h5>

            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.setVehiclePanel(false)
            }} className='flex border-2 border-white active:border-black cursor-pointer select-none bg-gray-10 mb-2 w-full items-center justify-between p-3 rounded-xl'>
                <img className='h-12 ' src="https://static.vecteezy.com/system/resources/thumbnails/029/914/733/small/white-city-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Quick Ride<span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>5 mins away</h5>
                    <p className='font-normal text-xs text-gray-700'>Affordable, comfort ride</p>
                </div>
                <h2 className='text-lg font-semibold'>₹193.20</h2>
            </div>

            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.setVehiclePanel(false)
            }} className='flex border-2 border-white active:border-black cursor-pointer select-none bg-gray-10 mb-2 w-full items-center justify-between p-3 rounded-xl'>
                <img className='h-12' src=" https://static.vecteezy.com/system/resources/thumbnails/067/846/576/small/person-wearing-red-helmet-and-jacket-rides-red-scooter-showcasing-safety-gear-and-modern-transportation-scooter-features-sleek-design-with-visible-wheels-and-exhaust-png.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Moto Ride<span><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-700'>Affordable, Motorcycle ride</p>
                </div>
                <h2 className='text-lg font-semibold'>₹65.45</h2>
            </div>

            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.setVehiclePanel(false)
            }} className='flex border-2 border-white active:border-black cursor-pointer select-none bg-gray-10 mb-2 w-full items-center justify-between p-3 rounded-xl'>
                <img className='h-12 scale-x-[-1]' src="https://static.vecteezy.com/system/resources/thumbnails/042/393/918/small/ai-generated-vintage-asian-tuc-tuc-isolated-photo-png.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-base'>Auto Ride<span><i className="ri-user-3-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-700'>Affordable, Auto ride</p>
                </div>
                <h2 className='text-lg font-semibold'>₹118.86</h2>
            </div>
        </div>
    )
}

export default VehiclePanel
