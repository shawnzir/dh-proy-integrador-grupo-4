const mainController = {
    index: function(req, res) {
        res.render('index', { title: 'Express' });
      }
};

module.exports = mainController