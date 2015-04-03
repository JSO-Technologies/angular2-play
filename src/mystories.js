import {Component, Template, bootstrap} from 'angular2/angular2';
import {bind} from 'angular2/di';

import {JSOTitle} from 'jso-title/jso-title'

@Component({
  selector: 'mystories'
})

@Template({
  url: 'mystories.html',
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
