// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', MessagesView.handleClick);
  },

  render: function() {
    // TODO: Render _all_ the messages.
    if (Friends.currentFriend === 'All') {
      buttonDisplay = 'invisible';
    } else {
      buttonDisplay = 'visible';
    }
    MessagesView.$chats.html(`<button id='allFriends' class="button ${buttonDisplay}">view all messages</button>`);
    console.log(Messages._data);
    Messages.get().forEach( e => {

      if (Rooms.currentRoom !== 'All' && e.roomname !== Rooms.currentRoom) {
        return;
      }
      if (Friends.currentFriend !== 'All' && e.username !== Friends.currentFriend) {
        return;
      }
      MessagesView.renderMessage(e);
    });
  },

  renderMessage: function(message) {
    if (message.text && message.username) {
      message.text = message.text.replace('<script', '?');
      message.text = message.text.replace('<style', '?');
      var $message = MessageView.render(message);
      MessagesView.$chats.append($message);
    }
  },

  handleClick: function(e) {
    ////username event listener
    if ( e.target.classList.contains('username')) {
      var username = e.target.innerText;
      Friends.toggleStatus(username);
      FriendsView.render();
    }
    if (e.target.classList.contains('visible')) {
      Friends.currentFriend = 'All';
      MessagesView.render();
    }

    if (e.target.classList.contains('gitUrl')) {
      window.location.href = `https://www.github.com/${e.target.innerText}`;
    }
  }

};