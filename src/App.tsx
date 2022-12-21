import Button from '@suid/material/Button';
import Container from '@suid/material/Container';
import { Component, createSignal } from 'solid-js';

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <Container maxWidth='xs' sx={{ textAlign: 'center', marginTop: '2rem' }}>
      <Button
        id='counter'
        variant='contained'
        onClick={() => setCount((v) => v + 1)}
      >
        Counter is {count()}
      </Button>
    </Container>
  );
};

export default App;
