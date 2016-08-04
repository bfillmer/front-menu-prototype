
import { Home } from 'screens/Home';

// Map routes to the correct higher order components.
// @NOTE: '*' must be last. Route matches against first match found.
export const routeMap = {
  '*': () => Home,
};
