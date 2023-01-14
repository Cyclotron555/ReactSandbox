import Employee from "./Employee";
import "./styles.css";
export default function App() {
  const employeeInfo = [
    {
      pic:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffocusedcollection.com%2F178411440%2Fstock-photo-male-office-worker-working-laptop.html&psig=AOvVaw0ikfT5jViAIf4-LDPI_T8Z&ust=1673769391049000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDjjoPLxvwCFQAAAAAdAAAAABAE",
      firstName: "Stephanie",
      lastName: "Butnaru",
      designation: "CEO, Co-Founder",
      tags: ["Finance", "San Francisco", "Mentor", "Top Management"],
      age: 45
    },

    {
      pic:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.opticianonline.net%2Fnews%2Foffice-workers-spend-1-700-hours-a-year-using-a-computer-screen&psig=AOvVaw0ikfT5jViAIf4-LDPI_T8Z&ust=1673769391049000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDjjoPLxvwCFQAAAAAdAAAAABAJ",
      firstName: "Claude",
      lastName: "Butnaru",
      designation: "CTO, Co-Founder",
      tags: ["Engineering", "San Francisco", "Mentor", "Top Management"],
      age: 47
    },

    {
      pic:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Foffice-worker&psig=AOvVaw0ikfT5jViAIf4-LDPI_T8Z&ust=1673769391049000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDjjoPLxvwCFQAAAAAdAAAAABAU",
      firstName: "Anthony",
      lastName: "Butnaru",
      designation: "CFO",
      tags: ["Operations", "New York", "Mentor", "Top Management"],
      age: 10
    },

    {
      pic:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.news.com.au%2Ffinance%2Fwork%2Ffive-technology-skills-every-office-worker-needs%2Fnews-story%2F42f9a116145722a125da5f095a7eaea0&psig=AOvVaw0ikfT5jViAIf4-LDPI_T8Z&ust=1673769391049000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDjjoPLxvwCFQAAAAAdAAAAABAd",
      firstName: "Lisa",
      lastName: "Whitehouse",
      designation: "CMO",
      tags: ["People", "San Francisco", "Mentor", "Top Management"],
      age: 39
    },

    {
      pic:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.samhealth.org%2Fcareers-education%2Ffind-a-job&psig=AOvVaw0ikfT5jViAIf4-LDPI_T8Z&ust=1673769391049000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDjjoPLxvwCFQAAAAAdAAAAABAn",
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
