import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import followers from './images/followers.png';
import star from './images/star.png';
import location from './images/location.png';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const firstAppLoad = "https://api.github.com/users/mrjoshuamartinez";
class App extends Component{
  constructor(){
    super();
    this.state = {
      login: firstAppLoad,
      user: '',
      followers: ''
    };
  };

  //Imported images
  imgFollowers = followers;
  imgStar = star;
  imgLocation = location;

  componentDidMount() {
    console.log("App has mounted.")
    axios
      .get(`${firstAppLoad}`)
      .then((user) => {
        this.setState({ user: user.data });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevState) {
    if (prevState.user !== this.state.user) {
      console.log("User has changed.");
    }
  }

  getFollowers = () => {
    const userFollowers = this.state.user.followers_url;
    console.log(userFollowers)
    axios
      .get(`${userFollowers}`)
      .then((followers) => {
        this.setState({ followers: followers.data });
      })
      .catch((err) => console.log(err));
    console.log("Getting followers :", this.state.followers.data)
  }


  render(){
    return (
      <div className="wrapper">
        <div className="title"><NavBar /></div>
        <div className="content">
          <div className="left-content">
            <div className="userTop">
              <img className="profilePic" src={this.state.user.avatar_url} alt="user" />
              <div className="name">{this.state.user.name}</div>
              <div className="login">{this.state.user.login}</div>
              <div className="bio">{this.state.user.bio}</div>
            </div>
            <div className="userBottom">
              <div className="userStats">
                {/* eslint-disable-next-line */}
                <div className="navStats" className="navStats" onClick={this.getFollowers}>
                  {/* eslint-disable-next-line */}
                  <a>
                    <span className="stats">
                      <img className="statImg" src={this.imgFollowers} alt="Followers" />
                      {this.state.user.followers} Followers  ·
                    </span>
                  </a>
                </div> 
                <div className="navStats" onClick={console.log("Following")}>
                  {/* eslint-disable-next-line */}
                  <a>
                    <span className="stats">
                      {this.state.user.following} Following  ·
                    </span>
                  </a>
                </div>
                <div className="navStats" onClick={console.log("Star")}>
                  {/* eslint-disable-next-line */}
                  <a>
                    <span className="stats">
                    <img className="statImg" src={this.imgStar} alt="Star" />{this.state.user.public_gists}
                    </span>
                  </a>
                </div>
              </div>
              <div className="location">
              <img className="locationImg" src={this.imgLocation} alt="Location" />{this.state.user.location}
              </div>
              <div className="location">
                {console.log(this.state.user.email)}
              </div>

            </div>
          </div>
          <div className="right-content">
            Right
          </div>
        </div>
          <Footer />
      </div>
    );
  }
}

export default App;
