import Home from './components/Home/index.js';
import People from './components/People/index.js'
import Planets from './components/Planet/index.js';
import Movies from './components/Movies/index.js';

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
},{
  path: '/movies',
  component: Movies
}]

export {
  routes
}
