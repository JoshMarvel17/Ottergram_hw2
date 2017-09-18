var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText) {

  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;

}

function imageFromThumb(thumbnail) {

  'use strict';
  return thumbnail.getAttribute('data-image-url');

}

function titleFromThumb(thumbnail) {

  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {

  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {

  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    if (imageFromThumb(thumb) == 'img/tacocat.jpg') {
      location.reload();

    }

  });

}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumnbnailArray = [].slice.call(thumbnails);
  return thumnbnailArray;
}

//randomly replaces the data imgage url of one of the thumnbails with the taco cat
function insertTacoCat() {

  var thumbnails = getThumbnailsArray();
  var randNumbBetween0and4 = Math.floor(Math.random() * 5);
  thumbnails[randNumbBetween0and4].setAttribute('data-image-url', 'img/tacocat.jpg');
  thumbnails.forEach(addThumbClickHandler);
}

function initalizeEvents() {

  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  insertTacoCat();

}

initalizeEvents();
