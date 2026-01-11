import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserForm: React.FC = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [sport, setSport] = useState('');
    const [tshirtSize, setTshirtSize] = useState('');

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const id = params.id as string | undefined;
        if (!id) return;
        (async () => {
            try {
                const res = await fetch(`/api/users/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setName(data.name || '');
                    setSurname(data.surname || '');
                    setDateOfBirth(data.dateOfBirth || '');
                    setSport(data.sport || '');
                    setTshirtSize(data.tshirtSize || data.tShirtSize || '');
                }
            } catch (err) {
                console.error(err);
            }
        })();
    }, [params.id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const userData = { name, surname, dateOfBirth, sport, tshirtSize, tShirtSize: tshirtSize };

        try {
            const id = params.id as string | undefined;
            const response = await fetch(id ? `/api/users/${id}` : '/api/users', {
                method: id ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                // On success navigate back to list
                navigate('/');
            } else {
                // Handle error response
                console.error('Failed to submit user data');
            }
        } catch (error) {
            console.error('Error submitting user data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Surname:</label>
                <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required />
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
            </div>
            <div>
                <label>Sport:</label>
                <input type="text" value={sport} onChange={(e) => setSport(e.target.value)} required />
            </div>
            <div>
                <label>T-shirt Size:</label>
                <select value={tshirtSize} onChange={(e) => setTshirtSize(e.target.value)} required>
                    <option value="">Select size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>
            <div style={{ marginTop: 8 }}>
                <button type="submit" style={{ marginRight: 8 }}>Submit</button>
                {params.id && (
                    <button type="button" onClick={() => navigate('/')}>
                        Close
                    </button>
                )}
            </div>
        </form>
    );
};

export default UserForm;