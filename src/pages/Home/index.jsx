import React from 'react'
import HouseDisplay from '../../components/HouseDisplay'

const Home = ({ houses }) => {
    
    return (
        <>
            <h1>Home</h1>
            <HouseDisplay houses={houses}/>
        </>
    )
}

export default Home