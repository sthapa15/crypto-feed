import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetExchangesQuery } from "../services/cryptoApi";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const { data: data2 } = useGetExchangesQuery();

  const globalStats = data;

  console.log(data2);

  if (isFetching) return "loading...";

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats.length}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={data2.length}/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value="5" />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
