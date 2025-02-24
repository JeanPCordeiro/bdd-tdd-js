Feature: Simulation de prêt habitat
  Scenario: Calculer les mensualités d'un prêt
    Given un montant de prêt de 100000 euros
    And un taux d'intérêt de 5%
    And une durée de prêt de 20 ans
    When je calcule les mensualités
    Then les mensualités devraient être de 659.96 euros
