import {Component, Template, bootstrap} from 'angular2/angular2';
import {bind} from 'angular2/di';

@Component({
  selector: 'mystories'
})

@Template({
  url: 'mystories.html'
})

class Mystories {

  constructor() {
    console.log('component mounted');
  }

}

export function main() {
  bootstrap(Mystories);
}
