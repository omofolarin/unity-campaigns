import classes from "*.module.css";
import { Card, Row, Col } from "antd";
import * as React from "react";
import { useCampaignStyles } from "./campaign-styles";

interface UsersCardProps {
  classes?: Record<string, string>;
}

export default function UsersCard(props: UsersCardProps) {
  const classes = useCampaignStyles();
  return (
    <div>
      <Card
        bordered={false}
        className={classes.card}
        title="Users"
        actions={[<p> Go to settings</p>]}
      >
        <Row>
          <Col span={10} lg={10} xs={12}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "12em",
              }}
            >
              New Users
              <h1>57m</h1>
              21.77%
            </div>
          </Col>
          <Col span={14} lg={14} xs={12}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "12em",
              }}
            >
              <svg
                width="100%"
                height="66"
                viewBox="0 0 121 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="33" width="21" height="33" rx="4" fill="#A0D7E7" />
                <rect x="25" width="21" height="66" rx="4" fill="#0049C6" />
                <rect
                  x="50"
                  y="21"
                  width="21"
                  height="45"
                  rx="4"
                  fill="#A0D7E7"
                />
                <rect
                  x="75"
                  y="9"
                  width="21"
                  height="57"
                  rx="4"
                  fill="#A0D7E7"
                />
                <rect
                  x="100"
                  y="30"
                  width="21"
                  height="36"
                  rx="4"
                  fill="#A0D7E7"
                />
              </svg>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={10} lg={10} xs={12}>
            <div>
              New Users
              <h1>36m</h1>
              <span>21.77%</span>
            </div>
          </Col>
          <Col span={14} lg={14} xs={12}>
            <svg
              width="100%"
              height="66"
              viewBox="0 0 121 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="33" width="21" height="33" rx="4" fill="#CFC8FF" />
              <rect x="75" width="21" height="66" rx="4" fill="#6C5DD3" />
              <rect
                x="50"
                y="21"
                width="21"
                height="45"
                rx="4"
                fill="#CFC8FF"
              />
              <rect x="25" y="9" width="21" height="57" rx="4" fill="#CFC8FF" />
              <rect
                x="100"
                y="43"
                width="21"
                height="23"
                rx="4"
                fill="#CFC8FF"
              />
            </svg>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
