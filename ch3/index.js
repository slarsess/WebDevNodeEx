const express = require('express');
var handlebars = require('express-handlebars')
  .create({defaultLayout: 'main'});
const app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

var fortunes = [
  "Conquer your fears or they will conquer you.",
  "Rivers need springs.",
  "Do not fear what you do not know.",
  "you will have a pleasant surprise.",
  "Whenever possible, keep it simple.",
];
//home page
app.get('/', function(req, res){
  res.render('home');
});
//about page
app.get('/about', function(req, res){
  var randomFortune =
    fortunes[Math.floor(Math.random() * fortunes.length)]
  res.render('about', {fortune: randomFortune});
});
//404 catch-all handler (middleware)
app.use(function(req, res){
  res.type('text/plain');
  res.status('404');
  res.render('404');
});
//500 error handler (middleware)
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status('500');
  res.render('500');
});

//listen
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.');
});
