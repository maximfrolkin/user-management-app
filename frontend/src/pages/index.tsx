import React from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>User Management</h1>
            <UserForm />
            <UserList />
        </div>
    );
};

export default HomePage;