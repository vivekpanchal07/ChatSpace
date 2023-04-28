/* eslint-disable react/prop-types */
// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic,
// } from "react-chat-engine-advanced";

// const ChatsPage = (props) => {
//   const chatProps = useMultiChatLogic(
//     "5593da9c-8bd7-496b-b438-deb2c543061a",
//     props.user.username,
//     props.user.secret
//   );
//   // return <div className="background">chats...</div>;
//   return (
//     <div style={{ height: "100vh" }}>
//       <MultiChatSocket {...chatProps} />
//       <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
//     </div>
//   );
// };
// export default ChatsPage;

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={'5593da9c-8bd7-496b-b438-deb2c543061a'}
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100vh'}}
      />
    </div>
  );
};

export default ChatsPage;
