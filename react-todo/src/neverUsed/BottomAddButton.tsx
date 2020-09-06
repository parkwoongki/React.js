import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: "auto",
      bottom: 0,
    },
    fabButton: {
      position: "absolute",
      zIndex: 1,
      bottom: "2rem",
      right: "2rem",
      margin: "0 auto",
    },
  })
);

interface Props {
  onChangePage(mode: string): void;
}

export const BottomAppBar: React.FunctionComponent<Props> = ({
  onChangePage,
}) => {
  const classes = useStyles();

  const handleChangeMode = (e: any) => {
    e.preventDefault();
    onChangePage("create");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Fab
          color="secondary"
          aria-label="add"
          className={classes.fabButton}
          onClick={handleChangeMode}
        >
          <AddIcon />
        </Fab>
      </AppBar>
    </React.Fragment>
  );
};

export default BottomAppBar;
