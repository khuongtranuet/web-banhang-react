import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { alertOff } from "../../actions/index";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    marginTop: "20px",
  },
}));

export default function Alerts(props) {
  const alertList = useSelector((state) => state.alerts);
  // console.log(alertList.alertShow);
  const classes = useStyles();
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(alertOff());
  }

  if (alertList.alertShow === false) {
    return null;
  }
  return (
    <div className={classes.root}>
      {/* variant="filled" */}
      <Alert
        severity={props.type}
        style={{ fontSize: "15px" }}
        onClose={() => {
          handleClose();
        }}
      >
        {props.content}
      </Alert>
    </div>
  );
}
