var images = document.images,
    data = [];
for (var i = 0, len = images.length; i < len; i++) {
  data.push(images[i].src);
  console.log(data[i]);
}