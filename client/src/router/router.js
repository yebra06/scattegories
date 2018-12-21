import { BrowserRouter, Route } from 'react-router-dom';

import App from '../App';

/**
 * This component handles our routing for our spa.
 */
const AppRouter = (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
    </div>
  </BrowserRouter>
);

export default AppRouter;
