import {createPicture} from './util.js';
import {PICTURE_COUNT} from './data.js';

const similarPicture = Array.from({length: PICTURE_COUNT}, createPicture);

// Вызовы функций, чтобы ESLint не ругался
similarPicture();


