import React from 'react'
import './edituser.css'
import { MailOutline, LocationSearching, PermIdentity,  PhoneAndroidRounded, CalendarToday, Publish } from  "@material-ui/icons";
import { Link } from 'react-router-dom';

 const EditUser = () => {
    return (
        <div className="edituser">
          <div className="userTitleContainer">
              <hi className="userTitle">Edit</hi>
             <Link to="/adduser">
              <button className="addButton">Create</button>
             </Link>
          </div>
          <div className="userContainer">
              <div className="displayUser">
                  <div className="displayTop">
                      <img src="" alt="" className="dispalyImg" />
                      <div className="displayTopTitle">
                      <span className="diaplayTopUsername">Slayman</span>
                      <span className="diaplayTopUserTitle">Class Teacher</span>
                  </div>
                </div>
                  <div className="displayBottom">
                      <span className="displayBmTitle">Account</span>
                      <div className="displayBmInfo">
                          <PermIdentity className="displayBmIcon" />
                          <span className="displayInfoTitle">Slayman</span>
                      </div>
                      <div className="displayBmInfo">
                          <CalendarToday className="displayBmIcon" />
                          <span className="displayInfoTitle">26 may</span>
                      </div>
                      <span className="displayBmTitle">Get in touch</span>
                      <div className="displayBmInfo">
                          <PhoneAndroidRounded className="displayBmIcon" />
                          <span className="displayInfoTitle">+234 000 000 000</span>
                      </div>
                      <div className="displayBmInfo">
                          <MailOutline className="displayBmIcon" />
                          <span className="displayInfoTitle">Slayman.com</span>
                      </div>
                      <div className="displayBmInfo">
                          <LocationSearching className="displayBmIcon" />
                          <span className="displayInfoTitle">Lagos | Africa </span>
                      </div>
                  </div>
              </div>
              <div className="updateUser">
                  <span className="updateUserTitle">Edit</span>
                  <form  className="updateUserForm">
                      <div className="updateUserLeft">
                          <div className="updateUserItem">
                              <label>Username</label>
                              <input type="text" className="updateUserInput" placeholder="Slayman" />
                          </div>
                          <div className="updateUserItem">
                              <label>Full Name</label>
                              <input type="text" className="updateUserInput" placeholder="full name" />
                          </div>
                          <div className="updateUserItem">
                              <label>Email</label>
                              <input type="text" className="updateUserInput" placeholder="email" />
                          </div>
                          <div className="updateUserItem">
                              <label>Phone</label>
                              <input type="number" className="updateUserInput" placeholder="+234" />
                          </div>
                          <div className="updateUserItem">
                              <label>Address</label>
                              <input type="text" className="updateUserInput" placeholder="lagos | Naija" />
                          </div>
                      </div>
                      <div className="updateUserRight">
                          <div className="updateUserUpload">
                              <img src="" alt="" className="updateUserImg" />
                              <label htmlFor="file"><Publish style={{cursor: "pointer", margin:"5px"}}/></label>
                              <input type="file" id="file" />
                          </div>
                          <button className="updateUserBtn">Update</button>
                      </div>
                  </form>
              </div>
          </div>
        </div>
    )
}

export default EditUser;