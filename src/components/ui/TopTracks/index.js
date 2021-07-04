import React from 'react';
import { connect } from 'react-redux';

const TopTracks = ({ topTracks }) => {
    // List items for the last numbers
  return (
    <>
      <div className="ml-12">
        {Object.keys(topTracks).length > 0 ? (
          <>
            <p className="title-card" > Most listened songs </p>
            <ul className="lastnumbers-card">
              <div>
                {topTracks.items.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <li>
                        <a
                          target="_blank"
                          href={item.external_urls.spotify}
                          rel="noopener noreferrer"
                          className="card-image-link">
                          <div className="items ">
                            <p className=" flex justify-center align-middle p-8 text-3xl font-semibold text-gray-400">
                              {index + 1}
                            </p>
                            <img
                              src={item.album.images[2].url}
                              alt={item.album.name}
                              width={item.album.images[2].width}
                              height={item.album.images[2].height}
                            />
                            <div className="pl-8">
                              <p className=" text-2xl font-semibold pb-2 ">
                                {item.name}
                              </p>
                              <div className="flex">
                                {item.artists.map((artist, index) => (
                                  <p key={artist.name} className=" text-xl pr-2 text-gray-400 ">
                                    {artist.name}
                                    {item.artists[index + 1] === undefined
                                      ? ''
                                      : ','}{' '}
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
          </>
        ) : (
          ''
        )}
      </div>
    </>
  );
};
export default connect()(TopTracks);
