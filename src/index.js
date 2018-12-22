/*!
* Pidie
* (c) 2018-2019 Tedir Ghazali
* Released under the Apache License 2.0
*/

import './basic/normalize.css';
import './basic/icon.css';
import './basic/layout.css';
import './navbar/navbar.css';

import * as navbar from './navbar/navbar';

class Pidie {

  constructor() {
    this.init();
  }

  init() {
    navbar.navbar();
  }

}

export default function pidie() {
  return new Pidie();
}

pidie();