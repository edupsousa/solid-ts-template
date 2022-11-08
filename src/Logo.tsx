import { JSX } from 'solid-js';
import { css, keyframes } from 'solid-styled-components';
import logo from './logo.svg';

const logoSpinKeyFrames = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const logoClass = css`
  height: 40vmin;
  pointer-events: none;

  &.rotate {
    animation: ${logoSpinKeyFrames} infinite 20s linear;
  }
`;

type Props = {
  rotate: boolean;
};

export default function Logo(props: Props): JSX.Element {
  return (
    <img
      classList={{
        [logoClass]: true,
        rotate: props.rotate,
      }}
      src={logo}
      alt='logo'
    />
  );
}
