import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { KContent } from "../class/KContent";

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
  info: KContent;
  onUpdate(key: string, name: string, phone: string): void;
}

export const BottomAppBar: React.FunctionComponent<Props> = ({
  info,
  onUpdate,
}) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    name: info.getName,
    phone: info.getContent,
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
    setOpen(false);
    onUpdate(info.getKey, name, phone);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Modify
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">수정하기</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>오늘 할 일을 수정해보세요.</DialogContentText> */}
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
              value={phone}
              id="outlined-multiline-static"
              label="세부사항"
              multiline
              rows={2}
              placeholder="할 일의 내용을 수정해보아요!"
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
              onClick={handleSubmit}
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
