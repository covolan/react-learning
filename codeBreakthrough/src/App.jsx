import React, { useState } from "react";
import Employee from "./components/Employee";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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

  return (
    <div className="flex flex-wrap justify-center">
      {employees.map((emp) => {
        return (
          <Employee
            key={emp.id}
            name={emp.name}
            role={emp.role}
            img={emp.img}
          />
        );
      })}
    </div>
  );
};

export default App;
