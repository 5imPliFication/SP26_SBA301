import React from "react";
import { Table } from "react-bootstrap";
class InstructorListPage extends React.Component {
  //init constructor
  constructor(props) {
    super(props);
    this.state = {
      //List of instructors
      instructors: [
        { id: 1, name: "Quyet", department: "SE", status: "Teaching" },
        { id: 2, name: "Toan", department: "Math", status: "On Leave" },
        { id: 3, name: "Minh", department: "IS", status: "Teaching" },
        { id: 4, name: "Tran Minh Hieu", department: "AI", status: "Suspended"},
        { id: 5, name: "Vi Van Du", department: "SE", status: "Teaching" },
      ],
    };
  }

  //mount
  componentDidCatch() {
    console.log("Component did mount - InstructorListPage");
  }

  //change status
  changeStatus = (id) => {
    const updatedInstructors = this.state.instructors.map((instructor) => {
      if (instructor.id === id) {
        let newStatus = "";
        if (instructor.status === "Teaching") {
          newStatus = "On Leave";
        } else if (instructor.status === "On Leave") {
          newStatus = "Suspended";
        } else {
          newStatus = "Teaching";
        }
        return { ...instructor, status: newStatus };
      }
      return instructor;
    });
    this.setState({ instructors: updatedInstructors });
  };

  //render
  render() {
    return (
      <div className="container">
        <h2>Instructor List Page</h2>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Department</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {!this.state.instructors
              ? "No record!"
              : this.state.instructors.map((instructor) => (
                  <tr scope="row" key={instructor.id}>
                    <td>{instructor.id}</td>
                    <td>{instructor.name}</td>
                    <td>{instructor.department}</td>
                    <td>{instructor.status}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => {
                          this.changeStatus(instructor.id);
                        }}
                      >
                        Change Status
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default InstructorListPage;
