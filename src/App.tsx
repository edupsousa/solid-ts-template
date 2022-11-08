import { Component, createSignal } from 'solid-js';

import { css } from 'solid-styled-components';
import Logo from './Logo';

const appClass = css`
  text-align: center;

  & .header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  & .link {
    color: #b318f0;
  }

  & .rotate {
    display: flex;
    column-gap: 0.5rem;
    margin-top: 1rem;
  }
`;

const App: Component = () => {
  const [rotate, setRotate] = createSignal(true);

  return (
    <div class={appClass}>
      <header class='header'>
        <Logo rotate={rotate()} />
        <label class='rotate'>
          <input
            type='checkbox'
            checked={rotate()}
            onClick={() => setRotate((v) => !v)}
          />
          Rotate
        </label>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class='link'
          href='https://github.com/solidjs/solid'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
