polymerReady = new ReactiveVar(false);

$(window).on('ploymer-ready', function() {
  polymerReady.set(true);
});

Meteor.startup(function() {
  Tracker.autorun(function() {
    if (polymerReady.get()) {
      Router.start();
    }
  });
});
