var FriendsView = {

  $list: $('#friendsContainer'),

  initialize: function() {
    FriendsView.render();
    FriendsView.$list.click( e => {
      if ( e.target.classList.contains('friendName')) {
        FriendsView.handleClick(e.target.innerText);
      }
    });
  },

  render: function() {
    // FriendsView.$list.html('<h3 id="friendsTitle" class="title-bar"> FRIENDS </h3>');
    Friends.get().forEach( e => {
      FriendsView.renderFriend(e);
    });
  },

  renderFriend: function(friendName) {
    var element = $(`<div class="friendName">${friendName}</div>`);
    FriendsView.$list.append(element);

  },

  handleClick: function(username) {
    Friends.currentFriend = username;
    Rooms.currentRoom = 'All';
    RoomsView.$select.val('All');
    MessagesView.render();
  }

};