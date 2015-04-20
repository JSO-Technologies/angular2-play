import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'jso-title'
})
@View({
  templateUrl: 'components/jso-title/jso-title.html'
})

export class JSOTitle {
  name: string;

  constructor(){
    this.name = 'Jimmy';
  }
}
