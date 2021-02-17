import "./App.css";
import { Button, Col, Input, InputNumber, Layout, Row } from "antd";
import { SprintTimer } from "./components/sprintTimer";
import YouTube from "react-youtube";
import { useState } from "react";

const { Header, Footer, Content } = Layout;


const timerConfig = {
  sprintDuration: 60,
  sprintsPerCycle: 4,
  sprintBreakDuration: 10,
  longBreakDuration: 30,
  cycles: 4,
}

function App() {
  const [player, setPlayer] = useState(null);

  return (
    <Layout
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        height: "100vh",
      }}
    >
      <Header theme="light">Header</Header>
      <Content style={{ padding: "1rem" }}>
        <Row style={{ height: "100%" }}>
          <Col
            xs={{ span: 24 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            style={{
              padding: "1rem",
              border: "1px solid #999",
              borderRadius: ".25rem",
              height: "100%",
            }}
          >
            <Input.Group>
              <h1>Pomodoro Config</h1>
              <Input.Group compact style={{ padding: "0.5rem 0rem" }}>
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
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 16 }}
            lg={{ span: 18 }}
            style={{ padding: "1rem" }}
          >
            <YouTube videoId={"2lLBLjn3FCI"} opts={{origin: "http://localhost:3000", autoplay: 1}} onReady={setPlayer} />
            <SprintTimer
              player={player}
              {...timerConfig} 
            />
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
