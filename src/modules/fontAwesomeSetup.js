import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faInstagram, faGithub, faAndroid, faApple } from "@fortawesome/free-brands-svg-icons"
import {
  fas,
  faStar,
  faRectangleAd,
  faListCheck,
  faArrowUpRightDots,
  faPenNib,
  faBell,
  faMagnifyingGlass,
  faThumbsUp,
  faWandMagicSparkles,
  faMicrophoneLines,
  faNewspaper,
  faCalendarDay,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const init = () =>
  library.add(
    fas,
    faStar,
    faRectangleAd,
    faListCheck,
    faArrowUpRightDots,
    faPenNib,
    faBell,
    faMagnifyingGlass,
    faThumbsUp,
    faWandMagicSparkles,
    faMicrophoneLines,
    faNewspaper,
    faCalendarDay,
    faMinus,
    faPlus,
    faLinkedin,
    faInstagram,
    faGithub,
    faAndroid,
    faApple
  );
export default init;