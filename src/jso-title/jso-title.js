import {Component, Template} from 'angular2/angular2';

@Component({
  selector: 'jso-title'
})
@Template({
  url: 'jso-title/jso-title.html'
})

export class JSOTitle {
  constructor(){
    this.name = 'Jimmy';
  }
}
