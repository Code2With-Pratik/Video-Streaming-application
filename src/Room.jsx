import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const Room = () => {
  const { roomId } = useParams();

  function randomID(len = 5) {
    const chars =
      "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
    let result = "";
    for (let i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  async function myMeeting(element) {
    const kitToken = "<YOUR_KIT_TOKEN>"; // Replace with your actual Kit Token
    const role = ZegoUIKitPrebuilt.Host; // Example role, adjust as needed
    const sharedLinks = [
      {
        name: "Join Link",
        url: `${window.location.origin}/room/${roomId}`,
      },
    ];

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // Start the call
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role,
        },
      },
      sharedLinks,
    });
  };

  // return (
//     <div
//       ref={(element) => {
//         if (element) myMeeting(element);
//       }}
//       style={{ width: "100%", height: "100vh" }}
//     >
//       {/* The Zego UIKit Prebuilt UI will be rendered here */}
//     </div>
//   );
// };

return <div>Room</div>;
};

export default Room;
