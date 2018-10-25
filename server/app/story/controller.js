const utilities = require("../../utilities");
const repository = require("./repository");
// const logger = console

exports.create = async (req, res) => {
  try {
    const {post_title, post_text, hanesst_id, username, post_url} = req.body
    let story = {};

    story.title = post_title
    story.content = post_text
    story.storyId = hanesst_id
    story.author_id = username // TODO get _id of user here to link it with user object in db
    story.url = post_url // making it not required - not all stories have a post url. See student_tester: hanesst_id: 363
    story.voteCount = 0

    const savedStory = await repository.createStory(story);
    return res.send(utilities.extractObject(
      savedStory,
      ["title"],
    ));
  } catch (err) {
    return res.serverError(err);
  }
};

exports.update = (req, res) => {
  res.success();
};

exports.delete = (req, res) => {
  res.success();
};

exports.list = async (req, res) => {
  try {
    const story = await repository.findStory();
    res.success(story);
  } catch (err) {
    res.send(err);
  }
};

exports.detail = async (req, res) => {
  try {
    const details = await repository.findDetails(req.params.id);
    res.success(details);
  } catch (err) {
    res.send(err);
  }
};