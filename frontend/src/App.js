import React from 'react';
// custom fonts
import './fonts.css';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// custom css styles
import './App.css';
// imported components
import SocialBarComponent from './components/SocialBarComponent';
import FooterComponent from './components/FooterComponent';
import HeaderView from './views/HeaderView';
import BlogView from './views/BlogView';
import Viz from './views/vis';

const App = () => {
  document.title = "🔌🔋EV's ON PANAMA";
  return (
    <div className="container-fluid px-0">
      <HeaderView />
      <BlogView />
      <Viz />
      <FooterComponent />
      {/* <SocialBarComponent /> */}
    </div>
  );
}

export default App;
