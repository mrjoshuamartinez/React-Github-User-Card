import React from 'react';

const FollowersList = props => {
    return(
        <div>
            <p>{props.login}</p>
            <p>{props.avatar_url}</p>
            <p>{props.bio}</p>
        </div>
    );
};

export default FollowersList;