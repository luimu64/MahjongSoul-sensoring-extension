const originalCreateObjectURL = URL.createObjectURL;

URL.createObjectURL = function (obj) {
  if (obj instanceof Blob || obj instanceof File) {
    if (obj.type.startsWith('image/') && obj.size > 200000) {
      return originalCreateObjectURL(new Blob([], { type: obj.type }));
    }
  }

  return originalCreateObjectURL(obj);
};
