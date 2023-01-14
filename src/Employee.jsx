import React from "react";

const Employee = ({ firstName, lastName, designation, tags, age }) => {
  return (
    <div className="employeeDiv">
      <p>
        Employee name: {firstName}, {lastName}, Designation:{designation}, Tags:{" "}
        {tags}, Age: {age}
      </p>
    </div>
  );
};
export default Employee;
