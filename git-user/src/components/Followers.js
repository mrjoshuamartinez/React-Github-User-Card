import React, { Component } from 'react';
import FollowersList from './FollowersList';

class Followers extends Component{
    constructor(props){
        super(props);
        this.setState({...this.state,
        followers: props.followers})
        this.state = {
          user: '',
          followers: '',
          following: ''
        };
      };
    // console.log(followersArray);
    // const prevList = props => {
    //     const userFollowers = props;
    //     console.log(userFollowers);
    //     this.setState({
    //         ...this.state,
    //             user: userFollowers
    //     });
    // }
    render(props){
    return(
    <div>
        <FollowersList followers={props.followers} login={this.login}/>
        {/* {followersArray.map((data, item) => (
        <FollowersList 
            key={item} 
            login={data.login} 
            bio={data.bio} 
            avatar={data.avatar_url}/>
        ))} */}
    </div>
    );
    }
};

export default Followers;