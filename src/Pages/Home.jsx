import React from 'react'
import FeaturedUpdate from '../components/features/FeaturedUpdate';
import Chart from '../components/ReadChart/Chart';
import './home.css'



 const Home = () => {
    return (
        <div className="home">
            <FeaturedUpdate />
            <Chart />
        </div>
    )
}

export default Home;
