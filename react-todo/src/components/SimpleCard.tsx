import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Content } from "../class/Content";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//     padding: "12px",
//     marginBottom: "20px",
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)",
//   },
//   title: {
//     fontSize: 30,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

interface Props {
  info: Content;
  onRemove(id: number): void;
  onUpdate(id: number, name: string, phone: string): void;
}

interface State {
  editing: boolean;
  name: string;
  phone: string;
}

export class SimpleCard extends React.Component<Props, State> {
  // classes = useStyles();

  state = {
    editing: false,
    name: "",
    phone: "",
  };

  handleRemove = (): void => {
    const { info, onRemove } = this.props;
    onRemove(info.getId);
  };

  handleUpdate = (): void => {
    const { info, onUpdate } = this.props;
    const { name, phone } = this.state;

    if (this.state.editing) {
      onUpdate(info.getId, name, phone);
    } else {
      this.setState({
        name: info.getName,
        phone: info.getContent,
      });
    }

    this.setState({
      editing: !this.state.editing,
    });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState(({
      [e.target.name]: e.target.value,
    } as unknown) as Pick<State, keyof State>);
  };

  render() {
    const { info } = this.props;
    const { editing, name, phone } = this.state;
    const style = {
      root: {
        minWidth: 275,
        padding: "12px",
        marginBottom: "20px",
        marginRight: "20px",
        marginLeft: "20px",
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
            {info.getName}
          </Typography>
          <Typography variant="body2" component="p">
            {info.getContent}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary">
            Detail
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default SimpleCard;
