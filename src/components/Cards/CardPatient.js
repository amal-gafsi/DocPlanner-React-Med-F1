import React from 'react'
import './Card.css'

const CardPatient = () => {
    return (
        <div className='card cardPatient'>
            <img src='https://www.docplanner.com/icons/icon-patients.svg' alt='logo-doctor' />
            <h3>For patients</h3>
            <p>Find a doctor, book a visit and solve any health-related doubt</p>
            <select>
                <option>choose country</option>
                <option>Brasile</option>
                <option>Tunis</option>
                <option>Italy</option>
            </select>
        </div>
    )
}

export default CardPatient
