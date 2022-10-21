import React  from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addProfile, selectProfile } from './profileSlice'
import ToDo from './toDo'
import '../../mocks/assets/profileStyles.css'

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(selectProfile); //profile from the store 

  const _profile = {
    name: 'Anna',
    gradYear: 2020,
    gpa: 4.0,
    dreamSchool: 'UF'
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProfile(_profile))
  }

  return (
    <div>
      <div className="profile-screen">
        <div className="profile-text-container">
          <div className="indent">
            <h1>My Profile</h1>
            <div className="profile-info-container">
              <form onSubmit={handleSubmit} className="profile-info">
                <div className="field">
                  <label>Name:</label>
                  <input className="input"/>
                </div>
                <div className="field">
                  <label>Graduation Year</label>
                  <input className="input"/>
                  </div>
                <div className="field"> 
                  <label>GPA</label>
                  <input className="input"/>
                  </div>
                <div className="field">
                  <label>Dream School</label>
                  <input className="input"/>
                </div>
                <button className="save-btn">Save</button>
              </form>
            </div>
          </div>
        </div>
          <ToDo/>
      </div>
      <footer>
        <img className="home-image" src="https://as2.ftcdn.net/v2/jpg/02/87/59/67/1000_F_287596718_0Y53hkbfo5wTYUg31Ogdqs93YRA1QDpG.jpg"/>
      </footer>
    </div>
  );
};

export default Profile;