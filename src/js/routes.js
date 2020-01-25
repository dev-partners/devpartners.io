import Home from './components/Home'
import About from './components/About'
import SuccessStories from './components/SuccessStories'
import Article from "./components/Article";

export default [
    { path: '/', component: Home, name: 'home' },
    { path: '/about', component: About, name: 'about' },
    { path: '/stories', component: SuccessStories, name: 'stories' },
    { path: '/blog/:slug', component: Article, name: 'article' },
];