import React from 'react';
import './EmployeeCard.css';

const EmployeeCard = ({ name, picture, PF_Number, Designation, email, phone, address }) => {
  return (
    <div className="employee-card">
      <div className="employee-card__avatar-container">
        <img src={picture} alt={`${name}'s picture`} className="employee-card__avatar" />
      </div>
      <div className="employee-card__info">
        <h2 className="employee-card__name">{name}</h2>
        <p className="employee-card__role"><i>{Designation}</i></p>
        <p className="employee-card__details"><strong>PF-Number:</strong> {PF_Number}</p>
        <p className="employee-card__details"><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
        <p className="employee-card__details"><strong>Phone:</strong> {phone}</p>
        <p className="employee-card__details"><strong>Address:</strong> {address}</p>
      </div>
      {/* <button className="employee-card__add-btn">Add to Team</button> */}
    </div>
  );
};

export default EmployeeCard;
