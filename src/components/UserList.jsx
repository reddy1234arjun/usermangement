import React, { useState } from 'react';
import '../styles/App.css'; 
import UserForm from './UserForm'; 

const UserList = ({ users, onEdit, onDelete, onAddUser, editingUser }) => {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddUser = () => {
    setShowForm(true); // Show the form when "Add User" button is clicked
    setIsEditing(false); // Reset the editing flag
    setErrorMessage(''); // Clear previous error message
  };

  const handleCancelForm = () => {
    setShowForm(false); // Close the form when cancel button is clicked
  };

  const handleSaveUser = (userData) => {
    // Check if the email already exists
    const emailExists = users.some(user => user.email === userData.email);

    if (emailExists) {
      setErrorMessage('This email is already exits. Please use a different email.');
      return; // Prevent saving if the email already exists
    }

    // If we're editing, call the edit user function, else add the new user
    if (isEditing) {
      onEdit(userData);
    } else {
      onAddUser(userData);
    }

    setShowForm(false); // Close the form after saving
  };

  return (
    <div className="user-card">
      <button className="add-user-button" onClick={handleAddUser}>+</button>
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td>
                <button className="edit-button" onClick={() => { setIsEditing(true); onEdit(user); setShowForm(true); }}>Edit</button>
                <button className="delete-button" onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="form-modal">
          <div className="form-modal-content">
            <UserForm user={isEditing ? editingUser : null} onSave={handleSaveUser} onCancel={handleCancelForm} />
            {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Show error message if email exists */}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
