// ─────────────────────────────────────────────
// Estadísticas del personaje
// ─────────────────────────────────────────────

const name = 'Zara Darkbane';
const characterClass = 'Hechicera';
let level = 7;
let health = 85;
let mana = 120;
const attack = 74;
const defense = 30;

// Constante para evitar números mágicos
const ZERO_DAMAGE = 0;

// ─────────────────────────────────────────────
// Funciones de combate
// ─────────────────────────────────────────────

/**
 * Calcula el daño neto restando la defensa al ataque.
 * Nunca retorna valores negativos.
 */
function calculateDamage(attack, defense) {
  const damage = attack - defense;
  return damage < ZERO_DAMAGE ? ZERO_DAMAGE : damage;
}

/**
 * Determina si el personaje sigue con vida.
 */
const isAlive = (health) => health > 0;

/**
 * Verifica si el personaje puede lanzar un hechizo.
 * Requiere suficiente maná y no estar aturdido.
 */
const canCastSpell = (currentMana, spellCost, isStunned) =>
  currentMana >= spellCost && isStunned === false;

/**
 * Genera una presentación formateada del personaje.
 * Formato: 'Nombre — Clase (Nivel N)'
 */
function getPresentation(name, characterClass, level) {
  return `${name} — ${characterClass} (Nivel ${level})`;
}

// ─────────────────────────────────────────────
// Ejecución
// ─────────────────────────────────────────────

console.log(calculateDamage(attack, defense));              // 44
console.log(isAlive(health));                               // true
console.log(canCastSpell(mana, 40, false));                 // true
console.log(getPresentation(name, characterClass, level));  // 'Zara Darkbane — Hechicera (Nivel 7)'