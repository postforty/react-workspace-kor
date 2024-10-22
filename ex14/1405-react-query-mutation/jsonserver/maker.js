const fs = require("fs");

const jsonFile = fs.readFileSync("./data.json", "utf8");
const jsonData = JSON.parse(jsonFile);

const posts = jsonData.posts;
const newPosts = posts.map((user) => ({ ...user, id: "" + user.id }));

const comments = jsonData.comments;
const newComments = comments.map((user) => ({ ...user, id: "" + user.id }));

const newData = { posts: newPosts, comments: newComments };

fs.writeFileSync("./newData.json", JSON.stringify(newData));
