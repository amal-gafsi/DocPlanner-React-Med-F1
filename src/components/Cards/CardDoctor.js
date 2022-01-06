import React from 'react'

const CardDoctor = () => {
    return (
        <div className='card cardDoctor'>
            <img src='https://www.docplanner.com/icons/icon-doctors.svg' alt='logo-doctor' />
            <h3>For doctors</h3>
            <p>Save time managing visits and cut no-shows by half</p>
            <select>
                <option>choose country</option>
                <option>Brasile</option>
                <option>Tunis</option>
                <option>Italy</option>
            </select>
        </div>
    )
}

export default CardDoctor
