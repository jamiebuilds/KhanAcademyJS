var client = require('./client');

module.exports = {
  getVideos: function getVideos(topicSlug, done) {
    client.doGET(`${topicSlug}`, {}, done);
  }
}