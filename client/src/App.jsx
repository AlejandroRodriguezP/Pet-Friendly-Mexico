import React from 'react';
import ReactDOM from 'react-dom';

// import {BrowserRouter, Route} from 'react-router-dom';
// import {MuiThemeProvider} from 'material-ui/styles/MuiThemeProvider';
// import PrimaryLayout from "./PrimaryLayout.jsx";
// import Home from "./pages/Home.jsx";
import Search from './home/Search.jsx'
import Header from './home/Header.jsx'


class App extends React.Component {

  render() {
    return (


      <div>
        <div>
          <Search />
        </div>
        <div>
          <Header />
        </div>
        <div>
          <footer className="foo">Hi! What are you looking for?</footer>
        </div>
      </div>
      // <BrowserRouter>
      //   <MuiThemeProvider>
      //     <Route path="/" component={PrimaryLayout} />
      //   </MuiThemeProvider>
      // </BrowserRouter>
)}
};


ReactDOM.render(<App />, document.getElementById('app'));