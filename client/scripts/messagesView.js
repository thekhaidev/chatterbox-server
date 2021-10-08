// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function(selectedRoom) {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    // search rooms._data for selected room
    // invoke messagesview.render on selected room
    if (Rooms._data[selectedRoom]) {
      MessagesView.$chats.empty();
      MessagesView.render(Rooms._data[selectedRoom]);
      console.log(Rooms._data[selectedRoom]);
    }


  },

  render: function(messages) {
    // TODO: Render _all_ the messages.
    for (var i = 0; i < messages.length; i++) {


      var $message = MessageView.render({
        username: messages[i].username,
        text: messages[i].text

      });
      MessagesView.$chats.append($message);
    }
    // if (typeof text !== 'string') {
    //   Document.createTextNode(text: messages[i].text);
    // }
    // console.log(MessagesView.$chats);

  },
  renderMessage: function(message) {
    // TODO: Render a single message.
    // create message variable
    // append to chats

    var $message = MessageView.render(message);
    MessagesView.$chats.append($message);
    Parse.create(message);

    // App.fetch(Parse.create(message));
    // callback();

    // var $message = MessageView.render({
    //   username: message[0].username,
    //   text: message[0].text
    // });
    // $message.appendTo.$chats;
    // console.log(MessagesView.$chats);
    // MessagesView.$chats.prepend($message);


    //prepend messages to $chats
  },



  //   var compiled = _.template("hello: <%= name %>");
  // compiled({name: 'moe'});
  // => "hello: moe"

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};