import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import UserView from './components/UserView';
import './styles/app.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>User Management Application</h1>
        </header>
        <div style={{ marginTop: 8 }}>
          <AddButton />
        </div>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<UserForm />} />
          <Route path="/edit/:id" element={<UserForm />} />
          <Route path="/user/:id" element={<UserView />} />
        </Routes>
      </div>
    </Router>
  );
};

const AddButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/add')}>Add User</button>
  );
};

export default App;