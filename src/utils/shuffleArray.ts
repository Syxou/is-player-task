import shuffle from 'lodash.shuffle';

import { ISong } from '../features/player/PlayerSlice';
export default (arr: ISong[]) => shuffle(arr);
