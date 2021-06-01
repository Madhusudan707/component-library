import {HOME,AVATAR,ALERT} from "./paths";
import {Home,AvatarPage} from '../Pages/index'
import {Alert} from '../Components/Library'

const HOME_ONE = {
  component: Home,
  path: HOME,
};

const AVATAR_TWO= {
  component: AvatarPage,
  path: AVATAR,
};

const ALERT_THREE= {
  component: Alert,
  path: ALERT,
};

const routes = [HOME_ONE,AVATAR_TWO,ALERT_THREE];

export default routes;
