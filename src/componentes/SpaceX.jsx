

import { useEffect, useState } from 'react'
import spaceX from '../images/logo.jpg'

const SpaceX = () => {

    const [launches, setLaunches] = useState([])

    const getAllLaunches = async () => {
        try {

            const result = await fetch("https://api.spacexdata.com/v3/launches")
            const data = await result.json()
            setLaunches(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getAllLaunches()
    }, [])

    return (
        <>
            <div className="container  rounded-3xl mx-auto my-10 p-10 bg-gradient-to-l from-sky-500 to-indigo-900 hover:bg-gradient-to-r   duration-1000 ">
                <p className="m-5">  https://api.spacexdata.com/v3/launches</p>
                <div className='flex justify-center'>
                    <img src={spaceX} alt="spaceX" className='   m-3' />
                </div>



            </div>
            <h1 className='text-5xl text-white text-center mt-5'> Launches List</h1>
            <div className='grid grid-cols-1     sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 container       rounded-3xl   mx-auto my-20 p-10 bg-gradient-to-r from-sky-500 to-indigo-700 hover:bg-gradient-to-l justify-items-center  duration-1000 '>

                {launches.map(launch => (
                    <>
                        <div key={launch.flight_number} className='rounded-2xl border-4 border-white mb-5 justify-content-center p-3 gap-10' >
                            <h2 className='m-3 text-left text-3xl' >Mission : <span className='text-white'>{launch.mission_name}</span> </h2>
                            <img src={launch.links.mission_patch_small} alt={launch.mission_name} className='size-40  hover:scale-110 duration-500' />
                            <h2 className='m-3 text-left text-3xl' >Rocket : <span className='text-white'>{launch.rocket.rocket_name}</span> </h2>
                            <h2 className='m-3 text-center text-white'>Year: {launch.launch_year}  </h2>
                        </div>
                    </>

                ))}
            </div>
        </>
    )
}

export default SpaceX