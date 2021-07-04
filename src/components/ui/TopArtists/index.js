import React from 'react';
import { connect } from 'react-redux';

const TopAlbums = ({ topAlbums,profile }) => {
  // List items for the Top Albums / Artists
  console.log(profile);

  return (
    <>
      <div className="ml-12">
        {Object.keys(topAlbums).length > 0 ? (
          <>
            <p className="title-card">Most listened artists </p>
            <ul className="lastnumbers-card">
              <div>
                {topAlbums.items.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <li className="bg-transparent cursor-pointer hover:bg-gray-800 p-0.5">
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
                              src={item.images[2].url}
                              alt={item.name}
                              width={item.images[2].width}
                              height={item.images[2].height}
                            />
                            <div className="pl-8">
                              <p className=" text-2xl font-semibold pb-2 ">
                                {item.name}
                              </p>
                              <div className="flex">
                                <p className=" text-xl pr-2  text-gray-400">
                                  {item.genres.map((genre, index) => {
                                    return item.genres[index + 1] === undefined
                                      ? `${genre}`
                                      : `${genre}, `;
                                  })}
                                </p>
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

            <div className="timespent" >
              <p className="text-2xl text-gray-400 font-normal pb-2">Total Followers</p>
              <p className="text-5xl mt-2 font-semibold">
                  {profile.followers.total}
              </p>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </>
  );
};
export default connect()(TopAlbums);
