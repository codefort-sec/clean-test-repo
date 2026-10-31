module.exports = {
  recordEvent: (eventName, data = {}) => {
    return {
      timestamp: new Date().toISOString(),
      event: eventName,
      data,
    };
  },
};
