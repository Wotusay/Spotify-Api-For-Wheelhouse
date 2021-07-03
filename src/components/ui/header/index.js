import React from 'react';
const Header = () => {
  // Header component for the home page
  return (
    <>
      <div className="grid gap-16 mb-16">
        <h1 className="font-bold text-7xl mt-5">
          Spotify stats
        </h1>

        <p className=" text-gray-200 text-3xl">
          The place where u will see all your{' '}
          <strong className="text-white font-semibold opacity-100"> statistics!</strong>
        </p>
      </div>
    </>
  );
};
export default Header;
