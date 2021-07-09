import { v4 as uuidv4 } from 'uuid';
import Isomer from '../images/isomer.png';
import Pole from '../images/pole-small.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Isomer Search',
    desc:
      'Chemical isomer search with 3D representation of compounds and a description taken from PubChem sources. Made with React.',
    img: Isomer,
  },
  {
    id: uuidv4(),
    name: 'Rise Up Ecommerce',
    desc:
      'Pole dance academy website, with a complete ecommerce of aerial acrobatics equipment. Made with Django, React and Redux.',
    img: Pole,
  },
];

export default projects;
