const { getHashtagAnalytics } = require('../../../clients/apify_client/apifyClient');
const apifyClient = require('apify-client');

describe('Apify client', () => {
    it('given hashtag array should return response', async () => {
        const hashtags = ["fitness"];
        const result = getHashtagAnalytics(hashtags);

    });
  
    it('should perform addition correctly', () => {
      const result = 2 + 2;
      expect(result).toBe(4);
    });
});