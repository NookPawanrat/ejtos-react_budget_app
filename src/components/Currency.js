import React, { useContext , useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch } = useContext(AppContext)
    const handleCurrencyChange = (event) => {
        const newC = event.target.value 
        if (newC === 'Dollar') {
            dispatch({
                type: 'CHG_CURRENCY',
                payload: "$",
            });
        } else if (newC === 'Pound') { 
            dispatch({
                type: 'CHG_CURRENCY',
                payload: "£",
            });
        } else if (newC === 'Euro') { 
            dispatch({
                type: 'CHG_CURRENCY',
                payload: "€",
            });
        } else if (newC === 'Ruppee') { 
            dispatch({
                type: 'CHG_CURRENCY',
                payload: "₹",
            });
        }
    }

    return (
        <div>
            <select className="alert alert-primary" id="inputGroupSelect02" style={{ background: `#98DF8C`, color: 'white', border: 'none' }}  onChange={handleCurrencyChange}>
                <option defaultValue style={{ color: 'black' }} >Currency (£ Pound) </option>
                <option value="Dollar" style={{ color: 'black' }}>$ Dollar</option>
                <option value="Pound" style={{ color: 'black' }}>£ Pound</option>
                <option value="Euro" style={{ color: 'black' }}>€ Euro</option>
                <option value="Ruppee" style={{ color: 'black' }}>₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;
