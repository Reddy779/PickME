import React from 'react'
import { Link } from 'react-router-dom'

const Raiding = () => {
    return (
        <div className='h-screen flex flex-col overflow-hidden'>

            <Link to='/home' className='fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-5-line "></i>
            </Link>

            <div className='h-1/2 w-full'>
                <img className='h-full w-full object-cover' src="https://imgs.search.brave.com/tmoq6bLynPVoA6jQQlFCIzyCar75FxmH9XDf0OYOdkM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/ODM5NDA5My92ZWN0/b3IvcGVyc29uLXVz/aW5nLWEtcmlkZS1z/aGFyaW5nLXRlY2hu/b2xvZ3ktbW9iaWxl/LWFwcGxpY2F0aW9u/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1oTUFRTlVEOHFJ/QUd6NmtNNktTNFhZ/LXdXME9KOXlWLTMw/SXlYNS15dFdnPQ" alt="" />
            </div>

            <div className='h-1/2 flex flex-col justify-between p-4 overflow-hidden'>

                {/* Driver Info */}
                <div className='flex items-center justify-between'>
                    <img className='h-20' src="https://static.vecteezy.com/system/resources/thumbnails/029/914/733/small/white-city-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png" alt="" />
                    <div className='text-right'>
                        <h2 className='text-base font-medium capitalize'>Captain 1</h2>
                        <h4 className='text-lg font-semibold'>KA 07 M 6617</h4>
                        <p className='text-xs text-gray-600'>Maruti Suzuki Ertiga</p>
                    </div>
                </div>

                {/* Location Info */}
                <div className='w-full'>
                    <div className='flex items-center gap-3 p-2 border-gray-300 border-b'>
                        <i className="ri-map-pin-user-fill text-sm"></i>
                        <div>
                            <h3 className='text-sm font-medium'>562/11-A</h3>
                            <p className='text-xs text-gray-600'>Suite 419 Jl. Rasuna Said No. 53, Tanjung Jabung Timur, SG 44961</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-2 border-gray-300 border-b'>
                        <i className="ri-map-pin-2-fill text-sm"></i>
                        <div>
                            <h3 className='text-sm font-medium'>562/11-A</h3>
                            <p className='text-xs text-gray-600'>316 Lawrence Freeway, New Wilfredville, OK 64785</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-2'>
                        <i className="ri-currency-line text-sm"></i>
                        <div>
                            <h3 className='text-sm font-medium'>₹193.20</h3>
                            <p className='text-xs text-gray-600'>Cash</p>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <button className='w-full bg-green-600 text-white py-2 rounded-lg text-sm font-medium'>
                    Make a Payment
                </button>

            </div>

        </div>
    )
}

export default Raiding