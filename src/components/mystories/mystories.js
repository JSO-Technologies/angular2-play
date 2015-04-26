import {Component, View, bootstrap} from 'angular2/angular2';
import {bind} from 'angular2/di';

import {Home} from 'components/home/home'

@Component({
  selector: 'mystories'
})

@View({
  templateUrl: 'components/mystories/mystories.html',
  directives: [Home]
})

class Mystories {

  constructor() {
    console.log('component mounted');
  }

}

export function main() {
  bootstrap(Mystories);
}
