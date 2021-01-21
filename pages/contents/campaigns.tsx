import { Col, Row, Card, Typography, Divider, Button } from "antd";
import React from "react";
import { createUseStyles } from "react-jss";
import AffiliateImpressionStats from "../../components/affiliate-impression-stats";
import CampaignStats from "../../components/campaign-stats";

const useCampaignStyles = createUseStyles({
  root: {
    width: "100%",
    minHeight: "100vh",
    "@media (max-width: 1174px)": {
      padding: "1em",
    },
  },

  firstSegmentContainer: {
    "@media (min-width: 1174px)": {
      paddingRight: "4em",
    },
    paddingTop: "3em",
  },

  card: {
    borderRadius: "0.8em",
  },

  secondSegmentContainer: {
    height: "100vh",
    borderLeft: "1px solid #E5E5E5",
    "& .card": {
      margin: "auto",
    },
  },

  title: {
    fontSize: "45px",
    lineHeight: "1.5",
    fontWeight: 600,
    marginTop: "-0.5em",
  },

  subTitle: {
    fontSize: "18px",
  },

  segment: {
    margin: "1.5em auto",
  },

  captionMini: {
    padding: "0 10px",
    fontSize: "12px",
    lineHeight: 1.3333,
    fontWeight: 500,
    color: "##B2B3BD",
    opacity: 0.5,
  },

  statsCount: {
    fontSize: "2.8em",
    fontWeight: "bold",
  },
  reportStat: {
    "& .ant-card-body": {
      padding: "0",
    },
  },

  reportSimple: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid rgba(0, 0, 0, 0.06)",
    padding: "0.5em 1.5em",
    paddingTop: "1.5em",
    maxHeight: "9em",
  },

  goalsCard: {
    margin: "auto",
    "@media (min-width: 980px)": {
      width: "72%",
      marginTop: "42%",
    },
  },

  incomeCard: {
    "& .ant-card-head-title": {
      color: "#fff",
      marginTop: "0.5em",
    },

    "& .ant-card-head": {
      border: "none",
    },
    "& .ant-card-body": {
      padding: "2em 0.5em 1em 0.5em",
    },
  },
});

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
              <Card bordered={false} className={classes.card}>
                {" "}
                <Row>
                  <Col span={24}>Active Users right now</Col>
                </Row>
                <Row gutter={8}>
                  <Col span={6} xs={24} lg={6}>
                    <Row>
                      <Col
                        span={24}
                        style={{ fontSize: "3.5em", fontWeight: "bold" }}
                      >
                        478
                      </Col>
                      <Col span={24}>
                        <div
                          style={{ display: "flex", alignItems: "flex-start" }}
                        >
                          <div style={{ width: "50px" }}>
                            <img
                              src="/details-pic.png"
                              alt="icon"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <div className={classes.captionMini}>
                            Page views per minute
                          </div>
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
                                stroke-width="2"
                                stroke-linecap="round"
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span
                              style={{ padding: "0 2px", fontSize: "12px" }}
                            >
                              6%
                            </span>
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
                    <Card
                      className={[classes.card, classes.reportStat].join(" ")}
                    >
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
            </Col>
          </Row>

          <Row gutter={16} className={classes.segment}>
            <Col span={12} lg={12} xs={24}>
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
                        <rect
                          y="33"
                          width="21"
                          height="33"
                          rx="4"
                          fill="#A0D7E7"
                        />
                        <rect
                          x="25"
                          width="21"
                          height="66"
                          rx="4"
                          fill="#0049C6"
                        />
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
                      <rect
                        y="33"
                        width="21"
                        height="33"
                        rx="4"
                        fill="#CFC8FF"
                      />
                      <rect
                        x="75"
                        width="21"
                        height="66"
                        rx="4"
                        fill="#6C5DD3"
                      />
                      <rect
                        x="50"
                        y="21"
                        width="21"
                        height="45"
                        rx="4"
                        fill="#CFC8FF"
                      />
                      <rect
                        x="25"
                        y="9"
                        width="21"
                        height="57"
                        rx="4"
                        fill="#CFC8FF"
                      />
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
            </Col>

            <Col span={12} lg={12} xs={24}>
              <Card
                bordered={false}
                className={[classes.card, classes.incomeCard].join(" ")}
                title="Income"
                style={{ backgroundColor: "#6C5DD3", color: "#fff" }}
              >
                <Card className={classes.card}>
                  <svg
                    width="100%"
                    height="149"
                    viewBox="0 0 232 149"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="41" width="20" height="123" fill="#6C5DD3" />
                    <rect x="65" y="28" width="20" height="95" fill="#A0D7E7" />
                    <rect
                      x="115"
                      y="39"
                      width="20"
                      height="84"
                      fill="#6C5DD3"
                    />
                    <rect
                      x="139"
                      y="61"
                      width="20"
                      height="62"
                      fill="#A0D7E7"
                    />
                    <path
                      d="M134 28L136.586 30.5858C137.367 31.3668 138.633 31.3668 139.414 30.5858L142 28H134Z"
                      fill="#1B1D21"
                    />
                    <rect
                      x="110"
                      width="56"
                      height="28"
                      rx="6"
                      fill="#1B1D21"
                    />
                    <path
                      d="M128.326 19.1293C130.348 19.1293 131.82 17.9705 131.816 16.3732C131.82 15.1914 131.082 14.342 129.757 14.1527V14.0788C130.782 13.8572 131.469 13.0955 131.465 12.0337C131.469 10.5934 130.241 9.41619 128.353 9.41619C126.516 9.41619 125.094 10.5103 125.057 12.0938H126.705C126.733 11.2997 127.472 10.8058 128.344 10.8058C129.226 10.8058 129.812 11.3413 129.807 12.1353C129.812 12.9616 129.129 13.511 128.15 13.511H127.315V14.8313H128.15C129.346 14.8313 130.057 15.4315 130.052 16.2855C130.057 17.1211 129.332 17.6935 128.321 17.6935C127.37 17.6935 126.636 17.1996 126.594 16.4286H124.859C124.905 18.0259 126.331 19.1293 128.326 19.1293ZM136.761 19.1293C138.806 19.1293 140.27 18.0028 140.274 16.4656C140.27 15.2837 139.397 14.2958 138.298 14.1112V14.0465C139.254 13.8342 139.919 12.9755 139.923 11.9506C139.919 10.4964 138.58 9.41619 136.761 9.41619C134.928 9.41619 133.59 10.4918 133.594 11.9506C133.59 12.9755 134.245 13.8342 135.219 14.0465V14.1112C134.102 14.2958 133.239 15.2837 133.243 16.4656C133.239 18.0028 134.697 19.1293 136.761 19.1293ZM136.761 17.8089C135.69 17.8089 134.998 17.218 135.007 16.3455C134.998 15.4407 135.741 14.799 136.761 14.799C137.767 14.799 138.506 15.4453 138.515 16.3455C138.506 17.218 137.818 17.8089 136.761 17.8089ZM136.761 13.5018C135.884 13.5018 135.256 12.9339 135.265 12.1122C135.256 11.2997 135.865 10.755 136.761 10.755C137.643 10.755 138.248 11.2997 138.257 12.1122C138.248 12.9386 137.624 13.5018 136.761 13.5018ZM142.395 19.1016C142.94 19.1016 143.406 18.6491 143.411 18.0859C143.406 17.532 142.94 17.0795 142.395 17.0795C141.832 17.0795 141.375 17.532 141.38 18.0859C141.375 18.6491 141.832 19.1016 142.395 19.1016ZM145.464 19H147.242L151.258 11.0089V9.54545H144.818V10.9766H149.485V11.0412L145.464 19Z"
                      fill="white"
                    />
                    <rect
                      x="188"
                      y="64"
                      width="20"
                      height="59"
                      fill="#6C5DD3"
                    />
                    <rect
                      x="212"
                      y="79"
                      width="20"
                      height="44"
                      fill="#A0D7E7"
                    />
                    <path
                      d="M50.3807 140.273C50.3807 137.217 48.5156 135.416 46.0366 135.416C43.5529 135.416 41.6925 137.217 41.6925 140.273C41.6925 143.324 43.5529 145.129 46.0366 145.129C48.5156 145.129 50.3807 143.329 50.3807 140.273ZM48.6587 140.273C48.6587 142.424 47.5785 143.592 46.0366 143.592C44.4993 143.592 43.4144 142.424 43.4144 140.273C43.4144 138.121 44.4993 136.953 46.0366 136.953C47.5785 136.953 48.6587 138.121 48.6587 140.273ZM55.0191 145.138C56.801 145.138 57.9367 144.081 58.0567 142.576H56.4594C56.3163 143.338 55.767 143.777 55.0329 143.777C53.9896 143.777 53.3156 142.904 53.3156 141.455C53.3156 140.023 54.0035 139.165 55.0329 139.165C55.8362 139.165 56.3302 139.682 56.4594 140.365H58.0567C57.9413 138.828 56.741 137.817 55.0099 137.817C52.9324 137.817 51.6214 139.317 51.6214 141.482C51.6214 143.629 52.9001 145.138 55.0191 145.138ZM62.9698 137.909H61.571V136.21H59.8999V137.909H58.8935V139.202H59.8999V143.144C59.8906 144.478 60.8601 145.134 62.1158 145.097C62.5913 145.083 62.919 144.991 63.0991 144.931L62.8175 143.624C62.7251 143.647 62.5359 143.689 62.3281 143.689C61.908 143.689 61.571 143.541 61.571 142.867V139.202H62.9698V137.909Z"
                      fill="#808191"
                    />
                    <path
                      d="M126.143 135.545V145H127.787V138.491H127.875L130.488 144.972H131.716L134.328 138.505H134.416V145H136.06V135.545H133.964L131.157 142.396H131.046L128.239 135.545H126.143ZM140.069 145.143C141.182 145.143 141.846 144.621 142.151 144.026H142.206V145H143.813V140.254C143.813 138.38 142.285 137.817 140.932 137.817C139.441 137.817 138.296 138.482 137.927 139.774L139.487 139.996C139.654 139.511 140.124 139.096 140.942 139.096C141.717 139.096 142.142 139.493 142.142 140.19V140.217C142.142 140.697 141.639 140.721 140.388 140.854C139.012 141.002 137.696 141.413 137.696 143.01C137.696 144.404 138.716 145.143 140.069 145.143ZM140.503 143.915C139.806 143.915 139.307 143.597 139.307 142.983C139.307 142.341 139.866 142.073 140.614 141.967C141.052 141.907 141.93 141.796 142.146 141.621V142.456C142.146 143.246 141.509 143.915 140.503 143.915ZM145.493 145H147.165V140.831C147.165 139.931 147.843 139.294 148.762 139.294C149.044 139.294 149.394 139.345 149.537 139.391V137.854C149.385 137.826 149.122 137.808 148.937 137.808C148.125 137.808 147.446 138.269 147.188 139.091H147.114V137.909H145.493V145Z"
                      fill="#808191"
                    />
                    <path
                      d="M208.705 145L209.485 142.669H213.04L213.825 145H215.653L212.32 135.545H210.206L206.877 145H208.705ZM209.947 141.293L211.226 137.484H211.3L212.578 141.293H209.947ZM221.344 142.018C221.344 143.098 220.573 143.634 219.834 143.634C219.031 143.634 218.496 143.066 218.496 142.165V137.909H216.824V142.424C216.824 144.127 217.794 145.092 219.188 145.092C220.25 145.092 220.998 144.534 221.321 143.74H221.395V145H223.015V137.909H221.344V142.018ZM227.817 147.779C229.733 147.779 231.146 146.902 231.146 145.115V137.909H229.498V139.082H229.406C229.152 138.569 228.621 137.817 227.37 137.817C225.731 137.817 224.443 139.1 224.443 141.431C224.443 143.744 225.731 144.898 227.365 144.898C228.579 144.898 229.147 144.248 229.406 143.726H229.489V145.069C229.489 146.085 228.796 146.514 227.845 146.514C226.839 146.514 226.396 146.039 226.192 145.651L224.688 146.016C224.992 146.98 226.012 147.779 227.817 147.779ZM227.831 143.587C226.728 143.587 226.146 142.729 226.146 141.422C226.146 140.134 226.719 139.188 227.831 139.188C228.907 139.188 229.498 140.079 229.498 141.422C229.498 142.775 228.898 143.587 227.831 143.587Z"
                      fill="#808191"
                    />
                    <path
                      d="M4.30256 14.1293C6.34304 14.1431 7.71413 12.7397 7.70952 10.87C7.71413 9.08345 6.43999 7.79084 4.78267 7.79084C3.76705 7.79084 2.87145 8.2848 2.41903 9.0973H2.3544C2.35902 7.0799 3.08842 5.87038 4.3995 5.87038C5.212 5.87038 5.76136 6.34588 5.93679 7.09375H7.6218C7.41868 5.54261 6.18608 4.38849 4.3995 4.38849C2.1282 4.38849 0.692472 6.28125 0.692472 9.54048C0.692472 13.0075 2.48828 14.12 4.30256 14.1293ZM4.29332 12.7443C3.28232 12.7443 2.54368 11.9087 2.53906 10.9208C2.5483 9.92827 3.31463 9.0973 4.31641 9.0973C5.31818 9.0973 6.0522 9.89133 6.04759 10.907C6.0522 11.9411 5.2951 12.7443 4.29332 12.7443ZM12.7646 14.18C15.0451 14.1847 16.407 12.3842 16.407 9.28196C16.407 6.19815 15.0359 4.41619 12.7646 4.41619C10.4933 4.41619 9.12678 6.19354 9.12216 9.28196C9.12216 12.3796 10.484 14.18 12.7646 14.18ZM12.7646 12.7351C11.5874 12.7351 10.8487 11.5533 10.8533 9.28196C10.858 7.02912 11.592 5.84268 12.7646 5.84268C13.9418 5.84268 14.6758 7.02912 14.6804 9.28196C14.6804 11.5533 13.9464 12.7351 12.7646 12.7351Z"
                      fill="#808191"
                    />
                    <path
                      d="M0.669389 55.2457H5.17969V57H6.81392V55.2457H8.02344V53.8377H6.81392V47.5455H4.68111L0.669389 53.8839V55.2457ZM5.19815 53.8377H2.42365V53.7638L5.12429 49.4844H5.19815V53.8377ZM12.9931 57.18C15.2736 57.1847 16.6355 55.3842 16.6355 52.282C16.6355 49.1982 15.2644 47.4162 12.9931 47.4162C10.7218 47.4162 9.35529 49.1935 9.35067 52.282C9.35067 55.3796 10.7125 57.18 12.9931 57.18ZM12.9931 55.7351C11.8159 55.7351 11.0772 54.5533 11.0819 52.282C11.0865 50.0291 11.8205 48.8427 12.9931 48.8427C14.1703 48.8427 14.9043 50.0291 14.9089 52.282C14.9089 54.5533 14.1749 55.7351 12.9931 55.7351Z"
                      fill="#808191"
                    />
                    <path
                      d="M0.840199 101H7.32173V99.5689H3.20384V99.5043L4.83345 97.8469C6.67081 96.0835 7.17862 95.2248 7.17862 94.1584C7.17862 92.5749 5.89062 91.4162 3.98864 91.4162C2.11435 91.4162 0.784801 92.5795 0.784801 94.3754H2.41442C2.41442 93.4105 3.02379 92.8058 3.96555 92.8058C4.86577 92.8058 5.53516 93.3551 5.53516 94.2461C5.53516 95.0355 5.05504 95.5987 4.12251 96.5451L0.840199 99.7628V101ZM12.4091 101.18C14.6896 101.185 16.0515 99.3842 16.0515 96.282C16.0515 93.1982 14.6804 91.4162 12.4091 91.4162C10.1378 91.4162 8.77131 93.1935 8.76669 96.282C8.76669 99.3796 10.1286 101.18 12.4091 101.18ZM12.4091 99.7351C11.2319 99.7351 10.4933 98.5533 10.4979 96.282C10.5025 94.0291 11.2365 92.8427 12.4091 92.8427C13.5863 92.8427 14.3203 94.0291 14.3249 96.282C14.3249 98.5533 13.5909 99.7351 12.4091 99.7351Z"
                      fill="#808191"
                    />
                    <path
                      d="M4.33487 144.18C6.61541 144.185 7.97727 142.384 7.97727 139.282C7.97727 136.198 6.60618 134.416 4.33487 134.416C2.06357 134.416 0.697088 136.194 0.692472 139.282C0.692472 142.38 2.05433 144.18 4.33487 144.18ZM4.33487 142.735C3.15767 142.735 2.41903 141.553 2.42365 139.282C2.42827 137.029 3.16229 135.843 4.33487 135.843C5.51207 135.843 6.24609 137.029 6.25071 139.282C6.25071 141.553 5.51669 142.735 4.33487 142.735Z"
                      fill="#808191"
                    />
                  </svg>

                  <Button
                    type="primary"
                    block
                    style={{
                      backgroundColor: "#000",
                      margin: "2em 0",
                      height: "4em",
                      borderRadius: "1em",
                    }}
                  >
                    Withdraw Button
                  </Button>
                </Card>
              </Card>
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
              <Card
                title="2020 Goal"
                className={[classes.card, classes.goalsCard].join(" ")}
              ></Card>
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