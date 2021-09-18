import React from 'react'
import './createuser.css'


const CreateUser = () => {
    return (
        <div className="createuser">
            <h1 className="NewUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="username" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="full name" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Passsword</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="number" placeholder="+234 " />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="address" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                        <div className="userGender">
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">female</label>
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">male</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="userSelect" name="active" id="active">
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </div>
            </form>

        </div>
    )
}


export  default CreateUser;