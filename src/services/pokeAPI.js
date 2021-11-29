export const getAPIData = (fetchUrl) => {
  return fetch(fetchUrl)
    .then(res => res.json())
    .then(data => {
      return {
        name: data.name,
        image: data.sprites.front_default,
        height: data.height,
        weight: data.weight,
        types: data.types
      };
    });
};
