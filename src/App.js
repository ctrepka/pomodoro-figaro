import "./App.css";
import { Button, Col, Input, InputNumber, Layout, Row } from "antd";
import { SprintTimer } from "./components/sprintTimer";
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
            md={{ span: 16 }}
            lg={{ span: 18 }}
            style={{ padding: "1rem" }}
          >
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
