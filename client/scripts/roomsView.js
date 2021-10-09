// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.change( RoomsView.handleChange );
    RoomsView.$button.click( RoomsView.handleClick );
  },

  render: function() {
    RoomsView.$select.find('option').remove();
    RoomsView.renderRoom('All');
    Rooms.get().forEach( e => RoomsView.renderRoom(e));
    RoomsView.$select.val(Rooms.currentRoom);
  },

  renderRoom: function(roomname) {
    RoomsView.$select.append(new Option(roomname));
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    Rooms.currentRoom = $('#rooms select option:selected').val();
    MessagesView.render();

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // Prompt appears with empty line to write in
    var newRoom = prompt('Please enter a New Room Name');
    if (newRoom === 'All' || newRoom === '') {
      alert('Invalid room name!');
    } else if (newRoom !== null ) {
      newRoom.trim();
      Rooms.add(newRoom);
      RoomsView.renderRoom(newRoom);
      RoomsView.$select.val(newRoom);
      RoomsView.handleChange();
    }
  }

};
