### Notes ###

Part 2 - the back end, of a tutorial I finished to develop the front and back ends then the connection between both sides.

Made it up to 6.17.00 but it's not working.
I think I'll start again and use replit and follow his steps exactly as it's not clear how to do it locally with this tutorial.

I did that and works fine, just need to find out how to get it on local. For the moment it's functioning well on Replit and all the API info is hidden!

Video tutorial followed - https://www.youtube.com/watch?v=nu_pCVPKzTk Full Stack Web Development for Beginners (Full Course on HTML, CSS, JavaScript, Node.js, MongoDB)

CRUD commands:

curl -X POST https://backend-api-for-fullstack-movie-site.td6904.repl.co/api/v1/reviews/new -H "Content-Type: application/json" -d '{"movieId": 13, "user": "jimmyagain", "review": "really rubbish"}'

curl -X GET https://backend-api-for-fullstack-movie-site.td6904.repl.co/api/v1/reviews/movie/12

curl -X PUT https://backend-api-for-fullstack-movie-site.td6904.repl.co/api/v1/reviews/6411b72c7ea10e6a5b0e05ba -H "Content-Type: application/json" -d '{"user": "jimmyagain", "review": "horrible"}'

When trying to connect front and back via local I didn't have much chance. One thing I had to do was loop over the data as an object rather than an arrary in the front movie.js file. The code from like 36 - 58:

//Loop over data object
function returnReviews(url) {
  fetch(url + "movie/" + movieId)
    .then(res => res.json())
    .then(function (data) {
      console.log(data);
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const review = data[key];
          const div_card = document.createElement("div");
          div_card.innerHTML = `
            <div class="row">
              <div class="column">
                <div class="card" id="${review._id}">
                  <p><strong>Review: </strong>${review.review}</p>
                  <p><strong>User: </strong>${review.user}</p>
                  <p><a href="#" onclick="editReview('${review._id}', '${review.review}', '${review.user}')">✏️</a> <a href="#" onclick="deleteReview('${review._id}')">🗑️</a></p>
                </div>
              </div>
            </div>
          `;
          main.appendChild(div_card);
        }
      }
    });
}
