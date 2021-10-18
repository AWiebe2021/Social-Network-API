const router = require('express').Router();
const {
  getAllThought,
  addThought,
  getThoughtById,
  updateThought,
  removeThought,
  addReaction,
  removeReaction


} = require('../../controllers/thought-controller');

// /api/Thoughts
router
  .route('/')
  .get(getAllThought);

// /api/Thoughts/<id>
router
  .route('/:id')
  .post(addThought)
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

router
  .route('/reactions/:thoughtId')
  .put(addReaction)

// /api/Thoughts/<userId>/<ThoughtId>
router
  .route('/reactions/:thoughtId/:reactionId')
  .delete(removeReaction);



module.exports = router;
