import React, { useMemo, useState, useEffect } from 'react';
import FeaturedUpdate from '../components/features/FeaturedUpdate';
import Chart from '../components/ReadChart/Chart';
import WidgetLeft from '../components/widgetLeft/WidgetLeft';
import WidgetRight  from '../components/widgetRight/WidgetRight';
import userData from '../centralData';
import './home.css'
import axios from 'axios'


 const Home = () => {
    const [userStatistic, setUserstatistic] = useState([]);

    const  MONTHS = useMemo (() => [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ], []);
  
    useEffect(() => {
      // get statistic of the users on the admin board
      const getStatistic = async() => {
        try{
          const res = await axios.get("/user/usage", {
            header: {
              token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            }
          })
          const statsList = res.data.sort(function(a, b) {
              return a._id - b._id;
          });
          
          statsList.map((item => setUserstatistic((prev) => [
            ...prev, {name:MONTHS[item._id -1 ],"New User": item.total },
          ])
        ))
        } catch(err) {
          console.log(err)
        } 
      };
      getStatistic();
      }, [MONTHS])
  
    return (
        <div className="home">
            <div className="homeWidgets">
                 <WidgetRight />
                 <WidgetLeft />
             </div>
            <Chart 
                data={userData} 
                title="New User" 
                grid dataKey="Active User"
             />
             <FeaturedUpdate />
        </div>
    )
}

export default Home;
