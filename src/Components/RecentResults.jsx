import React, { useEffect, useState } from "react";
import historyIcon from "../images/history.png";

const RecentResults = (props) => {
  //console.log("RecentResults", props.promptQuery, props.imageResult);

  const recentImages = JSON.parse(localStorage.getItem("genAIRecentKey"));
  //console.log("recentImages", recentImages);
  const [recentImagesStored, setRecentImagesStored] = useState([]);

  useEffect(() => {
    if (
      props.promptQuery &&
      props.imageResult &&
      recentImages &&
      !recentImages.some(
        (e) => e.name === props.promptQuery && e.src === props.imageResult
      )
    ) {
      if (recentImages.length === 5) {
        recentImages.shift();
        recentImages.push({
          src: props.imageResult,
          name: props.promptQuery,
        });
      } else {
        recentImages.push({
          src: props.imageResult,
          name: props.promptQuery,
        });
      }
      localStorage.setItem("genAIRecentKey", JSON.stringify(recentImages));
      setRecentImagesStored(recentImages);
    } else if (props.promptQuery && props.imageResult && !recentImages) {
      recentImagesStored.push({
        src: props.imageResult,
        name: props.promptQuery,
      });
      localStorage.setItem(
        "genAIRecentKey",
        JSON.stringify(recentImagesStored)
      );
      setRecentImagesStored(recentImagesStored);
    }
  }, [props.promptQuery, props.imageResult]);

  return (
    <>
      <div style={{ marginTop: 30 }}>
        Recent <img src={historyIcon} width={15} height={15} />{" "}
      </div>
      {recentImagesStored ? (
        <div className="recentImageBox">
          {recentImagesStored.map((value) => (
            <>
              <div key={value}>
                <img className="recentImage" src={value.src} alt={value.name} />
              </div>
            </>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default RecentResults;
