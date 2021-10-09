// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.
var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`

       <% created_at = (jQuery.timeago(created_at)) %>
      <% roomname = roomname === null ? 'Main Room' : roomname %>



      <div class="chat">



        <div class="firstRow">
          <div class="username">
            <%= username %>
          </div>

        </div>


        <div class="secondRow">
          <div class="messageText">
            <%= text %>
          </div>
        </div>

        <div class="thirdRow">
          <span class="roomName">
            Posted in: <%= roomname %>
            <%= created_at %>
          </span>
        </div>


      </div>

    `)

};




