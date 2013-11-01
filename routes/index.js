
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.templates = function(req, res){
  res.render('templates/'+req.params.fileName);
};

exports.directives = function(req,res){
	res.render('templates/directives/'+req.params.fileName);
};