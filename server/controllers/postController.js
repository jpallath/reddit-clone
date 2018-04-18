import db from "./../models";
const postController = {};

postController.post = (req, res) => {
  const { title, text, link, userId } = req.body;

  const post = new db.Post({
    title,
    text,
    link,
    _creator: userId
  });

  //Validation

  post
    .save()
    .then(newPost => {
      return res.status(200).json({
        success: true,
        data: newPost
      });
    })
    .catch(err => {
      return res.status(500).json({
        message: "object not made"
      });
    });
};

postController.getAll = (req, res) => {
  db.Post.find({})
    .populate({
      path: "_creator",
      select: "username createdAt -_id"
    })
    .populate({
      path: "_comments",
      select: "text createdAt _creator",
      match: { isDeleted: false }
    })
    .then(posts => {
      return res.status(200).json({
        success: true,
        data: posts
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "nothing was retrievable"
      });
    });
};

export default postController;
