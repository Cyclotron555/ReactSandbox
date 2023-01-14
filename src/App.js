import Employee from "./Employee";
import "./styles.css";
export default function App() {
  const employeeInfo = [
    {
      firstName: "Stephanie",
      lastName: "Butnaru",
      designation: "CEO, Co-Founder",
      tags: ["Finance", "San Francisco", "Mentor", "Top Management"],
      age: 45
    },

    {
      firstName: "Claude",
      lastName: "Butnaru",
      designation: "CTO, Co-Founder",
      tags: ["Engineering", "San Francisco", "Mentor", "Top Management"],
      age: 47
    },

    {
      firstName: "Anthony",
      lastName: "Butnaru",
      designation: "CFO",
      tags: ["Operations", "New York", "Mentor", "Top Management"],
      age: 10
    },

    {
      firstName: "Lisa",
      lastName: "Whitehouse",
      designation: "CMO",
      tags: ["People", "San Francisco", "Mentor", "Top Management"],
      age: 39
    },

    {
      firstName: "Buster",
      lastName: "Mackenzi",
      designation: "COO",
      tags: ["Product", "New York", "Mentor", "Top Management"],
      age: 43
    }
  ];
  return (
    <div className="App">
      {employeeInfo.map((employee) => {
        const { firstName, lastName, designation, tags, age } = employee;
        return (
          <Employee
            firstName={firstName}
            lastName={lastName}
            designation={designation}
            tags={tags}
            age={age}
          />
        );
      })}
    </div>
  );
}
