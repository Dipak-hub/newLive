import React from "react";

import { useHMSStore, selectPeers } from "@100mslive/react-sdk";
import VideoTile from "./VideoTile";

export default function Conference() {
  const peers = useHMSStore(selectPeers);

  return (
    <div>
      {peers.map((peer) => (
        <VideoTile key={peer.id} peer={peer} />
      ))}
    </div>
  );
}
