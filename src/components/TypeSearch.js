import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function SimpleSelect(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={props.type} onChange={props.handleChange}>
          <MenuItem value={10}>Fire</MenuItem>
          <MenuItem value={11}>Water</MenuItem>
          <MenuItem value={12}>Grass</MenuItem>
          <MenuItem value={13}>Electric</MenuItem>
          <MenuItem value={15}>Ice</MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  );
}
