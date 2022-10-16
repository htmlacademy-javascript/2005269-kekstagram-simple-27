import {CheckLengthString} from './check-length-string';
import {createPicture} from './create-picture';

const MAX_COMMENT_LENGTH = 140;
const VERIFIED_STRING = 'message';
const PICTURE_COUNT = 25;
const similarPicture = Array.from({length: PICTURE_COUNT}, createPicture);

// Вызовы функций, чтобы ESLint не ругался
similarPicture();
CheckLengthString(VERIFIED_STRING, MAX_COMMENT_LENGTH);


