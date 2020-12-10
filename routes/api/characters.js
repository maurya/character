const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//Item Model
const Character = require('../../models/Characters');

// @route GET api/characters
// @desc  Get All Characters
// @access Public
router.get('/', (req, res)=> {
    Character.find()
    .sort({ date: -1 })
    .then(characters => res.json(characters));
});

// @route POST api/characters
// @desc  Create a character
// @access Public
router.post('/', auth, (req, res)=> {
    const newCharacter = new Character({
        name: req.body.name,
        birth_date: req.body.birth_date,
        gender: req.body.gender,
        height: req.body.height,
        weight: req.body.weight,
        home_location: req.body.home_location
});
newCharacter.save().then(character => res.json(character).catch(err => res.status(500).json({success: false, message: err})));
});

// @route DELETE api/characters
// @desc  Delete a character
// @access Public
router.delete('/:id', auth, (req, res)=> {
    Character.findById(req.params.id)
    .then(character => character.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;