import { v4 as uuidv4 } from 'uuid';
import Isomer from '../images/isomer.png';
import Pole from '../images/pole.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Isomer Search',
    desc:
      'Chemical isomer search with 3D representation of compounds and a description taken from PubChem sources. Made with R',
    img: Isomer,
  },
  {
    id: uuidv4(),
    name: 'Rise Up Ecommerce',
    desc:
      'Pole dance academy landing, with a complete ecommerce for elements to practice aerial disciplines. Made with Django, React and Redux',
    img: Pole,
  },
];

export default projects;
