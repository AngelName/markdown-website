import React from "react";
import "./Home.sass";
import Icon from "../components/Icon";
import { Row } from "antd";
import PcCard from "../components/PcCard";
import MobileCard from "../components/MobileCard";
import styles from "./Home.module.sass";
import Col from "../components/Col";
import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <SinglePage>
      <div className={"first-page"}>
        <Icon style={{ margin: "0 auto" }}></Icon>
        <section className={"first-page-text-box"}>
          <section className={"first-page-title"}>马可</section>
          <section className={"first-page-sub-title"}>
            Markdown 在线排版网站
          </section>
          <section className={"first-page-desc"}>
            免费、开源、排版丰富
            <div>
              <Link to="/online">开始排版</Link>
            </div>
          </section>
        </section>
      </div>
    </SinglePage>
  );
}

function ColLayout({ children }) {
  return (
    <Col className={styles.col} style={{ textAlign: "center" }}>
      {children}
    </Col>
  );
}

function SectionPage() {
  return (
    <SinglePage style={{ minHeight: "100vh" }}>
      <Row>
        <ColLayout>
          <section style={{ margin: "20vh 0 0 0" }}>
            <p>解决Markdown再多平台排版问题</p>
            <p>让您专注于文章内容创作</p>
          </section>
        </ColLayout>
        <ColLayout>
          <section style={{ margin: "10vh 0 0 0" }}>
            <PcCard />
          </section>
        </ColLayout>
      </Row>
    </SinglePage>
  );
}
function ThreePage() {
  return (
    <SinglePage style={{ minHeight: "100vh", paddingBottom: "80px" }}>
      <Row>
        <ColLayout>
          <section style={{ margin: "20vh 0 0 0" }}>
            <p>自适应样式</p>
            <p>完美适配PC,移动端</p>
          </section>
        </ColLayout>
        <ColLayout>
          <MobileCard />
        </ColLayout>
      </Row>
    </SinglePage>
  );
}

function SinglePage({ children, ...otherProps }) {
  return (
    <div
      className={"home-page"}
      style={{ minHeight: "calc(100vh - 80px)" }}
      {...otherProps}
    >
      {children}
    </div>
  );
}
function Home() {
  return (
    <main>
      <FirstPage />
      <SectionPage />
      <ThreePage />
    </main>
  );
}

export default Home;
