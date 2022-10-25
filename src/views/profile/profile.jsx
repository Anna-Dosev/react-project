import React, { useState }  from 'react';
import { useDispatch } from 'react-redux'
import { addProfile } from './profileSlice'
import ToDo from './toDoList/toDo'
import '../../mocks/assets/profileStyles.css'

const Profile = () => {
  const [fields, setFields] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProfile(fields))
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    const _fields = {...fields} //copy of what is already in fields
    _fields[id] = value //value is manipulating the copy
    setFields(_fields);
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
                  <input value={fields.name || ''} onChange={handleChange} id="name" className="input"/>
                </div>
                <div className="field"> 
                  <label>GPA</label>
                  <input value={fields.gpa || ''} onChange={handleChange} id="gpa" className="input"/>
                  </div>
                <div className="field">
                  <label>Dream School</label>
                  <input value={fields.school || ''} onChange={handleChange} id="school" className="input"/>
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