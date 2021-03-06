import {HeaderComponent} from "./components/header.component"
import {NavigationComponent} from "./components/navigation.component"
import {CreateComponent} from "./components/create.component";
import {PostsComponent} from "./components/posts.component";
import {FavoriteComponent} from "./components/favorite.component";


new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')

const posts = new PostsComponent('posts')
const favorite = new FavoriteComponent('favorite')
const create = new CreateComponent('create')

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'favorite', component: favorite},
    {name: 'posts', component: posts},
])



