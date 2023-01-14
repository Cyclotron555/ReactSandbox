import React from "react";

const Employee = ({ pic, firstName, lastName, designation, tags, age }) => {
  return (
    <div className="employeeDiv">
      <p>
        Employee: <img src={pic} height="80" alt="employee" />, {firstName},{" "}
        {lastName}, Designation:{designation}, Tags: {tags}, Age: {age}
      </p>
    </div>
  );
};
export default Employee;
