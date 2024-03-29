const load = async function () {
  let images :Record<string, () => Promise<unknown>>;
  try {
    images = import.meta.glob("~/assets/images/*");
  } catch (e) {}
  return images;
};

let _images;

export const getAllImages = async () => {
  _images = _images || load();
  return await _images;
};
