// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),



  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$select.on( 'change', () => {
      var selectedRoom = RoomsView.$select.val();
      MessagesView.initialize(selectedRoom);
    });

  },

  /*
      // console.log(RoomsView.$select.val());
      console.log(dataArray);
      var selectedRooms = [];
      console.log(data, 'data???');

      for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        if (data[i].roomname === selectedRoom) {
          selectedRooms.push(data[i]);
        }
      }
      MessagesView.$chats.empty();
      console.log(selectedRooms);
      MessagesView.render(selectedRooms);

  */

  render: function(data) {
    var roomList = [];


    // TODO: Render out the list of rooms.
    for (var i = 0; i < data.length; i++) {
      var roomName = data[i].roomname;
      if (!roomList.includes(roomName) && roomName) {
        roomList.push(roomName);

      }
    }
    RoomsView.$select.empty();

    // jquery thing that stores each instance of room
    // invoke renderroom with the item
    // clear the storage thing
    //

    for (var j = 0; j < roomList.length; j++) {
      RoomsView.renderRoom(roomList[j]);
    }


  },

  renderRoom: function(roomName) {

    // TODO: Render out a single room.

    var $rooms = $('<option>').val(roomName).text(roomName);
    RoomsView.$select.append($rooms);
    // console.log(roomList);
    console.log($rooms);
    // console.log(data[0].roomname);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    RoomsView.$button.on('click', RoomsView.handleSubmit);

  }

};
