// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: [],
  currentFriend: 'All',

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  toggleStatus: function(friend) {
    if (!Friends._data.includes(friend)) {
      Friends._data.push(friend);
    } else {
      Friends._data = Friends._data.filter( e => e !== friend );
    }
    console.log(Friends._data);
  },

  get: function() {
    return Friends._data;
  }
};