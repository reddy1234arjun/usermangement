import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getUsers, addUser, deleteUser } from './api/userApi'; 
import UserList from './components/UserList'; 
import ErrorMessage from './components/ErrorMessage';
import Sidebar from './components/Sidebar'; 
import Dashboard from './components/Dashboard'; 

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (err) {
        setError('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  // Handle adding a new user
  const handleAddUser = async (user) => {
    try {
      const response = await addUser(user);
      setUsers((prevUsers) => [...prevUsers, response.data]);
      setError(null);
    } catch {
      setError('Failed to add user');
    }
  };

  // Handle deleting a user
  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      setError(null);
    } catch {
      setError('Failed to delete user');
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/users"
              element={
                <div className="user-management">
                  <ErrorMessage message={error} />
                  <UserList
                    users={users}
                    onEdit={setEditingUser}
                    onDelete={handleDeleteUser}
                    onAddUser={handleAddUser}
                    editingUser={editingUser}
                  />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
