Router.configure({
  autoRender: false,
  autoStart: false
});

Router.route('/', function () {
  this.render('main');
});
