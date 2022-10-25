import '../../../mocks/assets/profileStyles.css';
import { useSelector} from 'react-redux';
import { selectProfile } from '../profileSlice'
import React, { useState } from "react";


const ToDo = () => {
  const profile = useSelector(selectProfile); //profile from the store 
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
 
  const handleChange = (e) => {
    const _toDo = e.target.value;
    setToDo(_toDo)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const _toDos = [...toDos, toDo];
    setToDos(_toDos);
    setToDo('');
  };

  const newToDos = toDos.map((toDo, index) => {
    return <li key="index" >{toDo}</li>

  });

    return (
        <div className="list-text-container">
            <h1>{profile && profile && profile.name ? `${profile.name}'s` : ''} To-Do List</h1>
            <div className="main-list-container">
              <div className="list-container">
                <div className="list-item">
                  <ul>
                    <li>Take entrance exams (SAT, ACT ...)</li>
                    <li>Meet with guidance counselor</li>
                    <li>Maintain my {profile && profile && profile.gpa ? `${profile.gpa} gpa ` : ' current gpa '}or higher</li>
                    <li>Apply to {profile && profile && profile.school ? `${profile.school}` : ' my dream school'}</li>
                    <li>Schedule campus tours</li>
                    {newToDos}
                  </ul>
                </div>
              </div>
            </div>
            <form className="add-field" onSubmit={handleSubmit}>
                <input 
                  value={toDo}
                  type="text" 
                  placeholder="add new item..." 
                  className="add-input"
                  onChange={handleChange}
                />
                <button className="add-item-btn">Add Item</button>
            </form>
        </div>
    )
}

export default ToDo;
