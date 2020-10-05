import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import followers from './images/followers.png';
import star from './images/star.png';
import location from './images/location.png';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Followers from './components/Followers';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: '',
      repos: '',
      followers: '',
      following: '',
      starred: ''
    };
  };

  //Imported images
  imgFollowers = followers;
  imgStar = star;
  imgLocation = location;

  componentDidMount() {
    const apiOne = "https://api.github.com/users/mrjoshuamartinez";
    const apiTwo = "https://api.github.com/users/mrjoshuamartinez/repos";
    const apiThree = "https://api.github.com/users/mrjoshuamartinez/followers";
    const apiFour = "https://api.github.com/users/mrjoshuamartinez/following";
    const apiFive = "https://api.github.com/users/mrjoshuamartinez/starred";
    const firstUserLoad = axios.get(apiOne);
    const firstRepoLoad = axios.get(apiTwo);
    const firstFollowersLoad = axios.get(apiThree);
    const firstFollowingLoad = axios.get(apiFour);
    const firstStarredLoad = axios.get(apiFive);
    console.log("App has mounted.")
    axios
      .all([firstUserLoad, firstRepoLoad, firstFollowersLoad, firstFollowingLoad, firstStarredLoad])
      .then(
        axios.spread((...responses) => {
          const responseUserLoad = responses[0];
          this.setState({user: responseUserLoad.data});
          const responseRepoLoad = responses[1];
          this.setState({repos: responseRepoLoad.data});
          const responseFollowersLoad = responses[2];
          this.setState({followers: responseFollowersLoad.data});
          const responseFollowingLoad = responses[3];
          this.setState({following: responseFollowingLoad.data});
          const responseStarredLoad = responses[4];
          this.setState({starred: responseStarredLoad.data});

          // use/access the results
          console.log("User API: ", responseUserLoad.data);
          console.log("Repo API: ", responseRepoLoad.data);
          console.log("Followers API: ", responseFollowersLoad.data);
          console.log("Following API: ", responseFollowingLoad.data);
          console.log("Starred API: ", responseStarredLoad.data);
        })
      )
      .catch(errors => {
        // react on errors.
        console.error(errors);
      }
    );
  }
   

  getFollowers = () => {

  }

  getFollowing = () => {

  }

  getStarred = () => {

  }
  
  componentDidUpdate(prevState) {
    
    if (prevState.user !== this.state.user) {
      console.log("User has changed.");
    }

    if (prevState.followers !== this.state.followers) {
      console.log("Followers Changed: ", this.dataFollow)
    }
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
                <div className="navStats" onClick={this.getFollowing}>
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
            </div>
          </div>
          <div className="right-content">
            {/* <Followers followers={this.state.followers} /> */}
          </div>
        </div>
          <Footer />
      </div>
    );
  }
}

export default App;
