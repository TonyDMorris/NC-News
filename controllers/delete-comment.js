const removeComment = require("../models/remove-comment");
const deleteComment = (req, res, next) => {
  const { comment_id } = req.params;
  removeComment(comment_id)
    .then(check => {
      if (check !== 1) {
        const err = { msg: "no comment by that id", status: 400 };
        return Promise.reject(err);
      }
      res.status(202).send();
    })
    .catch(next);
};

module.exports = deleteComment;
