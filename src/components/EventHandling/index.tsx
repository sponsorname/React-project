let eventhandling = () => {
  alert("My Name Is Birendra Thapa");
}

import Container from "#components/Container";

function EventHandling() {
  return (
    <Container>
      <div className="container">
        <h1>Event Handling</h1>
        <button onClick={()=>eventhandling()}>Click Me</button>
      </div>
    </Container>
  );
}

export default EventHandling;
