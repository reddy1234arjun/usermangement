import React, { useState, useEffect } from 'react';
import '../styles/App.css'; 

const UserForm = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  });

  useEffect(() => {
    if (user) setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error when user starts typing again
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    // Validate first name (only alphabet and spaces allowed)
    if (!/^[A-Za-z\s]+$/.test(formData.firstName)) {
      valid = false;
      newErrors.firstName = 'First name must contain only letters and spaces.';
    }

    // Validate last name (only alphabet and spaces allowed)
    if (!/^[A-Za-z\s]+$/.test(formData.lastName)) {
      valid = false;
      newErrors.lastName = 'Last name must contain only letters and spaces.';
    }

    // Validate email (doesn't allow special characters)
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
      valid = false;
      newErrors.email = 'Email must be valid and can\'t contain special characters except "@" and "."';
    }

    // Validate department (only alphabet and spaces allowed)
    if (!/^[A-Za-z\s]+$/.test(formData.department)) {
      valid = false;
      newErrors.department = 'Department must contain only letters and spaces.';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSave(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="form-input"
          required
        />
        {errors.firstName && <p className="error-text">{errors.firstName}</p>}
      </div>
      <div>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="form-input"
          required
        />
        {errors.lastName && <p className="error-text">{errors.lastName}</p>}
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>
      <div>
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          className="form-input"
          required
        />
        {errors.department && <p className="error-text">{errors.department}</p>}
      </div>
      <div className="form-buttons">
        <button type="submit" className="save-button">Save</button>
        <button type="button" onClick={onCancel} className="cancel-button">Cancel</button>
      </div>
    </form>
  );
};

export default UserForm;
