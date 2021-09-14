import React from 'react'
import './widgetleft.css'



const WidgetLeft = () => {

    const Button = ({type}) => {
        return <button className={"widgetButton " + type}>
            {type}
        </button>;
    };
    return (
        <div className="widgetleft">
        <h4 className="widgetLeftTitle">Transactions</h4>
        <table className="widgetLeftTable">
            <tr className="widgetLeftTr">
                <th className="widgetLeftTh">Customer</th>
                <th className="widgetLeftTh">Date</th>
                <th className="widgetLeftTh">Amount</th>
                <th className="widgetLeftTh">Status</th>
            </tr>
            <tr className="widgetLeftTr">
                <td className="widgetLeftUser">
                    <img src="" alt="" className="widgetLeftImg" />
                    <span className="widgetLeftName">Vevi</span>
                </td>
                <td className="widgetLeftDate">10-9-2001</td>
                <td className="widgetLeftAmount">#346,46</td>
                <td className="widgetLeftStatus">
                    <Button type="Approved"></Button>
                </td>
            </tr>
            <tr className="widgetLeftTr">
                <td className="widgetLeftUser">
                    <img src="" alt="" className="widgetLeftImg" />
                    <span className="widgetLeftName">Vevi</span>
                </td>
                <td className="widgetLeftDate">Date</td>
                <td className="widgetLeftAmount">Amount</td>
                <td className="widgetLeftStatus">
                    <Button type="pending..."></Button>
                </td>
            </tr>
            <tr className="widgetLeftTr">
                <td className="widgetLeftUser">
                    <img src="" alt="" className="widgetLeftImg" />
                    <span className="widgetLeftName">Vevi</span>
                </td>
                <td className="widgetLeftDate">Date</td>
                <td className="widgetLeftAmount">Amount</td>
                <td className="widgetLeftStatus">
                    <Button type="Declined"></Button>
                </td>
            </tr>
            <tr className="widgetLeftTr">
                <td className="widgetLeftUser">
                    <img src="" alt="" className="widgetLeftImg" />
                    <span className="widgetLeftName">Vevi</span>
                </td>
                <td className="widgetLeftDate">Date</td>
                <td className="widgetLeftAmount">Amount</td>
                <td className="widgetLeftStatus">
                    <Button type="Approved"></Button>
                </td>
            </tr>
        </table>
     </div>
    )
}

export default WidgetLeft;
