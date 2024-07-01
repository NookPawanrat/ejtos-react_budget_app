import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    return (
        <div>
            <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                <option defaultValue value="Add" name="Add">Add</option>
                <option value="Reduce" name="Reduce">Reduce</option>
            </select>
        </div>
    );
};
export default Currency;
