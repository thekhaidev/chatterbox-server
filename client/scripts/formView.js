// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$form.attr('autocomplete', 'off');
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();


    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    var text = FormView.$form.find('input[type=text]').val();

    var username = window.location.search.slice(10).replace('%20', ' ');
    var roomname = Rooms.currentRoom === 'All' ? null : Rooms.currentRoom;
    var created_at = new Date();
    var message = {text, username, roomname, created_at};
    App.startSpinner();
    Parse.create(message, ()=>App.fetch(App.stopSpinner));
    FormView.$form.find('input[type=text]').val('');

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};