import React from 'react';

const FollowerCard = ({profile}) => {
    // Follower card 
    return(
        <div className="timespent" >
        <p className="text-2xl text-gray-400 font-normal pb-2">Total Followers</p>
        <p className="text-5xl mt-2 font-semibold">
            {profile.followers.total}
        </p>
      </div>
    )
}

export default FollowerCard;