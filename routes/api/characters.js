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

// @route PUT api/characters
// @desc  updates a character
// @access Public
router.put('/', auth, (req, res)=> {
    var _id = req.body._id;

    Character.findOne({ _id : _id }, function(error, character) {
        if (error || !character) {
          res.status(404).json({success: false, message: "Character not found"});          
        } else {
           // update the character object found using findOne
           character.name = req.body.name,
           character.birth_date= req.body.birth_date,
           character.gender =req.body.gender,
           character.height = req.body.height,
           character.weight = req.body.weight,
           character.home_location = req.body.home_location
           // now update it in MongoDB
           Character.updateOne(character).then(character => res.json(character));
        }
    });
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