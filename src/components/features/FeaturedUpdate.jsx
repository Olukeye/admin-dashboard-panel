import './featuredUpdate.css';
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

import React from 'react'

 const FeaturedUpdate = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$578,453</span>
                    <span className="featuredMoneyRate">
                        -2.33 <ArrowDownward className="featuredIcons negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last sales</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,43</span>
                    <span className="featuredMoneyRate">
                        -34.35 <ArrowDownward className="featuredIcons negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last sales</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$23,3</span>
                    <span className="featuredMoneyRate">
                        +2.43 <ArrowUpward className="featuredIcons" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last sales</span>
            </div>
        </div>
    )
}

export default FeaturedUpdate;