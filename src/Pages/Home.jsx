import React from 'react'
import FeaturedUpdate from '../components/features/FeaturedUpdate';
import Chart from '../components/ReadChart/Chart';
import WidgetLeft from '../components/widgetLeft/WidgetLeft';
import WidgetRight  from '../components/widgetRight/WidgetRight';
import userData from '../graphData';
import './home.css'


 const Home = () => {
    return (
        <div className="home">
            <div className="homeWidgets">
                 <WidgetRight />
                 <WidgetLeft />
             </div>
            <Chart 
                data={ userData} 
                title="User Statistics" 
                grid dataKey="Active User"
             />
             <FeaturedUpdate />
        </div>
    )
}

export default Home;
