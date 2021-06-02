import {HOME,AVATAR,ALERT,BADGE,BUTTON} from "./paths";
import {Home,AvatarPage,AlertPage,BadgePage,ButtonPage} from '../Pages/index'

const HOME_ONE = {
  component: Home,
  path: HOME,
};

const AVATAR_TWO= {
  component: AvatarPage,
  path: AVATAR,
};

const ALERT_THREE= {
  component: AlertPage,
  path: ALERT,
};

const BADGE_FOUR= {
  component: BadgePage,
  path: BADGE,
};

const BUTTON_FIVE= {
  component: ButtonPage,
  path: BUTTON,
};

const routes = [HOME_ONE,AVATAR_TWO,ALERT_THREE,BADGE_FOUR,BUTTON_FIVE];

export default routes;
