exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "first post",
        content: "dsfsd",
        imgUrl: "images/duck.jpg",
        creator: {
          name: "",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  //create post in db
  res.status(201).json({
    message: "Post created succefully",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
