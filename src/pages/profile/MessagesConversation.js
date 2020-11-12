import React, { Component } from "react";
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

// Tutorial link: https://getstream.io/chat/react-chat/tutorial/?utm_campaign=ChatSN_Mid_Funnel&utm_adid=108353019567&utm_creative=449718679847&utm_term=chat%20react&gclid=CjwKCAiAtK79BRAIEiwA4OskBvKjDSkSCLH43FR7jrAFtw7gj-VsEGi5OUEoHkCEwDOcc_pboeO27xoCo-0QAvD_BwE
// Package doc: https://getstream.github.io/stream-chat-react/#channellist
// TODO: add new user to channel list.
//     Potential helpful info:
//       https://getstream.io/chat/docs/initialize_channel/?language=js
//       https://getstream.github.io/stream-chat-react/#channellist


const Conversation = () => {
  const chatClient = new StreamChat('qk4nn7rpcn75');
  const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYnJva2VuLXdhdGVyZmFsbC01In0.d1xKTlD_D0G-VsBoDBNbaLjO-2XWNA8rlTm4ru4sMHg';

  chatClient.setUser(
    {
      id: 'broken-waterfall-5',
      name: 'Alice',
      image: 'https://getstream.io/random_svg/?id=broken-waterfall-5&amp;name=Broken+waterfall'
    },
    userToken,
  );

  // const filters = { type: 'messaging', members: { $in: ['broken-waterfall-5'] } };
  const filters = { type: 'messaging', example: 1 };
  const sort = { last_message_at: -1 };
  const channels = chatClient.queryChannels(filters, sort);

  return (
    <Chat client={chatClient} theme={'messaging light'} >
      <ChannelList
        filters={filters}
        sort={sort}
      />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  )
}

export default Conversation;