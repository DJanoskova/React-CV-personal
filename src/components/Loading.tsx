import React from 'react';

const Loading = () => {
  return (
    <div className="loading">
      <span className="loading-text">
        This site is hosted on heroku.
        <br />
        Please be patient while it loads, it can take about 10 seconds.
      </span>
    </div>
  );
};

export default Loading;
