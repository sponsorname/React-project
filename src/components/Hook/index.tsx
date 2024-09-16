import { useState } from 'react';
import Container from "#components/Container";

function Hook() {
  // Declare a state variable 'count' with an initial value of 19
  const [count, setCount] = useState(19);

  // Decrement function to decrease the count value
  const decrement = () => {
    setCount(count - 1);
  };

  
  return (
    <Container>
      <div className="container">
        <h2>Example of useState</h2>
        <br />
        {/* Button to increase the value */}
        <button className='btn-primary' onClick={() => setCount(count + 1)}>+</button>
        <h4>{count}</h4>
        {/* Button to decrease the value */}
        <button className='btn-primary' onClick={decrement}>-</button>
      </div>
    </Container>
  );
}

export default Hook;
