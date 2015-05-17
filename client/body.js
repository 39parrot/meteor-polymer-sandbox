Template.main.helpers({
  items: [
    {
      name: 'item 1'
    },
    {
      name: 'item 2'
    },
    {
      name: 'item 3'
    }
  ]
});

Template.main.events({
  'click paper-item': function(e, t) {
    console.log('paper-item clicked');
  }
});
