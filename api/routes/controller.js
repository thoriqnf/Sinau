module.exports = {
  get: (req, res, next) => {
    const text = `RESPONSE ALL ONE FROM ${req.path}`;
    res.send(text);
  },
  getOne: (req, res, next) => {
    const text = `RESPONSE ONE ONE FROM ${req.path}`;
    res.send(text);
  }
};
