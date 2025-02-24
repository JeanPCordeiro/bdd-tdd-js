const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { calculerMensualites } = require('../../simulationPret');

let montant, taux, duree, mensualites;

Given('un montant de prêt de {int} euros', function (int) {
  montant = int;
});

Given('un taux d\'intérêt de {float}%', function (float) {
  taux = float / 100;
  console.log("taux =",taux);
});

Given('une durée de prêt de {int} ans', function (int) {
  duree = int;
});

When('je calcule les mensualités', function () {
  mensualites = calculerMensualites(montant, taux, duree);
  console.log("mensualites =",mensualites);
});

Then('les mensualités devraient être de {float} euros', function (float) {
  assert.strictEqual(mensualites, parseFloat(float.toFixed(2)));
});