import React from 'react'
import FeaturedUpdate from '../components/features/FeaturedUpdate';
import Chart from '../components/ReadChart/Chart';
import WidgetLg from '../components/widgetLG/WidgetLg';
import WidgetSm  from '../components/widgetSM/WidgetSm';
import userData from '../graphData';
import './home.css'


 const Home = () => {
    return (
        <div className="home">
            <FeaturedUpdate />

            <Chart 
                data={ userData} 
                title="User Statistics" 
                grid dataKey="Active User"
             />
             <div className="homeWidgets">
                 <WidgetSm />
                 <WidgetLg />
             </div>
        </div>
    )
}

export default Home;
