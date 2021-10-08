// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  setRoomAs: function(messagesArray) {

    for (var i = 0; i < messagesArray.length; i++) {
      // if room key exists
      // push message to key
      // if room key does not exist
      // create room key and push message

      if (Rooms._data[messagesArray[i].roomname]) {
        Rooms._data[messagesArray[i].roomname].push(messagesArray[i]);
      } else {
        Rooms._data[messagesArray[i].roomname] = [];
      }
    }
  },
  // TODO: Define how you want to store the list of rooms
  _data: {},

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  // simultaneously send them to data store and messagerender

  /*
  {
    dripgod : [],
    notsodrippy : [],
    quintonsplayhous : [],
  }
  */

  // data . roomname can be a specific store for message items in a value where the roomname is the key



};

console.log(Rooms._data);