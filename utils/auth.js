const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/index');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;