import classes from "*.module.css";
import { Card } from "antd";
import { useCampaignStyles } from "./campaign-styles";

interface GoalsCardProps {
  classes?: Record<string, string>;
}

export default function GoalsCard(props: GoalsCardProps) {
  const classes = useCampaignStyles();
  return (
    <Card
      title="2020 Goal"
      className={[classes.card, classes.goalsCard].join(" ")}
    ></Card>
  );
}
