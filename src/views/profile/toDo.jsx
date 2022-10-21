import '../../mocks/assets/profileStyles.css'
import React, { useState } from "react";

const ToDo = () => {
    const [checked, setChecked] = useState([]);
    const checkList = [
        "Complete standardized tests", 
        "Maintain a {gpa} or higher", 
        "Research/pick a major", 
        "Apply to {dream school}", 
        "Tour campus of {dream school}",
        "Meet with school's guidance counselor",
        "Apply for financial aid",
        "Sample text", 
        "Sample text" ];

    const handleCheck = (event) => {
        const updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };


    const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";


    return (
        <div className="list-text-container">
            <h1>_NAME's_ To-Do List</h1>
            <div className="main-list-container">
                {checkList.map((item, index) => (
              <div className="list-container">
                <div className="checkbox" key={index}>
                    <input value={item} type="checkbox" onChange={handleCheck} />
                </div>
                <div  className="list-item">
                    <span className={isChecked(item)}>{item}</span>
                </div>
              </div>
              ))}
            </div>
            <div className="add-field">
                <input placeholder="add new item..." className="add-input"/>
                <button className="add-item-btn">Add Item</button>
            </div>
        </div>
    )
}

export default ToDo;