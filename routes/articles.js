const articlesRouter = require("express").Router();
const getArticles = require("../controllers/get-articles");
const patchVotes = require("../controllers/patchVotes");
const getArticleComments = require("../controllers/get-article-comments");
const { methodNotAllowed } = require("../errors/index");
articlesRouter.route("/").get(getArticles);
articlesRouter
  .route("/:article_id")
  .get(getArticles)
  .patch(patchVotes)
  .all(methodNotAllowed);

articlesRouter.route("/:article_id/comments").get(getArticleComments);
module.exports = articlesRouter;
