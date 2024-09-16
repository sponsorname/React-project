import Container from "#components/Container";
import data from "#data/Students"

function Home() {
  return (
    <Container>
      <div className="container">
        <h1>HOME PAGE</h1>
        <hr />
        {data.map((d) =>
        <div className="card">
          <img src={d.photo} alt="Avatar" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <b>{d.Name}</b>
            </h4>
            <p>{d.Faculty}</p>
          </div>
        </div>
    )}
    </div>
     {/*  (
        <p>
          {d.Name} | {d.Address}
        </p>
      ))}*/}
    </Container>
  );
}

export default Home;
