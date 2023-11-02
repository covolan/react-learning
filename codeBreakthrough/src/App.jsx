import React, { useState } from "react";
import Employee from "./components/Employee";
import AddEmployee from "./components/AddEmployee";

const App = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Sadie Burton",
      img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg",
      role: "start",
    },
    {
      id: 2,
      name: "Michael Welch",
      img: "https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg",
      role: "birds",
    },
    {
      id: 3,
      name: "Randy Delgado",
      img: "https://images.pexels.com/photos/2110858/pexels-photo-2110858.jpeg",
      role: "energy",
    },
    {
      id: 4,
      name: "Henrietta Ingram",
      img: "https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg",
      role: "bring",
    },
    {
      id: 5,
      name: "Edna Montgomery",
      img: "https://images.pexels.com/photos/3460478/pexels-photo-3460478.jpeg",
      role: "fewer",
    },
    {
      id: 6,
      name: "Eva Montgomery",
      img: "https://images.pexels.com/photos/3252762/pexels-photo-3252762.jpeg",
      role: "scared",
    },
    {
      id: 7,
      name: "Rachel Green",
      img: "https://images.pexels.com/photos/1804514/pexels-photo-1804514.jpeg",
      role: "shown",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((emp) => {
      if (id == emp.id) {
        return { ...emp, name: newName, role: newRole };
      } else {
        return emp;
      }
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    let newEmp = {
      id: crypto.randomUUID(),
      name: name,
      img: img,
      role: role
    }
    setEmployees([...employees, newEmp])
  }

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {employees.map((emp) => {
          return (
            <Employee
              key={emp.id}
              id={emp.id}
              name={emp.name}
              role={emp.role}
              img={emp.img}
              updateEmployee={updateEmployee}
            />
          );
        })}
      </div>
      <AddEmployee newEmployee={newEmployee} />
    </>
  );
};

export default App;
