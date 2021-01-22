import { Col, Row, Card, Typography, Divider, Button } from "antd";
import React from "react";
import { createUseStyles } from "react-jss";
import ActiveUsersCard from "../../components/active-users-card";
import AffiliateImpressionStats from "../../components/affiliate-impression-stats";
import CampaignStats from "../../components/campaign-stats";
import { useCampaignStyles } from "../../components/campaign-styles";
import GoalsCard from "../../components/goals-card";
import IncomeCard from "../../components/income-card";
import UsersCard from "../../components/users-card";

export default function Campaigns() {
  const classes = useCampaignStyles();
  const { Title } = Typography;

  return (
    <div className={classes.root}>
      <Row>
        <Col
          // span={14}
          lg={18}
          xs={24}
          xl={14}
          className={classes.firstSegmentContainer}
        >
          <Row>
            <Col span={24} xs={12} lg={24}>
              <div>
                <p className={classes.subTitle}>Hi Dash UI8,</p>
                <p className={classes.title}>Campaigns</p>
              </div>
            </Col>
          </Row>

          <Row className={classes.segment}>
            <Col span={24}>
              <ActiveUsersCard classes={classes} />
            </Col>
          </Row>

          <Row gutter={16} className={classes.segment}>
            <Col span={12} lg={12} xs={24}>
              <UsersCard classes={classes} />
            </Col>

            <Col span={12} lg={12} xs={24}>
              <IncomeCard classes={classes} />
            </Col>
          </Row>

          <Row gutter={16} className={classes.segment}>
            <Col span={12}>
              <Card
                bordered={false}
                className={classes.card}
                title="Icon Progress"
              >
                icon progress
              </Card>
            </Col>

            <Col span={12}>
              <Card
                bordered={false}
                className={classes.card}
                title="Latest Sales
"
              >
                latest sales
              </Card>
            </Col>
          </Row>
        </Col>

        <Col
          // span={10}
          lg={6}
          xs={24}
          xl={10}
          className={classes.secondSegmentContainer}
        >
          <Row>
            <Col span={24} lg={24}>
              <GoalsCard classes={classes} />
            </Col>

            <Col span={24} lg={24}>
              <div className={classes.goalsCard} style={{ marginTop: "2em" }}>
                <h1 style={{ fontSize: "16px", padding: "24px 0" }}>
                  Affiliate Impressions
                </h1>
                <AffiliateImpressionStats />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
