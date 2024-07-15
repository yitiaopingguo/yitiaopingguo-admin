import Loadable from 'react-loadable';

const Loading = () => null;

const Home = Loadable ({
    loader: () => import('./Home'),
    loading: Loading
});

const Entry = Loadable ({
    loader: () => import('./entry'),
    loading: Loading
});

const Article = Loadable ({
    loader: () => import('./Article'),
    loading: Loading
});

const ArticleDetail = Loadable ({
    loader: () => import('./Article/detail'),
    loading: Loading
});

const Tags = Loadable ({
    loader: () => import('./Tags'),
    loading: Loading
});

const Project = Loadable ({
    loader: () => import('./Project'),
    loading: Loading
});

const Message = Loadable ({
    loader: () => import('./Message-1'),
    loading: Loading
});

const User = Loadable ({
    loader: () => import('./User'),
    loading: Loading
});

const Menu = Loadable ({
    loader: () => import('./Menu'),
    loading: Loading
});

const Login = Loadable ({
    loader: () => import('./Login'),
    loading: Loading
});

const NotFound = Loadable ({
    loader: () => import('./404'),
    loading: Loading
});

export { Home, Entry, Project, NotFound, Login, Article , ArticleDetail, Message, Menu, User,Tags}
