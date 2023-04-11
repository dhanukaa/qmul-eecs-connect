import React, { useState, useEffect } from "react";
import axios from "axios"; // For making HTTP requests to your backend MongoDB server

const Services = () => {
  const [services, setServices] = useState([]); // State to store table data

  // Function to fetch data from backend MongoDB server (example)
  const fetchData = async () => {
    console.log("trying to fetch data");
    try {
      const response = await axios.get("http://localhost:5000/services"); // Updated URL to match backend endpoint
      setServices(response.data);
      console.log(response);
    } catch (error) {   
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle status change for a service
  const handleStatusChange = async (serviceId) => {
    try {
      await axios.put(`http://localhost:5000/services/${serviceId}/toggle`); // Replace with your backend URL and data format
      
      // Fetch updated services data from backend
      const response = await axios.get('http://localhost:5000/services');
      const updatedServices = response.data;
      console.log("Services Updated", updatedServices);

      // Update state with new status
      setServices(
        // services.map((item) => (item._id === serviceId ? { ...item, status: updatedServices } : item))
        services.map((item) => {
            if (item._id === serviceId) {
              return { ...item, status: !item.status }; // Toggle the status
            } else {
              return item;
            }
          })
        );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item) => (
            <tr key={item._id}>
              <td>{item.service}</td>
              <td>{item.status ? 'Active' : 'Inactive'}</td>
              <td>
                <button
                  onClick={() => handleStatusChange(item._id)}
                >
                  Change Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Services;