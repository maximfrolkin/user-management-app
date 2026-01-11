import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

type User = {
    id: string;
    name: string;
    surname: string;
    dateOfBirth: string;
    sport: string;
    tShirtSize?: string;
    tshirtSize?: string;
};

const UserView: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) return;
        (async () => {
            try {
                const res = await fetch(`/api/users/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setUser(data);
                }
            } catch (err) {
                console.error(err);
            }
        })();
    }, [id]);

    const handleDelete = async () => {
        if (!id || !confirm('Delete this user?')) return;
        try {
            const res = await fetch(`/api/users/${id}`, { method: 'DELETE' });
            if (res.ok) navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h2>User Details</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Surname:</strong> {user.surname}</p>
            <p><strong>Date of Birth:</strong> {user.dateOfBirth}</p>
            <p><strong>Sport:</strong> {user.sport}</p>
            <p><strong>T-shirt Size:</strong> {user.tShirtSize || user.tshirtSize}</p>
            <div>
                <button onClick={() => navigate(`/edit/${user.id}`)}>Edit</button>
                {' '}
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default UserView;