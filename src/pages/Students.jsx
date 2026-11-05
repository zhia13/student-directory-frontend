import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const { token, logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3000/students', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to load students');
        }

        setStudents(Array.isArray(data) ? data : data.students || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [token]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="students-container">
      <header className="students-header">
        <div>
          <h1>Student Directory</h1>
          <p>Welcome, {user?.email || 'User'}!</p>
        </div>

        <button onClick={handleLogout}>Logout</button>
      </header>

      <main className="students-content">
        <h2>Student Records</h2>

        {loading && <p>Loading students...</p>}
        {error && <p className="error-message">{error}</p>}

        {!loading && !error && students.length === 0 && (
          <p>No student records found.</p>
        )}

        {!loading && !error && students.length > 0 && (
          <div className="students-list">
            {students.map((student) => (
              <div className="student-card" key={student._id}>
                <h3>{student.name}</h3>
                <p>Age: {student.age}</p>
                <p>Status: {student.isActive ? 'Active' : 'Inactive'}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}