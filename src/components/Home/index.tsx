import { Link } from "react-router-dom"

import Container from "#components/Container";
import data from "#data/Students";

const Body: React.FC = () => {
  return (
    <Container>
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {data.map((student) => (
          <div className="col" key={student.ID}>
            <div className="card h-100">
              <img src={student.photo} className="card-img-top" alt={student.Name} style={{ height: '150px', objectFit: 'cover' }} />
              <div className="card-body">
                <h6 className="card-title">{student.Name}</h6>
                <p className="card-text">{student.Faculty}</p>
                <Link
                  to={`/home/${student.ID}`}
                  className="btn btn-primary mt-auto w-100"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Container>
  );
};

export default Body;