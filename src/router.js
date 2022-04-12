import Home from './components/Home/index.js';
import People from './components/People/index.js'
import PersonDetail from './components/People/details.js';

const routes = [{
  path: '/',
  exact: true,
  component: Home
},{
  path: '/people',
  component: People
}]

export {
  routes
}
