/* Mozilla blocks Twitter's image server for tracking people so need to download
   the profile pictures during build time */

const http = require('http');
const fs = require('fs');
const tweets = require('../data/tweets.json');

let fileName;

for (let i = 0; i < tweets.length; i++) {
  fileName = tweets[i].user.profile_image_url.slice(tweets[i].user.profile_image_url.lastIndexOf('/')+1);
  const file = fs.createWriteStream('./static/images/twitter/' + fileName);

  http.get(decodeURI(tweets[i].user.profile_image_url), function(response) {
    response.pipe(file);
  });
}
