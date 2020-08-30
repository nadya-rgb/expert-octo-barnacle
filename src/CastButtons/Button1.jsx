import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: 'red',
    background: 'white',
    border: "1px solid red",
    borderRadius: '20px',
    '&:hover': {
      background: 'red',
      color: 'white',
      boxShadow: 'inset red 3px white',
      transition: 'All 2s ease',

    }
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>

      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"

        className={classes.button}
        endIcon={<SendIcon />}
      >
        Узнать больше
      </Button>
      <Icon />
    </div>
  );
}
