import Employee from "./Employee";
import "./styles.css";
export default function App() {
  const employeeInfo = [
    {
      pic:
        "https://st.focusedcollection.com/3839757/i/650/focused_178411440-stock-photo-male-office-worker-working-laptop.jpg",
      firstName: "Stephanie",
      lastName: "Butnaru",
      designation: "CEO, Co-Founder",
      tags: ["Finance", "San Francisco", "Mentor", "Top Management"],
      age: 45
    },

    {
      pic:
        "https://assets.markallengroup.com/article-images/178520/office%20worker.jpg",
      firstName: "Claude",
      lastName: "Butnaru",
      designation: "CTO, Co-Founder",
      tags: ["Engineering", "San Francisco", "Mentor", "Top Management"],
      age: 47
    },

    {
      pic:
        "https://media.istockphoto.com/id/1294958620/photo/candid-close-up-of-hispanic-businesswoman-in-office-meeting.jpg?s=612x612&w=0&k=20&c=KuVpI7HS3IbtrsXtLiL5v3_v5ccQbHYp5IR2TOmLQWY=",
      firstName: "Anthony",
      lastName: "Butnaru",
      designation: "CFO",
      tags: ["Operations", "New York", "Mentor", "Top Management"],
      age: 10
    },

    {
      pic:
        "https://media.istockphoto.com/id/1205030242/photo/young-mixed-race-businesswoman-smiling-to-camera.jpg?s=612x612&w=is&k=20&c=9u2D1U85YUzs3QU3knBF05UMvSflwjQ4x5lu-tXfPQo=",
      firstName: "Lisa",
      lastName: "Whitehouse",
      designation: "CMO",
      tags: ["People", "San Francisco", "Mentor", "Top Management"],
      age: 39
    },

    {
      pic:
        "https://media.istockphoto.com/id/1354898581/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=dDDNcvIoG-4VdO01ZlENqODBoNocT434vIFp0duuTZM=",
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
        const { pic, firstName, lastName, designation, tags, age } = employee;
        return (
          <Employee
            pic={pic}
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
