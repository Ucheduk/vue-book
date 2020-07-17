import Header from './components/Header'
import AddBtn from './components/AddBtn'
// import Home from './views/Home'
import Login from './views/Login'
import Stories from './views/Stories'
import StoryEdit from './views/StoryEdit'
import Story from './views/Story'
import Dashboard from './views/Dashboard'

export const routes = [
  { 
    path: '/',
    redirect: '/login'
  },
  { 
    path: '/Login', 
    components: {
    default: Login,
    'header': Header
    }
  },
  { 
    path: '/Dashboard', 
    components: {
    default: Dashboard,
    'header': Header,
    'add-btn': AddBtn
    },
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/stories', 
    components: {
    default: Stories,
    'header': Header,
    'add-btn': AddBtn
    },
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/story/edit/:id', 
    components: {
    default: StoryEdit,
    'header': Header
    },
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/story/:id', 
    components: {
    default: Story,
    'header': Header
    },
    meta: {
      requiresAuth: true
    }
  }
];