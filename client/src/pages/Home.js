import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MainContents from '../components/homeComponents/MainContents';
import './Pages.css';

const Home = (props) => {
  return (
    <>
      <div className="container mainWrapper">
        <Header />
        <div>
          <h3 className="my-5 pageTitle">Welcome to COVID-19 Tracker</h3>
          <h5 className="text-center">If you are a registered member, please login. Otherwise sign up to register.</h5>

          <hr />
        </div>
        <MainContents login={props.login} signUpUser={props.signUpUser} />
        <Footer />
      </div>

    </>
  )
}
export default Home; 