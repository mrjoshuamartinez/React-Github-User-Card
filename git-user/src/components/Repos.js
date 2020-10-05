import React from 'react';

const Repos = props => {
    return(
        <div>
            <div>[0] name: - [1] html_url</div>
            <div>Forked from: [1] parent - name [2] html_url</div>
            <div>[2] description</div>
            <div>[2] forks</div>
        </div>
    );
};

export default Repos;