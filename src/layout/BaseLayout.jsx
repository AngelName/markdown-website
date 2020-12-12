import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { Layout } from "antd";
import { useLocation } from "react-router-dom";

export default function BaseLayout({
  layout,
  header,
  content,
  footer,
  children,
}) {
  let loaction = useLocation();
  return (
    <>
      <Layout {...layout}>
        <Header {...header} />
        <Content {...content}>{children}</Content>
        {!loaction.pathname === "/online" && <Footer {...footer} />}
      </Layout>
    </>
  );
}
