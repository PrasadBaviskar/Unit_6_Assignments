let myHeaders = new Headers();
let clientId = "38c7466f0d6f042";
myHeaders.append("Authorization", `Client-ID ${clientId}`);

var formdata = new FormData();

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://api.imgur.com/3/gallery/top/viral/1?showViral=true&mature=true&album_previews=true",
  requestOptions
)
  .then((response) => response.json())
  .then((result) => {
    var ogData = result.data;
    loadData(result.data);
  });

function loadData(data) {
  // getImg(data[0].images[0].link);
  let container = document.getElementById("allposts");
  //   data.forEach((element) => {
  //     console.log(element);
  //   });

  data.forEach(({ title, comment_count, ups, views, images }) => {
    let post = document.createElement("div"); // div
    post.classList = ["post"];

    let img_url = "https://via.placeholder.com/150";

    // if (images) {
    //   let img = images[0].link.split(".");
    //   if (img[img.length - 1] !== "mp4") {
    //     img_url = images[0].link;
    //   }
    // }
    // console.log(img_url);
    post.style.backgroundImage = `url(${img_url})`;

    let postBody = document.createElement("div");
    postBody.classList = ["postBody"];

    let row1 = document.createElement("div");

    let row2 = document.createElement("div");
    row2.classList = ["row2"];

    let post_title = document.createElement("div"); // post title
    post_title.classList = ["post_title"];
    post_title.innerHTML = title;

    let comments_count_div = document.createElement("div");

    let coment_icon = document.createElement("i");
    coment_icon.classList = ["fas fa-comment"];
    coment_icon.ariaHidden = "true";

    let comments_count = (document.createElement("p").innerHTML =
      comment_count);

    comments_count_div.append(coment_icon, comments_count);

    let up_icon = document.createElement("i");
    up_icon.classList = ["fas fa-arrow-up"];
    up_icon.ariaHidden = "true";

    let down_icon = document.createElement("i");
    down_icon.classList = ["fas fa-arrow-down"];
    down_icon.ariaHidden = "true";

    // fa fa-comment-o
    let post_ups_div = document.createElement("div");
    let post_ups = (document.createElement("p").innerHTML = ups);
    post_ups_div.classList = ["postUps"];
    post_ups_div.append(up_icon, post_ups, down_icon);

    let post_views_div = document.createElement("div");
    let post_views = (document.createElement("p").innerHTML =
      Math.floor(views / 1000) + "k");

    let eye_icon = document.createElement("i");
    eye_icon.classList = ["far fa-eye"];
    eye_icon.ariaHidden = "true";

    post_views_div.append(eye_icon, post_views);

    row1.append(post_title);
    row2.append(post_ups_div, comments_count_div, post_views_div);

    postBody.append(row1, row2);

    post.append(postBody);

    container.append(post);
    //     console.log(first);
  });
}

function getImg(imageHash) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Client-ID {{clientId}}");

  var formdata = new FormData();

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    // body: formdata,
    redirect: "follow",
  };

  fetch(`https://api.imgur.com/3/image/{${imageHash}}`, requestOptions)
    .then((response) => response)
    .then((result) => {
      console.log(result);
      let imgl = document.createElement("img");
      imgl.src = result;

      document.getElementById("ghe").innerHTML = imgl;
    })
    .catch((error) => console.log("error", error));
}
