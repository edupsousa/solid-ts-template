import type { Component } from 'solid-js';

import logo from './logo.svg';
import { css, keyframes } from 'solid-styled-components';

const logoSpinKeyFrames = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

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

  & .logo {
    animation: ${logoSpinKeyFrames} infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
  }

  & .link {
    color: #b318f0;
  }
`;

const App: Component = () => {
  return (
    <div class={appClass}>
      <header class='header'>
        <img src={logo} class='logo' alt='logo' />
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
