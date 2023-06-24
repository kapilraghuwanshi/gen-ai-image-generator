import React from "react";

const ImageBox = (props) => {
  console.log("ImageBox", props.promptQuery, props.imageResult);

  return (
    <>
      {props.imageResult ? (
        <div>
          <div className="imageBox">
            <img src={props.imageResult} alt={props.promptQuery} />
          </div>
          <div>
            <a download={props.promptQuery} href={props.imageResult}>
              Download
            </a>
          </div>

          <label>⚡️ Blazing fast results</label>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ImageBox;
