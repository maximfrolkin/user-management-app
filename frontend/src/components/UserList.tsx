import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserList: React.FC = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const navigate = useNavigate();

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Delete this user?')) return;
        try {
            const res = await fetch(`/api/users/${id}`, { method: 'DELETE' });
            if (res.ok) {
                setUsers(prev => prev.filter(u => u.id !== id));
            } else {
                console.error('Failed to delete');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>User List</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '8px' }}>Name</th>
                        <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '8px' }}>Surname</th>
                        <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '8px' }}>Date of Birth</th>
                        <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '8px' }}>Sport</th>
                        <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '8px' }}>T-shirt Size</th>
                        <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '8px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td style={{ padding: '8px', borderBottom: '1px solid #f0f0f0' }}>
                                <Link to={`/user/${user.id}`}>{user.name}</Link>
                            </td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #f0f0f0' }}>{user.surname}</td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #f0f0f0' }}>{user.dateOfBirth}</td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #f0f0f0' }}>{user.sport}</td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #f0f0f0' }}>{user.tshirtSize || user.tShirtSize}</td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #f0f0f0' }}>
                                <button onClick={() => navigate(`/edit/${user.id}`)} style={{ marginRight: 8 }}>Edit</button>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;