import React from 'react'

const LocationSearchPanel = (props) => {

    

    /* sample array for location */

    const locations = [
        "Suite 419 Jl. Rasuna Said No. 53, Tanjung Jabung Timur, SG 44961",
        "316 Lawrence Freeway, New Wilfredville, OK 64785",
        "177 Marion Mill, Conroyton, WV 94943",
        "Apt. 587 48642 Wehner Ports, Salvadormouth, CA 96569"
    ]

    return (
        <div>
            {/* this is just a sample data */}
            {
                locations.map(function (element, index) {
                    return (
                        <div onClick={() => {
                            props.setVehiclePanel(true)
                            props.setPanelOpen(false)
                        }} key={index} className='flex gap-4 border-2 border-gray-100 active:border-black p-3 rounded-xl items-center my-2 justify-start'>
                            <h4 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full shrink-0'>
                                <i className="ri-map-pin-fill"></i>
                            </h4>
                            <h4 className="text-sm font-medium">{element}</h4>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default LocationSearchPanel
