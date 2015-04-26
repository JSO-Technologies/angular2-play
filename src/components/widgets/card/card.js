import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'hillvalley-card',
  properties: {
    title: 'title',
    description: 'description',
    background: 'background'
  }
})
@View({
  templateUrl: 'components/widgets/card/card.html'
})
export class HillvalleyCard {

}
