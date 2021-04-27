/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
export default function shuffle(array) {
  let m = array.length;
  let temp;
  let index;

  while (m) {
    index = Math.floor(Math.random() * m--);

    temp = array[m];
    array[m] = array[index];
    array[index] = temp;
  }
}
