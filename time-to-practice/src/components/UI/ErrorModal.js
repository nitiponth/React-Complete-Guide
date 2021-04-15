import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import { Fragment } from "react";

const ErrorModal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onClicked} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClicked}>Okay</Button>
        </footer>
      </Card>
    </Fragment>
  );
};

export default ErrorModal;
