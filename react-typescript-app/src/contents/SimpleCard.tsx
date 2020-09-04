import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: "12px",
    marginBottom: "20px",
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
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          제목
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          부제목
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, mollitia
          itaque eligendi maxime quaerat, placeat cumque quam illum atque quis
          temporibus, aspernatur qui modi eaque molestias minus laudantium
          optio. Praesentium!
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </CardActions>
    </Card>
  );
}
