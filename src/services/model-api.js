import axios from "axios";
import { secret } from "../secret";

const { apiKey } = secret;

export const fetchImages = async (
  promptCall,
  seedValue,
  dropDownValue,
  radioValue
) => {
  const options = {
    method: "POST",
    url: "https://api.segmind.com/v1/sd2.1-txt2img",
    headers: {
      "x-api-key": `${apiKey}`,
      "Content-Type": "application/json",
    },
    responseType: "arraybuffer",
    data: {
      prompt: promptCall,
      seed: seedValue,
      scheduler: dropDownValue,
      num_inference_steps: radioValue,
      negative_prompt: "NONE",
      samples: "1",
      guidance_scale: "7.5",
      strength: "1",
      shape: 512,
    },
  };

  try {
    const response = await axios.request(options);
    // convert raw blob to actual image format
    const imageBlob = new Blob([response.data], { type: "image/jpeg" });
    // console.log(response, imageBlob);
    return imageBlob;
  } catch (error) {
    console.error("Error while fecthing Gen AI model API", error);
  }
};
