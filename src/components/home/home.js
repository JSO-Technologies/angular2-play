import {Component, View, For} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {StoriesService} from 'services/StoriesService';
import {HillvalleyCard} from 'components/widgets/card/card';

@Component({
  selector: 'home',
  injectables: [StoriesService]
})
@View({
  templateUrl: 'components/home/home.html',
  directives: [For, HillvalleyCard]
})
export class Home {
  storiesService: StoriesService;

  constructor(storiesService:StoriesService) {
    this.storiesService = storiesService;
    this.init();
  }

  init() {
    this.stories = this.storiesService.getStories();

    if(this.stories.length) {
      this.select(this.stories[0]);
    }
  }

  select(story) {
    this.selectedStory = story;
  }

  getBackgroundOpacity(story) {
    return this.selectedStory === story ? 1 : 0;
  }
}
