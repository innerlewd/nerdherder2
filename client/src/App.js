import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import App from './components/App;'


ReactDOM.render(<App />, document.querySelector('#app'));