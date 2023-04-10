### Notes ###

Part 2 - the back end, of a tutorial I finished to develop the front and back ends then the connection between both sides.

Made it up to 6.17.00 but it's not working.
I think I'll start again and use replit and follow his steps exactly as it's not clear how to do it locally with this tutorial.

I did that and works fine, just need to find out how to get it on local. For the moment it's functioning well on Replit and all the API info is hidden!

CRUD commands:

curl -X POST https://backend-api-for-fullstack-movie-site.td6904.repl.co/api/v1/reviews/new -H "Content-Type: application/json" -d '{"movieId": 13, "user": "jimmyagain", "review": "really rubbish"}'

curl -X GET https://backend-api-for-fullstack-movie-site.td6904.repl.co/api/v1/reviews/movie/12

curl -X PUT https://backend-api-for-fullstack-movie-site.td6904.repl.co/api/v1/reviews/6411b72c7ea10e6a5b0e05ba -H "Content-Type: application/json" -d '{"user": "jimmyagain", "review": "horrible"}'