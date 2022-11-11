const arrayTransform = (object) => {
  const entries = Object.entries(object);
  return entries.map((pair) => ({ ...pair[1][0], item_id: pair[0] }));
};

export default arrayTransform;
