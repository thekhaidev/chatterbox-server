// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],
  currentRoom: 'All',

  update: function(data) {

    data.forEach( e => {
      if (!Rooms._data.includes(e.roomname) && e.roomname ) {
        Rooms._data.push(e.roomname);
      }
    });
    console.log(Rooms._data);
  },

  get: function() {
    return Rooms._data;
  },
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  add: function(newRoom) {
    Rooms._data.push(newRoom);
  }
};
