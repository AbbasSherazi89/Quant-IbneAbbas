import React from "react";

const BgVideo = () => {
  return (
    <>
      <div className="container py-5 video-container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="future-h1">The future of finance.</h1>
            <h1 className="today-h1">Today.</h1>
            <button className="btn btn-outline-danger fw-bold text-black">
              Get Started
            </button>
          </div>

          <div className="col-md-6">
            <video
              className="object-fit responsivevideo lazy entered loaded"
              autoplay
              muted
              controls
              width="100%"
            >
              <source src="assets/video.mp4" type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default BgVideo;
