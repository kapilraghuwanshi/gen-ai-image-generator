import React from "react";

const RecentResults = (props) => {
  console.log("RecentResults", props.promptQuery, props.imageResult);

  const recentImages = JSON.parse(localStorage.getItem("genAIRecentKey"));
  console.log("recentImages", recentImages);

  if (
    props.promptQuery &&
    props.imageResult &&
    recentImages &&
    !recentImages.some((e) => e.name === props.promptQuery)
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
  } else if (props.promptQuery && props.imageResult) {
    const recentImagesStored = [];
    recentImagesStored.push({
      src: props.imageResult,
      name: props.promptQuery,
    });
    localStorage.setItem("genAIRecentKey", JSON.stringify(recentImagesStored));
  }

  return (
    <>
      {recentImages ? (
        <div className="recentImageBox">
          <label>Recent</label>
          {recentImages.map((value) => (
            <>
              <div key={value}>
                <img className="recentImage" src={value.src} alt={value.name} />
              </div>
              <div style={{ width: 30 }}>{value.name}</div>
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
