import Header from './components/Header'
import AddBtn from './components/AddBtn'
import Home from './views/Home'
import Login from './views/Login'
import Stories from './views/Stories'
import Dashboard from './views/Dashboard'

export const routes = [
  { path: '/', components: {
    default: Home,
    'header': Header
  }},
  { path: '/login', components: {
    default: Login,
    'header': Header
  }},
  { path: '/dashboard', components: {
    default: Dashboard,
    'header': Header,
    'add-btn': AddBtn
  }},
  { path: '/stories', components: {
    default: Stories,
    'header': Header,
    'add-btn': AddBtn
  }}
];