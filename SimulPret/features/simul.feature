Feature: Simulation de prêt habitat

  Scenario Outline: Calculer les mensualités d'un prêt
    Given un montant de prêt de <montant> euros
    And un taux d'intérêt de <taux>%
    And une durée de prêt de <duree> ans
    When je calcule les mensualités
    Then les mensualités devraient être de <mensualites> euros

    Examples:
      | montant | taux | duree | mensualites |
      | 100000  | 5    | 20    | 659.96      |
      | 100000  | 7    | 20    | 775.30      |
      | 100000  | 5    | 10    | 1060.66     |
      | 200000  | 5    | 20    | 1319.91     |
      | 100000  | 3    | 20    | 554.60      |