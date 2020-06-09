module.exports = function(){
    var express = require('express');
    var router = express.Router();

    


    router.get('/', function(req, res){
      var inserts = req.query.search;
      console.log(inserts);
      if(!req.query.search){
        var query = 'SELECT title, merchType, price FROM merch';
      }
      else{
        var query = 'SELECT title, merchType, price FROM merch WHERE title LIKE '%' + inserts +'%'';
      }
      var mysql = req.app.get('mysql');
      var context = {};

      function handleRenderingOfMerch(error, results, fields){
        context.searchname = results;
        //pass it to handlebars to put inside a file
        res.render('searchname', context)
      }
      //execute the sql query
      mysql.pool.query(query, handleRenderingOfMerch)

  });
    
    return router;
}();