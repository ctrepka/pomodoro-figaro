import { useState } from "react";
import { Modal } from "./modal";
import { SprintConfigForm } from "./sprintConfigForm";

export function Header() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: ".25rem",
        }}
      >
        <h1>Logo</h1>
        <button
          className={"fab"}
          onClick={() => setShowSettings((showSettings) => !showSettings)}
        >
          <span>&#9881;</span>
        </button>
      </div>
      <Modal
        style={{ width: "100%" }}
        title={<h2 className={"font-sm"}>Settings</h2>}
        display={showSettings}
        exitBtnFn={() => setShowSettings((showSettings) => !showSettings)}
      >
        <SprintConfigForm />
      </Modal>
    </>
  );
}
