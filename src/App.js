import { useEffect, useState } from "react";
import "./App.scss";
import { Header } from "./components/header";
import { SprintTimer } from "./components/sprintTimer";

function App() {
  const [notifPermission, setNotifPermission] = useState(false);
  function askNotificationPermission() {
    Notification.requestPermission((permission) =>
      setNotifPermission(permission === "denied" ? false : true)
    );
  }

  useEffect(() => {
    askNotificationPermission();
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        height: "100vh",
      }}
    >
      <Header/>
      <SprintTimer />
    </div>
  );
}

export default App;
