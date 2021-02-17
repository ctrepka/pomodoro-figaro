import { Button, Input, InputNumber } from "antd";

export function SprintConfigForm() {
  return (
    <>
      <Input.Group>
        <h1>Pomodoro Config</h1>
        <Input.Group style={{ padding: "0.5rem 0rem" }}>
          <Input placeholder="Task name" style={{ width: "60%" }} />
          <InputNumber
            defaultValue={1}
            placeholder="# Long cycles"
            style={{ width: "40%" }}
          />
        </Input.Group>
        <h3>Sprint details</h3>
        <Input.Group compact>
          <InputNumber
            defaultValue={60 * 25}
            placeholder="Sprint duration"
            style={{ width: "50%" }}
          />
          <InputNumber
            defaultValue={60 * 5}
            placeholder="Sprint break duration"
            style={{ width: "50%" }}
          />
        </Input.Group>
        <h3>Long cycle details</h3>
        <Input.Group compact style={{ padding: "0.5rem 0rem" }}>
          <InputNumber
            defaultValue={4}
            placeholder="Sprints in long cycle"
            style={{ width: "50%" }}
          />
          <InputNumber
            defaultValue={60 * 15 /*seconds * minutes*/}
            placeholder="Long cycle break duration"
            style={{ width: "50%" }}
          />
        </Input.Group>
      </Input.Group>
      <br />
      <Button type="primary">Start</Button>
    </>
  );
}
