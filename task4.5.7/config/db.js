const dbUrl = 'mongodb://user2:980649470q@ds227171.mlab.com:27171/epam_nodejs';

const dbOptions = {
  server: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000,
    },
  },
  replset: {
    socketOptions: {
      keepAlive: 300000,
      connectTimeoutMS: 30000,
    },
  },
};

module.exports = {
  dbUrl,
  dbOptions,
};
