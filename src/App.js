import "./App.css";
import {
  selectIsConnectedToRoom,
  useHMSStore,
  useHMSActions,
} from "@100mslive/react-sdk";

import { useEffect } from "react";
import Conference from "./screens/confrence";
import JoinRoom from "./screens/joinRoom";

function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) hmsActions.leave();
    };
  }, [hmsActions, isConnected]);

  return (
    <div className="App">{isConnected ? <Conference /> : <JoinRoom />}</div>
  );
}

export default App;
