import React from "react";

const CardClinic = () => {
  return (
    <div className="card cardClinic">
      <img
        src="https://www.docplanner.com/icons/icon-clinics.svg"
        alt="logo-clinic"
      />
      <h3>For clinics</h3>
      <p>Deliver an exceptional patient experience in your clinic</p>
      <select>
        <option>2 to 20 specialists</option>
        <option>Brasile</option>
        <option>Tunis</option>
        <option>Italy</option>
      </select>
      <br />
      <select style={{ marginTop: 20 }}>
        <option>choose country</option>
        <option>Brasile</option>
        <option>Tunis</option>
        <option>Italy</option>
      </select>
    </div>
  );
};

export default CardClinic;
