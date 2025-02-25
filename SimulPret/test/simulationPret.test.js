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

  test('devrait calculer les mensualités correctement', () => {
    const montant = 100000;
    const taux = 0.03;
    const duree = 20;
    const mensualites = calculerMensualites(montant, taux, duree);
    expect(mensualites).toBeCloseTo(554.60 , 2);
  });

  test('devrait calculer les mensualités correctement', () => {
    const montant = 200000;
    const taux = 0.05;
    const duree = 20;
    const mensualites = calculerMensualites(montant, taux, duree);
    expect(mensualites).toBeCloseTo(1319.91 , 2);
  });