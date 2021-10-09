// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    $(document).ready(function() {
      $('time.timeago').timeago();
    });
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    FriendsView.initialize();
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    setInterval( () => App.fetch(), 10000 );

    /////event listener for whole document

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      callback();
      data = JSON.parse(data);
      Messages.update(data);
      Rooms.update(data);
      // and re-render the corresponding views.
      MessagesView.render();
      RoomsView.render();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
