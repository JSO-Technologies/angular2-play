import {ImagesService} from 'services/ImagesService'

export class StoriesService {
  imagesService:ImagesService;

  constructor() {
    this.imagesService = new ImagesService();
    this.stories = [
      {
        title: 'West USA',
        image: 'GrandCanyon.jpg',
        description: 'Road trip to the West USA !'
      },
      {
        title: 'Prague',
        image: 'Prague.jpg',
        description: 'Whole week in the great city of Prague !'
      },
      {
        title: 'Pralognan La Vanoise',
        image: 'Pralognan.jpg',
        description: 'Get the mountain fresh air !'
      }
    ];
  }

  getStories() {
    let adaptedStories = this.stories.slice(0);
    adaptedStories.forEach((element) => {
      element.background = `url(${this.imagesService.toImageUrl(element.image)})`;
      element.backgroundThumb = `url(${this.imagesService.toImageUrl(element.image, 'medium')})`;
    });
    return adaptedStories;
  }
}
