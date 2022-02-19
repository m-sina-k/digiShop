// destructuring key values from a complex response
export const formatImages = (items) => {
    let tempImages = items.map((item) => {
      const imageUrl = item.fields.image.fields.file.url;
      const id = item.sys.id;
      const image = {...item.fields, image:imageUrl, id };
      return image;
    });
    return tempImages;
  };