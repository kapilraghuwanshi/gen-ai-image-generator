export const getRandom = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

export const promptIdeas = [
  "calico cat wearing a cosmonaut suit, 3d render, pixar style, 8k, high resolution",
  "An armchair in the shape of an avocado  3d render, pixar style, 8k, high resolution",
  "A 3D render of an astronaut walking in a green desert",
  "An abstract oil painting of a river",
  "A Shiba Inu dog wearing a beret and black",
  "Enchanted Forest",
  "Underwater Paradise",
  "Cosmic Dreams",
];

export const loaderMessages = [
  "Generative AI (GenAI) is a type of Artificial Intelligence that can create a wide variety of data, such as images, videos, audio, text, and 3D models.",
  "Artificial intelligence is intelligence demonstrated by machines, as opposed to intelligence displayed by humans or by other animals.",
  "Deep learning is part of a broader family of machine learning methods, which is based on artificial neural networks with representation learning. ",
  "Stable Diffusion is a type of latent diffusion model that can generate images from text.",
];
