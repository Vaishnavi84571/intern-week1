exports.notFound = (req, res) => {
  res.status(404).json({ message: `Route ${req.method} ${req.originalUrl} not found` });
};

exports.errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
};
