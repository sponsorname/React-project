import { useNavigate } from 'react-router-dom';
import Container from '#components/Container';

function UserDetails() {
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate('/add-user');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Container>
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-center mb-0">USER DETAILS</h2>
        
        {/* Add User Button */}
        <button className="btn btn-success" onClick={handleAddUser}>
          Add User
        </button>
      </div>

      {/* Table Header */}
      <div className="row bg-primary text-white py-2">
        <div className="col-1">ID</div>
        <div className="col-3">Name</div>
        <div className="col-3">Address</div>
        <div className="col-2">Mobile No</div>
        <div className="col-2">User Type</div>
        <div className="col-1">Action</div>
      </div>

      {/* Table Rows */}
      <div className="row py-2 align-items-center border-bottom">
        <div className="col-1">1</div>
        <div className="col-3">Ram</div>
        <div className="col-3">Dailekh</div>
        <div className="col-2">9824537556</div>
        <div className="col-2">Super User</div>
        <div className="col-1">
          <button className="btn btn-sm btn-primary me-2">EDIT</button>
          <button className="btn btn-sm btn-danger">DELETE</button>
        </div>
      </div>
      <div className="row py-2 align-items-center border-bottom">
        <div className="col-1">2</div>
        <div className="col-3">Shyam</div>
        <div className="col-3">Pokhara</div>
        <div className="col-2">9824537789</div>
        <div className="col-2">Super User</div>
        <div className="col-1">
          <button className="btn btn-sm btn-primary me-2">EDIT</button>
          <button className="btn btn-sm btn-danger">DELETE</button>
        </div>
      </div>
      <div className="row py-2 align-items-center border-bottom">
        <div className="col-1">3</div>
        <div className="col-3">Hari</div>
        <div className="col-3">Surkhet</div>
        <div className="col-2">9824537509</div>
        <div className="col-2">Super User</div>
        <div className="col-1">
          <button className="btn btn-sm btn-primary me-2">EDIT</button>
          <button className="btn btn-sm btn-danger">DELETE</button>
        </div>
      </div>
      <div className="row py-2 align-items-center border-bottom">
        <div className="col-1">4</div>
        <div className="col-3">Binod</div>
        <div className="col-3">Kathamandu</div>
        <div className="col-2">9824537456</div>
        <div className="col-2">Super User</div>
        <div className="col-1">
          <button className="btn btn-sm btn-primary me-2">EDIT</button>
          <button className="btn btn-sm btn-danger">DELETE</button>
        </div>
      </div>
      <div className="row py-2 align-items-center border-bottom">
        <div className="col-1">5</div>
        <div className="col-3">paras</div>
        <div className="col-3">Kalikot</div>
        <div className="col-2">9824537557</div>
        <div className="col-2">Super User</div>
        <div className="col-1">
          <button className="btn btn-sm btn-primary me-2">EDIT</button>
          <button className="btn btn-sm btn-danger">DELETE</button>
        </div>
      </div>
      <div className="row py-2 align-items-center border-bottom">
        <div className="col-1">6</div>
        <div className="col-3">Bimal</div>
        <div className="col-3">Kalikot</div>
        <div className="col-2">9824537550</div>
        <div className="col-2">Super User</div>
        <div className="col-1">
          <button className="btn btn-sm btn-primary me-2">EDIT</button>
          <button className="btn btn-sm btn-danger">DELETE</button>
        </div>
      </div>
      {/* Repeat for other rows */}

      {/* Back to Home Button */}
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-secondary" onClick={handleBackToHome}>
          Back to Home
        </button>
      </div>
    </div>
    </Container>
  );
}

export default UserDetails;
