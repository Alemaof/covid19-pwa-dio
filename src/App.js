import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import GlobalStyle from 'commons/styles/global-style';
import React from 'react';
import Main from './containers/Main'

function App() {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <CssBaseline />
        <GlobalStyle />
        <Main />
      </StylesProvider>
    </div>
  );
}

export default App;
