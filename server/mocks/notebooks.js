/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var notebooksRouter = express.Router();

  notebooksRouter.get('/', function(req, res) {
    res.send({
      'notebooks': []
    });
  });

  notebooksRouter.post('/', function(req, res) {
    console.log(req.body);

    res.status(201).end();
  });

  notebooksRouter.get('/:id', function(req, res) {
    res.send({
      'notebooks': {
        id: req.params.id
      }
    });
  });

  notebooksRouter.put('/:id', function(req, res) {
    res.send({
      'notebooks': {
        id: req.params.id
      }
    });
  });

  notebooksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/notebooks', require('body-parser').json());
  app.use('/api/notebooks', notebooksRouter);
};
