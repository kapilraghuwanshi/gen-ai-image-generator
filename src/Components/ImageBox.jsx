import React from "react";

const ImageBox = (props) => {

  return (
    <>
      {props.imageResult ? (
        <div>
          <div className="imageBox">
            <img src={props.imageResult} alt={props.promptQuery} loading="lazy"/>
          </div>
          <div>
            <a download={props.promptQuery} href={props.imageResult}>
              Download
            </a>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ImageBox;
