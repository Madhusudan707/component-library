import {HOME,AVATAR} from "./paths";
import {Home,AvatarPage} from '../Pages/index'

const HOME_ONE = {
  component: Home,
  path: HOME,
};

const AVATAR_TWO= {
  component: AvatarPage,
  path: AVATAR,
};

const routes = [HOME_ONE,AVATAR_TWO];

export default routes;
