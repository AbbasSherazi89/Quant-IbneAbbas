import React from "react";

const BgVideo = () => {
  return (
    <>
      <div className="container-fluid video-container">
        <div className="row">
          <div className="col-md-6 future-finance ps-5 pb-4">
            <h1 className="future-h1">The future of finance.</h1>
            <h1 className="today-h1">Today.</h1>
            <button className="btn btn-outline-danger fw-bold text-black">
              Get Started
            </button>
          </div>

          <div className="col-md-6">
            <video
              className="object-fit responsivevideo lazy entered loaded"
              autoPlay
              loop
              muted
              width='100%'
              src="assets/video.mp4"
             />
          </div>
        </div>
      </div>
    </>
  );
};

export default BgVideo;
