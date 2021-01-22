import { createUseStyles } from "react-jss";

export const useCampaignStyles = createUseStyles({
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
