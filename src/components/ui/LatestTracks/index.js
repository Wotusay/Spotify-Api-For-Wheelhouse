import React from 'react';
import { connect } from 'react-redux';
import TimeSpend from '../TimeSpend';

const LatestTracks = ({ lastNumbers }) => {
  // List items for the last numbers
  return (
    <>
      <div className="ml-12">
        {Object.keys(lastNumbers).length > 0 ? (
          <>
            <p className="title-card">Last listened songs </p>
            <ul className="lastnumbers-card">
              <div>
                {lastNumbers.items.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <li className="bg-transparent cursor-pointer hover:bg-gray-800 p-0.5">
                        <a
                          target="_blank"
                          href={item.track.external_urls.spotify}
                          rel="noopener noreferrer"
                          className="card-image-link">
                          <div className="items ">
                            <p className=" flex justify-center align-middle p-8 text-3xl font-semibold text-gray-400">
                              {index + 1}
                            </p>
                            <img
                              src={item.track.album.images[2].url}
                              alt={item.track.album.name}
                              width={item.track.album.images[2].width}
                              height={item.track.album.images[2].height}
                            />
                            <div className="pl-8">
                              <p className=" text-2xl font-semibold pb-2 ">
                                {item.track.name}
                              </p>
                              <div className="flex">
                                {item.track.artists.map((artist, index) => (
                                  <p
                                    key={artist.name}
                                    className=" text-xl pr-2  text-gray-400">
                                    {artist.name}
                                    {item.track.artists[index + 1] === undefined
                                      ? ''
                                      : ','}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </React.Fragment>
                  );
                })}
              </div>
            </ul>
            <TimeSpend lastNumbers={lastNumbers} />
          </>
        ) : (
          ''
        )}
      </div>
    </>
  );
};
export default connect()(LatestTracks);
