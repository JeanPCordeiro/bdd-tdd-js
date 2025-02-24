const { calculerMensualites } = require('../simulationPret');

test('devrait calculer les mensualités correctement', () => {
  const montant = 100000;
  const taux = 0.05;
  const duree = 20;
  const mensualites = calculerMensualites(montant, taux, duree);
  expect(mensualites).toBeCloseTo(659.96, 2);
});

test('devrait calculer les mensualités correctement', () => {
    const montant = 100000;
    const taux = 0.07;
    const duree = 20;
    const mensualites = calculerMensualites(montant, taux, duree);
    expect(mensualites).toBeCloseTo(775.30 , 2);
  });

