import Home from './components/Home/index.js';
import MovieDetails from './components/Movies/details.js';
import MoviesLayout from './components/Movies/layout.js';

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/movieDetails',
  component: MovieDetails,
},
{
  path: '/movieBy',
  component: MoviesLayout
}
// when home is the exact path:

// {
//   path: '/people',
//   component: People
// }, {
//   path: '/planets',
//   component: Planets
// },{
//   path: '/movies',
//   component: Movies
// }
]

export {
  routes
}
