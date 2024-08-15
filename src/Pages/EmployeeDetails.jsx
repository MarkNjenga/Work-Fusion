import EmployeeCard from './EmployeeCard';

const EmployeeDetails = ({ users }) => {
  return (
    <div className="employee-details">
      <h2>Employee Information</h2>
      <div className="card-container">
        {users.map(user => (
          <EmployeeCard
            key={user.id}
            name={user.name}
            PF_Number={user.PF_Number}
            Designation={user.Designation}
            picture={user.picture}
            email={user.email}
            phone={user.phone}
            address={user.address}
          />
        ))}
      </div>
    </div>
  );
};

export default EmployeeDetails;
