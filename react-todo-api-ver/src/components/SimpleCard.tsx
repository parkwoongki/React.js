import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import UpdateButtonDialog from "./UpdateButtonDialog";
import DeleteButtonDialog from "./DeleteButtonDialog";
import { KContent } from "../class/KContent";

interface Props {
  info: KContent;
  onRemove(key: string): void;
  onUpdate(idkey: string, name: string, phone: string): void;
}

interface State {
  editing: boolean;
  name: string;
  phone: string;
}

export class SimpleCard extends React.Component<Props, State> {
  state = {
    editing: false,
    name: "",
    phone: "",
  };

  render() {
    const { info, onRemove, onUpdate } = this.props;
    const style = {
      root: {
        minWidth: 275,
        padding: "12px",
        marginBottom: "10px",
        marginRight: "10px",
        marginLeft: "10px",
      },
      bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
      },
      title: {
        fontSize: 30,
      },
      pos: {
        marginBottom: 12,
      },
    };
    return (
      <Card style={style.root}>
        <CardContent>
          <Typography style={style.title} variant="h5" component="h2">
            {info.getName}
          </Typography>
          <Typography style={style.pos} color="textSecondary">
            {info.getDate}
          </Typography>
          <Typography variant="body2" component="p">
            {info.getContent}
          </Typography>
        </CardContent>
        <CardActions>
          <UpdateButtonDialog
            info={info}
            onUpdate={onUpdate}
          ></UpdateButtonDialog>
          <DeleteButtonDialog
            info={info}
            onRemove={onRemove}
          ></DeleteButtonDialog>
        </CardActions>
      </Card>
    );
  }
}

export default SimpleCard;
