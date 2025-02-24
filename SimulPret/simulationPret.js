function calculerMensualites(montant, taux, duree) {
    const n = duree * 12;
    const tauxMensuel = taux / 12;
    const mensualites = (montant * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -n));
    return parseFloat(mensualites.toFixed(2));
  }
  
  module.exports = { calculerMensualites };
  