import React from 'react';
import '../mocks/assets/profileStyles.css'

const Profile = () => {
  return (
    <div>
      <div className="profile-screen">
        <div className="profile-text-container">
          <div> 
            <h1>My Profile</h1>
            <div className="profile-info-container">
              <div className="headshot">Prof Pic</div>
              <h4 className="profile-info">
                Name: <p className="txt" contentEditable="true"></p>
                Graduation Year: <p className="txt" contentEditable="true"></p>
                GPA: <p className="txt" contentEditable="true"></p>
                Dream School: <p className="txt" contentEditable="true"></p>
              </h4>
            </div>
          </div>
        </div>
        <div className="profile-sample-text">
          <h2>This will be a to-do list with some pre-loaded content and the ablity to create your own tasks.</h2>
        </div>
      </div>
      <footer>
        <img className="profile-image" src="https://as2.ftcdn.net/v2/jpg/02/87/59/67/1000_F_287596718_0Y53hkbfo5wTYUg31Ogdqs93YRA1QDpG.jpg"/>
      </footer>
    </div>
  );
};

export default Profile;