import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { AppBar } from "@material-ui/core";

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
    interval: {
      marginBottom: "16px",
    },
  })
);

interface Props {
  onCreate(name: string, phone: string): void;
}

export const BottomAppBar: React.FunctionComponent<Props> = ({ onCreate }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
  });
  const { name, phone } = form;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onCreate(name, phone);
    setForm({
      name: "",
      phone: "",
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Fab
          color="secondary"
          aria-label="add"
          className={classes.fabButton}
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
      </AppBar>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">글쓰기</DialogTitle>
          <DialogContent>
            <DialogContentText>오늘 해야할 일을 적어보세요.</DialogContentText>
            <TextField
              name="name"
              value={name}
              className={classes.interval}
              autoFocus
              margin="dense"
              id="name"
              label="제목"
              placeholder="할 일의 제목을 입력하세요!"
              type="text"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              name="phone"
              className={classes.interval}
              id="outlined-multiline-static"
              label="세부사항"
              multiline
              rows={6}
              placeholder="할 일의 내용을 자세히 입력해보아요!"
              variant="outlined"
              fullWidth
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" variant="contained">
              취소
            </Button>
            <Button
              onClick={handleClose}
              color="secondary"
              variant="contained"
              type="submit"
            >
              저장
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
};

export default BottomAppBar;
