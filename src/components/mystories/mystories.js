import {Component, View, bootstrap} from 'angular2/angular2';
import {bind} from 'angular2/di';

import {JSOTitle} from '../jso-title/jso-title'

@Component({
  selector: 'mystories'
})

@View({
  templateUrl: 'components/mystories/mystories.html',
  directives: [JSOTitle]
})

class Mystories {

  constructor() {
    console.log('component mounted');
  }

}

export function main() {
  bootstrap(Mystories);
}
