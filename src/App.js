import React from "react";
import Main from "./Main";
import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import Context from "./store/Context";

function App() {
  const {state} = React.useContext(Context);

  const theme = createMuiTheme({
    palette: {
      type: state.settings.darkMode == 1 ? 'dark' : 'light',
      primary: {
        main: state.settings.darkMode == 1 ? red[400] : red[600],
      },
      secondary: {
        main: grey[700],
      },
    },
  });

  return (
    <Router>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
    </Router>
  );
}

export default App;
