import React from 'react';

const CurrentlyPlayingCard = ({currentlyPlaying}) => {
    // currentlyPlaying card that updates after every 3000ms 
  return (
    <>
      <div className="timespent">
        <p className="text-2xl text-gray-400 font-normal">Currently Playing</p>
        {Object.keys(currentlyPlaying).length > 0 ? (
          <>
            <div className=" flex gap-8 items-center mt-4 ">
              <img
                src={currentlyPlaying.item.album.images[2].url}
                alt={currentlyPlaying.item.album.name}
                width={currentlyPlaying.item.album.images[2].width}
                height={currentlyPlaying.item.album.images[2].height}
              />
              <div>
                <p className="text-2xl font-semibold">
                  {currentlyPlaying.item.name}
                </p>
                <div className="flex">
                  {currentlyPlaying.item.artists.map((artist, index) => (
                    <p
                      key={artist.name}
                      className=" text-xl pr-2 text-gray-400 ">
                      {artist.name}
                      {currentlyPlaying.item.artists[index + 1] === undefined
                        ? ''
                        : ','}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : <p className="text-2xl font-semibold"> Nothing playing </p>}
      </div>
    </>
  );
};

export default CurrentlyPlayingCard;
