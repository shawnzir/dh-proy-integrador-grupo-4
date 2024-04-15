const mainController = {
    index: function(req, res) {
        res.render('index', { title: 'Express' });
      },
    register: function(req, res) {
      res.render('register', { title: 'Register'});
    },
    product: function(req, res) {
      res.render('product')
    },
};

module.exports = mainController