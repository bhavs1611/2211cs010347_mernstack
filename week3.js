import React from "react";
import Table from "react-bootstrap/Table";
import "./week3.css";
import "bootstrap/dist/css/bootstrap.min.css";
function PropsComponentWithOneAttribute(props) {
  return (
    <div>
      
      <h2 style={{ color: "magenta" }}>
        Hello{" "}
        <span style={{ color: "drak blue" }}>{props.name}</span>
      </h2>
    </div>
  );
}
function PropsComponentWithMultiAttribute(props) {
  return (
    <div>
            <h2 style={{ color: "darkpink" }}>
        I am <span style={{ color: "green" }}>{props.name}</span>
      </h2>
      <h2 style={{ color: "black" }}>
        My Roll Number is{" "}
        <span style={{ color: "orangered" }}>{props.rno}</span>
      </h2>
    </div>
  );
}
function StudentDetails(props) {
  const student = props.student;
  return (
    <div className="center">
      <h2 style={{ textDecorationLine: "underline" }}>
        Student Details using Props{" "}
      </h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name of the Student</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student) => (
            <tr>
              <td>{student.sid}</td>
              <td>{student.sname}</td>
              <td>{student.semail}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
function EmpDetails(props) {
  const employee = props.employee;
  return (
    <div className="center">
      <h2 style={{ textDecorationLine: "underline" }}>
        Employee Details using Props{" "}
      </h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name of the Employee</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp) => (
            <tr>
                
              <td>{emp.eid}</td>
              <td>{emp.ename}</td>
              <td>{emp.designation}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
function StudentDetailsObjectDestruction(props) {
  const student = props.student;
  return (
    <div className="center">
      <h2 style={{ textDecorationLine: "underline" }}>
        Student details using Object Destruction{" "}
      </h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Hall Ticket No</th>
            <th>Name of the Student</th>
            <th>Email</th>
            <th>Mobile No</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student) => (
            <tr>
              <td>{student.htno}</td>
              <td>{student.name}</td>
              <td>{student.mailid}</td>
              <td>{student.mobileno}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
function week3() {
  const studentObj = [
    {
      htno: "1122",
      name: "Ram",
      mailid: "ramk@gmail.com",
      mobileno: "1248963315",
    },
    {
      htno: "1123",
      name: "Vikram",
      mailid: "vikram@gmail.com",
      mobileno: "1525693439",
    },
    {
      htno: "1124",
      name: "Sam",
      mailid: "sam@gmail.com",
      mobileno: "58965623441",
    },
  ];
  const student = [
    { sid: "cs111", sname: "Bhavana Reddy", semail: "bhavanareddy@gmail.com" },
    { sid: "cs112", sname: "Arshitha", semail: "arshitha@gmail.com" },
    { sid: "cs113", sname: "Jaya", semail: "jaya@gmail.com" },
    {
      sid: "cs114",
      sname: "Kavya",
      semail: "kavya@gmail.com",
    },
  ];
  const emp = [
    { eid: "e101", ename: "Sita", designation: "HOD" },
    {
      eid: "e102",
      ename: "Vikram",
      designation: "Dean",
    },
    { eid: "e130", ename: "Gita", designation: "CEO" },
    {
      eid: "e104",
      ename: "Varsha",
      designation: "HOD",
    },
  ];
  return (
    <div>
      <h1>Week 3 - Create React App and Demonstrate Props</h1>
      <hr />
      <h3>
        QNO.1. Create a React Component, using props render one & multiple
        attribute values and display it on the webpage.
      </h3>
      <PropsComponentWithOneAttribute color="Black" />
      <PropsComponentWithMultiAttribute
        name="Bhavana Reddy"
        rno="2211cs010347"
      />
      <hr />
      <h3>
        QNo.2. Create a React Component, using props through functions display
        student details (Std-id, Std-Name, Std-Email) on the webpage.
      </h3>
      <StudentDetails student={student} />
      <hr />
      <h3>
        QNO.3. Create a React Component, using props through classes display
        employee details (Emp-id, Emp-Name, Emp-Designation) on the webpage.
      </h3>
      <EmpDetails employee={emp} />
      <hr />
      <h3>
        QNO.4. Create a Student component and able to display Student details
        which vary in htno, name, mailid, and mobileno to users.
      </h3>
      <StudentDetailsObjectDestruction student={studentObj} />
    </div>
  );
}
export default week3;