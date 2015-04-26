const THUMB_BASE_URL = 'http://hillvalley-mystories-thumb.s3.amazonaws.com';

export class ImagesService {
  constructor() {}

  /**
   * Generate the image url from image path
   * @param {string} imagePath The image path
   * @param {string} size The image target size
   * @returns {string} url The image url
   */
  toImageUrl(imagePath, size) {
    var prefix;
    switch (size) {
      case 'medium':
        prefix = THUMB_BASE_URL + '/medium';
        break;
      case 'small':
        prefix = THUMB_BASE_URL + '/small';
        break;
      default:
        prefix = THUMB_BASE_URL + '/large';
        break;
    }
    return prefix + '/' + imagePath;
  }


}
