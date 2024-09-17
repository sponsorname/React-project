import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '#data/Students'; 
import Container from '#components/Container';

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const student = data.find((item) => item.ID.toString() === id);

  if (!student) {
    return (
      <Container>
        <div className="text-center my-5">
          <h2 className="display-4">No details found for ID: {id}</h2>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="my-5">
        <div className="row align-items-stretch">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src={student.photo}
              alt={student.Name}
              className="img-fluid rounded-circle border border-3 border-primary"
              style={{ 
                maxWidth: '250px', 
                height: 'auto', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
              }}
            />
          </div>
          <div className="col-md-8">
            <div className="bg-light p-4 rounded shadow-sm d-flex flex-column h-100">
              <h1 className="mb-4 text-primary">Details for {student.Name}</h1>
              <p className="mb-2">
                <strong className="text-secondary">Address:</strong> {student.Address}
              </p>
              <p className="mb-2">
                <strong className="text-secondary">Faculty:</strong> {student.Faculty}
              </p>
              <p className="mb-2">
                <strong className="text-secondary">Gender:</strong> {student.Gender}
              </p>
              <p className="mb-4">
                <strong className="text-secondary">Mobile:</strong> {student.Mobile_no}
              </p>
              <div className="mt-auto">
                <button
                  className="btn btn-primary w-100 mt-3"
                  onClick={() => navigate('/home')}
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Detail;
