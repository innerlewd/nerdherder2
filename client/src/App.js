import React from 'react';
// import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#e8f5e9",
      main: "#66bb6a",
    },
    secondary: {
      light: "#fafafa",
      main: "#DC143C",
      dark: "#e0e0e0",
    },
  },
});

class App extends React.Component {
  render() {
    return (
      <div name ='app'>
        <MuiThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Butt Stuff
      </Button>
      </MuiThemeProvider>
      
      </div>
    );
  }
}
export default App;