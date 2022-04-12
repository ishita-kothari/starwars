import Home from './components/Home/index.js';
import People from './components/People/index.js'
import PersonDetail from './components/People/details.js';
import Planets from './components/Planet/index.js';

const routes = [{
  path: '/',
  exact: true,
  component: Home
},{
  path: '/people',
  component: People
}, {
  path: '/planets',
  component: Planets
}]

export {
  routes
}
