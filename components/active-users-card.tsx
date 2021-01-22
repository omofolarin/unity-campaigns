import { Card, Row, Col, Divider } from "antd";
import * as React from "react";
import CampaignStats from "./campaign-stats";
import { useCampaignStyles } from "./campaign-styles";

interface ActiveUsersCardProps {
  classes?: Record<string, string>;
}

export default function ActiveUsersCard(props: ActiveUsersCardProps) {
  const classes = useCampaignStyles();

  return (
    <Card bordered={false} className={classes.card}>
      {" "}
      <Row>
        <Col span={24}>Active users right now</Col>
      </Row>
      <Row gutter={8}>
        <Col span={6} xs={24} lg={6}>
          <Row>
            <Col span={24} style={{ fontSize: "3.5em", fontWeight: "bold" }}>
              478
            </Col>
            <Col span={24}>
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <div style={{ width: "50px" }}>
                  <img
                    src="/details-pic.png"
                    alt="icon"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className={classes.captionMini}>Page views per minute</div>
              </div>
              <Divider />
            </Col>
            <Col span={24}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ width: "65%", marginTop: "-1em" }}>
                  <svg
                    width="80"
                    height="26"
                    viewBox="0 0 80 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 25C1 25 6.20364 16.2064 13 16.2064C19.7964 16.2064 19.0536 21.521 25.9941 21.521C32.9346 21.521 35.9412 1 45.8235 1C55.7059 1 57.8284 19.9549 66.1176 19.9549C72.5754 19.9549 74.227 13 79 13"
                      stroke="#6C5DD3"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div style={{ display: "flex", paddingLeft: "4px" }}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="8" fill="#3F8CFF" />
                    <path
                      d="M10.6667 6.66663L8.00008 9.33329L5.33341 6.66663"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span style={{ padding: "0 2px", fontSize: "12px" }}>6%</span>
                </div>
              </div>
              <div
                className={classes.captionMini}
                style={{ padding: 0, paddingTop: "8px" }}
              >
                Update your payout method in Settings
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={18} xs={24} lg={18}>
          <div>
            <CampaignStats />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24} className={classes.segment}>
          <Card className={[classes.card, classes.reportStat].join(" ")}>
            <Row>
              <Col span={6} xs={12} lg={6}>
                <div className={classes.reportSimple}>
                  <p>Users</p>
                  <p className={classes.statsCount}>36k</p>
                </div>
              </Col>

              <Col span={6} xs={12} lg={6}>
                <div className={classes.reportSimple}>
                  <p>Clicks</p>
                  <p className={classes.statsCount}>1m</p>
                </div>
              </Col>

              <Col span={6} xs={12} lg={6}>
                <div className={classes.reportSimple}>
                  <p>Sales</p>
                  <p className={classes.statsCount}>327$</p>
                </div>
              </Col>

              <Col span={6} xs={12} lg={6}>
                <div className={classes.reportSimple}>
                  <p>Items</p>
                  <p className={classes.statsCount}>68</p>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}
