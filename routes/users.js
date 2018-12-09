// var express = require('express');
// var router = express.Router();

// //* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('Hey ! It\'s a GET');
// });

// /* GET user with ID. */
// router.get('/:id(\\d+)', function (req, res, next) {
//   res.send('Hey ! It\'s a GET with ID ' + req.params.id);
// });

// /* POST user creation. */
// router.post('/', function (req, res, next) {
//   res.send('Hey ! It\'s a POST');
// });

// /* PUT user something. */
// // écoute de l'url "/users/"
// router.put('/:name', (req, res) => {

// /* PUT user something. */
// // écoute de l'url "/users/"
// router.put('/:name', (req, res) => {
//   // récupération des données envoyées
//   const user = req.params.name;
//   res.send(`Hey my name is ${user}`);
// });

//   // récupération des données envoyées
//   const user = req.params.name;
//   const formData = req.body;
//   res.send(`Hey my name is ${user}`);
// });

// /* DELETE user with ID. */
// // écoute de l'url "/users/"
// router.delete('/:id(\\d+)', (req, res) => {

//   // récupération des données envoyées
//   const userId = req.params.id;
//   res.send(`Hey it's a DELETE ID ${userId}`);
// });

// /* DELETE user with ID. */
// // écoute de l'url "/users/"
// router.delete('/:id(\\d+)', (req, res) => {
//   // récupération des données envoyées
//   const userId = req.params.id;
//   res.send(`Hey it's a DELETE ID ${userId}`);
// });


// * * * * * * * * * * * * * * * * * * * //
//                                       //
// * * * * CAN I PUT SOME DELETE * * * * //
//                                       //
// * * * * * * * * * * * * * * * * * * * //


const express = require('express');
const router = express.Router();

// Tu vas devoir créer :

// une route (/users/[numéro]) acceptant le GET pour afficher le formulaire de delete-user.pug
router.get('/:id(\\d+)', (req, res) => {
  const userId = req.params.id;
  res.render('delete-user', { deleted_userId: userId });
});

// une route (/users/[prénom]) acceptant le GET pour afficher le formulaire de update-user.pug
router.get('/:firstname', function (req, res, next) {
  res.render('update-user', { user: req.params.firstname });
});



// une route (/users/[numéro]) acceptant le DELETE et prenant en paramètre dans l'URL un entier, qui affichera No more user with id [numéro]
router.delete('/:id(\\d+)', (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  res.render('deleted-user', { userId: userId });
});


// une route (/users/[prénom]) acceptant le PUT et prenant en paramètre dans l'URL une chaîne de caractères, qui affichera The new name is [prénom]

// J'AI PAS DU TOUT COMPRENDRE CAR POUR MOI FIRSTNAME EST THE OLD NAME...
router.put('/:firstname', (req, res) => {
  const user = req.params.firstname;
  const newUser = req.body;
  res.render('updated-user', { oldUser: user, newUser: newUser.name });
});


module.exports = router;