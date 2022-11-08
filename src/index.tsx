/* @refresh reload */
import { render } from 'solid-js/web';

import App from './App';
import GlobalStyles from './styled/GlobalStyles';

render(
  () => (
    <>
      <GlobalStyles />
      <App />
    </>
  ),
  document.getElementById('root') as HTMLElement,
);
