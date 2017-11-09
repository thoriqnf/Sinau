module.exports = {
  get: (req, res, next) => {
    const text = `RESPONSE ALL ONE FROM ${req.path}`;
    res.send({
      message: text,
      database: process.env.DATABASE
    });
  }
};
