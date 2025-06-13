(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const n of r)
      if (n.type === "childList")
        for (const s of n.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && i(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(r) {
    const n = {};
    return (
      r.integrity && (n.integrity = r.integrity),
      r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const n = a(r);
    fetch(r.href, n);
  }
})();
const Da = {
    damage: {
      base: 10,
      decimalPlaces: 0,
      training: { available: !0, cost: 60, bonus: 1 },
      item: { min: 3, max: 10, scaling: "full" },
      itemTags: ["offense"],
      showInUI: !0,
    },
    damagePercent: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 2, max: 20, scaling: "capped" },
      itemTags: ["mace"],
    },
    attackSpeed: {
      base: 1,
      decimalPlaces: 2,
      training: { available: !0, cost: 200, bonus: 0.01 },
      item: { min: 0.05, max: 0.2, scaling: "capped" },
      itemTags: ["offense", "gloves"],
      showInUI: !0,
    },
    attackSpeedPercent: { base: 0, decimalPlaces: 0 },
    critChance: {
      base: 5,
      decimalPlaces: 2,
      training: { available: !0, cost: 140, bonus: 0.1 },
      item: { min: 0.5, max: 1.5, scaling: "capped" },
      itemTags: ["offense", "jewelry", "gloves"],
      showInUI: !0,
    },
    critChancePercent: { base: 0, decimalPlaces: 0 },
    critDamage: {
      base: 1.5,
      decimalPlaces: 2,
      training: { available: !0, cost: 200, bonus: 0.01 },
      item: { min: 0.02, max: 0.1, scaling: "full" },
      itemTags: ["offense", "jewelry", "gloves"],
      showInUI: !0,
    },
    critDamagePercent: { base: 0, decimalPlaces: 0 },
    attackRating: {
      base: 100,
      decimalPlaces: 0,
      training: { available: !0, cost: 60, bonus: 10 },
      item: { min: 50, max: 150, scaling: "full" },
      itemTags: ["offense", "jewelry", "gloves"],
      showInUI: !0,
    },
    attackRatingPercent: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 5, max: 15, scaling: "capped" },
      itemTags: ["offense", "gloves"],
    },
    lifeSteal: {
      base: 0,
      decimalPlaces: 2,
      training: { available: !0, cost: 500, bonus: 0.01 },
      item: { min: 0.05, max: 0.2, scaling: "capped" },
      itemTags: ["axe"],
      showInUI: !0,
    },
    lifeStealPercent: { base: 0, decimalPlaces: 0 },
    lifePerHit: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 1, max: 8, scaling: "capped" },
      itemTags: ["axe"],
    },
    lifePerHitPercent: { base: 0, decimalPlaces: 0 },
    fireDamage: {
      base: 0,
      decimalPlaces: 0,
      training: { available: !0, cost: 30, bonus: 1 },
      item: { min: 5, max: 25, scaling: "full" },
      itemTags: ["sword", "gloves"],
      showInUI: !0,
    },
    fireDamagePercent: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 2, max: 6, scaling: "full" },
      itemTags: ["sword", "jewelry", "gloves"],
    },
    coldDamage: {
      base: 0,
      decimalPlaces: 0,
      training: { available: !0, cost: 30, bonus: 1 },
      item: { min: 5, max: 25, scaling: "full" },
      itemTags: ["sword", "gloves"],
      showInUI: !0,
    },
    coldDamagePercent: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 2, max: 6, scaling: "full" },
      itemTags: ["sword", "jewelry", "gloves"],
    },
    airDamage: {
      base: 0,
      decimalPlaces: 0,
      training: { available: !0, cost: 30, bonus: 1 },
      item: { min: 5, max: 25, scaling: "full" },
      itemTags: ["sword", "gloves"],
      showInUI: !0,
    },
    airDamagePercent: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 2, max: 6, scaling: "full" },
      itemTags: ["sword", "jewelry", "gloves"],
    },
    earthDamage: {
      base: 0,
      decimalPlaces: 0,
      training: { available: !0, cost: 30, bonus: 1 },
      item: { min: 5, max: 25, scaling: "full" },
      itemTags: ["sword", "gloves"],
      showInUI: !0,
    },
    earthDamagePercent: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 2, max: 6, scaling: "full" },
      itemTags: ["sword", "jewelry", "gloves"],
    },
    doubleDamageChance: {
      base: 0,
      decimalPlaces: 1,
      item: { min: 0.2, max: 2, scaling: "capped" },
      itemTags: ["offense", "gloves"],
    },
    elementalDamagePercent: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 0.5, max: 4, scaling: "full" },
      itemTags: ["offense", "jewelry", "gloves"],
    },
  },
  Ba = {
    life: {
      base: 100,
      decimalPlaces: 0,
      levelUpBonus: 10,
      training: { available: !0, cost: 80, bonus: 10 },
      item: { min: 30, max: 80, scaling: "full" },
      itemTags: ["defense"],
      showInUI: !0,
    },
    lifePercent: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 2, max: 10, scaling: "full" },
      itemTags: ["pants"],
    },
    armor: {
      base: 0,
      decimalPlaces: 0,
      training: { available: !0, cost: 50, bonus: 2 },
      item: { min: 10, max: 30, scaling: "full" },
      itemTags: ["defense"],
      showInUI: !0,
    },
    armorPercent: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 2, max: 9, scaling: "full" },
      itemTags: ["armor"],
    },
    blockChance: {
      base: 0,
      decimalPlaces: 1,
      training: { available: !0, cost: 150, bonus: 0.1 },
      item: { min: 2, max: 6, scaling: "capped" },
      itemTags: ["shield"],
      showInUI: !0,
    },
    blockChancePercent: { base: 0, decimalPlaces: 0 },
    lifeRegen: {
      base: 0,
      decimalPlaces: 1,
      training: { available: !0, cost: 80, bonus: 0.1 },
      item: { min: 1, max: 10, scaling: "full" },
      itemTags: ["belt"],
      showInUI: !0,
    },
    lifeRegenPercent: { base: 0, decimalPlaces: 0 },
    thornsDamage: { base: 0, decimalPlaces: 0 },
    thornsDamagePercent: { base: 0, decimalPlaces: 0 },
    resurrectionChance: {
      base: 0,
      decimalPlaces: 1,
      item: { min: 1, max: 5, scaling: "capped" },
      itemTags: ["amulet"],
    },
    reflectFireDamage: { base: 0, decimalPlaces: 0 },
  },
  Sa = {
    mana: {
      base: 50,
      decimalPlaces: 0,
      levelUpBonus: 5,
      training: { available: !0, cost: 100, bonus: 5 },
      item: { min: 5, max: 15, scaling: "capped" },
      itemTags: ["misc", "jewelry"],
      showInUI: !0,
    },
    manaPercent: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 2, max: 5, scaling: "capped" },
      itemTags: ["misc", "jewelry"],
    },
    manaRegen: {
      base: 0,
      decimalPlaces: 1,
      training: { available: !0, cost: 300, bonus: 0.1 },
      item: { min: 0.5, max: 2, scaling: "capped" },
      itemTags: ["misc", "jewelry"],
      showInUI: !0,
    },
    manaRegenPercent: { base: 0, decimalPlaces: 0 },
    manaPerHit: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 1, max: 2, scaling: "capped" },
      itemTags: ["misc", "jewelry"],
      showInUI: !0,
    },
    manaPerHitPercent: { base: 0, decimalPlaces: 0 },
    strength: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 3, max: 10, scaling: "full" },
      itemTags: ["misc", "stat"],
    },
    strengthPercent: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 0.5, max: 3, scaling: "capped" },
      itemTags: ["misc"],
    },
    agility: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 3, max: 10, scaling: "full" },
      itemTags: ["misc", "stat"],
    },
    agilityPercent: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 0.5, max: 3, scaling: "capped" },
      itemTags: ["misc"],
    },
    vitality: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 3, max: 10, scaling: "full" },
      itemTags: ["misc", "stat"],
    },
    vitalityPercent: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 0.5, max: 3, scaling: "capped" },
      itemTags: ["misc"],
    },
    wisdom: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 3, max: 10, scaling: "full" },
      itemTags: ["misc", "jewelry", "stat"],
    },
    wisdomPercent: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 0.5, max: 3, scaling: "capped" },
      itemTags: ["misc", "jewelry"],
    },
    endurance: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 3, max: 10, scaling: "full" },
      itemTags: ["misc", "jewelry", "stat"],
    },
    endurancePercent: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 0.5, max: 3, scaling: "capped" },
      itemTags: ["misc", "jewelry"],
    },
    dexterity: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 3, max: 10, scaling: "full" },
      itemTags: ["misc", "jewelry", "stat"],
    },
    dexterityPercent: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 0.5, max: 3, scaling: "capped" },
      itemTags: ["misc", "jewelry"],
    },
    bonusGoldPercent: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 5, max: 15, scaling: "capped" },
      itemTags: ["misc", "jewelry"],
      showInUI: !0,
    },
    bonusExperience: {
      base: 0,
      decimalPlaces: 0,
      item: { min: 5, max: 15, scaling: "capped" },
      itemTags: ["misc", "jewelry"],
      showInUI: !0,
    },
    cooldownReductionPercent: { base: 0, decimalPlaces: 0 },
    manaCostReductionPercent: { base: 0, decimalPlaces: 0 },
    buffDurationPercent: { base: 0, decimalPlaces: 0 },
    itemBonusesPercent: { base: 0, decimalPlaces: 0 },
    skillPoints: { base: 0, decimalPlaces: 0, showInUI: !0 },
    extraMaterialDropPercent: { base: 0, decimalPlaces: 0 },
    extraMaterialDropMax: { base: 1, decimalPlaces: 0 },
  },
  G = { ...Da, ...Ba, ...Sa },
  tt = {
    head: ["HELMET"],
    chest: ["ARMOR"],
    belt: ["BELT"],
    legs: ["PANTS"],
    boots: ["BOOTS"],
    weapon: ["SWORD", "AXE", "MACE"],
    offhand: ["SHIELD"],
    gloves: ["GLOVES"],
    amulet: ["AMULET"],
    ring1: ["RING"],
    ring2: ["RING"],
  },
  Mt = {
    HELMET: "HELMET",
    ARMOR: "ARMOR",
    BELT: "BELT",
    PANTS: "PANTS",
    BOOTS: "BOOTS",
    SWORD: "SWORD",
    AXE: "AXE",
    MACE: "MACE",
    SHIELD: "SHIELD",
    GLOVES: "GLOVES",
    AMULET: "AMULET",
    RING: "RING",
  },
  xr = {
    HELMET: "🪖",
    ARMOR: "👚",
    BELT: "🎗️",
    PANTS: "👖",
    BOOTS: "👢",
    SWORD: "⚔️",
    AXE: "🪓",
    MACE: "🔨",
    SHIELD: "🛡️",
    GLOVES: "🧤",
    AMULET: "📿",
    RING: "💍",
  },
  re = {
    NORMAL: {
      name: "NORMAL",
      color: "#ffffff",
      chance: 130,
      statMultiplier: 1,
      totalStats: 3,
    },
    MAGIC: {
      name: "MAGIC",
      color: "#4287f5",
      chance: 40,
      statMultiplier: 1.5,
      totalStats: 3,
    },
    RARE: {
      name: "RARE",
      color: "#ffd700",
      chance: 18,
      statMultiplier: 2,
      totalStats: 4,
    },
    UNIQUE: {
      name: "UNIQUE",
      color: "#ff8c00",
      chance: 6,
      statMultiplier: 3,
      totalStats: 5,
    },
    LEGENDARY: {
      name: "LEGENDARY",
      color: "#e65a27",
      chance: 2,
      statMultiplier: 3.5,
      totalStats: 6,
    },
    MYTHIC: {
      name: "MYTHIC",
      color: "#ff0033",
      chance: 1,
      statMultiplier: 4,
      totalStats: 7,
    },
  },
  Oe = [
    re.NORMAL.name,
    re.MAGIC.name,
    re.RARE.name,
    re.UNIQUE.name,
    re.LEGENDARY.name,
    re.MYTHIC.name,
  ],
  gr = {
    HELMET: { mandatory: [], possible: [...ye(["defense", "stat", "helmet"])] },
    ARMOR: {
      mandatory: ["armor"],
      possible: [...ye(["defense", "stat", "armor"])],
    },
    BELT: {
      mandatory: [],
      possible: [...ye(["defense", "stat", "belt", "misc"])],
    },
    PANTS: { mandatory: [], possible: [...ye(["defense", "stat", "pants"])] },
    BOOTS: { mandatory: [], possible: [...ye(["defense", "stat", "boots"])] },
    SWORD: {
      mandatory: ["attackSpeed"],
      possible: [...ye(["offense", "sword"])],
    },
    AXE: { mandatory: [], possible: [...ye(["offense", "axe"])] },
    MACE: { mandatory: [], possible: [...ye(["offense", "mace"])] },
    SHIELD: {
      mandatory: ["blockChance"],
      possible: [...ye(["defense", "stat", "shield"])],
    },
    GLOVES: { mandatory: [], possible: [...ye(["gloves"])] },
    AMULET: { mandatory: [], possible: [...ye(["jewelry", "amulet", "misc"])] },
    RING: { mandatory: [], possible: [...ye(["jewelry", "ring", "misc"])] },
  };
function hr(t) {
  switch (t) {
    case "armor":
      return Object.entries(tt)
        .filter(([e, a]) =>
          a.some((i) =>
            [
              "HELMET",
              "ARMOR",
              "BELT",
              "PANTS",
              "BOOTS",
              "SHIELD",
              "GLOVES",
            ].includes(i)
          )
        )
        .map(([e]) => e);
    case "jewelry":
      return Object.entries(tt)
        .filter(([e, a]) => a.some((i) => ["AMULET", "RING"].includes(i)))
        .map(([e]) => e);
    case "weapon":
      return Object.entries(tt)
        .filter(([e, a]) => a.some((i) => ["SWORD", "AXE", "MACE"].includes(i)))
        .map(([e]) => e);
    default:
      return [];
  }
}
function vr(t) {
  switch (t) {
    case "armor":
      return ["HELMET", "ARMOR", "BELT", "PANTS", "BOOTS", "SHIELD", "GLOVES"];
    case "jewelry":
      return ["AMULET", "RING"];
    case "weapon":
      return ["SWORD", "AXE", "MACE"];
    default:
      return [];
  }
}
function yr(t) {
  return Object.entries(G)
    .filter(([e, a]) => a.itemTags && a.itemTags.includes(t) && a.item)
    .map(([e]) => e);
}
function ye(t) {
  const e = new Set();
  return (
    t.forEach((a) => {
      yr(a).forEach((i) => e.add(i));
    }),
    Array.from(e)
  );
}
let A = null,
  y = null,
  O = null,
  Ae = null,
  P = null,
  be = null,
  Q = null,
  Te = null,
  qe = null,
  le = null;
function br({
  game: t,
  hero: e,
  inventory: a,
  training: i,
  skillTree: r,
  crystalShop: n,
  statistics: s,
  quests: o,
  soulShop: c,
  building: l,
}) {
  (A = t),
    (y = e),
    (O = a),
    (Ae = i),
    (P = r),
    (be = n),
    (Q = s),
    (Te = o),
    (qe = c),
    (le = l);
}
const V = {
    fire: { id: "fire", icon: "🔥" },
    cold: { id: "cold", icon: "❄️" },
    air: { id: "air", icon: "☁️" },
    earth: { id: "earth", icon: "🌍" },
  },
  N = {
    NORMAL: {
      type: "NORMAL",
      itemDropChance: 1,
      color: "gray",
      threshold: 80,
      lifeBonus: 1,
      damageBonus: 1,
      bonusAttackSpeed: 1,
      xpBonus: 1,
      goldBonus: 1,
    },
    RARE: {
      type: "RARE",
      itemDropChance: 1,
      color: "blue",
      threshold: 90,
      lifeBonus: 1.2,
      damageBonus: 1.2,
      bonusAttackSpeed: 0.9,
      xpBonus: 1.2,
      goldBonus: 1.05,
    },
    EPIC: {
      type: "EPIC",
      itemDropChance: 2,
      color: "purple",
      threshold: 96,
      lifeBonus: 1.5,
      damageBonus: 1.5,
      bonusAttackSpeed: 0.8,
      xpBonus: 1.5,
      goldBonus: 1.1,
    },
    LEGENDARY: {
      type: "LEGENDARY",
      itemDropChance: 2,
      color: "orange",
      threshold: 99.5,
      lifeBonus: 2,
      damageBonus: 2,
      bonusAttackSpeed: 0.7,
      xpBonus: 2.5,
      goldBonus: 1.2,
    },
    MYTHIC: {
      type: "MYTHIC",
      itemDropChance: 3,
      color: "red",
      threshold: 100,
      lifeBonus: 3,
      damageBonus: 3,
      bonusAttackSpeed: 0.5,
      xpBonus: 4,
      goldBonus: 1.5,
    },
  },
  Er = {
    [V.fire.id]: V.air.id,
    [V.earth.id]: V.cold.id,
    [V.cold.id]: V.fire.id,
    [V.air.id]: V.earth.id,
  },
  de = [
    {
      name: "Abyssal Wraith",
      element: "cold",
      image: "enemies/abyssal-wraith.jpg",
      lifeMultiplier: 1.2,
      damageMultiplier: 1.1,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["abyss", "dark"],
    },
    {
      name: "Boglurker",
      element: "earth",
      image: "enemies/boglurker.jpg",
      lifeMultiplier: 1.1,
      damageMultiplier: 1,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["swamp", "poison"],
    },
    {
      name: "Cloudstrider",
      element: "air",
      image: "enemies/cloudstrider.jpg",
      lifeMultiplier: 1,
      damageMultiplier: 1.2,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["skyrealm", "air"],
    },
    {
      name: "Crystal Golem",
      element: "earth",
      image: "enemies/crystal-golem.jpg",
      lifeMultiplier: 1.4,
      damageMultiplier: 0.9,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: { crystalized_rock: 4 },
      tags: ["golem", "crystal"],
    },
    {
      name: "Dreadfang",
      element: "air",
      image: "enemies/dreadfang.jpg",
      lifeMultiplier: 1,
      damageMultiplier: 1.3,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["nightmare", "beast", "abyss"],
    },
    {
      name: "Dunewraith",
      element: "earth",
      image: "enemies/dunewraith.jpg",
      lifeMultiplier: 1.1,
      damageMultiplier: 1.1,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["undead", "sand"],
    },
    {
      name: "Frostbite",
      element: "cold",
      image: "enemies/frostbite.jpg",
      lifeMultiplier: 1,
      damageMultiplier: 1.2,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["ice", "cold"],
    },
    {
      name: "Frostfury",
      element: "cold",
      image: "enemies/frostfury.jpg",
      lifeMultiplier: 1.1,
      damageMultiplier: 1.1,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["ice", "fury"],
    },
    {
      name: "Frostweaver",
      element: "cold",
      image: "enemies/frostweaver.jpg",
      lifeMultiplier: 1.2,
      damageMultiplier: 1,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["ice", "spider"],
    },
    {
      name: "Gem Guardian",
      element: "earth",
      image: "enemies/gem-guardian.jpg",
      lifeMultiplier: 1.3,
      damageMultiplier: 1,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["guardian", "gem", "cave"],
    },
    {
      name: "Grimspike",
      element: "earth",
      image: "enemies/grimspike.jpg",
      lifeMultiplier: 1.2,
      damageMultiplier: 1.1,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["spike", "earth", "cave"],
    },
    {
      name: "Sandstalker",
      element: "earth",
      image: "enemies/sandstalker.jpg",
      lifeMultiplier: 1.1,
      damageMultiplier: 1.2,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["sand", "scorpion"],
    },
    {
      name: "Shadowclaw",
      element: "air",
      image: "enemies/shadowclaw.jpg",
      lifeMultiplier: 1,
      damageMultiplier: 1.3,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["shadow", "beast", "abyss"],
    },
    {
      name: "Shardling",
      element: "earth",
      image: "enemies/shardling.jpg",
      lifeMultiplier: 1.1,
      damageMultiplier: 1.1,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["shard", "earth", "cave"],
    },
    {
      name: "Stormbringer",
      element: "air",
      image: "enemies/stormbringer.jpg",
      lifeMultiplier: 1,
      damageMultiplier: 1.3,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["storm", "air"],
    },
    {
      name: "Stormsoul",
      element: "air",
      image: "enemies/stormsoul.jpg",
      lifeMultiplier: 1.1,
      damageMultiplier: 1.2,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["storm", "soul", "sky"],
    },
    {
      name: "Thunderwing",
      element: "air",
      image: "enemies/thunderwing.jpg",
      lifeMultiplier: 1,
      damageMultiplier: 1.3,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["thunder", "air"],
    },
    {
      name: "Toxictoad",
      element: "earth",
      image: "enemies/toxictoad.jpg",
      lifeMultiplier: 1.2,
      damageMultiplier: 1,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["toxic", "frog", "swamp"],
    },
    {
      name: "Venomspitter",
      element: "earth",
      image: "enemies/venomspitter.jpg",
      lifeMultiplier: 1.1,
      damageMultiplier: 1.1,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["venom", "spider", "swamp"],
    },
    {
      name: "Mossback",
      element: "earth",
      image: "enemies/mossback.jpg",
      lifeMultiplier: 1.2,
      damageMultiplier: 1,
      xpMultiplier: 1.1,
      goldMultiplier: 1.1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["forest"],
    },
    {
      name: "Thornling",
      element: "earth",
      image: "enemies/thornling.jpg",
      lifeMultiplier: 1,
      damageMultiplier: 1.2,
      xpMultiplier: 1,
      goldMultiplier: 1.2,
      itemDropMultiplier: 1.1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["forest"],
    },
    {
      name: "Barkhide",
      element: "earth",
      image: "enemies/barkhide.jpg",
      lifeMultiplier: 1.3,
      damageMultiplier: 1,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1.1,
      materialDropWeights: {},
      tags: ["forest"],
    },
    {
      name: "Sylvan Wisp",
      element: "air",
      image: "enemies/sylvan-wisp.jpg",
      lifeMultiplier: 0.9,
      damageMultiplier: 1.3,
      xpMultiplier: 1.2,
      goldMultiplier: 1,
      itemDropMultiplier: 1.2,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["forest"],
    },
    {
      name: "Magma Titan",
      element: "fire",
      image: "enemies/magma-titan.jpg",
      lifeMultiplier: 1.8,
      damageMultiplier: 1.5,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1.2,
      materialDropWeights: {},
      tags: ["volcano", "fire"],
    },
    {
      name: "Ember Drake",
      element: "fire",
      image: "enemies/ember-drake.jpg",
      lifeMultiplier: 1.3,
      damageMultiplier: 1.4,
      xpMultiplier: 1.1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["volcano", "fire"],
    },
    {
      name: "Lava Elemental",
      element: "fire",
      image: "enemies/lava-elemental.jpg",
      lifeMultiplier: 1.4,
      damageMultiplier: 1.2,
      xpMultiplier: 1,
      goldMultiplier: 1.1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1.1,
      materialDropWeights: {},
      tags: ["volcano", "fire"],
    },
    {
      name: "Tide Guardian",
      element: "cold",
      image: "enemies/tide-guardian.jpg",
      lifeMultiplier: 1.5,
      damageMultiplier: 1.1,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1.2,
      materialDropWeights: {},
      tags: ["ruins", "water"],
    },
    {
      name: "Coral Sentinel",
      element: "earth",
      image: "enemies/coral-sentinel.jpg",
      lifeMultiplier: 1.6,
      damageMultiplier: 1,
      xpMultiplier: 1.1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["ruins", "water"],
    },
    {
      name: "Depths Leviathan",
      element: "cold",
      image: "enemies/depths-leviathan.jpg",
      lifeMultiplier: 1.7,
      damageMultiplier: 1.3,
      xpMultiplier: 1.2,
      goldMultiplier: 1,
      itemDropMultiplier: 1.1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["ruins", "water"],
    },
    {
      name: "Banshee",
      element: "air",
      image: "enemies/banshee.jpg",
      lifeMultiplier: 1,
      damageMultiplier: 1.4,
      xpMultiplier: 1.3,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["haunted", "spirit"],
    },
    {
      name: "Phantom",
      element: "cold",
      image: "enemies/phantom.jpg",
      lifeMultiplier: 1.1,
      damageMultiplier: 1.3,
      xpMultiplier: 1.1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["haunted", "spirit"],
    },
    {
      name: "Wraith Lord",
      element: "earth",
      image: "enemies/wraith-lord.jpg",
      lifeMultiplier: 1.6,
      damageMultiplier: 1.2,
      xpMultiplier: 1.2,
      goldMultiplier: 1.1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["haunted", "spirit"],
    },
    {
      name: "Golden Sphinx",
      element: "earth",
      image: "enemies/golden-sphinx.jpg",
      lifeMultiplier: 1.4,
      damageMultiplier: 1.2,
      xpMultiplier: 1,
      goldMultiplier: 1.8,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["steppe", "gold"],
    },
    {
      name: "Aurelius",
      element: "fire",
      image: "enemies/aurelius.jpg",
      lifeMultiplier: 1.2,
      damageMultiplier: 1.3,
      xpMultiplier: 1.1,
      goldMultiplier: 1.5,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["steppe", "gold"],
    },
    {
      name: "Midas Beast",
      element: "air",
      image: "enemies/midas-beast.jpg",
      lifeMultiplier: 1.3,
      damageMultiplier: 1.1,
      xpMultiplier: 1,
      goldMultiplier: 2,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["steppe", "gold"],
    },
    {
      name: "Void Sentinel",
      element: "cold",
      image: "enemies/void-sentinel.jpg",
      lifeMultiplier: 1.8,
      damageMultiplier: 1.4,
      xpMultiplier: 1.3,
      goldMultiplier: 1,
      itemDropMultiplier: 1.1,
      materialDropMultiplier: 1.2,
      materialDropWeights: {},
      tags: ["obsidian", "arcane"],
    },
    {
      name: "Arcane Construct",
      element: "air",
      image: "enemies/arcane-construct.jpg",
      lifeMultiplier: 1.5,
      damageMultiplier: 1.5,
      xpMultiplier: 1.1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1.3,
      materialDropWeights: {},
      tags: ["obsidian", "arcane"],
    },
    {
      name: "Obsidian Golem",
      element: "earth",
      image: "enemies/obsidian-golem.jpg",
      lifeMultiplier: 2,
      damageMultiplier: 1.2,
      xpMultiplier: 1.2,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1.4,
      materialDropWeights: {},
      tags: ["obsidian", "arcane"],
    },
    {
      name: "Frost Giant",
      element: "cold",
      image: "enemies/frost-giant.jpg",
      lifeMultiplier: 1.8,
      damageMultiplier: 1.3,
      xpMultiplier: 1.1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1.1,
      materialDropWeights: {},
      tags: ["tundra", "ice"],
    },
    {
      name: "Ice Wraith",
      element: "cold",
      image: "enemies/ice-wraith.jpg",
      lifeMultiplier: 1.2,
      damageMultiplier: 1.4,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["tundra", "ice"],
    },
    {
      name: "Wildfire Spirit",
      element: "fire",
      image: "enemies/wildfire-spirit.jpg",
      lifeMultiplier: 1,
      damageMultiplier: 1.3,
      xpMultiplier: 1.1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["forest", "fire"],
      icon: V.fire.icon,
    },
    {
      name: "Scorching Salamander",
      element: "fire",
      image: "enemies/scorching-salamander.jpg",
      lifeMultiplier: 1.2,
      damageMultiplier: 1.2,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["desert", "fire"],
      icon: V.fire.icon,
    },
    {
      name: "Dune Blazer",
      element: "fire",
      image: "enemies/dune-blazer.jpg",
      lifeMultiplier: 1.1,
      damageMultiplier: 1.4,
      xpMultiplier: 1,
      goldMultiplier: 1.2,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["desert", "sand"],
      icon: V.fire.icon,
    },
    {
      name: "Hellhound",
      element: "fire",
      image: "enemies/hellhound.jpg",
      lifeMultiplier: 1.3,
      damageMultiplier: 1.3,
      xpMultiplier: 1.2,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["abyss", "dark"],
      icon: V.fire.icon,
    },
    {
      name: "Infernal Knight",
      element: "fire",
      image: "enemies/infernal-knight.jpg",
      lifeMultiplier: 1.6,
      damageMultiplier: 1.2,
      xpMultiplier: 1.1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1.1,
      materialDropWeights: {},
      tags: ["abyss", "dark"],
      icon: V.fire.icon,
    },
    {
      name: "Molten Wyrm",
      element: "fire",
      image: "enemies/molten-wyrm.jpg",
      lifeMultiplier: 1.7,
      damageMultiplier: 1.4,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1.3,
      materialDropWeights: {},
      tags: ["volcano", "fire"],
      icon: V.fire.icon,
    },
    {
      name: "Solar Phoenix",
      element: "fire",
      image: "enemies/solar-phoenix.jpg",
      lifeMultiplier: 1.4,
      damageMultiplier: 1.5,
      xpMultiplier: 1.3,
      goldMultiplier: 1.3,
      itemDropMultiplier: 1.1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["steppe", "gold"],
      icon: V.fire.icon,
    },
    {
      name: "Radiant Lion",
      element: "fire",
      image: "enemies/radiant-lion.jpg",
      lifeMultiplier: 1.5,
      damageMultiplier: 1.3,
      xpMultiplier: 1.1,
      goldMultiplier: 1.6,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["steppe", "gold"],
      icon: V.fire.icon,
    },
    {
      name: "Crimson Wisp",
      element: "fire",
      image: "enemies/crimson-wisp.jpg",
      lifeMultiplier: 0.8,
      damageMultiplier: 1.6,
      xpMultiplier: 1.2,
      goldMultiplier: 1,
      itemDropMultiplier: 1.2,
      materialDropMultiplier: 1,
      materialDropWeights: {},
      tags: ["obsidian", "arcane"],
      icon: V.fire.icon,
    },
    {
      name: "Flame Djinn",
      element: "fire",
      image: "enemies/flame-djinn.jpg",
      lifeMultiplier: 1.8,
      damageMultiplier: 1.4,
      xpMultiplier: 1.4,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1.5,
      materialDropWeights: {},
      tags: ["obsidian", "arcane"],
      icon: V.fire.icon,
    },
  ],
  vt = [
    {
      id: "forest",
      unlockLevel: 1,
      name: "Enchanted Forest",
      description: "A mystical forest teeming with elemental creatures.",
      allowedTags: ["forest"],
      get enemyNames() {
        return de
          .filter((t) => t.tags && t.tags.includes("forest"))
          .map((t) => t.name);
      },
      lifeMultiplier: 1,
      damageMultiplier: 1,
      xpMultiplier: 1,
      goldMultiplier: 1.3,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: { crystalized_rock: 1.1 },
    },
    {
      id: "crystal_cave",
      unlockLevel: 25,
      name: "Crystal Cave",
      description: "A shimmering cave filled with crystalized rocks.",
      allowedTags: ["cave", "crystal"],
      get enemyNames() {
        return de
          .filter((t) => t.tags && t.tags.includes("cave"))
          .map((t) => t.name);
      },
      lifeMultiplier: 1.5,
      damageMultiplier: 1.2,
      xpMultiplier: 1,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1.2,
      materialDropWeights: { crystalized_rock: 4 },
    },
    {
      id: "tundra",
      unlockLevel: 50,
      name: "Frozen Tundra",
      description: "A land of ice and snow, home to cold and air enemies.",
      allowedTags: ["tundra", "ice"],
      get enemyNames() {
        return de
          .filter((t) => t.tags && t.tags.includes("tundra"))
          .map((t) => t.name);
      },
      lifeMultiplier: 1.8,
      damageMultiplier: 1.4,
      xpMultiplier: 1.7,
      goldMultiplier: 1,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: {
        potion_of_strength: 3,
        potion_of_agility: 3,
        potion_of_vitality: 3,
      },
    },
    {
      id: "desert",
      unlockLevel: 150,
      name: "Scorching Desert",
      description:
        "A vast desert with relentless heat and dangerous creatures.",
      allowedTags: ["desert", "sand"],
      get enemyNames() {
        return de
          .filter((t) => t.tags && t.tags.includes("desert"))
          .map((t) => t.name);
      },
      lifeMultiplier: 2.2,
      damageMultiplier: 1.5,
      xpMultiplier: 1.5,
      goldMultiplier: 2,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: { elixir: 5 },
      canDrop: ["elixir"],
    },
    {
      id: "swamp",
      unlockLevel: 350,
      name: "Murky Swamp",
      description: "A dark and damp swamp filled with poisonous creatures.",
      allowedTags: ["swamp", "poison"],
      get enemyNames() {
        return de
          .filter((t) => t.tags && t.tags.includes("swamp"))
          .map((t) => t.name);
      },
      lifeMultiplier: 2.5,
      damageMultiplier: 1.8,
      xpMultiplier: 2,
      goldMultiplier: 1,
      itemDropMultiplier: 3,
      materialDropMultiplier: 1,
      materialDropWeights: { potion_of_endurance: 3, potion_of_wisdom: 3 },
    },
    {
      id: "skyrealm",
      unlockLevel: 660,
      name: "Skyrealm Peaks",
      description:
        "A floating realm high above the clouds, home to air and lightning creatures.",
      allowedTags: ["sky", "air"],
      get enemyNames() {
        return de
          .filter((t) => t.tags && t.tags.includes("sky"))
          .map((t) => t.name);
      },
      lifeMultiplier: 4,
      damageMultiplier: 2,
      xpMultiplier: 2.5,
      goldMultiplier: 1.8,
      itemDropMultiplier: 1,
      materialDropMultiplier: 2,
      materialDropWeights: {
        potion_of_dexterity: 5,
        potion_of_strength: 3,
        potion_of_agility: 3,
        potion_of_vitality: 3,
        potion_of_endurance: 3,
        potion_of_wisdom: 3,
      },
    },
    {
      id: "abyss",
      unlockLevel: 1e3,
      name: "Abyssal Depths",
      description: "A dark and mysterious region filled with ancient horrors.",
      allowedTags: ["abyss", "dark"],
      get enemyNames() {
        return de
          .filter((t) => t.tags && t.tags.includes("abyss"))
          .map((t) => t.name);
      },
      lifeMultiplier: 5,
      damageMultiplier: 2.5,
      xpMultiplier: 5,
      goldMultiplier: 4,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: { freaky_gold_coins: 15 },
    },
    {
      id: "volcanic_rift",
      unlockLevel: 1400,
      name: "Volcanic Rift",
      description: "A searing landscape of molten rock and fire elementals.",
      allowedTags: ["volcano", "fire"],
      get enemyNames() {
        return de
          .filter(
            (t) =>
              t.tags && (t.tags.includes("volcano") || t.tags.includes("fire"))
          )
          .map((t) => t.name);
      },
      lifeMultiplier: 6,
      damageMultiplier: 3,
      xpMultiplier: 4,
      goldMultiplier: 2.5,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1.5,
      materialDropWeights: {
        potion_of_strength: 4,
        armor_upgrade_stone: 2.2,
        weapon_upgrade_core: 1.2,
      },
    },
    {
      id: "sunken_ruins",
      unlockLevel: 1800,
      name: "Sunken Ruins",
      description:
        "Ancient ruins submerged beneath the waves, teeming with aquatic mysteries.",
      allowedTags: ["ruins", "water"],
      get enemyNames() {
        return de
          .filter(
            (t) =>
              t.tags && (t.tags.includes("ruins") || t.tags.includes("water"))
          )
          .map((t) => t.name);
      },
      lifeMultiplier: 7,
      damageMultiplier: 3.2,
      xpMultiplier: 4.5,
      goldMultiplier: 2,
      itemDropMultiplier: 1.2,
      materialDropMultiplier: 1.3,
      materialDropWeights: { potion_of_vitality: 3.1, crystalized_rock: 2.2 },
    },
    {
      id: "haunted_moor",
      unlockLevel: 2200,
      name: "Haunted Moor",
      description:
        "A fog-laden moor haunted by restless spirits and lost souls.",
      allowedTags: ["haunted", "spirit"],
      get enemyNames() {
        return de
          .filter(
            (t) =>
              t.tags &&
              (t.tags.includes("haunted") || t.tags.includes("spirit"))
          )
          .map((t) => t.name);
      },
      lifeMultiplier: 8,
      damageMultiplier: 3.5,
      xpMultiplier: 5,
      goldMultiplier: 2.2,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1.1,
      materialDropWeights: { potion_of_wisdom: 3.2, elixir: 1.3 },
      canDrop: ["elixir"],
    },
    {
      id: "golden_steppe",
      unlockLevel: 2600,
      name: "Golden Steppe",
      description: "Vast golden grasslands where fortune favors the bold.",
      allowedTags: ["steppe", "gold"],
      get enemyNames() {
        return de
          .filter(
            (t) =>
              t.tags && (t.tags.includes("steppe") || t.tags.includes("gold"))
          )
          .map((t) => t.name);
      },
      lifeMultiplier: 9,
      damageMultiplier: 3.8,
      xpMultiplier: 5.5,
      goldMultiplier: 5,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1,
      materialDropWeights: { medium_gold_coins: 3.2, large_gold_coins: 1.2 },
    },
    {
      id: "obsidian_spire",
      unlockLevel: 3e3,
      name: "Obsidian Spire",
      description:
        "A towering spire of black glass, pulsing with arcane energy.",
      allowedTags: ["obsidian", "arcane"],
      get enemyNames() {
        return de
          .filter(
            (t) =>
              t.tags &&
              (t.tags.includes("obsidian") || t.tags.includes("arcane"))
          )
          .map((t) => t.name);
      },
      lifeMultiplier: 10,
      damageMultiplier: 4.2,
      xpMultiplier: 6,
      goldMultiplier: 3,
      itemDropMultiplier: 1,
      materialDropMultiplier: 1.4,
      materialDropWeights: {
        jewelry_upgrade_gem: 2.2,
        potion_of_dexterity: 2.1,
        weapon_upgrade_core: 1.3,
      },
    },
  ];
let yt = null;
async function Cr(t) {
  if (
    !(
      t === yt ||
      !(await je(
        "Are you sure you want to change region? That will reset your stage progress and will find you a new enemy"
      ))
    )
  ) {
    if (((yt = t), A.gameStarted)) {
      Ca(), rt();
      return;
    }
    (A.stage = y.getStartingStage()),
      (A.currentEnemy = new ze(A.stage)),
      A.resetAllLife(),
      A.saveGame(),
      Ge(),
      rt();
  }
}
function Ui() {
  return vt.find((t) => t.id === yt) || vt[0];
}
function Dr(t) {
  return vt.filter((e) => t.level >= e.unlockLevel);
}
function Br() {
  yt = vt[0].id;
}
function Sr(t) {
  return (0, String.raw)`
    <div class="tooltip-header">${t.name}</div>
    <div class="tooltip-content">${t.description}</div>
    <div><strong>Unlock Level:</strong> ${t.unlockLevel}</div>
    ${
      t.xpMultiplier != 1
        ? `<div><strong>XP bonus:</strong> ${(
            (t.xpMultiplier - 1) *
            100
          ).toFixed(0)}%</div>`
        : ""
    }
    ${
      t.goldMultiplier != 1
        ? `<div><strong>Gold bonus:</strong> ${(
            (t.goldMultiplier - 1) *
            100
          ).toFixed(0)}%</div>`
        : ""
    }
    ${
      t.itemDropMultiplier != 1
        ? `<div><strong>Item Drop bonus:</strong> ${(
            (t.itemDropMultiplier - 1) *
            100
          ).toFixed(0)}%</div>`
        : ""
    }
    ${
      t.materialDropMultiplier && t.materialDropMultiplier != 1
        ? `<div><strong>Material Drop bonus:</strong> ${(
            (t.materialDropMultiplier - 1) *
            100
          ).toFixed(0)}%</div>`
        : ""
    }
  `;
}
function rt() {
  const t = document.getElementById("region-selector");
  if (!t) return;
  t.innerHTML = "";
  const e = Dr(y),
    a = vt.find((r) => !e.includes(r) && y.level < r.unlockLevel),
    i = [...e];
  a && i.push(a),
    i.forEach((r) => {
      const n = document.createElement("button");
      (n.className = "region-btn" + (r.id === yt ? " selected" : "")),
        (n.textContent = r.name),
        (n.disabled = !e.includes(r)),
        (n.onclick = () => Cr(r.id)),
        n.addEventListener("mouseenter", (s) => ge(Sr(r), s)),
        n.addEventListener("mousemove", ue),
        n.addEventListener("mouseleave", he),
        t.appendChild(n);
    });
}
function Ar() {
  Br(), rt();
}
class ze {
  constructor(e) {
    const a = Ui(),
      i = a.allowedTags;
    let r = de.filter((s) => s.tags && i.some((o) => s.tags.includes(o)));
    const n = r[Math.floor(Math.random() * r.length)];
    (this.enemyData = n),
      (this.name = `${V[n.element].icon} ${n.name}`),
      (this.element = n.element),
      (this.image = n.image),
      (this.lifeMultiplier = (a.lifeMultiplier || 1) * (n.lifeMultiplier || 1)),
      (this.damageMultiplier =
        (a.damageMultiplier || 1) * (n.damageMultiplier || 1)),
      (this.xpMultiplier = (a.xpMultiplier || 1) * (n.xpMultiplier || 1)),
      (this.goldMultiplier = (a.goldMultiplier || 1) * (n.goldMultiplier || 1)),
      (this.itemDropMultiplier =
        (a.itemDropMultiplier || 1) * (n.itemDropMultiplier || 1)),
      (this.materialDropMultiplier =
        (a.materialDropMultiplier || 1) * (n.materialDropMultiplier || 1)),
      (this.rarity = this.generateRarity()),
      (this.color = this.getRarityColor(this.rarity)),
      (this.life = this.calculateLife(e, this.rarity)),
      (this.currentLife = this.life),
      (this.damage = this.calculateDamage(e, this.rarity)),
      (this.attackSpeed = this.calculateAttackSpeed(this.rarity)),
      (this.lastAttack = Date.now());
  }
  setEnemyName() {
    const e = document.querySelector(".enemy-name");
    e.textContent = this.name;
    const a = document.querySelector(".enemy-avatar");
    if (a) {
      let i = a.querySelector("img");
      i ||
        ((i = document.createElement("img")),
        (i.alt = this.name + " avatar"),
        (a.innerHTML = ""),
        a.appendChild(i));
      let r = "";
      try {
        r = "./";
      } catch {}
      i.src = r + this.image;
    }
  }
  setEnemyColor() {
    const e = document.querySelector(".enemy-section");
    e &&
      (e.classList.remove(
        N.NORMAL.color,
        N.RARE.color,
        N.EPIC.color,
        N.LEGENDARY.color,
        N.MYTHIC.color
      ),
      e.classList.add(this.color));
  }
  generateRarity() {
    const e = Math.random() * 100;
    return e < N.NORMAL.threshold
      ? N.NORMAL.type
      : e < N.RARE.threshold
      ? N.RARE.type
      : e < N.EPIC.threshold
      ? N.EPIC.type
      : e < N.LEGENDARY.threshold
      ? N.LEGENDARY.type
      : N.MYTHIC.type;
  }
  getRarityColor(e) {
    return (
      {
        [N.NORMAL.type]: N.NORMAL.color,
        [N.RARE.type]: N.RARE.color,
        [N.EPIC.type]: N.EPIC.color,
        [N.LEGENDARY.type]: N.LEGENDARY.color,
        [N.MYTHIC.type]: N.MYTHIC.color,
      }[e] || "white"
    );
  }
  calculateLife(e, a) {
    let i = 20;
    const r = 10,
      n = 10,
      s = 5;
    for (let l = 1; l <= e; l++) i += n + Math.floor((l - 1) / r) * s;
    const o = i,
      c = {
        [N.NORMAL.type]: N.NORMAL.lifeBonus,
        [N.RARE.type]: N.RARE.lifeBonus,
        [N.EPIC.type]: N.EPIC.lifeBonus,
        [N.LEGENDARY.type]: N.LEGENDARY.lifeBonus,
        [N.MYTHIC.type]: N.MYTHIC.lifeBonus,
      };
    return o * (c[a] || N.NORMAL.lifeBonus) * this.lifeMultiplier;
  }
  calculateDamage(e, a) {
    let i = 3;
    const r = 10,
      n = 0.3,
      s = 0.1;
    for (let l = 1; l <= e; l++) i += n + Math.floor((l - 1) / r) * s;
    const o = i,
      c = {
        [N.NORMAL.type]: N.NORMAL.damageBonus,
        [N.RARE.type]: N.RARE.damageBonus,
        [N.EPIC.type]: N.EPIC.damageBonus,
        [N.LEGENDARY.type]: N.LEGENDARY.damageBonus,
        [N.MYTHIC.type]: N.MYTHIC.damageBonus,
      };
    return o * (c[a] || N.NORMAL.damageBonus) * this.damageMultiplier;
  }
  calculateAttackSpeed(e) {
    return (
      1 *
      ({
        [N.NORMAL.type]: N.NORMAL.bonusAttackSpeed,
        [N.RARE.type]: N.RARE.bonusAttackSpeed,
        [N.EPIC.type]: N.EPIC.bonusAttackSpeed,
        [N.LEGENDARY.type]: N.LEGENDARY.bonusAttackSpeed,
        [N.MYTHIC.type]: N.MYTHIC.bonusAttackSpeed,
      }[e] || N.NORMAL.bonusAttackSpeed)
    );
  }
  canAttack(e) {
    return e - this.lastAttack >= this.attackSpeed * 1e3;
  }
  resetLife() {
    this.currentLife = this.life;
  }
  calculateDropChance() {
    return N[this.rarity].itemDropChance * this.itemDropMultiplier;
  }
  calculateItemLevel(e) {
    return Math.max(1, Math.floor(e * 1));
  }
  rollForDrop() {
    const e = this.calculateDropChance();
    return Math.random() * 100 <= e;
  }
  getRandomItemType() {
    const e = Object.values(Mt);
    return e[Math.floor(Math.random() * e.length)];
  }
  rollForMaterialDrop() {
    return Math.random() < 0.025 * this.materialDropMultiplier;
  }
}
function Be() {
  const t = document.getElementById("quests");
  t.innerHTML = "";
  const e = Array.from(new Set(Te.quests.map((n) => n.category)));
  (!Be.selectedCategory || !e.includes(Be.selectedCategory)) &&
    (Be.selectedCategory = e[0]);
  const a = Be.selectedCategory,
    i = document.createElement("div");
  (i.className = "quest-tabs"),
    e.forEach((n) => {
      const s = document.createElement("button");
      (s.className = "quest-tab" + (n === a ? " active" : "")),
        (s.textContent = n.charAt(0).toUpperCase() + n.slice(1)),
        (s.onclick = () => {
          (Be.selectedCategory = n), Be();
        }),
        i.appendChild(s);
    }),
    t.appendChild(i);
  const r = document.createElement("div");
  (r.className = "quest-list"),
    Te.quests
      .filter((n) => n.category === a)
      .forEach((n) => {
        const s = n.getProgress(Q),
          o = document.createElement("div");
        (o.className = "quest-item"),
          n.isComplete(Q) && !n.claimed && o.classList.add("ready"),
          n.claimed && o.classList.add("claimed"),
          (o.innerHTML = `
      <span class="quest-icon">${n.icon}</span>
      <span class="quest-title">${n.title}</span>
      <span class="quest-progress">${s}/${n.target}</span>
    `),
          o.addEventListener("mouseenter", (c) => ge(n.description, c)),
          o.addEventListener("mousemove", ue),
          o.addEventListener("mouseleave", he),
          o.addEventListener("click", () => Mr(n)),
          r.appendChild(o);
      }),
    t.appendChild(r);
}
function Mr(t) {
  let e = document.getElementById("quest-modal");
  e && e.remove(),
    (e = document.createElement("div")),
    (e.id = "quest-modal"),
    (e.className = "modal training-modal"),
    (e.innerHTML = `
    <div class="training-modal-content">
      <button class="training-modal-close">&times;</button>
      <h2 id="quest-modal-title"></h2>
      <div id="quest-modal-category" style="color:#38bdf8;font-size:1em;"></div>
      <p id="quest-modal-desc"></p>
      <p id="quest-modal-reward"></p>
      <button id="quest-claim-btn" class="modal-btn">Claim Reward</button>
    </div>
  `),
    document.body.appendChild(e),
    (e.querySelector("#quest-modal-title").textContent = t.title),
    e.querySelector("#quest-modal-category") &&
      (e.querySelector("#quest-modal-category").textContent = t.category
        ? `Category: ${
            t.category.charAt(0).toUpperCase() + t.category.slice(1)
          }`
        : ""),
    (e.querySelector("#quest-modal-desc").textContent = t.description);
  const i = `<span style="color:#22c55e;font-weight:bold;">${t.getProgress(
    Q
  )}/${t.target}</span>`;
  let r = [];
  for (const [o, c] of Object.entries(t.reward)) {
    let l = "";
    o === "gold"
      ? (l = "#FFD700")
      : o === "crystals"
      ? (l = "#38bdf8")
      : (l = "#fff"),
      r.push(
        `<span style="color:${l};font-weight:bold;">${c} ${
          o.charAt(0).toUpperCase() + o.slice(1)
        }</span>`
      );
  }
  const n = r.join(", ");
  e.querySelector(
    "#quest-modal-reward"
  ).innerHTML = `Progress: ${i}<br>Reward: ${n}`;
  const s = e.querySelector("#quest-claim-btn");
  (s.disabled = !t.isComplete(Q) || t.claimed),
    t.claimed
      ? ((s.textContent = "Claimed"),
        (s.style.backgroundColor = "#22c55e"),
        (s.disabled = !0))
      : ((s.textContent = "Claim Reward"),
        (s.style.backgroundColor = ""),
        (s.disabled = !t.isComplete(Q))),
    (s.onclick = () => {
      !t.isComplete(Q) ||
        t.claimed ||
        (t.claim(Q), e.classList.add("hidden"), Be());
    }),
    (e.querySelector(".training-modal-close").onclick = () =>
      e.classList.add("hidden")),
    e.addEventListener("click", (o) => {
      o.target === e && e.classList.add("hidden");
    }),
    e.classList.remove("hidden");
}
const ha = [
  {
    id: "goblin-king",
    name: "Goblin King",
    image: "enemies/goblin-king.jpg",
    attackSpeed: 0.8,
    lifeMultiplier: 1,
    damageMultiplier: 1,
    xpMultiplier: 1,
    goldMultiplier: 1,
    itemDropMultiplier: 1,
    materialDropMultiplier: 1,
    materialDropWeights: {},
    reward: {
      souls: 1,
      crystals: 1,
      gold: 1e4,
      materials: [{ id: "experience_potion", qty: 1 }],
    },
  },
  {
    id: "stone-golem",
    name: "Stone Golem",
    image: "enemies/obsidian-golem.jpg",
    attackSpeed: 1,
    lifeMultiplier: 1.5,
    damageMultiplier: 1.3,
    xpMultiplier: 1.6,
    goldMultiplier: 1.2,
    itemDropMultiplier: 1,
    materialDropMultiplier: 1,
    materialDropWeights: {},
    reward: {
      souls: 1,
      crystals: 2,
      gold: 25e3,
      materials: [{ id: "crystalized_rock", qty: 1 }],
    },
  },
  {
    id: "fire-drake",
    name: "Fire Drake",
    image: "enemies/ember-drake.jpg",
    attackSpeed: 1.2,
    lifeMultiplier: 2,
    damageMultiplier: 1.5,
    xpMultiplier: 3,
    goldMultiplier: 1,
    itemDropMultiplier: 1,
    materialDropMultiplier: 1,
    materialDropWeights: {},
    reward: {
      souls: 2,
      crystals: 5,
      gold: 5e4,
      materials: [{ id: "elixir", qty: 1 }],
    },
  },
];
class kr {
  constructor() {
    if (!ha.length) throw new Error("No bosses defined in BOSSES array.");
    const e = ha[Math.floor(Math.random() * ha.length)];
    (this.id = e.id),
      (this.name = e.name),
      (this.image = e.image),
      (this.lifeMultiplier = e.lifeMultiplier || 1),
      (this.damageMultiplier = e.damageMultiplier || 1),
      (this.xpMultiplier = e.xpMultiplier || 1),
      (this.goldMultiplier = e.goldMultiplier || 1),
      (this.itemDropMultiplier = e.itemDropMultiplier || 1),
      (this.materialDropMultiplier = e.materialDropMultiplier || 1),
      (this.materialDropWeights = e.materialDropWeights || {}),
      (this.baseLife = 3e3),
      (this.baseDamage = 18),
      (this.life = (this.baseLife + y.bossLevel * 677) * this.lifeMultiplier),
      (this.currentLife = this.life),
      (this.damage =
        (this.baseDamage + y.bossLevel * 8) * this.damageMultiplier),
      (this.attackSpeed = e.attackSpeed || 1),
      (this.lastAttack = Date.now()),
      (this.reward = e.reward);
  }
  takeDamage(e) {
    return (
      (this.currentLife = Math.max(this.currentLife - e, 0)),
      this.currentLife === 0
        ? (Q.increment("bossesKilled", null, 1), Gi(A), !0)
        : !1
    );
  }
  resetLife() {
    this.currentLife = this.life;
  }
  getLifePercent() {
    return (this.currentLife / this.life) * 100;
  }
  canAttack(e) {
    return e - this.lastAttack >= this.attackSpeed * 1e3;
  }
}
function Gi(t) {
  (t.currentEnemy = new kr()), Ct(t.currentEnemy);
  const e = document.getElementById("stage-display");
  e && (e.textContent = `Boss Level: ${y.bossLevel}`);
}
function Ct(t) {
  const e = document.querySelector("#arena-panel .enemy-avatar");
  if (e) {
    e.innerHTML = "";
    const s = document.createElement("img");
    let o = "";
    try {
      o = "./";
    } catch {}
    (s.src = o + t.image), (s.alt = t.name), e.appendChild(s);
  }
  const a = document.querySelector("#arena-panel .enemy-name");
  a && (a.textContent = t.name);
  const i = document.querySelector("#arena-panel #enemy-life-fill");
  i && (i.style.width = `${t.getLifePercent()}%`);
  const r = document.querySelector("#arena-panel #enemy-life-text");
  if (r) {
    const s = Math.floor(t.currentLife),
      o = Math.floor(t.life);
    r.textContent = `${s}/${o}`;
  }
  const n = document.querySelector("#arena-panel #enemy-damage-value");
  n && (n.textContent = Math.floor(t.damage));
}
function wr(t) {
  if (!(!A || !y || !A.currentEnemy) && A.currentEnemy.canAttack(t)) {
    if (Math.random() * 100 < y.stats.blockChance) {
      const a = y.calculateBlockHealing();
      Pe("BLOCKED", !0, !1, !0),
        a > 0 && Pe(`+${Math.floor(a)}`, !0, !1, !1, !1);
    } else {
      const a = y.calculateArmorReduction() / 100,
        i = Math.floor(A.currentEnemy.damage * (1 - a)),
        r = y.calculateTotalThornsDamage(A.currentEnemy.damage);
      if (
        (r - A.currentEnemy.damage > 1 && (A.damageEnemy(r), Pe(r, !1)),
        P.activeBuffs.has("fireShield"))
      ) {
        const n = y.stats.reflectFireDamage || 0;
        n > 0 && (A.damageEnemy(n), Pe(n, !1), Se());
      }
      A.damagePlayer(i), Pe(Math.floor(i), !0);
    }
    A.currentEnemy.lastAttack = t;
  }
}
function Lr(t) {
  if (!A || !A.currentEnemy) return;
  const e = 1e3 / y.stats.attackSpeed;
  if (t - A.lastPlayerAttack >= e) {
    if (A.currentEnemy.currentLife > 0) {
      const a = ji(y.stats.attackRating);
      if (Math.random() * 100 > a)
        P.applyToggleEffects(), Pe("MISS", !1, !1, !1, !0);
      else {
        const { damage: r, isCritical: n } = y.calculateTotalDamage(),
          s = r * (y.stats.lifeSteal / 100),
          o = y.stats.lifePerHit * (1 + (y.stats.lifePerHitPercent || 0) / 100);
        A.healPlayer(s + o),
          A.restoreMana(
            y.stats.manaPerHit * (1 + (y.stats.manaPerHitPercent || 0) / 100) ||
              0
          ),
          A.damageEnemy(r),
          Pe(r, !1, n);
      }
      A.fightMode === "arena" && Ct(A.currentEnemy);
    }
    A.lastPlayerAttack = t;
  }
}
function Wa() {
  const t = be.crystalUpgrades.continuousPlay;
  if (!t) {
    A.gameStarted = !1;
    const e = document.getElementById("start-btn");
    e && ((e.textContent = "Fight"), (e.style.backgroundColor = "#059669"));
  }
  A.fightMode === "arena"
    ? (A.currentEnemy.resetLife(), A.resetAllLife(), Ct(A.currentEnemy))
    : A.fightMode === "explore" &&
      ((A.stage = y.getStartingStage()),
      Ge(),
      (A.currentEnemy = new ze(A.stage)),
      A.resetAllLife()),
    fe(),
    A.currentEnemy && Se(),
    ie(),
    oe(),
    P.stopAllBuffs(),
    ma(),
    t &&
      ((A.gameStarted = !0),
      (A.lastPlayerAttack = Date.now()),
      A.currentEnemy && (A.currentEnemy.lastAttack = Date.now()));
}
function za() {
  const t = A.currentEnemy;
  let e = 1,
    a = 1;
  if (A.fightMode === "arena") {
    (e = Math.floor(10 + y.bossLevel * 2.25)), (a = 10 + y.bossLevel * 4);
    const {
      crystals: s,
      gold: o,
      materials: c,
      souls: l,
    } = A.currentEnemy.reward;
    o && y.gainGold(o),
      s && y.gainCrystals(s),
      l && y.gainSouls(l + Math.floor(y.bossLevel * 0.1)),
      c &&
        c.length &&
        c.forEach(({ id: d, qty: g }) => O.addMaterial({ id: d, qty: g })),
      j(`Boss defeated! +${o} gold, +${s} crystals, +${l} souls`, "success"),
      y.bossLevel++,
      ie();
  } else if (A.fightMode === "explore") {
    if (
      ((e = Math.floor(10 + A.stage * 2.25)),
      (a = 10 + A.stage * 4),
      t.rollForDrop())
    ) {
      const o = t.calculateItemLevel(A.stage),
        c = t.getRandomItemType(),
        l = O.createItem(c, o);
      O.addItemToInventory(l), Fr(l);
    }
    const s = Math.floor(A.stage / 30) + 1;
    if (t.rollForMaterialDrop) {
      for (let o = 0; o < s; o++)
        if (t.rollForMaterialDrop()) {
          const c = O.getRandomMaterial();
          O.addMaterial({ id: c.id, icon: c.icon, qty: 1 }), Ka(c);
          const l = y.stats.extraMaterialDropPercent * 100 || 0;
          let d = 0;
          const g = y.stats.extraMaterialDropMax;
          for (; Math.random() * 100 < l; ) {
            d++;
            const u = O.getRandomMaterial();
            if (
              (O.addMaterial({ id: u.id, icon: u.icon, qty: 1 }), Ka(u), d >= g)
            )
              break;
          }
        }
    }
    A.incrementStage(),
      (A.currentEnemy = new ze(A.stage)),
      Q.increment("enemiesKilled", "total"),
      Q.increment("enemiesKilled", t.rarity.toLowerCase());
  }
  const i = N[t.rarity] || {},
    r = Math.floor(
      e *
        (1 + y.stats.bonusExperience / 100) *
        (t.xpMultiplier || 1) *
        (i.xpBonus || 1)
    ),
    n = Math.floor(
      a *
        (1 + y.stats.bonusGoldPercent / 100) *
        (t.goldMultiplier || 1) *
        (i.goldBonus || 1)
    );
  y.gainGold(n),
    y.gainExp(r),
    (A.currentEnemy.lastAttack = Date.now()),
    Be(),
    Ye(),
    ie(),
    Se(),
    oe(),
    A.saveGame();
}
function Ka(t) {
  const e = document.createElement("div");
  (e.className = "loot-notification"),
    (e.style.color = "#FFD700"),
    (e.textContent = `Found: ${t.icon} ${t.name}`),
    document.body.appendChild(e),
    setTimeout(() => e.remove(), 3e3);
}
function Fr(t) {
  const e = document.createElement("div");
  (e.className = "loot-notification"),
    (e.style.color = re[t.rarity].color),
    (e.textContent = `Found: ${t.getDisplayName()}`),
    document.body.appendChild(e),
    setTimeout(() => e.remove(), 3e3);
}
function Pe(t, e, a = !1, i = !1, r = !1) {
  const n = e ? "#character-avatar" : ".enemy-avatar",
    s = document.querySelector(n),
    o = s.parentElement;
  getComputedStyle(o).position === "static" && (o.style.position = "relative");
  const c = document.createElement("div");
  i
    ? ((c.className = "damage-number blocked"),
      (c.textContent = "BLOCKED"),
      (c.style.color = "#4CAF50"))
    : r
    ? ((c.className = "damage-number miss"),
      (c.textContent = "MISS"),
      (c.style.color = "#888888"))
    : ((c.className = a ? "damage-number critical" : "damage-number"),
      (c.textContent = a ? `💥 -${Math.floor(t)}` : `-${Math.floor(t)}`));
  const l = s.getBoundingClientRect(),
    d = o.getBoundingClientRect(),
    g = l.left - d.left,
    u = l.top - d.top,
    m = Math.random() * 40 - 20,
    f = Math.random() * 40 - 20;
  (c.style.position = "absolute"),
    (c.style.left = `${g + s.offsetWidth / 2 + m}px`),
    (c.style.top = `${u + s.offsetHeight / 2 + f}px`),
    o.appendChild(c),
    setTimeout(() => c.remove(), 1e3);
}
function _r(t, e = !0) {
  const a = e ? "#character-avatar" : ".enemy-avatar",
    i = document.querySelector(a),
    r = i.parentElement;
  getComputedStyle(r).position === "static" && (r.style.position = "relative");
  const n = document.createElement("div");
  (n.className = "damage-number level-up"),
    (n.textContent = t),
    (n.style.color = "#FFD700");
  const s = i.getBoundingClientRect(),
    o = r.getBoundingClientRect(),
    c = s.left - o.left,
    l = s.top - o.top,
    d = Math.random() * 40 - 20,
    g = Math.random() * 40 - 20;
  (n.style.position = "absolute"),
    (n.style.left = `${c + i.offsetWidth / 2 + d}px`),
    (n.style.top = `${l + i.offsetHeight / 2 + g}px`),
    r.appendChild(n),
    setTimeout(() => n.remove(), 1e3);
}
function ji(t) {
  let e = A.stage || 1;
  A.fightMode === "arena" && (e = y.bossLevel * 15 || 15);
  const a = 1 + (e - 1) * 0.25,
    i = (t / (t + 25 * a)) * 100;
  return Math.min(Math.max(i, 10), 100);
}
const ne = String.raw,
  ke = {
    strength: {
      effects: {
        damagePerPoint: 0.5,
        damagePercentPer: { enabled: !1, points: 5, value: 0.01 },
      },
    },
    agility: {
      effects: {
        attackRatingPerPoint: 10,
        attackRatingPercentPer: { enabled: !1, points: 5, value: 0.01 },
        attackSpeedPer: { enabled: !1, points: 25, value: 0.01 },
      },
    },
    vitality: {
      effects: {
        lifePerPoint: 10,
        lifePercentPer: { enabled: !1, points: 5, value: 0.01 },
        regenPercentPer: { enabled: !1, points: 10, value: 0.01 },
      },
    },
    wisdom: {
      effects: {
        manaPerPoint: 5,
        manaPercentPer: { enabled: !1, points: 5, value: 0.01 },
        regenPercentPer: { enabled: !1, points: 10, value: 0.1 },
      },
    },
    endurance: {
      effects: {
        armorPerPoint: 5,
        armorPercentPer: { enabled: !1, points: 5, value: 0.01 },
      },
    },
    dexterity: {
      effects: {
        critDamagePerPoint: 0.005,
        critChancePer: { enabled: !1, points: 25, value: 0.01 },
        critDamagePer: { enabled: !1, points: 10, value: 0.01 },
      },
    },
  },
  At = {
    getStrengthTooltip: () => ne`
    <strong>Strength</strong><br />
    Each point increases:<br />
    • Damage by ${ke.strength.effects.damagePerPoint}<br />
    ${""}
  `,
    getAgilityTooltip: () => ne`
    <strong>Agility</strong><br />
    Each point increases:<br />
    • Attack Rating by ${ke.agility.effects.attackRatingPerPoint}<br />
    ${""}
    ${""}
  `,
    getVitalityTooltip: () => ne`
    <strong>Vitality</strong><br />
    Each point increases:<br />
    • Life by ${ke.vitality.effects.lifePerPoint}<br />
    ${""}
    ${""}
  `,
    getWisdomTooltip: () => ne`
    <strong>Wisdom</strong><br />
    Each point increases:<br />
    • Mana by ${ke.wisdom.effects.manaPerPoint}<br />
    ${""}
    ${""}
  `,
    getEnduranceTooltip: () => ne`
    <strong>Endurance</strong><br />
    Each point increases:<br />
    • Armor by ${ke.endurance.effects.armorPerPoint}<br />
    ${""}
  `,
    getDexterityTooltip: () => ne`
    <strong>Dexterity</strong><br />
    Each point increases:<br />
    • Critical Damage by ${ke.dexterity.effects.critDamagePerPoint}<br />
    ${""}
    ${""}
  `,
    getElementalDamageTooltip: () => ne`
    <strong>Elemental Damage</strong><br />
    Effectiveness against enemy elements:<br />
    • 200% damage vs opposite element<br />
    • 0% damage vs same element<br />
    • 25% damage vs other elements<br /><br />
    Element Strengths:<br />
    ${V.fire.icon} Fire → ${V.air.icon} Air<br />
    ${V.earth.icon} Earth → ${V.cold.icon} Cold<br />
    ${V.cold.icon} Cold → ${V.fire.icon} Fire<br />
    ${V.air.icon} Air → ${V.earth.icon} Earth
  `,
    getDamageTooltip: () => ne`
    <strong>Damage</strong><br />
    Base physical damage dealt to enemies.<br />
    Increased by Strength and equipment.
  `,
    getAttackSpeedTooltip: () => ne`
    <strong>Attack Speed</strong><br />
    Number of attacks per second.<br />
    Maximum: 5 attacks/second
  `,
    getAttackRatingTooltip: () => ne`
    <strong>Attack Rating</strong><br />
    Determines hit chance against enemies.<br />
    Higher stages require more Attack Rating.
  `,
    getCritChanceTooltip: () => ne`
    <strong>Critical Strike Chance</strong><br />
    Chance to deal critical damage.<br />
    Maximum: 100%
  `,
    getCritDamageTooltip: () => ne`
    <strong>Critical Strike Damage</strong><br />
    Damage multiplier on critical hits.<br />
    Base: 1.5x damage
  `,
    getLifeStealTooltip: () => ne`
    <strong>Life Steal</strong><br />
    Percentage of damage dealt recovered as life.
  `,
    getLifeTooltip: () => ne`
    <strong>Life</strong><br />
    Maximum life points.<br />
    Increased by Vitality and level ups.
  `,
    getLifeRegenerationTooltip: () => ne`
    <strong>Life Regeneration</strong><br />
    Amount of life recovered per second.
  `,
    getManaTooltip: () => ne`
    <strong>Mana</strong><br />
    Maximum mana points.<br />
    Increased by Wisdom and level ups.
  `,
    getManaRegenerationTooltip: () => ne`
    <strong>Mana Regeneration</strong><br />
    Amount of mana recovered per second.
  `,
    getArmorTooltip: () => ne`
    <strong>Armor</strong><br />
    Reduces incoming damage.<br />
    Effectiveness decreases in higher stages.
  `,
    getBlockChanceTooltip: () => ne`
    <strong>Block Chance</strong><br />
    Chance to block incoming attacks.<br />
    Maximum: 75%
  `,
  },
  va = String.raw;
let et = 1;
function oe() {
  const t = document.querySelector(".stats-grid");
  if (!t) return;
  let e = document.querySelector(".stats-container"),
    a = document.querySelector(".attributes-container");
  if (e) {
    Object.keys(y.stats).forEach((s) => {
      const o = document.getElementById(`${s}-value`);
      o &&
        (s === "attackSpeed"
          ? (o.textContent = y.stats.attackSpeed
              .toFixed(G.attackSpeed.decimalPlaces)
              .replace(/\./g, ","))
          : s === "critChance"
          ? (o.textContent =
              y.stats.critChance
                .toFixed(G.critChance.decimalPlaces)
                .replace(/\./g, ",") + "%")
          : s === "critDamage"
          ? (o.textContent =
              y.stats.critDamage
                .toFixed(G.critDamage.decimalPlaces)
                .replace(/\./g, ",") + "x")
          : s === "lifeSteal"
          ? (o.textContent =
              y.stats.lifeSteal
                .toFixed(G.lifeSteal.decimalPlaces)
                .replace(/\./g, ",") + "%")
          : s === "lifeRegen"
          ? (o.textContent = y.stats.lifeRegen
              .toFixed(G.lifeRegen.decimalPlaces)
              .replace(/\./g, ","))
          : s === "manaRegen"
          ? (o.textContent = y.stats.manaRegen
              .toFixed(G.manaRegen.decimalPlaces)
              .replace(/\./g, ","))
          : s === "blockChance"
          ? (o.textContent =
              y.stats.blockChance
                .toFixed(G.blockChance.decimalPlaces)
                .replace(/\./g, ",") + "%")
          : s === "bonusGoldPercent"
          ? (o.textContent =
              (y.stats.bonusGoldPercent * 100)
                .toFixed(G.bonusGoldPercent.decimalPlaces)
                .replace(/\./g, ",") + "%")
          : s === "extraMaterialDropPercent"
          ? (o.textContent =
              (y.stats.extraMaterialDropPercent * 100).toFixed(1) + "%")
          : (o.textContent = y.stats[s]));
    }),
      (document.getElementById("level-value").textContent = y.level || 1),
      (document.getElementById("exp-value").textContent = y.exp || 0),
      (document.getElementById("exp-progress").textContent =
        ((y.exp / y.getExpToNextLevel()) * 100).toFixed(1) + "%"),
      (document.getElementById("exp-to-next-level-value").textContent =
        y.getExpToNextLevel() || 100),
      (document.getElementById("highest-stage-value").textContent =
        y.highestStage);
    const r = document.getElementById("attackRating-value");
    if (r) {
      r.textContent = y.stats.attackRating;
      const s = ji(y.stats.attackRating).toFixed(2) + "%";
      r.appendChild(document.createTextNode(` (${s})`));
    }
    const n = document.getElementById("armor-value");
    if (n) {
      n.textContent = y.stats.armor || 0;
      const s = y.calculateArmorReduction().toFixed(2) + "%";
      n.appendChild(document.createTextNode(` (${s})`));
    }
  } else {
    (e = document.createElement("div")), (e.className = "stats-container");
    const r = va`
      <div><strong>Level:</strong> <span id="level-value">${
        y.level || 1
      }</span></div>
      <div>
        <strong>EXP:</strong> <span id="exp-value">${y.exp || 0}</span> /
        <span id="exp-to-next-level-value">${
          y.getExpToNextLevel() || 100
        }</span>
        (<span id="exp-progress">${(
          (y.exp / y.getExpToNextLevel()) *
          100
        ).toFixed(1)}%</span>)
      </div>
      <div><strong>Highest Stage:</strong><span id="highest-stage-value">${
        y.highestStage
      }</span></div>
      <hr style="border: none; border-top: 1px solid #fff; margin: 10px 0;" />
    `,
      n = va`
      <div class="stats-tabs">
        <button class="subtab-btn active" data-subtab="offense">Offense</button>
        <button class="subtab-btn" data-subtab="defense">Defense</button>
        <button class="subtab-btn" data-subtab="misc">Misc</button>
      </div>
    `;
    e.innerHTML = r + n;
    const s = (g) => {
        const u = document.createElement("div");
        return (
          (u.className = "stats-panel"),
          g === "offense" && u.classList.add("active"),
          (u.id = `${g}-panel`),
          u
        );
      },
      o = s("offense"),
      c = s("defense"),
      l = s("misc"),
      d = (g, u) => {
        const m = ["fireDamage", "coldDamage", "airDamage", "earthDamage"],
          f = [];
        if (
          (Object.keys(u).forEach((h) => {
            if (!u[h].showInUI && h !== "extraMaterialDropPercent") return;
            if (g === o && m.includes(h)) {
              f.push(h);
              return;
            }
            const v = document.createElement("div");
            v.className = "stat-row";
            const E = document.createElement("span");
            (E.className = "stat-label"), (E.textContent = xe(h));
            const p = document.createElement("span");
            p.id = `${h}-value`;
            let x = y.stats[h];
            h === "extraMaterialDropPercent"
              ? (x = (x * 100).toFixed(1) + "%")
              : typeof x == "number" &&
                u[h].decimalPlaces !== void 0 &&
                (x = x.toFixed(u[h].decimalPlaces)),
              (p.textContent = x),
              v.appendChild(E),
              v.appendChild(document.createTextNode(" ")),
              v.appendChild(p),
              g.appendChild(v);
            const b = E.textContent.replace(/[^a-zA-Z]/g, "");
            let D = At[`get${b}Tooltip`];
            g === o &&
              ["fireDamage", "coldDamage", "airDamage", "earthDamage"].includes(
                h
              ) &&
              (D = At.getElementalDamageTooltip),
              D &&
                (E.addEventListener("mouseenter", (B) => ge(D(), B)),
                E.addEventListener("mousemove", ue),
                E.addEventListener("mouseleave", he));
          }),
          g === o && f.length)
        ) {
          const h = {
              fireDamage: V.fire.icon,
              coldDamage: V.cold.icon,
              airDamage: V.air.icon,
              earthDamage: V.earth.icon,
            },
            v = document.createElement("div");
          (v.className = "elemental-stats-grid"),
            ["fireDamage", "coldDamage", "airDamage", "earthDamage"].forEach(
              (E) => {
                if (!f.includes(E)) return;
                const p = document.createElement("div");
                p.className = "elemental-row";
                const x = document.createElement("span");
                x.textContent = h[E];
                const b = document.createElement("strong");
                (b.textContent = xe(E)),
                  b.addEventListener("mouseenter", (S) =>
                    ge(At.getElementalDamageTooltip(), S)
                  ),
                  b.addEventListener("mousemove", ue),
                  b.addEventListener("mouseleave", he);
                const D = document.createElement("span");
                D.id = `${E}-value`;
                let B = y.stats[E];
                (D.textContent = B),
                  p.appendChild(x),
                  p.appendChild(b),
                  p.appendChild(document.createTextNode(" ")),
                  p.appendChild(D),
                  v.appendChild(p);
              }
            ),
            g.appendChild(v);
        }
      };
    d(o, Da),
      d(c, Ba),
      d(l, Sa),
      e.appendChild(o),
      e.appendChild(c),
      e.appendChild(l),
      e.querySelectorAll(".subtab-btn").forEach((g) => {
        g.addEventListener("click", (u) => {
          e
            .querySelectorAll(".subtab-btn")
            .forEach((h) => h.classList.remove("active")),
            g.classList.add("active");
          const m = g.dataset.subtab;
          e.querySelectorAll(".stats-panel").forEach((h) =>
            h.classList.remove("active")
          );
          const f = e.querySelector(`#${m}-panel`);
          f && f.classList.add("active");
        });
      }),
      t.appendChild(e);
  }
  a
    ? ((document.getElementById(
        "attributes"
      ).textContent = `Attributes (+${y.statPoints})`),
      (document.getElementById("strength-value").textContent =
        y.stats.strength),
      (document.getElementById("agility-value").textContent = y.stats.agility),
      (document.getElementById("vitality-value").textContent =
        y.stats.vitality),
      (document.getElementById("wisdom-value").textContent = y.stats.wisdom),
      (document.getElementById("endurance-value").textContent =
        y.stats.endurance),
      (document.getElementById("dexterity-value").textContent =
        y.stats.dexterity))
    : ((a = document.createElement("div")),
      (a.className = "attributes-container"),
      (a.innerHTML = va`
      <div class="attributes-header">
        <h3 id="attributes">Attributes (+${y.statPoints})</h3>
        <div class="allocate-modes" style="margin-bottom:8px;">
          <button class="mode-btn" data-amount="1">+1</button>
          <button class="mode-btn" data-amount="30">+30</button>
          <button class="mode-btn" data-amount="60">+60</button>
          <button class="mode-btn" data-amount="120">+120</button>
          <button class="mode-btn" data-amount="max">MAX</button>
        </div>
      </div>
      <div class="attributes-body">
        ${Object.entries(y.stats)
          .map(([r, n]) => {
            if (!ke[r]) return "";
            const s = r.charAt(0).toUpperCase() + r.slice(1);
            return `
            <div class="attribute-row">
              <button class="allocate-btn" data-stat="${r}">+</button>
              <strong>${s}:</strong>
              <span id="${r}-value">${y.stats[r]}</span>
            </div>
          `;
          })
          .join("")}
      </div>
    `),
      a.querySelectorAll(".mode-btn").forEach((r) => {
        r.addEventListener("click", () => {
          (et = r.dataset.amount),
            a
              .querySelectorAll(".mode-btn")
              .forEach((n) => n.classList.remove("active")),
            r.classList.add("active");
        });
      }),
      a.querySelector(`.mode-btn[data-amount="${et}"]`).classList.add("active"),
      a.querySelectorAll(".attribute-row").forEach((r) => {
        const n = r.querySelector("button").dataset.stat;
        r.addEventListener("mouseenter", (s) =>
          ge(At[`get${n.charAt(0).toUpperCase() + n.slice(1)}Tooltip`](), s)
        ),
          r.addEventListener("mousemove", ue),
          r.addEventListener("mouseleave", he);
      }),
      a.querySelectorAll(".allocate-btn").forEach((r) => {
        r.addEventListener("mousedown", (n) => {
          const s = n.target.dataset.stat;
          if (et === "max") for (; y.statPoints > 0; ) y.allocateStat(s);
          else {
            const g = parseInt(et, 10) || 1;
            for (let u = 0; u < g && y.statPoints > 0; u++) y.allocateStat(s);
          }
          oe();
          let o, c;
          const l = () => {
              clearInterval(o),
                (o = setInterval(() => {
                  if (y.statPoints > 0) {
                    if (et === "max")
                      for (; y.statPoints > 0; ) y.allocateStat(s);
                    else
                      for (
                        let g = 0;
                        g < (parseInt(et, 10) || 1) && y.statPoints > 0;
                        g++
                      )
                        y.allocateStat(s);
                    oe();
                  } else d();
                }, 100));
            },
            d = () => {
              clearTimeout(c),
                clearInterval(o),
                document.removeEventListener("mouseup", d),
                document.removeEventListener("mouseleave", d);
            };
          (c = setTimeout(l, 500)),
            document.addEventListener("mouseup", d),
            document.addEventListener("mouseleave", d);
        });
      }),
      t.appendChild(a)),
    document.querySelector('[data-tab="skilltree"]').classList.remove("hidden");
}
class Pr {
  constructor({ tabsContainerSelector: e = ".tab-buttons" } = {}) {
    (this.tabs = {}),
      (this.clearedIndicators = new Set()),
      (this.previousStatPoints = 0),
      (this.previousSkillPoints = 0),
      (this.previousClaimableQuests = 0),
      Array.from(document.querySelectorAll(`${e} .tab-btn`)).forEach((i) => {
        const r = i.dataset.tab;
        if (r) {
          const n = document.createElement("span");
          n.classList.add("indicator-dot"),
            i.appendChild(n),
            (this.tabs[r] = i);
        }
      });
  }
  showIndicator(e) {
    const a = this.tabs[e];
    a && a.classList.add("has-indicator");
  }
  clearIndicator(e) {
    const a = this.tabs[e];
    a && (a.classList.remove("has-indicator"), this.clearedIndicators.add(e));
  }
  clearIndicatorOnly(e) {
    const a = this.tabs[e];
    a && a.classList.remove("has-indicator");
  }
  markAsCleared(e) {
    this.clearedIndicators.add(e), this.clearIndicator(e);
  }
  resetClearedStatus(e) {
    this.clearedIndicators.delete(e);
  }
  toggleIndicator(e, a) {
    a ? this.showIndicator(e) : this.clearIndicator(e);
  }
  updateAll(e) {
    const {
      unallocatedStatPoints: a = 0,
      hasNewInventoryItems: i = !1,
      unallocatedSkillPoints: r = 0,
      claimableQuests: n = 0,
      currentTab: s = "stats",
    } = e;
    a > this.previousStatPoints && this.resetClearedStatus("stats"),
      (this.previousStatPoints = a),
      a > 0 && !this.clearedIndicators.has("stats")
        ? this.showIndicator("stats")
        : this.clearIndicatorOnly("stats"),
      i && s !== "inventory"
        ? this.showIndicator("inventory")
        : this.clearIndicatorOnly("inventory"),
      P.selectedPath
        ? (r > this.previousSkillPoints && this.resetClearedStatus("skilltree"),
          (this.previousSkillPoints = r),
          r > 0 && !this.clearedIndicators.has("skilltree")
            ? this.showIndicator("skilltree")
            : this.clearIndicatorOnly("skilltree"))
        : (this.clearIndicatorOnly("skilltree"),
          (this.previousSkillPoints = r)),
      n > this.previousClaimableQuests && this.resetClearedStatus("quests"),
      (this.previousClaimableQuests = n),
      n > 0 && !this.clearedIndicators.has("quests")
        ? this.showIndicator("quests")
        : this.clearIndicatorOnly("quests"),
      this.clearIndicatorOnly("training"),
      this.clearIndicatorOnly("crystalShop"),
      this.clearIndicatorOnly("options");
  }
  clearAll() {
    Object.keys(this.tabs).forEach((e) => {
      this.clearIndicator(e);
    });
  }
  markTabAsVisited(e) {
    this.markAsCleared(e);
  }
}
const Ke = {
  EXPERIENCE_POTION: {
    id: "experience_potion",
    name: "Experience Potion",
    icon: "🧪",
    description: "Grants 1000 experience when used.",
    dropChance: 30,
    sort: 10,
    onUse: (t, e = 1) => {
      t.gainExp(1e3 * e);
    },
  },
  MEDIUM_GOLD_COINS: {
    id: "medium_gold_coins",
    name: "Medium Gold Coins",
    icon: "🪙",
    get description() {
      return "Adds 1000 gold per coin to your total.";
    },
    dropChance: 40,
    sort: 40,
    onUse: (t, e = 1) => {
      t.gainGold(1e3 * e);
    },
  },
  LARGE_GOLD_COINS: {
    id: "large_gold_coins",
    name: "Large Gold Coins",
    icon: "🪙",
    get description() {
      return "Adds 10000 gold per coin to your total.";
    },
    dropChance: 20,
    sort: 50,
    onUse: (t, e = 1) => {
      t.gainGold(1e4 * e);
    },
  },
  ENORMOUS_GOLD_COINS: {
    id: "enormous_gold_coins",
    name: "Enormous Gold Coins",
    icon: "🪙",
    get description() {
      return "Adds 50000 gold per coin to your total.";
    },
    dropChance: 1,
    sort: 60,
    onUse: (t, e = 1) => {
      t.gainGold(5e4 * e);
    },
  },
  FREAKY_GOLD_COINS: {
    id: "freaky_gold_coins",
    name: "Freaky Gold Coins",
    icon: "🪙",
    get description() {
      return "Adds 5000000 gold per coin to your total.";
    },
    dropChance: 0.01,
    sort: 60,
    onUse: (t, e = 1) => {
      t.gainGold(5e6 * e);
    },
  },
  ELIXIR: {
    id: "elixir",
    name: "Elixir",
    icon: "🥤",
    description: "Grants 1 skill point.",
    dropChance: 1,
    sort: 70,
    exclusive: !0,
    onUse: (t, e = 1) => {
      (t.permaStats.skillPoints = t.permaStats.skillPoints + 1 * e),
        P.addSkillPoints(1 * e);
    },
  },
  CRYSTALIZED_ROCK: {
    id: "crystalized_rock",
    name: "Crystalized Rock",
    icon: "💎",
    description: "Gives 1 crystal.",
    dropChance: 50,
    sort: 80,
    onUse: (t, e = 1) => {
      t.gainCrystals(1 * e);
    },
  },
  POTION_OF_STRENGTH: {
    id: "potion_of_strength",
    name: "Potion of Strength",
    icon: "💥",
    description: "Increases strength by 1.",
    dropChance: 5,
    sort: 90,
    onUse: (t, e = 1) => {
      t.permaStats.strength += 1 * e;
    },
  },
  POTION_OF_AGILITY: {
    id: "potion_of_agility",
    name: "Potion of Agility",
    icon: "🏃",
    description: "Increases agility by 1.",
    dropChance: 5,
    sort: 100,
    onUse: (t, e = 1) => {
      t.permaStats.agility += 1 * e;
    },
  },
  POTION_OF_VITALITY: {
    id: "potion_of_vitality",
    name: "Potion of Vitality",
    icon: "❤️",
    description: "Increases vitality by 1.",
    dropChance: 5,
    sort: 110,
    onUse: (t, e = 1) => {
      t.permaStats.vitality += 1 * e;
    },
  },
  POTION_OF_ENDURANCE: {
    id: "potion_of_endurance",
    name: "Potion of Endurance",
    icon: "🛡️",
    description: "Increases endurance by 1.",
    dropChance: 5,
    sort: 120,
    onUse: (t, e = 1) => {
      t.permaStats.endurance += 1 * e;
    },
  },
  POTION_OF_WISDOM: {
    id: "potion_of_wisdom",
    name: "Potion of Wisdom",
    icon: "🧠",
    description: "Increases wisdom by 1.",
    dropChance: 5,
    sort: 130,
    onUse: (t, e = 1) => {
      t.permaStats.wisdom += 1 * e;
    },
  },
  POTION_OF_DEXTERITY: {
    id: "potion_of_dexterity",
    name: "Potion of Dexterity",
    icon: "🎯",
    description: "Increases dexterity by 1.",
    dropChance: 5,
    sort: 140,
    onUse: (t, e = 1) => {
      t.permaStats.dexterity += 1 * e;
    },
  },
  ARMOR_UPGRADE_STONE: {
    id: "armor_upgrade_stone",
    name: "Armor Upgrade Stone",
    icon: "🪨",
    description: "Upgrade the level of an equipped armor item by 1.",
    dropChance: 20,
    sort: 150,
    onUse: (t, e = 1) => {},
    upgradeType: "armor",
  },
  JEWELRY_UPGRADE_GEM: {
    id: "jewelry_upgrade_gem",
    name: "Jewelry Upgrade Gem",
    icon: "💍",
    description: "Upgrade the level of an equipped jewelry item by 1.",
    dropChance: 4,
    sort: 160,
    onUse: (t, e = 1) => {},
    upgradeType: "jewelry",
  },
  WEAPON_UPGRADE_CORE: {
    id: "weapon_upgrade_core",
    name: "Weapon Upgrade Core",
    icon: "⚡",
    description: "Upgrade the level of an equipped weapon by 1.",
    dropChance: 3,
    sort: 170,
    onUse: (t, e = 1) => {},
    upgradeType: "weapon",
  },
};
var ya =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Ir(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function Tr(t) {
  if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
  var e = t.default;
  if (typeof e == "function") {
    var a = function i() {
      return this instanceof i
        ? Reflect.construct(e, arguments, this.constructor)
        : e.apply(this, arguments);
    };
    a.prototype = e.prototype;
  } else a = {};
  return (
    Object.defineProperty(a, "__esModule", { value: !0 }),
    Object.keys(t).forEach(function (i) {
      var r = Object.getOwnPropertyDescriptor(t, i);
      Object.defineProperty(
        a,
        i,
        r.get
          ? r
          : {
              enumerable: !0,
              get: function () {
                return t[i];
              },
            }
      );
    }),
    a
  );
}
var _e = {},
  kt = { exports: {} };
function qr(t) {
  throw new Error(
    'Could not dynamically require "' +
      t +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var wt = { exports: {} };
const Rr = {},
  $r = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Rr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Hr = Tr($r);
var Or = wt.exports,
  Ya;
function Y() {
  return (
    Ya ||
      ((Ya = 1),
      (function (t, e) {
        (function (a, i) {
          t.exports = i();
        })(Or, function () {
          var a =
            a ||
            (function (i, r) {
              var n;
              if (
                (typeof window < "u" && window.crypto && (n = window.crypto),
                typeof self < "u" && self.crypto && (n = self.crypto),
                typeof globalThis < "u" &&
                  globalThis.crypto &&
                  (n = globalThis.crypto),
                !n &&
                  typeof window < "u" &&
                  window.msCrypto &&
                  (n = window.msCrypto),
                !n && typeof ya < "u" && ya.crypto && (n = ya.crypto),
                !n && typeof qr == "function")
              )
                try {
                  n = Hr;
                } catch {}
              var s = function () {
                  if (n) {
                    if (typeof n.getRandomValues == "function")
                      try {
                        return n.getRandomValues(new Uint32Array(1))[0];
                      } catch {}
                    if (typeof n.randomBytes == "function")
                      try {
                        return n.randomBytes(4).readInt32LE();
                      } catch {}
                  }
                  throw new Error(
                    "Native crypto module could not be used to get secure random number."
                  );
                },
                o =
                  Object.create ||
                  (function () {
                    function p() {}
                    return function (x) {
                      var b;
                      return (
                        (p.prototype = x),
                        (b = new p()),
                        (p.prototype = null),
                        b
                      );
                    };
                  })(),
                c = {},
                l = (c.lib = {}),
                d = (l.Base = (function () {
                  return {
                    extend: function (p) {
                      var x = o(this);
                      return (
                        p && x.mixIn(p),
                        (!x.hasOwnProperty("init") || this.init === x.init) &&
                          (x.init = function () {
                            x.$super.init.apply(this, arguments);
                          }),
                        (x.init.prototype = x),
                        (x.$super = this),
                        x
                      );
                    },
                    create: function () {
                      var p = this.extend();
                      return p.init.apply(p, arguments), p;
                    },
                    init: function () {},
                    mixIn: function (p) {
                      for (var x in p) p.hasOwnProperty(x) && (this[x] = p[x]);
                      p.hasOwnProperty("toString") &&
                        (this.toString = p.toString);
                    },
                    clone: function () {
                      return this.init.prototype.extend(this);
                    },
                  };
                })()),
                g = (l.WordArray = d.extend({
                  init: function (p, x) {
                    (p = this.words = p || []),
                      x != r
                        ? (this.sigBytes = x)
                        : (this.sigBytes = p.length * 4);
                  },
                  toString: function (p) {
                    return (p || m).stringify(this);
                  },
                  concat: function (p) {
                    var x = this.words,
                      b = p.words,
                      D = this.sigBytes,
                      B = p.sigBytes;
                    if ((this.clamp(), D % 4))
                      for (var S = 0; S < B; S++) {
                        var k = (b[S >>> 2] >>> (24 - (S % 4) * 8)) & 255;
                        x[(D + S) >>> 2] |= k << (24 - ((D + S) % 4) * 8);
                      }
                    else
                      for (var w = 0; w < B; w += 4)
                        x[(D + w) >>> 2] = b[w >>> 2];
                    return (this.sigBytes += B), this;
                  },
                  clamp: function () {
                    var p = this.words,
                      x = this.sigBytes;
                    (p[x >>> 2] &= 4294967295 << (32 - (x % 4) * 8)),
                      (p.length = i.ceil(x / 4));
                  },
                  clone: function () {
                    var p = d.clone.call(this);
                    return (p.words = this.words.slice(0)), p;
                  },
                  random: function (p) {
                    for (var x = [], b = 0; b < p; b += 4) x.push(s());
                    return new g.init(x, p);
                  },
                })),
                u = (c.enc = {}),
                m = (u.Hex = {
                  stringify: function (p) {
                    for (
                      var x = p.words, b = p.sigBytes, D = [], B = 0;
                      B < b;
                      B++
                    ) {
                      var S = (x[B >>> 2] >>> (24 - (B % 4) * 8)) & 255;
                      D.push((S >>> 4).toString(16)),
                        D.push((S & 15).toString(16));
                    }
                    return D.join("");
                  },
                  parse: function (p) {
                    for (var x = p.length, b = [], D = 0; D < x; D += 2)
                      b[D >>> 3] |=
                        parseInt(p.substr(D, 2), 16) << (24 - (D % 8) * 4);
                    return new g.init(b, x / 2);
                  },
                }),
                f = (u.Latin1 = {
                  stringify: function (p) {
                    for (
                      var x = p.words, b = p.sigBytes, D = [], B = 0;
                      B < b;
                      B++
                    ) {
                      var S = (x[B >>> 2] >>> (24 - (B % 4) * 8)) & 255;
                      D.push(String.fromCharCode(S));
                    }
                    return D.join("");
                  },
                  parse: function (p) {
                    for (var x = p.length, b = [], D = 0; D < x; D++)
                      b[D >>> 2] |=
                        (p.charCodeAt(D) & 255) << (24 - (D % 4) * 8);
                    return new g.init(b, x);
                  },
                }),
                h = (u.Utf8 = {
                  stringify: function (p) {
                    try {
                      return decodeURIComponent(escape(f.stringify(p)));
                    } catch {
                      throw new Error("Malformed UTF-8 data");
                    }
                  },
                  parse: function (p) {
                    return f.parse(unescape(encodeURIComponent(p)));
                  },
                }),
                v = (l.BufferedBlockAlgorithm = d.extend({
                  reset: function () {
                    (this._data = new g.init()), (this._nDataBytes = 0);
                  },
                  _append: function (p) {
                    typeof p == "string" && (p = h.parse(p)),
                      this._data.concat(p),
                      (this._nDataBytes += p.sigBytes);
                  },
                  _process: function (p) {
                    var x,
                      b = this._data,
                      D = b.words,
                      B = b.sigBytes,
                      S = this.blockSize,
                      k = S * 4,
                      w = B / k;
                    p
                      ? (w = i.ceil(w))
                      : (w = i.max((w | 0) - this._minBufferSize, 0));
                    var C = w * S,
                      M = i.min(C * 4, B);
                    if (C) {
                      for (var L = 0; L < C; L += S) this._doProcessBlock(D, L);
                      (x = D.splice(0, C)), (b.sigBytes -= M);
                    }
                    return new g.init(x, M);
                  },
                  clone: function () {
                    var p = d.clone.call(this);
                    return (p._data = this._data.clone()), p;
                  },
                  _minBufferSize: 0,
                }));
              l.Hasher = v.extend({
                cfg: d.extend(),
                init: function (p) {
                  (this.cfg = this.cfg.extend(p)), this.reset();
                },
                reset: function () {
                  v.reset.call(this), this._doReset();
                },
                update: function (p) {
                  return this._append(p), this._process(), this;
                },
                finalize: function (p) {
                  p && this._append(p);
                  var x = this._doFinalize();
                  return x;
                },
                blockSize: 16,
                _createHelper: function (p) {
                  return function (x, b) {
                    return new p.init(b).finalize(x);
                  };
                },
                _createHmacHelper: function (p) {
                  return function (x, b) {
                    return new E.HMAC.init(p, b).finalize(x);
                  };
                },
              });
              var E = (c.algo = {});
              return c;
            })(Math);
          return a;
        });
      })(wt)),
    wt.exports
  );
}
var Lt = { exports: {} },
  Nr = Lt.exports,
  Va;
function fa() {
  return (
    Va ||
      ((Va = 1),
      (function (t, e) {
        (function (a, i) {
          t.exports = i(Y());
        })(Nr, function (a) {
          return (
            (function (i) {
              var r = a,
                n = r.lib,
                s = n.Base,
                o = n.WordArray,
                c = (r.x64 = {});
              (c.Word = s.extend({
                init: function (l, d) {
                  (this.high = l), (this.low = d);
                },
              })),
                (c.WordArray = s.extend({
                  init: function (l, d) {
                    (l = this.words = l || []),
                      d != i
                        ? (this.sigBytes = d)
                        : (this.sigBytes = l.length * 8);
                  },
                  toX32: function () {
                    for (
                      var l = this.words, d = l.length, g = [], u = 0;
                      u < d;
                      u++
                    ) {
                      var m = l[u];
                      g.push(m.high), g.push(m.low);
                    }
                    return o.create(g, this.sigBytes);
                  },
                  clone: function () {
                    for (
                      var l = s.clone.call(this),
                        d = (l.words = this.words.slice(0)),
                        g = d.length,
                        u = 0;
                      u < g;
                      u++
                    )
                      d[u] = d[u].clone();
                    return l;
                  },
                }));
            })(),
            a
          );
        });
      })(Lt)),
    Lt.exports
  );
}
var Ft = { exports: {} },
  Ur = Ft.exports,
  Qa;
function Gr() {
  return (
    Qa ||
      ((Qa = 1),
      (function (t, e) {
        (function (a, i) {
          t.exports = i(Y());
        })(Ur, function (a) {
          return (
            (function () {
              if (typeof ArrayBuffer == "function") {
                var i = a,
                  r = i.lib,
                  n = r.WordArray,
                  s = n.init,
                  o = (n.init = function (c) {
                    if (
                      (c instanceof ArrayBuffer && (c = new Uint8Array(c)),
                      (c instanceof Int8Array ||
                        (typeof Uint8ClampedArray < "u" &&
                          c instanceof Uint8ClampedArray) ||
                        c instanceof Int16Array ||
                        c instanceof Uint16Array ||
                        c instanceof Int32Array ||
                        c instanceof Uint32Array ||
                        c instanceof Float32Array ||
                        c instanceof Float64Array) &&
                        (c = new Uint8Array(
                          c.buffer,
                          c.byteOffset,
                          c.byteLength
                        )),
                      c instanceof Uint8Array)
                    ) {
                      for (var l = c.byteLength, d = [], g = 0; g < l; g++)
                        d[g >>> 2] |= c[g] << (24 - (g % 4) * 8);
                      s.call(this, d, l);
                    } else s.apply(this, arguments);
                  });
                o.prototype = n;
              }
            })(),
            a.lib.WordArray
          );
        });
      })(Ft)),
    Ft.exports
  );
}
var _t = { exports: {} },
  jr = _t.exports,
  Xa;
function Wr() {
  return (
    Xa ||
      ((Xa = 1),
      (function (t, e) {
        (function (a, i) {
          t.exports = i(Y());
        })(jr, function (a) {
          return (
            (function () {
              var i = a,
                r = i.lib,
                n = r.WordArray,
                s = i.enc;
              (s.Utf16 = s.Utf16BE =
                {
                  stringify: function (c) {
                    for (
                      var l = c.words, d = c.sigBytes, g = [], u = 0;
                      u < d;
                      u += 2
                    ) {
                      var m = (l[u >>> 2] >>> (16 - (u % 4) * 8)) & 65535;
                      g.push(String.fromCharCode(m));
                    }
                    return g.join("");
                  },
                  parse: function (c) {
                    for (var l = c.length, d = [], g = 0; g < l; g++)
                      d[g >>> 1] |= c.charCodeAt(g) << (16 - (g % 2) * 16);
                    return n.create(d, l * 2);
                  },
                }),
                (s.Utf16LE = {
                  stringify: function (c) {
                    for (
                      var l = c.words, d = c.sigBytes, g = [], u = 0;
                      u < d;
                      u += 2
                    ) {
                      var m = o((l[u >>> 2] >>> (16 - (u % 4) * 8)) & 65535);
                      g.push(String.fromCharCode(m));
                    }
                    return g.join("");
                  },
                  parse: function (c) {
                    for (var l = c.length, d = [], g = 0; g < l; g++)
                      d[g >>> 1] |= o(c.charCodeAt(g) << (16 - (g % 2) * 16));
                    return n.create(d, l * 2);
                  },
                });
              function o(c) {
                return ((c << 8) & 4278255360) | ((c >>> 8) & 16711935);
              }
            })(),
            a.enc.Utf16
          );
        });
      })(_t)),
    _t.exports
  );
}
var Pt = { exports: {} },
  zr = Pt.exports,
  Za;
function Ve() {
  return (
    Za ||
      ((Za = 1),
      (function (t, e) {
        (function (a, i) {
          t.exports = i(Y());
        })(zr, function (a) {
          return (
            (function () {
              var i = a,
                r = i.lib,
                n = r.WordArray,
                s = i.enc;
              s.Base64 = {
                stringify: function (c) {
                  var l = c.words,
                    d = c.sigBytes,
                    g = this._map;
                  c.clamp();
                  for (var u = [], m = 0; m < d; m += 3)
                    for (
                      var f = (l[m >>> 2] >>> (24 - (m % 4) * 8)) & 255,
                        h =
                          (l[(m + 1) >>> 2] >>> (24 - ((m + 1) % 4) * 8)) & 255,
                        v =
                          (l[(m + 2) >>> 2] >>> (24 - ((m + 2) % 4) * 8)) & 255,
                        E = (f << 16) | (h << 8) | v,
                        p = 0;
                      p < 4 && m + p * 0.75 < d;
                      p++
                    )
                      u.push(g.charAt((E >>> (6 * (3 - p))) & 63));
                  var x = g.charAt(64);
                  if (x) for (; u.length % 4; ) u.push(x);
                  return u.join("");
                },
                parse: function (c) {
                  var l = c.length,
                    d = this._map,
                    g = this._reverseMap;
                  if (!g) {
                    g = this._reverseMap = [];
                    for (var u = 0; u < d.length; u++) g[d.charCodeAt(u)] = u;
                  }
                  var m = d.charAt(64);
                  if (m) {
                    var f = c.indexOf(m);
                    f !== -1 && (l = f);
                  }
                  return o(c, l, g);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              };
              function o(c, l, d) {
                for (var g = [], u = 0, m = 0; m < l; m++)
                  if (m % 4) {
                    var f = d[c.charCodeAt(m - 1)] << ((m % 4) * 2),
                      h = d[c.charCodeAt(m)] >>> (6 - (m % 4) * 2),
                      v = f | h;
                    (g[u >>> 2] |= v << (24 - (u % 4) * 8)), u++;
                  }
                return n.create(g, u);
              }
            })(),
            a.enc.Base64
          );
        });
      })(Pt)),
    Pt.exports
  );
}
var It = { exports: {} },
  Kr = It.exports,
  Ja;
function Yr() {
  return (
    Ja ||
      ((Ja = 1),
      (function (t, e) {
        (function (a, i) {
          t.exports = i(Y());
        })(Kr, function (a) {
          return (
            (function () {
              var i = a,
                r = i.lib,
                n = r.WordArray,
                s = i.enc;
              s.Base64url = {
                stringify: function (c, l) {
                  l === void 0 && (l = !0);
                  var d = c.words,
                    g = c.sigBytes,
                    u = l ? this._safe_map : this._map;
                  c.clamp();
                  for (var m = [], f = 0; f < g; f += 3)
                    for (
                      var h = (d[f >>> 2] >>> (24 - (f % 4) * 8)) & 255,
                        v =
                          (d[(f + 1) >>> 2] >>> (24 - ((f + 1) % 4) * 8)) & 255,
                        E =
                          (d[(f + 2) >>> 2] >>> (24 - ((f + 2) % 4) * 8)) & 255,
                        p = (h << 16) | (v << 8) | E,
                        x = 0;
                      x < 4 && f + x * 0.75 < g;
                      x++
                    )
                      m.push(u.charAt((p >>> (6 * (3 - x))) & 63));
                  var b = u.charAt(64);
                  if (b) for (; m.length % 4; ) m.push(b);
                  return m.join("");
                },
                parse: function (c, l) {
                  l === void 0 && (l = !0);
                  var d = c.length,
                    g = l ? this._safe_map : this._map,
                    u = this._reverseMap;
                  if (!u) {
                    u = this._reverseMap = [];
                    for (var m = 0; m < g.length; m++) u[g.charCodeAt(m)] = m;
                  }
                  var f = g.charAt(64);
                  if (f) {
                    var h = c.indexOf(f);
                    h !== -1 && (d = h);
                  }
                  return o(c, d, u);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                _safe_map:
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
              };
              function o(c, l, d) {
                for (var g = [], u = 0, m = 0; m < l; m++)
                  if (m % 4) {
                    var f = d[c.charCodeAt(m - 1)] << ((m % 4) * 2),
                      h = d[c.charCodeAt(m)] >>> (6 - (m % 4) * 2),
                      v = f | h;
                    (g[u >>> 2] |= v << (24 - (u % 4) * 8)), u++;
                  }
                return n.create(g, u);
              }
            })(),
            a.enc.Base64url
          );
        });
      })(It)),
    It.exports
  );
}
var Tt = { exports: {} },
  Vr = Tt.exports,
  ei;
function Qe() {
  return (
    ei ||
      ((ei = 1),
      (function (t, e) {
        (function (a, i) {
          t.exports = i(Y());
        })(Vr, function (a) {
          return (
            (function (i) {
              var r = a,
                n = r.lib,
                s = n.WordArray,
                o = n.Hasher,
                c = r.algo,
                l = [];
              (function () {
                for (var h = 0; h < 64; h++)
                  l[h] = (i.abs(i.sin(h + 1)) * 4294967296) | 0;
              })();
              var d = (c.MD5 = o.extend({
                _doReset: function () {
                  this._hash = new s.init([
                    1732584193, 4023233417, 2562383102, 271733878,
                  ]);
                },
                _doProcessBlock: function (h, v) {
                  for (var E = 0; E < 16; E++) {
                    var p = v + E,
                      x = h[p];
                    h[p] =
                      (((x << 8) | (x >>> 24)) & 16711935) |
                      (((x << 24) | (x >>> 8)) & 4278255360);
                  }
                  var b = this._hash.words,
                    D = h[v + 0],
                    B = h[v + 1],
                    S = h[v + 2],
                    k = h[v + 3],
                    w = h[v + 4],
                    C = h[v + 5],
                    M = h[v + 6],
                    L = h[v + 7],
                    _ = h[v + 8],
                    U = h[v + 9],
                    H = h[v + 10],
                    W = h[v + 11],
                    J = h[v + 12],
                    X = h[v + 13],
                    ee = h[v + 14],
                    Z = h[v + 15],
                    F = b[0],
                    T = b[1],
                    q = b[2],
                    I = b[3];
                  (F = g(F, T, q, I, D, 7, l[0])),
                    (I = g(I, F, T, q, B, 12, l[1])),
                    (q = g(q, I, F, T, S, 17, l[2])),
                    (T = g(T, q, I, F, k, 22, l[3])),
                    (F = g(F, T, q, I, w, 7, l[4])),
                    (I = g(I, F, T, q, C, 12, l[5])),
                    (q = g(q, I, F, T, M, 17, l[6])),
                    (T = g(T, q, I, F, L, 22, l[7])),
                    (F = g(F, T, q, I, _, 7, l[8])),
                    (I = g(I, F, T, q, U, 12, l[9])),
                    (q = g(q, I, F, T, H, 17, l[10])),
                    (T = g(T, q, I, F, W, 22, l[11])),
                    (F = g(F, T, q, I, J, 7, l[12])),
                    (I = g(I, F, T, q, X, 12, l[13])),
                    (q = g(q, I, F, T, ee, 17, l[14])),
                    (T = g(T, q, I, F, Z, 22, l[15])),
                    (F = u(F, T, q, I, B, 5, l[16])),
                    (I = u(I, F, T, q, M, 9, l[17])),
                    (q = u(q, I, F, T, W, 14, l[18])),
                    (T = u(T, q, I, F, D, 20, l[19])),
                    (F = u(F, T, q, I, C, 5, l[20])),
                    (I = u(I, F, T, q, H, 9, l[21])),
                    (q = u(q, I, F, T, Z, 14, l[22])),
                    (T = u(T, q, I, F, w, 20, l[23])),
                    (F = u(F, T, q, I, U, 5, l[24])),
                    (I = u(I, F, T, q, ee, 9, l[25])),
                    (q = u(q, I, F, T, k, 14, l[26])),
                    (T = u(T, q, I, F, _, 20, l[27])),
                    (F = u(F, T, q, I, X, 5, l[28])),
                    (I = u(I, F, T, q, S, 9, l[29])),
                    (q = u(q, I, F, T, L, 14, l[30])),
                    (T = u(T, q, I, F, J, 20, l[31])),
                    (F = m(F, T, q, I, C, 4, l[32])),
                    (I = m(I, F, T, q, _, 11, l[33])),
                    (q = m(q, I, F, T, W, 16, l[34])),
                    (T = m(T, q, I, F, ee, 23, l[35])),
                    (F = m(F, T, q, I, B, 4, l[36])),
                    (I = m(I, F, T, q, w, 11, l[37])),
                    (q = m(q, I, F, T, L, 16, l[38])),
                    (T = m(T, q, I, F, H, 23, l[39])),
                    (F = m(F, T, q, I, X, 4, l[40])),
                    (I = m(I, F, T, q, D, 11, l[41])),
                    (q = m(q, I, F, T, k, 16, l[42])),
                    (T = m(T, q, I, F, M, 23, l[43])),
                    (F = m(F, T, q, I, U, 4, l[44])),
                    (I = m(I, F, T, q, J, 11, l[45])),
                    (q = m(q, I, F, T, Z, 16, l[46])),
                    (T = m(T, q, I, F, S, 23, l[47])),
                    (F = f(F, T, q, I, D, 6, l[48])),
                    (I = f(I, F, T, q, L, 10, l[49])),
                    (q = f(q, I, F, T, ee, 15, l[50])),
                    (T = f(T, q, I, F, C, 21, l[51])),
                    (F = f(F, T, q, I, J, 6, l[52])),
                    (I = f(I, F, T, q, k, 10, l[53])),
                    (q = f(q, I, F, T, H, 15, l[54])),
                    (T = f(T, q, I, F, B, 21, l[55])),
                    (F = f(F, T, q, I, _, 6, l[56])),
                    (I = f(I, F, T, q, Z, 10, l[57])),
                    (q = f(q, I, F, T, M, 15, l[58])),
                    (T = f(T, q, I, F, X, 21, l[59])),
                    (F = f(F, T, q, I, w, 6, l[60])),
                    (I = f(I, F, T, q, W, 10, l[61])),
                    (q = f(q, I, F, T, S, 15, l[62])),
                    (T = f(T, q, I, F, U, 21, l[63])),
                    (b[0] = (b[0] + F) | 0),
                    (b[1] = (b[1] + T) | 0),
                    (b[2] = (b[2] + q) | 0),
                    (b[3] = (b[3] + I) | 0);
                },
                _doFinalize: function () {
                  var h = this._data,
                    v = h.words,
                    E = this._nDataBytes * 8,
                    p = h.sigBytes * 8;
                  v[p >>> 5] |= 128 << (24 - (p % 32));
                  var x = i.floor(E / 4294967296),
                    b = E;
                  (v[(((p + 64) >>> 9) << 4) + 15] =
                    (((x << 8) | (x >>> 24)) & 16711935) |
                    (((x << 24) | (x >>> 8)) & 4278255360)),
                    (v[(((p + 64) >>> 9) << 4) + 14] =
                      (((b << 8) | (b >>> 24)) & 16711935) |
                      (((b << 24) | (b >>> 8)) & 4278255360)),
                    (h.sigBytes = (v.length + 1) * 4),
                    this._process();
                  for (var D = this._hash, B = D.words, S = 0; S < 4; S++) {
                    var k = B[S];
                    B[S] =
                      (((k << 8) | (k >>> 24)) & 16711935) |
                      (((k << 24) | (k >>> 8)) & 4278255360);
                  }
                  return D;
                },
                clone: function () {
                  var h = o.clone.call(this);
                  return (h._hash = this._hash.clone()), h;
                },
              }));
              function g(h, v, E, p, x, b, D) {
                var B = h + ((v & E) | (~v & p)) + x + D;
                return ((B << b) | (B >>> (32 - b))) + v;
              }
              function u(h, v, E, p, x, b, D) {
                var B = h + ((v & p) | (E & ~p)) + x + D;
                return ((B << b) | (B >>> (32 - b))) + v;
              }
              function m(h, v, E, p, x, b, D) {
                var B = h + (v ^ E ^ p) + x + D;
                return ((B << b) | (B >>> (32 - b))) + v;
              }
              function f(h, v, E, p, x, b, D) {
                var B = h + (E ^ (v | ~p)) + x + D;
                return ((B << b) | (B >>> (32 - b))) + v;
              }
              (r.MD5 = o._createHelper(d)),
                (r.HmacMD5 = o._createHmacHelper(d));
            })(Math),
            a.MD5
          );
        });
      })(Tt)),
    Tt.exports
  );
}
var qt = { exports: {} },
  Qr = qt.exports,
  ti;
function Wi() {
  return (
    ti ||
      ((ti = 1),
      (function (t, e) {
        (function (a, i) {
          t.exports = i(Y());
        })(Qr, function (a) {
          return (
            (function () {
              var i = a,
                r = i.lib,
                n = r.WordArray,
                s = r.Hasher,
                o = i.algo,
                c = [],
                l = (o.SHA1 = s.extend({
                  _doReset: function () {
                    this._hash = new n.init([
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ]);
                  },
                  _doProcessBlock: function (d, g) {
                    for (
                      var u = this._hash.words,
                        m = u[0],
                        f = u[1],
                        h = u[2],
                        v = u[3],
                        E = u[4],
                        p = 0;
                      p < 80;
                      p++
                    ) {
                      if (p < 16) c[p] = d[g + p] | 0;
                      else {
                        var x = c[p - 3] ^ c[p - 8] ^ c[p - 14] ^ c[p - 16];
                        c[p] = (x << 1) | (x >>> 31);
                      }
                      var b = ((m << 5) | (m >>> 27)) + E + c[p];
                      p < 20
                        ? (b += ((f & h) | (~f & v)) + 1518500249)
                        : p < 40
                        ? (b += (f ^ h ^ v) + 1859775393)
                        : p < 60
                        ? (b += ((f & h) | (f & v) | (h & v)) - 1894007588)
                        : (b += (f ^ h ^ v) - 899497514),
                        (E = v),
                        (v = h),
                        (h = (f << 30) | (f >>> 2)),
                        (f = m),
                        (m = b);
                    }
                    (u[0] = (u[0] + m) | 0),
                      (u[1] = (u[1] + f) | 0),
                      (u[2] = (u[2] + h) | 0),
                      (u[3] = (u[3] + v) | 0),
                      (u[4] = (u[4] + E) | 0);
                  },
                  _doFinalize: function () {
                    var d = this._data,
                      g = d.words,
                      u = this._nDataBytes * 8,
                      m = d.sigBytes * 8;
                    return (
                      (g[m >>> 5] |= 128 << (24 - (m % 32))),
                      (g[(((m + 64) >>> 9) << 4) + 14] = Math.floor(
                        u / 4294967296
                      )),
                      (g[(((m + 64) >>> 9) << 4) + 15] = u),
                      (d.sigBytes = g.length * 4),
                      this._process(),
                      this._hash
                    );
                  },
                  clone: function () {
                    var d = s.clone.call(this);
                    return (d._hash = this._hash.clone()), d;
                  },
                }));
              (i.SHA1 = s._createHelper(l)),
                (i.HmacSHA1 = s._createHmacHelper(l));
            })(),
            a.SHA1
          );
        });
      })(qt)),
    qt.exports
  );
}
var Rt = { exports: {} },
  Xr = Rt.exports,
  ai;
function Aa() {
  return (
    ai ||
      ((ai = 1),
      (function (t, e) {
        (function (a, i) {
          t.exports = i(Y());
        })(Xr, function (a) {
          return (
            (function (i) {
              var r = a,
                n = r.lib,
                s = n.WordArray,
                o = n.Hasher,
                c = r.algo,
                l = [],
                d = [];
              (function () {
                function m(E) {
                  for (var p = i.sqrt(E), x = 2; x <= p; x++)
                    if (!(E % x)) return !1;
                  return !0;
                }
                function f(E) {
                  return ((E - (E | 0)) * 4294967296) | 0;
                }
                for (var h = 2, v = 0; v < 64; )
                  m(h) &&
                    (v < 8 && (l[v] = f(i.pow(h, 1 / 2))),
                    (d[v] = f(i.pow(h, 1 / 3))),
                    v++),
                    h++;
              })();
              var g = [],
                u = (c.SHA256 = o.extend({
                  _doReset: function () {
                    this._hash = new s.init(l.slice(0));
                  },
                  _doProcessBlock: function (m, f) {
                    for (
                      var h = this._hash.words,
                        v = h[0],
                        E = h[1],
                        p = h[2],
                        x = h[3],
                        b = h[4],
                        D = h[5],
                        B = h[6],
                        S = h[7],
                        k = 0;
                      k < 64;
                      k++
                    ) {
                      if (k < 16) g[k] = m[f + k] | 0;
                      else {
                        var w = g[k - 15],
                          C =
                            ((w << 25) | (w >>> 7)) ^
                            ((w << 14) | (w >>> 18)) ^
                            (w >>> 3),
                          M = g[k - 2],
                          L =
                            ((M << 15) | (M >>> 17)) ^
                            ((M << 13) | (M >>> 19)) ^
                            (M >>> 10);
                        g[k] = C + g[k - 7] + L + g[k - 16];
                      }
                      var _ = (b & D) ^ (~b & B),
                        U = (v & E) ^ (v & p) ^ (E & p),
                        H =
                          ((v << 30) | (v >>> 2)) ^
                          ((v << 19) | (v >>> 13)) ^
                          ((v << 10) | (v >>> 22)),
                        W =
                          ((b << 26) | (b >>> 6)) ^
                          ((b << 21) | (b >>> 11)) ^
                          ((b << 7) | (b >>> 25)),
                        J = S + W + _ + d[k] + g[k],
                        X = H + U;
                      (S = B),
                        (B = D),
                        (D = b),
                        (b = (x + J) | 0),
                        (x = p),
                        (p = E),
                        (E = v),
                        (v = (J + X) | 0);
                    }
                    (h[0] = (h[0] + v) | 0),
                      (h[1] = (h[1] + E) | 0),
                      (h[2] = (h[2] + p) | 0),
                      (h[3] = (h[3] + x) | 0),
                      (h[4] = (h[4] + b) | 0),
                      (h[5] = (h[5] + D) | 0),
                      (h[6] = (h[6] + B) | 0),
                      (h[7] = (h[7] + S) | 0);
                  },
                  _doFinalize: function () {
                    var m = this._data,
                      f = m.words,
                      h = this._nDataBytes * 8,
                      v = m.sigBytes * 8;
                    return (
                      (f[v >>> 5] |= 128 << (24 - (v % 32))),
                      (f[(((v + 64) >>> 9) << 4) + 14] = i.floor(
                        h / 4294967296
                      )),
                      (f[(((v + 64) >>> 9) << 4) + 15] = h),
                      (m.sigBytes = f.length * 4),
                      this._process(),
                      this._hash
                    );
                  },
                  clone: function () {
                    var m = o.clone.call(this);
                    return (m._hash = this._hash.clone()), m;
                  },
                }));
              (r.SHA256 = o._createHelper(u)),
                (r.HmacSHA256 = o._createHmacHelper(u));
            })(Math),
            a.SHA256
          );
        });
      })(Rt)),
    Rt.exports
  );
}
var $t = { exports: {} },
  Zr = $t.exports,
  ii;
function Jr() {
  return (
    ii ||
      ((ii = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), Aa());
        })(Zr, function (a) {
          return (
            (function () {
              var i = a,
                r = i.lib,
                n = r.WordArray,
                s = i.algo,
                o = s.SHA256,
                c = (s.SHA224 = o.extend({
                  _doReset: function () {
                    this._hash = new n.init([
                      3238371032, 914150663, 812702999, 4144912697, 4290775857,
                      1750603025, 1694076839, 3204075428,
                    ]);
                  },
                  _doFinalize: function () {
                    var l = o._doFinalize.call(this);
                    return (l.sigBytes -= 4), l;
                  },
                }));
              (i.SHA224 = o._createHelper(c)),
                (i.HmacSHA224 = o._createHmacHelper(c));
            })(),
            a.SHA224
          );
        });
      })($t)),
    $t.exports
  );
}
var Ht = { exports: {} },
  en = Ht.exports,
  ri;
function zi() {
  return (
    ri ||
      ((ri = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), fa());
        })(en, function (a) {
          return (
            (function () {
              var i = a,
                r = i.lib,
                n = r.Hasher,
                s = i.x64,
                o = s.Word,
                c = s.WordArray,
                l = i.algo;
              function d() {
                return o.create.apply(o, arguments);
              }
              var g = [
                  d(1116352408, 3609767458),
                  d(1899447441, 602891725),
                  d(3049323471, 3964484399),
                  d(3921009573, 2173295548),
                  d(961987163, 4081628472),
                  d(1508970993, 3053834265),
                  d(2453635748, 2937671579),
                  d(2870763221, 3664609560),
                  d(3624381080, 2734883394),
                  d(310598401, 1164996542),
                  d(607225278, 1323610764),
                  d(1426881987, 3590304994),
                  d(1925078388, 4068182383),
                  d(2162078206, 991336113),
                  d(2614888103, 633803317),
                  d(3248222580, 3479774868),
                  d(3835390401, 2666613458),
                  d(4022224774, 944711139),
                  d(264347078, 2341262773),
                  d(604807628, 2007800933),
                  d(770255983, 1495990901),
                  d(1249150122, 1856431235),
                  d(1555081692, 3175218132),
                  d(1996064986, 2198950837),
                  d(2554220882, 3999719339),
                  d(2821834349, 766784016),
                  d(2952996808, 2566594879),
                  d(3210313671, 3203337956),
                  d(3336571891, 1034457026),
                  d(3584528711, 2466948901),
                  d(113926993, 3758326383),
                  d(338241895, 168717936),
                  d(666307205, 1188179964),
                  d(773529912, 1546045734),
                  d(1294757372, 1522805485),
                  d(1396182291, 2643833823),
                  d(1695183700, 2343527390),
                  d(1986661051, 1014477480),
                  d(2177026350, 1206759142),
                  d(2456956037, 344077627),
                  d(2730485921, 1290863460),
                  d(2820302411, 3158454273),
                  d(3259730800, 3505952657),
                  d(3345764771, 106217008),
                  d(3516065817, 3606008344),
                  d(3600352804, 1432725776),
                  d(4094571909, 1467031594),
                  d(275423344, 851169720),
                  d(430227734, 3100823752),
                  d(506948616, 1363258195),
                  d(659060556, 3750685593),
                  d(883997877, 3785050280),
                  d(958139571, 3318307427),
                  d(1322822218, 3812723403),
                  d(1537002063, 2003034995),
                  d(1747873779, 3602036899),
                  d(1955562222, 1575990012),
                  d(2024104815, 1125592928),
                  d(2227730452, 2716904306),
                  d(2361852424, 442776044),
                  d(2428436474, 593698344),
                  d(2756734187, 3733110249),
                  d(3204031479, 2999351573),
                  d(3329325298, 3815920427),
                  d(3391569614, 3928383900),
                  d(3515267271, 566280711),
                  d(3940187606, 3454069534),
                  d(4118630271, 4000239992),
                  d(116418474, 1914138554),
                  d(174292421, 2731055270),
                  d(289380356, 3203993006),
                  d(460393269, 320620315),
                  d(685471733, 587496836),
                  d(852142971, 1086792851),
                  d(1017036298, 365543100),
                  d(1126000580, 2618297676),
                  d(1288033470, 3409855158),
                  d(1501505948, 4234509866),
                  d(1607167915, 987167468),
                  d(1816402316, 1246189591),
                ],
                u = [];
              (function () {
                for (var f = 0; f < 80; f++) u[f] = d();
              })();
              var m = (l.SHA512 = n.extend({
                _doReset: function () {
                  this._hash = new c.init([
                    new o.init(1779033703, 4089235720),
                    new o.init(3144134277, 2227873595),
                    new o.init(1013904242, 4271175723),
                    new o.init(2773480762, 1595750129),
                    new o.init(1359893119, 2917565137),
                    new o.init(2600822924, 725511199),
                    new o.init(528734635, 4215389547),
                    new o.init(1541459225, 327033209),
                  ]);
                },
                _doProcessBlock: function (f, h) {
                  for (
                    var v = this._hash.words,
                      E = v[0],
                      p = v[1],
                      x = v[2],
                      b = v[3],
                      D = v[4],
                      B = v[5],
                      S = v[6],
                      k = v[7],
                      w = E.high,
                      C = E.low,
                      M = p.high,
                      L = p.low,
                      _ = x.high,
                      U = x.low,
                      H = b.high,
                      W = b.low,
                      J = D.high,
                      X = D.low,
                      ee = B.high,
                      Z = B.low,
                      F = S.high,
                      T = S.low,
                      q = k.high,
                      I = k.low,
                      ae = w,
                      te = C,
                      ce = M,
                      z = L,
                      st = _,
                      Xe = U,
                      xa = H,
                      ot = W,
                      Ee = J,
                      me = X,
                      Dt = ee,
                      lt = Z,
                      Bt = F,
                      ct = T,
                      ga = q,
                      dt = I,
                      Ce = 0;
                    Ce < 80;
                    Ce++
                  ) {
                    var ve,
                      Le,
                      St = u[Ce];
                    if (Ce < 16)
                      (Le = St.high = f[h + Ce * 2] | 0),
                        (ve = St.low = f[h + Ce * 2 + 1] | 0);
                    else {
                      var Pa = u[Ce - 15],
                        Ze = Pa.high,
                        ut = Pa.low,
                        ar =
                          ((Ze >>> 1) | (ut << 31)) ^
                          ((Ze >>> 8) | (ut << 24)) ^
                          (Ze >>> 7),
                        Ia =
                          ((ut >>> 1) | (Ze << 31)) ^
                          ((ut >>> 8) | (Ze << 24)) ^
                          ((ut >>> 7) | (Ze << 25)),
                        Ta = u[Ce - 2],
                        Je = Ta.high,
                        mt = Ta.low,
                        ir =
                          ((Je >>> 19) | (mt << 13)) ^
                          ((Je << 3) | (mt >>> 29)) ^
                          (Je >>> 6),
                        qa =
                          ((mt >>> 19) | (Je << 13)) ^
                          ((mt << 3) | (Je >>> 29)) ^
                          ((mt >>> 6) | (Je << 26)),
                        Ra = u[Ce - 7],
                        rr = Ra.high,
                        nr = Ra.low,
                        $a = u[Ce - 16],
                        sr = $a.high,
                        Ha = $a.low;
                      (ve = Ia + nr),
                        (Le = ar + rr + (ve >>> 0 < Ia >>> 0 ? 1 : 0)),
                        (ve = ve + qa),
                        (Le = Le + ir + (ve >>> 0 < qa >>> 0 ? 1 : 0)),
                        (ve = ve + Ha),
                        (Le = Le + sr + (ve >>> 0 < Ha >>> 0 ? 1 : 0)),
                        (St.high = Le),
                        (St.low = ve);
                    }
                    var or = (Ee & Dt) ^ (~Ee & Bt),
                      Oa = (me & lt) ^ (~me & ct),
                      lr = (ae & ce) ^ (ae & st) ^ (ce & st),
                      cr = (te & z) ^ (te & Xe) ^ (z & Xe),
                      dr =
                        ((ae >>> 28) | (te << 4)) ^
                        ((ae << 30) | (te >>> 2)) ^
                        ((ae << 25) | (te >>> 7)),
                      Na =
                        ((te >>> 28) | (ae << 4)) ^
                        ((te << 30) | (ae >>> 2)) ^
                        ((te << 25) | (ae >>> 7)),
                      ur =
                        ((Ee >>> 14) | (me << 18)) ^
                        ((Ee >>> 18) | (me << 14)) ^
                        ((Ee << 23) | (me >>> 9)),
                      mr =
                        ((me >>> 14) | (Ee << 18)) ^
                        ((me >>> 18) | (Ee << 14)) ^
                        ((me << 23) | (Ee >>> 9)),
                      Ua = g[Ce],
                      pr = Ua.high,
                      Ga = Ua.low,
                      pe = dt + mr,
                      Fe = ga + ur + (pe >>> 0 < dt >>> 0 ? 1 : 0),
                      pe = pe + Oa,
                      Fe = Fe + or + (pe >>> 0 < Oa >>> 0 ? 1 : 0),
                      pe = pe + Ga,
                      Fe = Fe + pr + (pe >>> 0 < Ga >>> 0 ? 1 : 0),
                      pe = pe + ve,
                      Fe = Fe + Le + (pe >>> 0 < ve >>> 0 ? 1 : 0),
                      ja = Na + cr,
                      fr = dr + lr + (ja >>> 0 < Na >>> 0 ? 1 : 0);
                    (ga = Bt),
                      (dt = ct),
                      (Bt = Dt),
                      (ct = lt),
                      (Dt = Ee),
                      (lt = me),
                      (me = (ot + pe) | 0),
                      (Ee = (xa + Fe + (me >>> 0 < ot >>> 0 ? 1 : 0)) | 0),
                      (xa = st),
                      (ot = Xe),
                      (st = ce),
                      (Xe = z),
                      (ce = ae),
                      (z = te),
                      (te = (pe + ja) | 0),
                      (ae = (Fe + fr + (te >>> 0 < pe >>> 0 ? 1 : 0)) | 0);
                  }
                  (C = E.low = C + te),
                    (E.high = w + ae + (C >>> 0 < te >>> 0 ? 1 : 0)),
                    (L = p.low = L + z),
                    (p.high = M + ce + (L >>> 0 < z >>> 0 ? 1 : 0)),
                    (U = x.low = U + Xe),
                    (x.high = _ + st + (U >>> 0 < Xe >>> 0 ? 1 : 0)),
                    (W = b.low = W + ot),
                    (b.high = H + xa + (W >>> 0 < ot >>> 0 ? 1 : 0)),
                    (X = D.low = X + me),
                    (D.high = J + Ee + (X >>> 0 < me >>> 0 ? 1 : 0)),
                    (Z = B.low = Z + lt),
                    (B.high = ee + Dt + (Z >>> 0 < lt >>> 0 ? 1 : 0)),
                    (T = S.low = T + ct),
                    (S.high = F + Bt + (T >>> 0 < ct >>> 0 ? 1 : 0)),
                    (I = k.low = I + dt),
                    (k.high = q + ga + (I >>> 0 < dt >>> 0 ? 1 : 0));
                },
                _doFinalize: function () {
                  var f = this._data,
                    h = f.words,
                    v = this._nDataBytes * 8,
                    E = f.sigBytes * 8;
                  (h[E >>> 5] |= 128 << (24 - (E % 32))),
                    (h[(((E + 128) >>> 10) << 5) + 30] = Math.floor(
                      v / 4294967296
                    )),
                    (h[(((E + 128) >>> 10) << 5) + 31] = v),
                    (f.sigBytes = h.length * 4),
                    this._process();
                  var p = this._hash.toX32();
                  return p;
                },
                clone: function () {
                  var f = n.clone.call(this);
                  return (f._hash = this._hash.clone()), f;
                },
                blockSize: 1024 / 32,
              }));
              (i.SHA512 = n._createHelper(m)),
                (i.HmacSHA512 = n._createHmacHelper(m));
            })(),
            a.SHA512
          );
        });
      })(Ht)),
    Ht.exports
  );
}
var Ot = { exports: {} },
  tn = Ot.exports,
  ni;
function an() {
  return (
    ni ||
      ((ni = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), fa(), zi());
        })(tn, function (a) {
          return (
            (function () {
              var i = a,
                r = i.x64,
                n = r.Word,
                s = r.WordArray,
                o = i.algo,
                c = o.SHA512,
                l = (o.SHA384 = c.extend({
                  _doReset: function () {
                    this._hash = new s.init([
                      new n.init(3418070365, 3238371032),
                      new n.init(1654270250, 914150663),
                      new n.init(2438529370, 812702999),
                      new n.init(355462360, 4144912697),
                      new n.init(1731405415, 4290775857),
                      new n.init(2394180231, 1750603025),
                      new n.init(3675008525, 1694076839),
                      new n.init(1203062813, 3204075428),
                    ]);
                  },
                  _doFinalize: function () {
                    var d = c._doFinalize.call(this);
                    return (d.sigBytes -= 16), d;
                  },
                }));
              (i.SHA384 = c._createHelper(l)),
                (i.HmacSHA384 = c._createHmacHelper(l));
            })(),
            a.SHA384
          );
        });
      })(Ot)),
    Ot.exports
  );
}
var Nt = { exports: {} },
  rn = Nt.exports,
  si;
function nn() {
  return (
    si ||
      ((si = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), fa());
        })(rn, function (a) {
          return (
            (function (i) {
              var r = a,
                n = r.lib,
                s = n.WordArray,
                o = n.Hasher,
                c = r.x64,
                l = c.Word,
                d = r.algo,
                g = [],
                u = [],
                m = [];
              (function () {
                for (var v = 1, E = 0, p = 0; p < 24; p++) {
                  g[v + 5 * E] = (((p + 1) * (p + 2)) / 2) % 64;
                  var x = E % 5,
                    b = (2 * v + 3 * E) % 5;
                  (v = x), (E = b);
                }
                for (var v = 0; v < 5; v++)
                  for (var E = 0; E < 5; E++)
                    u[v + 5 * E] = E + ((2 * v + 3 * E) % 5) * 5;
                for (var D = 1, B = 0; B < 24; B++) {
                  for (var S = 0, k = 0, w = 0; w < 7; w++) {
                    if (D & 1) {
                      var C = (1 << w) - 1;
                      C < 32 ? (k ^= 1 << C) : (S ^= 1 << (C - 32));
                    }
                    D & 128 ? (D = (D << 1) ^ 113) : (D <<= 1);
                  }
                  m[B] = l.create(S, k);
                }
              })();
              var f = [];
              (function () {
                for (var v = 0; v < 25; v++) f[v] = l.create();
              })();
              var h = (d.SHA3 = o.extend({
                cfg: o.cfg.extend({ outputLength: 512 }),
                _doReset: function () {
                  for (var v = (this._state = []), E = 0; E < 25; E++)
                    v[E] = new l.init();
                  this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
                },
                _doProcessBlock: function (v, E) {
                  for (
                    var p = this._state, x = this.blockSize / 2, b = 0;
                    b < x;
                    b++
                  ) {
                    var D = v[E + 2 * b],
                      B = v[E + 2 * b + 1];
                    (D =
                      (((D << 8) | (D >>> 24)) & 16711935) |
                      (((D << 24) | (D >>> 8)) & 4278255360)),
                      (B =
                        (((B << 8) | (B >>> 24)) & 16711935) |
                        (((B << 24) | (B >>> 8)) & 4278255360));
                    var S = p[b];
                    (S.high ^= B), (S.low ^= D);
                  }
                  for (var k = 0; k < 24; k++) {
                    for (var w = 0; w < 5; w++) {
                      for (var C = 0, M = 0, L = 0; L < 5; L++) {
                        var S = p[w + 5 * L];
                        (C ^= S.high), (M ^= S.low);
                      }
                      var _ = f[w];
                      (_.high = C), (_.low = M);
                    }
                    for (var w = 0; w < 5; w++)
                      for (
                        var U = f[(w + 4) % 5],
                          H = f[(w + 1) % 5],
                          W = H.high,
                          J = H.low,
                          C = U.high ^ ((W << 1) | (J >>> 31)),
                          M = U.low ^ ((J << 1) | (W >>> 31)),
                          L = 0;
                        L < 5;
                        L++
                      ) {
                        var S = p[w + 5 * L];
                        (S.high ^= C), (S.low ^= M);
                      }
                    for (var X = 1; X < 25; X++) {
                      var C,
                        M,
                        S = p[X],
                        ee = S.high,
                        Z = S.low,
                        F = g[X];
                      F < 32
                        ? ((C = (ee << F) | (Z >>> (32 - F))),
                          (M = (Z << F) | (ee >>> (32 - F))))
                        : ((C = (Z << (F - 32)) | (ee >>> (64 - F))),
                          (M = (ee << (F - 32)) | (Z >>> (64 - F))));
                      var T = f[u[X]];
                      (T.high = C), (T.low = M);
                    }
                    var q = f[0],
                      I = p[0];
                    (q.high = I.high), (q.low = I.low);
                    for (var w = 0; w < 5; w++)
                      for (var L = 0; L < 5; L++) {
                        var X = w + 5 * L,
                          S = p[X],
                          ae = f[X],
                          te = f[((w + 1) % 5) + 5 * L],
                          ce = f[((w + 2) % 5) + 5 * L];
                        (S.high = ae.high ^ (~te.high & ce.high)),
                          (S.low = ae.low ^ (~te.low & ce.low));
                      }
                    var S = p[0],
                      z = m[k];
                    (S.high ^= z.high), (S.low ^= z.low);
                  }
                },
                _doFinalize: function () {
                  var v = this._data,
                    E = v.words;
                  this._nDataBytes * 8;
                  var p = v.sigBytes * 8,
                    x = this.blockSize * 32;
                  (E[p >>> 5] |= 1 << (24 - (p % 32))),
                    (E[((i.ceil((p + 1) / x) * x) >>> 5) - 1] |= 128),
                    (v.sigBytes = E.length * 4),
                    this._process();
                  for (
                    var b = this._state,
                      D = this.cfg.outputLength / 8,
                      B = D / 8,
                      S = [],
                      k = 0;
                    k < B;
                    k++
                  ) {
                    var w = b[k],
                      C = w.high,
                      M = w.low;
                    (C =
                      (((C << 8) | (C >>> 24)) & 16711935) |
                      (((C << 24) | (C >>> 8)) & 4278255360)),
                      (M =
                        (((M << 8) | (M >>> 24)) & 16711935) |
                        (((M << 24) | (M >>> 8)) & 4278255360)),
                      S.push(M),
                      S.push(C);
                  }
                  return new s.init(S, D);
                },
                clone: function () {
                  for (
                    var v = o.clone.call(this),
                      E = (v._state = this._state.slice(0)),
                      p = 0;
                    p < 25;
                    p++
                  )
                    E[p] = E[p].clone();
                  return v;
                },
              }));
              (r.SHA3 = o._createHelper(h)),
                (r.HmacSHA3 = o._createHmacHelper(h));
            })(Math),
            a.SHA3
          );
        });
      })(Nt)),
    Nt.exports
  );
}
var Ut = { exports: {} },
  sn = Ut.exports,
  oi;
function on() {
  return (
    oi ||
      ((oi = 1),
      (function (t, e) {
        (function (a, i) {
          t.exports = i(Y());
        })(sn, function (a) {
          /** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/ return (
            (function (i) {
              var r = a,
                n = r.lib,
                s = n.WordArray,
                o = n.Hasher,
                c = r.algo,
                l = s.create([
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4,
                  13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4,
                  9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8,
                  12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10,
                  14, 1, 3, 8, 11, 6, 15, 13,
                ]),
                d = s.create([
                  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11,
                  3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7,
                  14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15,
                  0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6,
                  2, 13, 14, 0, 3, 9, 11,
                ]),
                g = s.create([
                  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6,
                  8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6,
                  7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15,
                  14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8,
                  13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
                ]),
                u = s.create([
                  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13,
                  15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11,
                  8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14,
                  14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14,
                  6, 8, 13, 6, 5, 15, 13, 11, 11,
                ]),
                m = s.create([
                  0, 1518500249, 1859775393, 2400959708, 2840853838,
                ]),
                f = s.create([
                  1352829926, 1548603684, 1836072691, 2053994217, 0,
                ]),
                h = (c.RIPEMD160 = o.extend({
                  _doReset: function () {
                    this._hash = s.create([
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ]);
                  },
                  _doProcessBlock: function (B, S) {
                    for (var k = 0; k < 16; k++) {
                      var w = S + k,
                        C = B[w];
                      B[w] =
                        (((C << 8) | (C >>> 24)) & 16711935) |
                        (((C << 24) | (C >>> 8)) & 4278255360);
                    }
                    var M = this._hash.words,
                      L = m.words,
                      _ = f.words,
                      U = l.words,
                      H = d.words,
                      W = g.words,
                      J = u.words,
                      X,
                      ee,
                      Z,
                      F,
                      T,
                      q,
                      I,
                      ae,
                      te,
                      ce;
                    (q = X = M[0]),
                      (I = ee = M[1]),
                      (ae = Z = M[2]),
                      (te = F = M[3]),
                      (ce = T = M[4]);
                    for (var z, k = 0; k < 80; k += 1)
                      (z = (X + B[S + U[k]]) | 0),
                        k < 16
                          ? (z += v(ee, Z, F) + L[0])
                          : k < 32
                          ? (z += E(ee, Z, F) + L[1])
                          : k < 48
                          ? (z += p(ee, Z, F) + L[2])
                          : k < 64
                          ? (z += x(ee, Z, F) + L[3])
                          : (z += b(ee, Z, F) + L[4]),
                        (z = z | 0),
                        (z = D(z, W[k])),
                        (z = (z + T) | 0),
                        (X = T),
                        (T = F),
                        (F = D(Z, 10)),
                        (Z = ee),
                        (ee = z),
                        (z = (q + B[S + H[k]]) | 0),
                        k < 16
                          ? (z += b(I, ae, te) + _[0])
                          : k < 32
                          ? (z += x(I, ae, te) + _[1])
                          : k < 48
                          ? (z += p(I, ae, te) + _[2])
                          : k < 64
                          ? (z += E(I, ae, te) + _[3])
                          : (z += v(I, ae, te) + _[4]),
                        (z = z | 0),
                        (z = D(z, J[k])),
                        (z = (z + ce) | 0),
                        (q = ce),
                        (ce = te),
                        (te = D(ae, 10)),
                        (ae = I),
                        (I = z);
                    (z = (M[1] + Z + te) | 0),
                      (M[1] = (M[2] + F + ce) | 0),
                      (M[2] = (M[3] + T + q) | 0),
                      (M[3] = (M[4] + X + I) | 0),
                      (M[4] = (M[0] + ee + ae) | 0),
                      (M[0] = z);
                  },
                  _doFinalize: function () {
                    var B = this._data,
                      S = B.words,
                      k = this._nDataBytes * 8,
                      w = B.sigBytes * 8;
                    (S[w >>> 5] |= 128 << (24 - (w % 32))),
                      (S[(((w + 64) >>> 9) << 4) + 14] =
                        (((k << 8) | (k >>> 24)) & 16711935) |
                        (((k << 24) | (k >>> 8)) & 4278255360)),
                      (B.sigBytes = (S.length + 1) * 4),
                      this._process();
                    for (var C = this._hash, M = C.words, L = 0; L < 5; L++) {
                      var _ = M[L];
                      M[L] =
                        (((_ << 8) | (_ >>> 24)) & 16711935) |
                        (((_ << 24) | (_ >>> 8)) & 4278255360);
                    }
                    return C;
                  },
                  clone: function () {
                    var B = o.clone.call(this);
                    return (B._hash = this._hash.clone()), B;
                  },
                }));
              function v(B, S, k) {
                return B ^ S ^ k;
              }
              function E(B, S, k) {
                return (B & S) | (~B & k);
              }
              function p(B, S, k) {
                return (B | ~S) ^ k;
              }
              function x(B, S, k) {
                return (B & k) | (S & ~k);
              }
              function b(B, S, k) {
                return B ^ (S | ~k);
              }
              function D(B, S) {
                return (B << S) | (B >>> (32 - S));
              }
              (r.RIPEMD160 = o._createHelper(h)),
                (r.HmacRIPEMD160 = o._createHmacHelper(h));
            })(),
            a.RIPEMD160
          );
        });
      })(Ut)),
    Ut.exports
  );
}
var Gt = { exports: {} },
  ln = Gt.exports,
  li;
function Ma() {
  return (
    li ||
      ((li = 1),
      (function (t, e) {
        (function (a, i) {
          t.exports = i(Y());
        })(ln, function (a) {
          (function () {
            var i = a,
              r = i.lib,
              n = r.Base,
              s = i.enc,
              o = s.Utf8,
              c = i.algo;
            c.HMAC = n.extend({
              init: function (l, d) {
                (l = this._hasher = new l.init()),
                  typeof d == "string" && (d = o.parse(d));
                var g = l.blockSize,
                  u = g * 4;
                d.sigBytes > u && (d = l.finalize(d)), d.clamp();
                for (
                  var m = (this._oKey = d.clone()),
                    f = (this._iKey = d.clone()),
                    h = m.words,
                    v = f.words,
                    E = 0;
                  E < g;
                  E++
                )
                  (h[E] ^= 1549556828), (v[E] ^= 909522486);
                (m.sigBytes = f.sigBytes = u), this.reset();
              },
              reset: function () {
                var l = this._hasher;
                l.reset(), l.update(this._iKey);
              },
              update: function (l) {
                return this._hasher.update(l), this;
              },
              finalize: function (l) {
                var d = this._hasher,
                  g = d.finalize(l);
                d.reset();
                var u = d.finalize(this._oKey.clone().concat(g));
                return u;
              },
            });
          })();
        });
      })(Gt)),
    Gt.exports
  );
}
var jt = { exports: {} },
  cn = jt.exports,
  ci;
function dn() {
  return (
    ci ||
      ((ci = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), Aa(), Ma());
        })(cn, function (a) {
          return (
            (function () {
              var i = a,
                r = i.lib,
                n = r.Base,
                s = r.WordArray,
                o = i.algo,
                c = o.SHA256,
                l = o.HMAC,
                d = (o.PBKDF2 = n.extend({
                  cfg: n.extend({
                    keySize: 128 / 32,
                    hasher: c,
                    iterations: 25e4,
                  }),
                  init: function (g) {
                    this.cfg = this.cfg.extend(g);
                  },
                  compute: function (g, u) {
                    for (
                      var m = this.cfg,
                        f = l.create(m.hasher, g),
                        h = s.create(),
                        v = s.create([1]),
                        E = h.words,
                        p = v.words,
                        x = m.keySize,
                        b = m.iterations;
                      E.length < x;

                    ) {
                      var D = f.update(u).finalize(v);
                      f.reset();
                      for (
                        var B = D.words, S = B.length, k = D, w = 1;
                        w < b;
                        w++
                      ) {
                        (k = f.finalize(k)), f.reset();
                        for (var C = k.words, M = 0; M < S; M++) B[M] ^= C[M];
                      }
                      h.concat(D), p[0]++;
                    }
                    return (h.sigBytes = x * 4), h;
                  },
                }));
              i.PBKDF2 = function (g, u, m) {
                return d.create(m).compute(g, u);
              };
            })(),
            a.PBKDF2
          );
        });
      })(jt)),
    jt.exports
  );
}
var Wt = { exports: {} },
  un = Wt.exports,
  di;
function He() {
  return (
    di ||
      ((di = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), Wi(), Ma());
        })(un, function (a) {
          return (
            (function () {
              var i = a,
                r = i.lib,
                n = r.Base,
                s = r.WordArray,
                o = i.algo,
                c = o.MD5,
                l = (o.EvpKDF = n.extend({
                  cfg: n.extend({
                    keySize: 128 / 32,
                    hasher: c,
                    iterations: 1,
                  }),
                  init: function (d) {
                    this.cfg = this.cfg.extend(d);
                  },
                  compute: function (d, g) {
                    for (
                      var u,
                        m = this.cfg,
                        f = m.hasher.create(),
                        h = s.create(),
                        v = h.words,
                        E = m.keySize,
                        p = m.iterations;
                      v.length < E;

                    ) {
                      u && f.update(u),
                        (u = f.update(d).finalize(g)),
                        f.reset();
                      for (var x = 1; x < p; x++)
                        (u = f.finalize(u)), f.reset();
                      h.concat(u);
                    }
                    return (h.sigBytes = E * 4), h;
                  },
                }));
              i.EvpKDF = function (d, g, u) {
                return l.create(u).compute(d, g);
              };
            })(),
            a.EvpKDF
          );
        });
      })(Wt)),
    Wt.exports
  );
}
var zt = { exports: {} },
  mn = zt.exports,
  ui;
function se() {
  return (
    ui ||
      ((ui = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), He());
        })(mn, function (a) {
          a.lib.Cipher ||
            (function (i) {
              var r = a,
                n = r.lib,
                s = n.Base,
                o = n.WordArray,
                c = n.BufferedBlockAlgorithm,
                l = r.enc;
              l.Utf8;
              var d = l.Base64,
                g = r.algo,
                u = g.EvpKDF,
                m = (n.Cipher = c.extend({
                  cfg: s.extend(),
                  createEncryptor: function (C, M) {
                    return this.create(this._ENC_XFORM_MODE, C, M);
                  },
                  createDecryptor: function (C, M) {
                    return this.create(this._DEC_XFORM_MODE, C, M);
                  },
                  init: function (C, M, L) {
                    (this.cfg = this.cfg.extend(L)),
                      (this._xformMode = C),
                      (this._key = M),
                      this.reset();
                  },
                  reset: function () {
                    c.reset.call(this), this._doReset();
                  },
                  process: function (C) {
                    return this._append(C), this._process();
                  },
                  finalize: function (C) {
                    C && this._append(C);
                    var M = this._doFinalize();
                    return M;
                  },
                  keySize: 128 / 32,
                  ivSize: 128 / 32,
                  _ENC_XFORM_MODE: 1,
                  _DEC_XFORM_MODE: 2,
                  _createHelper: (function () {
                    function C(M) {
                      return typeof M == "string" ? w : B;
                    }
                    return function (M) {
                      return {
                        encrypt: function (L, _, U) {
                          return C(_).encrypt(M, L, _, U);
                        },
                        decrypt: function (L, _, U) {
                          return C(_).decrypt(M, L, _, U);
                        },
                      };
                    };
                  })(),
                }));
              n.StreamCipher = m.extend({
                _doFinalize: function () {
                  var C = this._process(!0);
                  return C;
                },
                blockSize: 1,
              });
              var f = (r.mode = {}),
                h = (n.BlockCipherMode = s.extend({
                  createEncryptor: function (C, M) {
                    return this.Encryptor.create(C, M);
                  },
                  createDecryptor: function (C, M) {
                    return this.Decryptor.create(C, M);
                  },
                  init: function (C, M) {
                    (this._cipher = C), (this._iv = M);
                  },
                })),
                v = (f.CBC = (function () {
                  var C = h.extend();
                  (C.Encryptor = C.extend({
                    processBlock: function (L, _) {
                      var U = this._cipher,
                        H = U.blockSize;
                      M.call(this, L, _, H),
                        U.encryptBlock(L, _),
                        (this._prevBlock = L.slice(_, _ + H));
                    },
                  })),
                    (C.Decryptor = C.extend({
                      processBlock: function (L, _) {
                        var U = this._cipher,
                          H = U.blockSize,
                          W = L.slice(_, _ + H);
                        U.decryptBlock(L, _),
                          M.call(this, L, _, H),
                          (this._prevBlock = W);
                      },
                    }));
                  function M(L, _, U) {
                    var H,
                      W = this._iv;
                    W ? ((H = W), (this._iv = i)) : (H = this._prevBlock);
                    for (var J = 0; J < U; J++) L[_ + J] ^= H[J];
                  }
                  return C;
                })()),
                E = (r.pad = {}),
                p = (E.Pkcs7 = {
                  pad: function (C, M) {
                    for (
                      var L = M * 4,
                        _ = L - (C.sigBytes % L),
                        U = (_ << 24) | (_ << 16) | (_ << 8) | _,
                        H = [],
                        W = 0;
                      W < _;
                      W += 4
                    )
                      H.push(U);
                    var J = o.create(H, _);
                    C.concat(J);
                  },
                  unpad: function (C) {
                    var M = C.words[(C.sigBytes - 1) >>> 2] & 255;
                    C.sigBytes -= M;
                  },
                });
              n.BlockCipher = m.extend({
                cfg: m.cfg.extend({ mode: v, padding: p }),
                reset: function () {
                  var C;
                  m.reset.call(this);
                  var M = this.cfg,
                    L = M.iv,
                    _ = M.mode;
                  this._xformMode == this._ENC_XFORM_MODE
                    ? (C = _.createEncryptor)
                    : ((C = _.createDecryptor), (this._minBufferSize = 1)),
                    this._mode && this._mode.__creator == C
                      ? this._mode.init(this, L && L.words)
                      : ((this._mode = C.call(_, this, L && L.words)),
                        (this._mode.__creator = C));
                },
                _doProcessBlock: function (C, M) {
                  this._mode.processBlock(C, M);
                },
                _doFinalize: function () {
                  var C,
                    M = this.cfg.padding;
                  return (
                    this._xformMode == this._ENC_XFORM_MODE
                      ? (M.pad(this._data, this.blockSize),
                        (C = this._process(!0)))
                      : ((C = this._process(!0)), M.unpad(C)),
                    C
                  );
                },
                blockSize: 128 / 32,
              });
              var x = (n.CipherParams = s.extend({
                  init: function (C) {
                    this.mixIn(C);
                  },
                  toString: function (C) {
                    return (C || this.formatter).stringify(this);
                  },
                })),
                b = (r.format = {}),
                D = (b.OpenSSL = {
                  stringify: function (C) {
                    var M,
                      L = C.ciphertext,
                      _ = C.salt;
                    return (
                      _
                        ? (M = o
                            .create([1398893684, 1701076831])
                            .concat(_)
                            .concat(L))
                        : (M = L),
                      M.toString(d)
                    );
                  },
                  parse: function (C) {
                    var M,
                      L = d.parse(C),
                      _ = L.words;
                    return (
                      _[0] == 1398893684 &&
                        _[1] == 1701076831 &&
                        ((M = o.create(_.slice(2, 4))),
                        _.splice(0, 4),
                        (L.sigBytes -= 16)),
                      x.create({ ciphertext: L, salt: M })
                    );
                  },
                }),
                B = (n.SerializableCipher = s.extend({
                  cfg: s.extend({ format: D }),
                  encrypt: function (C, M, L, _) {
                    _ = this.cfg.extend(_);
                    var U = C.createEncryptor(L, _),
                      H = U.finalize(M),
                      W = U.cfg;
                    return x.create({
                      ciphertext: H,
                      key: L,
                      iv: W.iv,
                      algorithm: C,
                      mode: W.mode,
                      padding: W.padding,
                      blockSize: C.blockSize,
                      formatter: _.format,
                    });
                  },
                  decrypt: function (C, M, L, _) {
                    (_ = this.cfg.extend(_)), (M = this._parse(M, _.format));
                    var U = C.createDecryptor(L, _).finalize(M.ciphertext);
                    return U;
                  },
                  _parse: function (C, M) {
                    return typeof C == "string" ? M.parse(C, this) : C;
                  },
                })),
                S = (r.kdf = {}),
                k = (S.OpenSSL = {
                  execute: function (C, M, L, _, U) {
                    if ((_ || (_ = o.random(64 / 8)), U))
                      var H = u
                        .create({ keySize: M + L, hasher: U })
                        .compute(C, _);
                    else var H = u.create({ keySize: M + L }).compute(C, _);
                    var W = o.create(H.words.slice(M), L * 4);
                    return (
                      (H.sigBytes = M * 4), x.create({ key: H, iv: W, salt: _ })
                    );
                  },
                }),
                w = (n.PasswordBasedCipher = B.extend({
                  cfg: B.cfg.extend({ kdf: k }),
                  encrypt: function (C, M, L, _) {
                    _ = this.cfg.extend(_);
                    var U = _.kdf.execute(
                      L,
                      C.keySize,
                      C.ivSize,
                      _.salt,
                      _.hasher
                    );
                    _.iv = U.iv;
                    var H = B.encrypt.call(this, C, M, U.key, _);
                    return H.mixIn(U), H;
                  },
                  decrypt: function (C, M, L, _) {
                    (_ = this.cfg.extend(_)), (M = this._parse(M, _.format));
                    var U = _.kdf.execute(
                      L,
                      C.keySize,
                      C.ivSize,
                      M.salt,
                      _.hasher
                    );
                    _.iv = U.iv;
                    var H = B.decrypt.call(this, C, M, U.key, _);
                    return H;
                  },
                }));
            })();
        });
      })(zt)),
    zt.exports
  );
}
var Kt = { exports: {} },
  pn = Kt.exports,
  mi;
function fn() {
  return (
    mi ||
      ((mi = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), se());
        })(pn, function (a) {
          return (
            (a.mode.CFB = (function () {
              var i = a.lib.BlockCipherMode.extend();
              (i.Encryptor = i.extend({
                processBlock: function (n, s) {
                  var o = this._cipher,
                    c = o.blockSize;
                  r.call(this, n, s, c, o),
                    (this._prevBlock = n.slice(s, s + c));
                },
              })),
                (i.Decryptor = i.extend({
                  processBlock: function (n, s) {
                    var o = this._cipher,
                      c = o.blockSize,
                      l = n.slice(s, s + c);
                    r.call(this, n, s, c, o), (this._prevBlock = l);
                  },
                }));
              function r(n, s, o, c) {
                var l,
                  d = this._iv;
                d
                  ? ((l = d.slice(0)), (this._iv = void 0))
                  : (l = this._prevBlock),
                  c.encryptBlock(l, 0);
                for (var g = 0; g < o; g++) n[s + g] ^= l[g];
              }
              return i;
            })()),
            a.mode.CFB
          );
        });
      })(Kt)),
    Kt.exports
  );
}
var Yt = { exports: {} },
  xn = Yt.exports,
  pi;
function gn() {
  return (
    pi ||
      ((pi = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), se());
        })(xn, function (a) {
          return (
            (a.mode.CTR = (function () {
              var i = a.lib.BlockCipherMode.extend(),
                r = (i.Encryptor = i.extend({
                  processBlock: function (n, s) {
                    var o = this._cipher,
                      c = o.blockSize,
                      l = this._iv,
                      d = this._counter;
                    l &&
                      ((d = this._counter = l.slice(0)), (this._iv = void 0));
                    var g = d.slice(0);
                    o.encryptBlock(g, 0), (d[c - 1] = (d[c - 1] + 1) | 0);
                    for (var u = 0; u < c; u++) n[s + u] ^= g[u];
                  },
                }));
              return (i.Decryptor = r), i;
            })()),
            a.mode.CTR
          );
        });
      })(Yt)),
    Yt.exports
  );
}
var Vt = { exports: {} },
  hn = Vt.exports,
  fi;
function vn() {
  return (
    fi ||
      ((fi = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), se());
        })(hn, function (a) {
          /** @preserve
           * Counter block mode compatible with  Dr Brian Gladman fileenc.c
           * derived from CryptoJS.mode.CTR
           * Jan Hruby jhruby.web@gmail.com
           */ return (
            (a.mode.CTRGladman = (function () {
              var i = a.lib.BlockCipherMode.extend();
              function r(o) {
                if (((o >> 24) & 255) === 255) {
                  var c = (o >> 16) & 255,
                    l = (o >> 8) & 255,
                    d = o & 255;
                  c === 255
                    ? ((c = 0),
                      l === 255 ? ((l = 0), d === 255 ? (d = 0) : ++d) : ++l)
                    : ++c,
                    (o = 0),
                    (o += c << 16),
                    (o += l << 8),
                    (o += d);
                } else o += 1 << 24;
                return o;
              }
              function n(o) {
                return (o[0] = r(o[0])) === 0 && (o[1] = r(o[1])), o;
              }
              var s = (i.Encryptor = i.extend({
                processBlock: function (o, c) {
                  var l = this._cipher,
                    d = l.blockSize,
                    g = this._iv,
                    u = this._counter;
                  g && ((u = this._counter = g.slice(0)), (this._iv = void 0)),
                    n(u);
                  var m = u.slice(0);
                  l.encryptBlock(m, 0);
                  for (var f = 0; f < d; f++) o[c + f] ^= m[f];
                },
              }));
              return (i.Decryptor = s), i;
            })()),
            a.mode.CTRGladman
          );
        });
      })(Vt)),
    Vt.exports
  );
}
var Qt = { exports: {} },
  yn = Qt.exports,
  xi;
function bn() {
  return (
    xi ||
      ((xi = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), se());
        })(yn, function (a) {
          return (
            (a.mode.OFB = (function () {
              var i = a.lib.BlockCipherMode.extend(),
                r = (i.Encryptor = i.extend({
                  processBlock: function (n, s) {
                    var o = this._cipher,
                      c = o.blockSize,
                      l = this._iv,
                      d = this._keystream;
                    l &&
                      ((d = this._keystream = l.slice(0)), (this._iv = void 0)),
                      o.encryptBlock(d, 0);
                    for (var g = 0; g < c; g++) n[s + g] ^= d[g];
                  },
                }));
              return (i.Decryptor = r), i;
            })()),
            a.mode.OFB
          );
        });
      })(Qt)),
    Qt.exports
  );
}
var Xt = { exports: {} },
  En = Xt.exports,
  gi;
function Cn() {
  return (
    gi ||
      ((gi = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), se());
        })(En, function (a) {
          return (
            (a.mode.ECB = (function () {
              var i = a.lib.BlockCipherMode.extend();
              return (
                (i.Encryptor = i.extend({
                  processBlock: function (r, n) {
                    this._cipher.encryptBlock(r, n);
                  },
                })),
                (i.Decryptor = i.extend({
                  processBlock: function (r, n) {
                    this._cipher.decryptBlock(r, n);
                  },
                })),
                i
              );
            })()),
            a.mode.ECB
          );
        });
      })(Xt)),
    Xt.exports
  );
}
var Zt = { exports: {} },
  Dn = Zt.exports,
  hi;
function Bn() {
  return (
    hi ||
      ((hi = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), se());
        })(Dn, function (a) {
          return (
            (a.pad.AnsiX923 = {
              pad: function (i, r) {
                var n = i.sigBytes,
                  s = r * 4,
                  o = s - (n % s),
                  c = n + o - 1;
                i.clamp(),
                  (i.words[c >>> 2] |= o << (24 - (c % 4) * 8)),
                  (i.sigBytes += o);
              },
              unpad: function (i) {
                var r = i.words[(i.sigBytes - 1) >>> 2] & 255;
                i.sigBytes -= r;
              },
            }),
            a.pad.Ansix923
          );
        });
      })(Zt)),
    Zt.exports
  );
}
var Jt = { exports: {} },
  Sn = Jt.exports,
  vi;
function An() {
  return (
    vi ||
      ((vi = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), se());
        })(Sn, function (a) {
          return (
            (a.pad.Iso10126 = {
              pad: function (i, r) {
                var n = r * 4,
                  s = n - (i.sigBytes % n);
                i.concat(a.lib.WordArray.random(s - 1)).concat(
                  a.lib.WordArray.create([s << 24], 1)
                );
              },
              unpad: function (i) {
                var r = i.words[(i.sigBytes - 1) >>> 2] & 255;
                i.sigBytes -= r;
              },
            }),
            a.pad.Iso10126
          );
        });
      })(Jt)),
    Jt.exports
  );
}
var ea = { exports: {} },
  Mn = ea.exports,
  yi;
function kn() {
  return (
    yi ||
      ((yi = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), se());
        })(Mn, function (a) {
          return (
            (a.pad.Iso97971 = {
              pad: function (i, r) {
                i.concat(a.lib.WordArray.create([2147483648], 1)),
                  a.pad.ZeroPadding.pad(i, r);
              },
              unpad: function (i) {
                a.pad.ZeroPadding.unpad(i), i.sigBytes--;
              },
            }),
            a.pad.Iso97971
          );
        });
      })(ea)),
    ea.exports
  );
}
var ta = { exports: {} },
  wn = ta.exports,
  bi;
function Ln() {
  return (
    bi ||
      ((bi = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), se());
        })(wn, function (a) {
          return (
            (a.pad.ZeroPadding = {
              pad: function (i, r) {
                var n = r * 4;
                i.clamp(), (i.sigBytes += n - (i.sigBytes % n || n));
              },
              unpad: function (i) {
                for (
                  var r = i.words, n = i.sigBytes - 1, n = i.sigBytes - 1;
                  n >= 0;
                  n--
                )
                  if ((r[n >>> 2] >>> (24 - (n % 4) * 8)) & 255) {
                    i.sigBytes = n + 1;
                    break;
                  }
              },
            }),
            a.pad.ZeroPadding
          );
        });
      })(ta)),
    ta.exports
  );
}
var aa = { exports: {} },
  Fn = aa.exports,
  Ei;
function _n() {
  return (
    Ei ||
      ((Ei = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), se());
        })(Fn, function (a) {
          return (
            (a.pad.NoPadding = { pad: function () {}, unpad: function () {} }),
            a.pad.NoPadding
          );
        });
      })(aa)),
    aa.exports
  );
}
var ia = { exports: {} },
  Pn = ia.exports,
  Ci;
function In() {
  return (
    Ci ||
      ((Ci = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), se());
        })(Pn, function (a) {
          return (
            (function (i) {
              var r = a,
                n = r.lib,
                s = n.CipherParams,
                o = r.enc,
                c = o.Hex,
                l = r.format;
              l.Hex = {
                stringify: function (d) {
                  return d.ciphertext.toString(c);
                },
                parse: function (d) {
                  var g = c.parse(d);
                  return s.create({ ciphertext: g });
                },
              };
            })(),
            a.format.Hex
          );
        });
      })(ia)),
    ia.exports
  );
}
var ra = { exports: {} },
  Tn = ra.exports,
  Di;
function qn() {
  return (
    Di ||
      ((Di = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), Ve(), Qe(), He(), se());
        })(Tn, function (a) {
          return (
            (function () {
              var i = a,
                r = i.lib,
                n = r.BlockCipher,
                s = i.algo,
                o = [],
                c = [],
                l = [],
                d = [],
                g = [],
                u = [],
                m = [],
                f = [],
                h = [],
                v = [];
              (function () {
                for (var x = [], b = 0; b < 256; b++)
                  b < 128 ? (x[b] = b << 1) : (x[b] = (b << 1) ^ 283);
                for (var D = 0, B = 0, b = 0; b < 256; b++) {
                  var S = B ^ (B << 1) ^ (B << 2) ^ (B << 3) ^ (B << 4);
                  (S = (S >>> 8) ^ (S & 255) ^ 99), (o[D] = S), (c[S] = D);
                  var k = x[D],
                    w = x[k],
                    C = x[w],
                    M = (x[S] * 257) ^ (S * 16843008);
                  (l[D] = (M << 24) | (M >>> 8)),
                    (d[D] = (M << 16) | (M >>> 16)),
                    (g[D] = (M << 8) | (M >>> 24)),
                    (u[D] = M);
                  var M =
                    (C * 16843009) ^ (w * 65537) ^ (k * 257) ^ (D * 16843008);
                  (m[S] = (M << 24) | (M >>> 8)),
                    (f[S] = (M << 16) | (M >>> 16)),
                    (h[S] = (M << 8) | (M >>> 24)),
                    (v[S] = M),
                    D
                      ? ((D = k ^ x[x[x[C ^ k]]]), (B ^= x[x[B]]))
                      : (D = B = 1);
                }
              })();
              var E = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                p = (s.AES = n.extend({
                  _doReset: function () {
                    var x;
                    if (!(this._nRounds && this._keyPriorReset === this._key)) {
                      for (
                        var b = (this._keyPriorReset = this._key),
                          D = b.words,
                          B = b.sigBytes / 4,
                          S = (this._nRounds = B + 6),
                          k = (S + 1) * 4,
                          w = (this._keySchedule = []),
                          C = 0;
                        C < k;
                        C++
                      )
                        C < B
                          ? (w[C] = D[C])
                          : ((x = w[C - 1]),
                            C % B
                              ? B > 6 &&
                                C % B == 4 &&
                                (x =
                                  (o[x >>> 24] << 24) |
                                  (o[(x >>> 16) & 255] << 16) |
                                  (o[(x >>> 8) & 255] << 8) |
                                  o[x & 255])
                              : ((x = (x << 8) | (x >>> 24)),
                                (x =
                                  (o[x >>> 24] << 24) |
                                  (o[(x >>> 16) & 255] << 16) |
                                  (o[(x >>> 8) & 255] << 8) |
                                  o[x & 255]),
                                (x ^= E[(C / B) | 0] << 24)),
                            (w[C] = w[C - B] ^ x));
                      for (
                        var M = (this._invKeySchedule = []), L = 0;
                        L < k;
                        L++
                      ) {
                        var C = k - L;
                        if (L % 4) var x = w[C];
                        else var x = w[C - 4];
                        L < 4 || C <= 4
                          ? (M[L] = x)
                          : (M[L] =
                              m[o[x >>> 24]] ^
                              f[o[(x >>> 16) & 255]] ^
                              h[o[(x >>> 8) & 255]] ^
                              v[o[x & 255]]);
                      }
                    }
                  },
                  encryptBlock: function (x, b) {
                    this._doCryptBlock(x, b, this._keySchedule, l, d, g, u, o);
                  },
                  decryptBlock: function (x, b) {
                    var D = x[b + 1];
                    (x[b + 1] = x[b + 3]),
                      (x[b + 3] = D),
                      this._doCryptBlock(
                        x,
                        b,
                        this._invKeySchedule,
                        m,
                        f,
                        h,
                        v,
                        c
                      );
                    var D = x[b + 1];
                    (x[b + 1] = x[b + 3]), (x[b + 3] = D);
                  },
                  _doCryptBlock: function (x, b, D, B, S, k, w, C) {
                    for (
                      var M = this._nRounds,
                        L = x[b] ^ D[0],
                        _ = x[b + 1] ^ D[1],
                        U = x[b + 2] ^ D[2],
                        H = x[b + 3] ^ D[3],
                        W = 4,
                        J = 1;
                      J < M;
                      J++
                    ) {
                      var X =
                          B[L >>> 24] ^
                          S[(_ >>> 16) & 255] ^
                          k[(U >>> 8) & 255] ^
                          w[H & 255] ^
                          D[W++],
                        ee =
                          B[_ >>> 24] ^
                          S[(U >>> 16) & 255] ^
                          k[(H >>> 8) & 255] ^
                          w[L & 255] ^
                          D[W++],
                        Z =
                          B[U >>> 24] ^
                          S[(H >>> 16) & 255] ^
                          k[(L >>> 8) & 255] ^
                          w[_ & 255] ^
                          D[W++],
                        F =
                          B[H >>> 24] ^
                          S[(L >>> 16) & 255] ^
                          k[(_ >>> 8) & 255] ^
                          w[U & 255] ^
                          D[W++];
                      (L = X), (_ = ee), (U = Z), (H = F);
                    }
                    var X =
                        ((C[L >>> 24] << 24) |
                          (C[(_ >>> 16) & 255] << 16) |
                          (C[(U >>> 8) & 255] << 8) |
                          C[H & 255]) ^
                        D[W++],
                      ee =
                        ((C[_ >>> 24] << 24) |
                          (C[(U >>> 16) & 255] << 16) |
                          (C[(H >>> 8) & 255] << 8) |
                          C[L & 255]) ^
                        D[W++],
                      Z =
                        ((C[U >>> 24] << 24) |
                          (C[(H >>> 16) & 255] << 16) |
                          (C[(L >>> 8) & 255] << 8) |
                          C[_ & 255]) ^
                        D[W++],
                      F =
                        ((C[H >>> 24] << 24) |
                          (C[(L >>> 16) & 255] << 16) |
                          (C[(_ >>> 8) & 255] << 8) |
                          C[U & 255]) ^
                        D[W++];
                    (x[b] = X), (x[b + 1] = ee), (x[b + 2] = Z), (x[b + 3] = F);
                  },
                  keySize: 256 / 32,
                }));
              i.AES = n._createHelper(p);
            })(),
            a.AES
          );
        });
      })(ra)),
    ra.exports
  );
}
var na = { exports: {} },
  Rn = na.exports,
  Bi;
function $n() {
  return (
    Bi ||
      ((Bi = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), Ve(), Qe(), He(), se());
        })(Rn, function (a) {
          return (
            (function () {
              var i = a,
                r = i.lib,
                n = r.WordArray,
                s = r.BlockCipher,
                o = i.algo,
                c = [
                  57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2,
                  59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39,
                  31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37,
                  29, 21, 13, 5, 28, 20, 12, 4,
                ],
                l = [
                  14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26,
                  8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51,
                  45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32,
                ],
                d = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
                g = [
                  {
                    0: 8421888,
                    268435456: 32768,
                    536870912: 8421378,
                    805306368: 2,
                    1073741824: 512,
                    1342177280: 8421890,
                    1610612736: 8389122,
                    1879048192: 8388608,
                    2147483648: 514,
                    2415919104: 8389120,
                    2684354560: 33280,
                    2952790016: 8421376,
                    3221225472: 32770,
                    3489660928: 8388610,
                    3758096384: 0,
                    4026531840: 33282,
                    134217728: 0,
                    402653184: 8421890,
                    671088640: 33282,
                    939524096: 32768,
                    1207959552: 8421888,
                    1476395008: 512,
                    1744830464: 8421378,
                    2013265920: 2,
                    2281701376: 8389120,
                    2550136832: 33280,
                    2818572288: 8421376,
                    3087007744: 8389122,
                    3355443200: 8388610,
                    3623878656: 32770,
                    3892314112: 514,
                    4160749568: 8388608,
                    1: 32768,
                    268435457: 2,
                    536870913: 8421888,
                    805306369: 8388608,
                    1073741825: 8421378,
                    1342177281: 33280,
                    1610612737: 512,
                    1879048193: 8389122,
                    2147483649: 8421890,
                    2415919105: 8421376,
                    2684354561: 8388610,
                    2952790017: 33282,
                    3221225473: 514,
                    3489660929: 8389120,
                    3758096385: 32770,
                    4026531841: 0,
                    134217729: 8421890,
                    402653185: 8421376,
                    671088641: 8388608,
                    939524097: 512,
                    1207959553: 32768,
                    1476395009: 8388610,
                    1744830465: 2,
                    2013265921: 33282,
                    2281701377: 32770,
                    2550136833: 8389122,
                    2818572289: 514,
                    3087007745: 8421888,
                    3355443201: 8389120,
                    3623878657: 0,
                    3892314113: 33280,
                    4160749569: 8421378,
                  },
                  {
                    0: 1074282512,
                    16777216: 16384,
                    33554432: 524288,
                    50331648: 1074266128,
                    67108864: 1073741840,
                    83886080: 1074282496,
                    100663296: 1073758208,
                    117440512: 16,
                    134217728: 540672,
                    150994944: 1073758224,
                    167772160: 1073741824,
                    184549376: 540688,
                    201326592: 524304,
                    218103808: 0,
                    234881024: 16400,
                    251658240: 1074266112,
                    8388608: 1073758208,
                    25165824: 540688,
                    41943040: 16,
                    58720256: 1073758224,
                    75497472: 1074282512,
                    92274688: 1073741824,
                    109051904: 524288,
                    125829120: 1074266128,
                    142606336: 524304,
                    159383552: 0,
                    176160768: 16384,
                    192937984: 1074266112,
                    209715200: 1073741840,
                    226492416: 540672,
                    243269632: 1074282496,
                    260046848: 16400,
                    268435456: 0,
                    285212672: 1074266128,
                    301989888: 1073758224,
                    318767104: 1074282496,
                    335544320: 1074266112,
                    352321536: 16,
                    369098752: 540688,
                    385875968: 16384,
                    402653184: 16400,
                    419430400: 524288,
                    436207616: 524304,
                    452984832: 1073741840,
                    469762048: 540672,
                    486539264: 1073758208,
                    503316480: 1073741824,
                    520093696: 1074282512,
                    276824064: 540688,
                    293601280: 524288,
                    310378496: 1074266112,
                    327155712: 16384,
                    343932928: 1073758208,
                    360710144: 1074282512,
                    377487360: 16,
                    394264576: 1073741824,
                    411041792: 1074282496,
                    427819008: 1073741840,
                    444596224: 1073758224,
                    461373440: 524304,
                    478150656: 0,
                    494927872: 16400,
                    511705088: 1074266128,
                    528482304: 540672,
                  },
                  {
                    0: 260,
                    1048576: 0,
                    2097152: 67109120,
                    3145728: 65796,
                    4194304: 65540,
                    5242880: 67108868,
                    6291456: 67174660,
                    7340032: 67174400,
                    8388608: 67108864,
                    9437184: 67174656,
                    10485760: 65792,
                    11534336: 67174404,
                    12582912: 67109124,
                    13631488: 65536,
                    14680064: 4,
                    15728640: 256,
                    524288: 67174656,
                    1572864: 67174404,
                    2621440: 0,
                    3670016: 67109120,
                    4718592: 67108868,
                    5767168: 65536,
                    6815744: 65540,
                    7864320: 260,
                    8912896: 4,
                    9961472: 256,
                    11010048: 67174400,
                    12058624: 65796,
                    13107200: 65792,
                    14155776: 67109124,
                    15204352: 67174660,
                    16252928: 67108864,
                    16777216: 67174656,
                    17825792: 65540,
                    18874368: 65536,
                    19922944: 67109120,
                    20971520: 256,
                    22020096: 67174660,
                    23068672: 67108868,
                    24117248: 0,
                    25165824: 67109124,
                    26214400: 67108864,
                    27262976: 4,
                    28311552: 65792,
                    29360128: 67174400,
                    30408704: 260,
                    31457280: 65796,
                    32505856: 67174404,
                    17301504: 67108864,
                    18350080: 260,
                    19398656: 67174656,
                    20447232: 0,
                    21495808: 65540,
                    22544384: 67109120,
                    23592960: 256,
                    24641536: 67174404,
                    25690112: 65536,
                    26738688: 67174660,
                    27787264: 65796,
                    28835840: 67108868,
                    29884416: 67109124,
                    30932992: 67174400,
                    31981568: 4,
                    33030144: 65792,
                  },
                  {
                    0: 2151682048,
                    65536: 2147487808,
                    131072: 4198464,
                    196608: 2151677952,
                    262144: 0,
                    327680: 4198400,
                    393216: 2147483712,
                    458752: 4194368,
                    524288: 2147483648,
                    589824: 4194304,
                    655360: 64,
                    720896: 2147487744,
                    786432: 2151678016,
                    851968: 4160,
                    917504: 4096,
                    983040: 2151682112,
                    32768: 2147487808,
                    98304: 64,
                    163840: 2151678016,
                    229376: 2147487744,
                    294912: 4198400,
                    360448: 2151682112,
                    425984: 0,
                    491520: 2151677952,
                    557056: 4096,
                    622592: 2151682048,
                    688128: 4194304,
                    753664: 4160,
                    819200: 2147483648,
                    884736: 4194368,
                    950272: 4198464,
                    1015808: 2147483712,
                    1048576: 4194368,
                    1114112: 4198400,
                    1179648: 2147483712,
                    1245184: 0,
                    1310720: 4160,
                    1376256: 2151678016,
                    1441792: 2151682048,
                    1507328: 2147487808,
                    1572864: 2151682112,
                    1638400: 2147483648,
                    1703936: 2151677952,
                    1769472: 4198464,
                    1835008: 2147487744,
                    1900544: 4194304,
                    1966080: 64,
                    2031616: 4096,
                    1081344: 2151677952,
                    1146880: 2151682112,
                    1212416: 0,
                    1277952: 4198400,
                    1343488: 4194368,
                    1409024: 2147483648,
                    1474560: 2147487808,
                    1540096: 64,
                    1605632: 2147483712,
                    1671168: 4096,
                    1736704: 2147487744,
                    1802240: 2151678016,
                    1867776: 4160,
                    1933312: 2151682048,
                    1998848: 4194304,
                    2064384: 4198464,
                  },
                  {
                    0: 128,
                    4096: 17039360,
                    8192: 262144,
                    12288: 536870912,
                    16384: 537133184,
                    20480: 16777344,
                    24576: 553648256,
                    28672: 262272,
                    32768: 16777216,
                    36864: 537133056,
                    40960: 536871040,
                    45056: 553910400,
                    49152: 553910272,
                    53248: 0,
                    57344: 17039488,
                    61440: 553648128,
                    2048: 17039488,
                    6144: 553648256,
                    10240: 128,
                    14336: 17039360,
                    18432: 262144,
                    22528: 537133184,
                    26624: 553910272,
                    30720: 536870912,
                    34816: 537133056,
                    38912: 0,
                    43008: 553910400,
                    47104: 16777344,
                    51200: 536871040,
                    55296: 553648128,
                    59392: 16777216,
                    63488: 262272,
                    65536: 262144,
                    69632: 128,
                    73728: 536870912,
                    77824: 553648256,
                    81920: 16777344,
                    86016: 553910272,
                    90112: 537133184,
                    94208: 16777216,
                    98304: 553910400,
                    102400: 553648128,
                    106496: 17039360,
                    110592: 537133056,
                    114688: 262272,
                    118784: 536871040,
                    122880: 0,
                    126976: 17039488,
                    67584: 553648256,
                    71680: 16777216,
                    75776: 17039360,
                    79872: 537133184,
                    83968: 536870912,
                    88064: 17039488,
                    92160: 128,
                    96256: 553910272,
                    100352: 262272,
                    104448: 553910400,
                    108544: 0,
                    112640: 553648128,
                    116736: 16777344,
                    120832: 262144,
                    124928: 537133056,
                    129024: 536871040,
                  },
                  {
                    0: 268435464,
                    256: 8192,
                    512: 270532608,
                    768: 270540808,
                    1024: 268443648,
                    1280: 2097152,
                    1536: 2097160,
                    1792: 268435456,
                    2048: 0,
                    2304: 268443656,
                    2560: 2105344,
                    2816: 8,
                    3072: 270532616,
                    3328: 2105352,
                    3584: 8200,
                    3840: 270540800,
                    128: 270532608,
                    384: 270540808,
                    640: 8,
                    896: 2097152,
                    1152: 2105352,
                    1408: 268435464,
                    1664: 268443648,
                    1920: 8200,
                    2176: 2097160,
                    2432: 8192,
                    2688: 268443656,
                    2944: 270532616,
                    3200: 0,
                    3456: 270540800,
                    3712: 2105344,
                    3968: 268435456,
                    4096: 268443648,
                    4352: 270532616,
                    4608: 270540808,
                    4864: 8200,
                    5120: 2097152,
                    5376: 268435456,
                    5632: 268435464,
                    5888: 2105344,
                    6144: 2105352,
                    6400: 0,
                    6656: 8,
                    6912: 270532608,
                    7168: 8192,
                    7424: 268443656,
                    7680: 270540800,
                    7936: 2097160,
                    4224: 8,
                    4480: 2105344,
                    4736: 2097152,
                    4992: 268435464,
                    5248: 268443648,
                    5504: 8200,
                    5760: 270540808,
                    6016: 270532608,
                    6272: 270540800,
                    6528: 270532616,
                    6784: 8192,
                    7040: 2105352,
                    7296: 2097160,
                    7552: 0,
                    7808: 268435456,
                    8064: 268443656,
                  },
                  {
                    0: 1048576,
                    16: 33555457,
                    32: 1024,
                    48: 1049601,
                    64: 34604033,
                    80: 0,
                    96: 1,
                    112: 34603009,
                    128: 33555456,
                    144: 1048577,
                    160: 33554433,
                    176: 34604032,
                    192: 34603008,
                    208: 1025,
                    224: 1049600,
                    240: 33554432,
                    8: 34603009,
                    24: 0,
                    40: 33555457,
                    56: 34604032,
                    72: 1048576,
                    88: 33554433,
                    104: 33554432,
                    120: 1025,
                    136: 1049601,
                    152: 33555456,
                    168: 34603008,
                    184: 1048577,
                    200: 1024,
                    216: 34604033,
                    232: 1,
                    248: 1049600,
                    256: 33554432,
                    272: 1048576,
                    288: 33555457,
                    304: 34603009,
                    320: 1048577,
                    336: 33555456,
                    352: 34604032,
                    368: 1049601,
                    384: 1025,
                    400: 34604033,
                    416: 1049600,
                    432: 1,
                    448: 0,
                    464: 34603008,
                    480: 33554433,
                    496: 1024,
                    264: 1049600,
                    280: 33555457,
                    296: 34603009,
                    312: 1,
                    328: 33554432,
                    344: 1048576,
                    360: 1025,
                    376: 34604032,
                    392: 33554433,
                    408: 34603008,
                    424: 0,
                    440: 34604033,
                    456: 1049601,
                    472: 1024,
                    488: 33555456,
                    504: 1048577,
                  },
                  {
                    0: 134219808,
                    1: 131072,
                    2: 134217728,
                    3: 32,
                    4: 131104,
                    5: 134350880,
                    6: 134350848,
                    7: 2048,
                    8: 134348800,
                    9: 134219776,
                    10: 133120,
                    11: 134348832,
                    12: 2080,
                    13: 0,
                    14: 134217760,
                    15: 133152,
                    2147483648: 2048,
                    2147483649: 134350880,
                    2147483650: 134219808,
                    2147483651: 134217728,
                    2147483652: 134348800,
                    2147483653: 133120,
                    2147483654: 133152,
                    2147483655: 32,
                    2147483656: 134217760,
                    2147483657: 2080,
                    2147483658: 131104,
                    2147483659: 134350848,
                    2147483660: 0,
                    2147483661: 134348832,
                    2147483662: 134219776,
                    2147483663: 131072,
                    16: 133152,
                    17: 134350848,
                    18: 32,
                    19: 2048,
                    20: 134219776,
                    21: 134217760,
                    22: 134348832,
                    23: 131072,
                    24: 0,
                    25: 131104,
                    26: 134348800,
                    27: 134219808,
                    28: 134350880,
                    29: 133120,
                    30: 2080,
                    31: 134217728,
                    2147483664: 131072,
                    2147483665: 2048,
                    2147483666: 134348832,
                    2147483667: 133152,
                    2147483668: 32,
                    2147483669: 134348800,
                    2147483670: 134217728,
                    2147483671: 134219808,
                    2147483672: 134350880,
                    2147483673: 134217760,
                    2147483674: 134219776,
                    2147483675: 0,
                    2147483676: 133120,
                    2147483677: 2080,
                    2147483678: 131104,
                    2147483679: 134350848,
                  },
                ],
                u = [
                  4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504,
                  2147483679,
                ],
                m = (o.DES = s.extend({
                  _doReset: function () {
                    for (
                      var E = this._key, p = E.words, x = [], b = 0;
                      b < 56;
                      b++
                    ) {
                      var D = c[b] - 1;
                      x[b] = (p[D >>> 5] >>> (31 - (D % 32))) & 1;
                    }
                    for (var B = (this._subKeys = []), S = 0; S < 16; S++) {
                      for (var k = (B[S] = []), w = d[S], b = 0; b < 24; b++)
                        (k[(b / 6) | 0] |=
                          x[(l[b] - 1 + w) % 28] << (31 - (b % 6))),
                          (k[4 + ((b / 6) | 0)] |=
                            x[28 + ((l[b + 24] - 1 + w) % 28)] <<
                            (31 - (b % 6)));
                      k[0] = (k[0] << 1) | (k[0] >>> 31);
                      for (var b = 1; b < 7; b++)
                        k[b] = k[b] >>> ((b - 1) * 4 + 3);
                      k[7] = (k[7] << 5) | (k[7] >>> 27);
                    }
                    for (var C = (this._invSubKeys = []), b = 0; b < 16; b++)
                      C[b] = B[15 - b];
                  },
                  encryptBlock: function (E, p) {
                    this._doCryptBlock(E, p, this._subKeys);
                  },
                  decryptBlock: function (E, p) {
                    this._doCryptBlock(E, p, this._invSubKeys);
                  },
                  _doCryptBlock: function (E, p, x) {
                    (this._lBlock = E[p]),
                      (this._rBlock = E[p + 1]),
                      f.call(this, 4, 252645135),
                      f.call(this, 16, 65535),
                      h.call(this, 2, 858993459),
                      h.call(this, 8, 16711935),
                      f.call(this, 1, 1431655765);
                    for (var b = 0; b < 16; b++) {
                      for (
                        var D = x[b],
                          B = this._lBlock,
                          S = this._rBlock,
                          k = 0,
                          w = 0;
                        w < 8;
                        w++
                      )
                        k |= g[w][((S ^ D[w]) & u[w]) >>> 0];
                      (this._lBlock = S), (this._rBlock = B ^ k);
                    }
                    var C = this._lBlock;
                    (this._lBlock = this._rBlock),
                      (this._rBlock = C),
                      f.call(this, 1, 1431655765),
                      h.call(this, 8, 16711935),
                      h.call(this, 2, 858993459),
                      f.call(this, 16, 65535),
                      f.call(this, 4, 252645135),
                      (E[p] = this._lBlock),
                      (E[p + 1] = this._rBlock);
                  },
                  keySize: 64 / 32,
                  ivSize: 64 / 32,
                  blockSize: 64 / 32,
                }));
              function f(E, p) {
                var x = ((this._lBlock >>> E) ^ this._rBlock) & p;
                (this._rBlock ^= x), (this._lBlock ^= x << E);
              }
              function h(E, p) {
                var x = ((this._rBlock >>> E) ^ this._lBlock) & p;
                (this._lBlock ^= x), (this._rBlock ^= x << E);
              }
              i.DES = s._createHelper(m);
              var v = (o.TripleDES = s.extend({
                _doReset: function () {
                  var E = this._key,
                    p = E.words;
                  if (p.length !== 2 && p.length !== 4 && p.length < 6)
                    throw new Error(
                      "Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192."
                    );
                  var x = p.slice(0, 2),
                    b = p.length < 4 ? p.slice(0, 2) : p.slice(2, 4),
                    D = p.length < 6 ? p.slice(0, 2) : p.slice(4, 6);
                  (this._des1 = m.createEncryptor(n.create(x))),
                    (this._des2 = m.createEncryptor(n.create(b))),
                    (this._des3 = m.createEncryptor(n.create(D)));
                },
                encryptBlock: function (E, p) {
                  this._des1.encryptBlock(E, p),
                    this._des2.decryptBlock(E, p),
                    this._des3.encryptBlock(E, p);
                },
                decryptBlock: function (E, p) {
                  this._des3.decryptBlock(E, p),
                    this._des2.encryptBlock(E, p),
                    this._des1.decryptBlock(E, p);
                },
                keySize: 192 / 32,
                ivSize: 64 / 32,
                blockSize: 64 / 32,
              }));
              i.TripleDES = s._createHelper(v);
            })(),
            a.TripleDES
          );
        });
      })(na)),
    na.exports
  );
}
var sa = { exports: {} },
  Hn = sa.exports,
  Si;
function On() {
  return (
    Si ||
      ((Si = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), Ve(), Qe(), He(), se());
        })(Hn, function (a) {
          return (
            (function () {
              var i = a,
                r = i.lib,
                n = r.StreamCipher,
                s = i.algo,
                o = (s.RC4 = n.extend({
                  _doReset: function () {
                    for (
                      var d = this._key,
                        g = d.words,
                        u = d.sigBytes,
                        m = (this._S = []),
                        f = 0;
                      f < 256;
                      f++
                    )
                      m[f] = f;
                    for (var f = 0, h = 0; f < 256; f++) {
                      var v = f % u,
                        E = (g[v >>> 2] >>> (24 - (v % 4) * 8)) & 255;
                      h = (h + m[f] + E) % 256;
                      var p = m[f];
                      (m[f] = m[h]), (m[h] = p);
                    }
                    this._i = this._j = 0;
                  },
                  _doProcessBlock: function (d, g) {
                    d[g] ^= c.call(this);
                  },
                  keySize: 256 / 32,
                  ivSize: 0,
                }));
              function c() {
                for (
                  var d = this._S, g = this._i, u = this._j, m = 0, f = 0;
                  f < 4;
                  f++
                ) {
                  (g = (g + 1) % 256), (u = (u + d[g]) % 256);
                  var h = d[g];
                  (d[g] = d[u]),
                    (d[u] = h),
                    (m |= d[(d[g] + d[u]) % 256] << (24 - f * 8));
                }
                return (this._i = g), (this._j = u), m;
              }
              i.RC4 = n._createHelper(o);
              var l = (s.RC4Drop = o.extend({
                cfg: o.cfg.extend({ drop: 192 }),
                _doReset: function () {
                  o._doReset.call(this);
                  for (var d = this.cfg.drop; d > 0; d--) c.call(this);
                },
              }));
              i.RC4Drop = n._createHelper(l);
            })(),
            a.RC4
          );
        });
      })(sa)),
    sa.exports
  );
}
var oa = { exports: {} },
  Nn = oa.exports,
  Ai;
function Un() {
  return (
    Ai ||
      ((Ai = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), Ve(), Qe(), He(), se());
        })(Nn, function (a) {
          return (
            (function () {
              var i = a,
                r = i.lib,
                n = r.StreamCipher,
                s = i.algo,
                o = [],
                c = [],
                l = [],
                d = (s.Rabbit = n.extend({
                  _doReset: function () {
                    for (
                      var u = this._key.words, m = this.cfg.iv, f = 0;
                      f < 4;
                      f++
                    )
                      u[f] =
                        (((u[f] << 8) | (u[f] >>> 24)) & 16711935) |
                        (((u[f] << 24) | (u[f] >>> 8)) & 4278255360);
                    var h = (this._X = [
                        u[0],
                        (u[3] << 16) | (u[2] >>> 16),
                        u[1],
                        (u[0] << 16) | (u[3] >>> 16),
                        u[2],
                        (u[1] << 16) | (u[0] >>> 16),
                        u[3],
                        (u[2] << 16) | (u[1] >>> 16),
                      ]),
                      v = (this._C = [
                        (u[2] << 16) | (u[2] >>> 16),
                        (u[0] & 4294901760) | (u[1] & 65535),
                        (u[3] << 16) | (u[3] >>> 16),
                        (u[1] & 4294901760) | (u[2] & 65535),
                        (u[0] << 16) | (u[0] >>> 16),
                        (u[2] & 4294901760) | (u[3] & 65535),
                        (u[1] << 16) | (u[1] >>> 16),
                        (u[3] & 4294901760) | (u[0] & 65535),
                      ]);
                    this._b = 0;
                    for (var f = 0; f < 4; f++) g.call(this);
                    for (var f = 0; f < 8; f++) v[f] ^= h[(f + 4) & 7];
                    if (m) {
                      var E = m.words,
                        p = E[0],
                        x = E[1],
                        b =
                          (((p << 8) | (p >>> 24)) & 16711935) |
                          (((p << 24) | (p >>> 8)) & 4278255360),
                        D =
                          (((x << 8) | (x >>> 24)) & 16711935) |
                          (((x << 24) | (x >>> 8)) & 4278255360),
                        B = (b >>> 16) | (D & 4294901760),
                        S = (D << 16) | (b & 65535);
                      (v[0] ^= b),
                        (v[1] ^= B),
                        (v[2] ^= D),
                        (v[3] ^= S),
                        (v[4] ^= b),
                        (v[5] ^= B),
                        (v[6] ^= D),
                        (v[7] ^= S);
                      for (var f = 0; f < 4; f++) g.call(this);
                    }
                  },
                  _doProcessBlock: function (u, m) {
                    var f = this._X;
                    g.call(this),
                      (o[0] = f[0] ^ (f[5] >>> 16) ^ (f[3] << 16)),
                      (o[1] = f[2] ^ (f[7] >>> 16) ^ (f[5] << 16)),
                      (o[2] = f[4] ^ (f[1] >>> 16) ^ (f[7] << 16)),
                      (o[3] = f[6] ^ (f[3] >>> 16) ^ (f[1] << 16));
                    for (var h = 0; h < 4; h++)
                      (o[h] =
                        (((o[h] << 8) | (o[h] >>> 24)) & 16711935) |
                        (((o[h] << 24) | (o[h] >>> 8)) & 4278255360)),
                        (u[m + h] ^= o[h]);
                  },
                  blockSize: 128 / 32,
                  ivSize: 64 / 32,
                }));
              function g() {
                for (var u = this._X, m = this._C, f = 0; f < 8; f++)
                  c[f] = m[f];
                (m[0] = (m[0] + 1295307597 + this._b) | 0),
                  (m[1] =
                    (m[1] + 3545052371 + (m[0] >>> 0 < c[0] >>> 0 ? 1 : 0)) |
                    0),
                  (m[2] =
                    (m[2] + 886263092 + (m[1] >>> 0 < c[1] >>> 0 ? 1 : 0)) | 0),
                  (m[3] =
                    (m[3] + 1295307597 + (m[2] >>> 0 < c[2] >>> 0 ? 1 : 0)) |
                    0),
                  (m[4] =
                    (m[4] + 3545052371 + (m[3] >>> 0 < c[3] >>> 0 ? 1 : 0)) |
                    0),
                  (m[5] =
                    (m[5] + 886263092 + (m[4] >>> 0 < c[4] >>> 0 ? 1 : 0)) | 0),
                  (m[6] =
                    (m[6] + 1295307597 + (m[5] >>> 0 < c[5] >>> 0 ? 1 : 0)) |
                    0),
                  (m[7] =
                    (m[7] + 3545052371 + (m[6] >>> 0 < c[6] >>> 0 ? 1 : 0)) |
                    0),
                  (this._b = m[7] >>> 0 < c[7] >>> 0 ? 1 : 0);
                for (var f = 0; f < 8; f++) {
                  var h = u[f] + m[f],
                    v = h & 65535,
                    E = h >>> 16,
                    p = ((((v * v) >>> 17) + v * E) >>> 15) + E * E,
                    x = (((h & 4294901760) * h) | 0) + (((h & 65535) * h) | 0);
                  l[f] = p ^ x;
                }
                (u[0] =
                  (l[0] +
                    ((l[7] << 16) | (l[7] >>> 16)) +
                    ((l[6] << 16) | (l[6] >>> 16))) |
                  0),
                  (u[1] = (l[1] + ((l[0] << 8) | (l[0] >>> 24)) + l[7]) | 0),
                  (u[2] =
                    (l[2] +
                      ((l[1] << 16) | (l[1] >>> 16)) +
                      ((l[0] << 16) | (l[0] >>> 16))) |
                    0),
                  (u[3] = (l[3] + ((l[2] << 8) | (l[2] >>> 24)) + l[1]) | 0),
                  (u[4] =
                    (l[4] +
                      ((l[3] << 16) | (l[3] >>> 16)) +
                      ((l[2] << 16) | (l[2] >>> 16))) |
                    0),
                  (u[5] = (l[5] + ((l[4] << 8) | (l[4] >>> 24)) + l[3]) | 0),
                  (u[6] =
                    (l[6] +
                      ((l[5] << 16) | (l[5] >>> 16)) +
                      ((l[4] << 16) | (l[4] >>> 16))) |
                    0),
                  (u[7] = (l[7] + ((l[6] << 8) | (l[6] >>> 24)) + l[5]) | 0);
              }
              i.Rabbit = n._createHelper(d);
            })(),
            a.Rabbit
          );
        });
      })(oa)),
    oa.exports
  );
}
var la = { exports: {} },
  Gn = la.exports,
  Mi;
function jn() {
  return (
    Mi ||
      ((Mi = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), Ve(), Qe(), He(), se());
        })(Gn, function (a) {
          return (
            (function () {
              var i = a,
                r = i.lib,
                n = r.StreamCipher,
                s = i.algo,
                o = [],
                c = [],
                l = [],
                d = (s.RabbitLegacy = n.extend({
                  _doReset: function () {
                    var u = this._key.words,
                      m = this.cfg.iv,
                      f = (this._X = [
                        u[0],
                        (u[3] << 16) | (u[2] >>> 16),
                        u[1],
                        (u[0] << 16) | (u[3] >>> 16),
                        u[2],
                        (u[1] << 16) | (u[0] >>> 16),
                        u[3],
                        (u[2] << 16) | (u[1] >>> 16),
                      ]),
                      h = (this._C = [
                        (u[2] << 16) | (u[2] >>> 16),
                        (u[0] & 4294901760) | (u[1] & 65535),
                        (u[3] << 16) | (u[3] >>> 16),
                        (u[1] & 4294901760) | (u[2] & 65535),
                        (u[0] << 16) | (u[0] >>> 16),
                        (u[2] & 4294901760) | (u[3] & 65535),
                        (u[1] << 16) | (u[1] >>> 16),
                        (u[3] & 4294901760) | (u[0] & 65535),
                      ]);
                    this._b = 0;
                    for (var v = 0; v < 4; v++) g.call(this);
                    for (var v = 0; v < 8; v++) h[v] ^= f[(v + 4) & 7];
                    if (m) {
                      var E = m.words,
                        p = E[0],
                        x = E[1],
                        b =
                          (((p << 8) | (p >>> 24)) & 16711935) |
                          (((p << 24) | (p >>> 8)) & 4278255360),
                        D =
                          (((x << 8) | (x >>> 24)) & 16711935) |
                          (((x << 24) | (x >>> 8)) & 4278255360),
                        B = (b >>> 16) | (D & 4294901760),
                        S = (D << 16) | (b & 65535);
                      (h[0] ^= b),
                        (h[1] ^= B),
                        (h[2] ^= D),
                        (h[3] ^= S),
                        (h[4] ^= b),
                        (h[5] ^= B),
                        (h[6] ^= D),
                        (h[7] ^= S);
                      for (var v = 0; v < 4; v++) g.call(this);
                    }
                  },
                  _doProcessBlock: function (u, m) {
                    var f = this._X;
                    g.call(this),
                      (o[0] = f[0] ^ (f[5] >>> 16) ^ (f[3] << 16)),
                      (o[1] = f[2] ^ (f[7] >>> 16) ^ (f[5] << 16)),
                      (o[2] = f[4] ^ (f[1] >>> 16) ^ (f[7] << 16)),
                      (o[3] = f[6] ^ (f[3] >>> 16) ^ (f[1] << 16));
                    for (var h = 0; h < 4; h++)
                      (o[h] =
                        (((o[h] << 8) | (o[h] >>> 24)) & 16711935) |
                        (((o[h] << 24) | (o[h] >>> 8)) & 4278255360)),
                        (u[m + h] ^= o[h]);
                  },
                  blockSize: 128 / 32,
                  ivSize: 64 / 32,
                }));
              function g() {
                for (var u = this._X, m = this._C, f = 0; f < 8; f++)
                  c[f] = m[f];
                (m[0] = (m[0] + 1295307597 + this._b) | 0),
                  (m[1] =
                    (m[1] + 3545052371 + (m[0] >>> 0 < c[0] >>> 0 ? 1 : 0)) |
                    0),
                  (m[2] =
                    (m[2] + 886263092 + (m[1] >>> 0 < c[1] >>> 0 ? 1 : 0)) | 0),
                  (m[3] =
                    (m[3] + 1295307597 + (m[2] >>> 0 < c[2] >>> 0 ? 1 : 0)) |
                    0),
                  (m[4] =
                    (m[4] + 3545052371 + (m[3] >>> 0 < c[3] >>> 0 ? 1 : 0)) |
                    0),
                  (m[5] =
                    (m[5] + 886263092 + (m[4] >>> 0 < c[4] >>> 0 ? 1 : 0)) | 0),
                  (m[6] =
                    (m[6] + 1295307597 + (m[5] >>> 0 < c[5] >>> 0 ? 1 : 0)) |
                    0),
                  (m[7] =
                    (m[7] + 3545052371 + (m[6] >>> 0 < c[6] >>> 0 ? 1 : 0)) |
                    0),
                  (this._b = m[7] >>> 0 < c[7] >>> 0 ? 1 : 0);
                for (var f = 0; f < 8; f++) {
                  var h = u[f] + m[f],
                    v = h & 65535,
                    E = h >>> 16,
                    p = ((((v * v) >>> 17) + v * E) >>> 15) + E * E,
                    x = (((h & 4294901760) * h) | 0) + (((h & 65535) * h) | 0);
                  l[f] = p ^ x;
                }
                (u[0] =
                  (l[0] +
                    ((l[7] << 16) | (l[7] >>> 16)) +
                    ((l[6] << 16) | (l[6] >>> 16))) |
                  0),
                  (u[1] = (l[1] + ((l[0] << 8) | (l[0] >>> 24)) + l[7]) | 0),
                  (u[2] =
                    (l[2] +
                      ((l[1] << 16) | (l[1] >>> 16)) +
                      ((l[0] << 16) | (l[0] >>> 16))) |
                    0),
                  (u[3] = (l[3] + ((l[2] << 8) | (l[2] >>> 24)) + l[1]) | 0),
                  (u[4] =
                    (l[4] +
                      ((l[3] << 16) | (l[3] >>> 16)) +
                      ((l[2] << 16) | (l[2] >>> 16))) |
                    0),
                  (u[5] = (l[5] + ((l[4] << 8) | (l[4] >>> 24)) + l[3]) | 0),
                  (u[6] =
                    (l[6] +
                      ((l[5] << 16) | (l[5] >>> 16)) +
                      ((l[4] << 16) | (l[4] >>> 16))) |
                    0),
                  (u[7] = (l[7] + ((l[6] << 8) | (l[6] >>> 24)) + l[5]) | 0);
              }
              i.RabbitLegacy = n._createHelper(d);
            })(),
            a.RabbitLegacy
          );
        });
      })(la)),
    la.exports
  );
}
var ca = { exports: {} },
  Wn = ca.exports,
  ki;
function zn() {
  return (
    ki ||
      ((ki = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(Y(), Ve(), Qe(), He(), se());
        })(Wn, function (a) {
          return (
            (function () {
              var i = a,
                r = i.lib,
                n = r.BlockCipher,
                s = i.algo;
              const o = 16,
                c = [
                  608135816, 2242054355, 320440878, 57701188, 2752067618,
                  698298832, 137296536, 3964562569, 1160258022, 953160567,
                  3193202383, 887688300, 3232508343, 3380367581, 1065670069,
                  3041331479, 2450970073, 2306472731,
                ],
                l = [
                  [
                    3509652390, 2564797868, 805139163, 3491422135, 3101798381,
                    1780907670, 3128725573, 4046225305, 614570311, 3012652279,
                    134345442, 2240740374, 1667834072, 1901547113, 2757295779,
                    4103290238, 227898511, 1921955416, 1904987480, 2182433518,
                    2069144605, 3260701109, 2620446009, 720527379, 3318853667,
                    677414384, 3393288472, 3101374703, 2390351024, 1614419982,
                    1822297739, 2954791486, 3608508353, 3174124327, 2024746970,
                    1432378464, 3864339955, 2857741204, 1464375394, 1676153920,
                    1439316330, 715854006, 3033291828, 289532110, 2706671279,
                    2087905683, 3018724369, 1668267050, 732546397, 1947742710,
                    3462151702, 2609353502, 2950085171, 1814351708, 2050118529,
                    680887927, 999245976, 1800124847, 3300911131, 1713906067,
                    1641548236, 4213287313, 1216130144, 1575780402, 4018429277,
                    3917837745, 3693486850, 3949271944, 596196993, 3549867205,
                    258830323, 2213823033, 772490370, 2760122372, 1774776394,
                    2652871518, 566650946, 4142492826, 1728879713, 2882767088,
                    1783734482, 3629395816, 2517608232, 2874225571, 1861159788,
                    326777828, 3124490320, 2130389656, 2716951837, 967770486,
                    1724537150, 2185432712, 2364442137, 1164943284, 2105845187,
                    998989502, 3765401048, 2244026483, 1075463327, 1455516326,
                    1322494562, 910128902, 469688178, 1117454909, 936433444,
                    3490320968, 3675253459, 1240580251, 122909385, 2157517691,
                    634681816, 4142456567, 3825094682, 3061402683, 2540495037,
                    79693498, 3249098678, 1084186820, 1583128258, 426386531,
                    1761308591, 1047286709, 322548459, 995290223, 1845252383,
                    2603652396, 3431023940, 2942221577, 3202600964, 3727903485,
                    1712269319, 422464435, 3234572375, 1170764815, 3523960633,
                    3117677531, 1434042557, 442511882, 3600875718, 1076654713,
                    1738483198, 4213154764, 2393238008, 3677496056, 1014306527,
                    4251020053, 793779912, 2902807211, 842905082, 4246964064,
                    1395751752, 1040244610, 2656851899, 3396308128, 445077038,
                    3742853595, 3577915638, 679411651, 2892444358, 2354009459,
                    1767581616, 3150600392, 3791627101, 3102740896, 284835224,
                    4246832056, 1258075500, 768725851, 2589189241, 3069724005,
                    3532540348, 1274779536, 3789419226, 2764799539, 1660621633,
                    3471099624, 4011903706, 913787905, 3497959166, 737222580,
                    2514213453, 2928710040, 3937242737, 1804850592, 3499020752,
                    2949064160, 2386320175, 2390070455, 2415321851, 4061277028,
                    2290661394, 2416832540, 1336762016, 1754252060, 3520065937,
                    3014181293, 791618072, 3188594551, 3933548030, 2332172193,
                    3852520463, 3043980520, 413987798, 3465142937, 3030929376,
                    4245938359, 2093235073, 3534596313, 375366246, 2157278981,
                    2479649556, 555357303, 3870105701, 2008414854, 3344188149,
                    4221384143, 3956125452, 2067696032, 3594591187, 2921233993,
                    2428461, 544322398, 577241275, 1471733935, 610547355,
                    4027169054, 1432588573, 1507829418, 2025931657, 3646575487,
                    545086370, 48609733, 2200306550, 1653985193, 298326376,
                    1316178497, 3007786442, 2064951626, 458293330, 2589141269,
                    3591329599, 3164325604, 727753846, 2179363840, 146436021,
                    1461446943, 4069977195, 705550613, 3059967265, 3887724982,
                    4281599278, 3313849956, 1404054877, 2845806497, 146425753,
                    1854211946,
                  ],
                  [
                    1266315497, 3048417604, 3681880366, 3289982499, 290971e4,
                    1235738493, 2632868024, 2414719590, 3970600049, 1771706367,
                    1449415276, 3266420449, 422970021, 1963543593, 2690192192,
                    3826793022, 1062508698, 1531092325, 1804592342, 2583117782,
                    2714934279, 4024971509, 1294809318, 4028980673, 1289560198,
                    2221992742, 1669523910, 35572830, 157838143, 1052438473,
                    1016535060, 1802137761, 1753167236, 1386275462, 3080475397,
                    2857371447, 1040679964, 2145300060, 2390574316, 1461121720,
                    2956646967, 4031777805, 4028374788, 33600511, 2920084762,
                    1018524850, 629373528, 3691585981, 3515945977, 2091462646,
                    2486323059, 586499841, 988145025, 935516892, 3367335476,
                    2599673255, 2839830854, 265290510, 3972581182, 2759138881,
                    3795373465, 1005194799, 847297441, 406762289, 1314163512,
                    1332590856, 1866599683, 4127851711, 750260880, 613907577,
                    1450815602, 3165620655, 3734664991, 3650291728, 3012275730,
                    3704569646, 1427272223, 778793252, 1343938022, 2676280711,
                    2052605720, 1946737175, 3164576444, 3914038668, 3967478842,
                    3682934266, 1661551462, 3294938066, 4011595847, 840292616,
                    3712170807, 616741398, 312560963, 711312465, 1351876610,
                    322626781, 1910503582, 271666773, 2175563734, 1594956187,
                    70604529, 3617834859, 1007753275, 1495573769, 4069517037,
                    2549218298, 2663038764, 504708206, 2263041392, 3941167025,
                    2249088522, 1514023603, 1998579484, 1312622330, 694541497,
                    2582060303, 2151582166, 1382467621, 776784248, 2618340202,
                    3323268794, 2497899128, 2784771155, 503983604, 4076293799,
                    907881277, 423175695, 432175456, 1378068232, 4145222326,
                    3954048622, 3938656102, 3820766613, 2793130115, 2977904593,
                    26017576, 3274890735, 3194772133, 1700274565, 1756076034,
                    4006520079, 3677328699, 720338349, 1533947780, 354530856,
                    688349552, 3973924725, 1637815568, 332179504, 3949051286,
                    53804574, 2852348879, 3044236432, 1282449977, 3583942155,
                    3416972820, 4006381244, 1617046695, 2628476075, 3002303598,
                    1686838959, 431878346, 2686675385, 1700445008, 1080580658,
                    1009431731, 832498133, 3223435511, 2605976345, 2271191193,
                    2516031870, 1648197032, 4164389018, 2548247927, 300782431,
                    375919233, 238389289, 3353747414, 2531188641, 2019080857,
                    1475708069, 455242339, 2609103871, 448939670, 3451063019,
                    1395535956, 2413381860, 1841049896, 1491858159, 885456874,
                    4264095073, 4001119347, 1565136089, 3898914787, 1108368660,
                    540939232, 1173283510, 2745871338, 3681308437, 4207628240,
                    3343053890, 4016749493, 1699691293, 1103962373, 3625875870,
                    2256883143, 3830138730, 1031889488, 3479347698, 1535977030,
                    4236805024, 3251091107, 2132092099, 1774941330, 1199868427,
                    1452454533, 157007616, 2904115357, 342012276, 595725824,
                    1480756522, 206960106, 497939518, 591360097, 863170706,
                    2375253569, 3596610801, 1814182875, 2094937945, 3421402208,
                    1082520231, 3463918190, 2785509508, 435703966, 3908032597,
                    1641649973, 2842273706, 3305899714, 1510255612, 2148256476,
                    2655287854, 3276092548, 4258621189, 236887753, 3681803219,
                    274041037, 1734335097, 3815195456, 3317970021, 1899903192,
                    1026095262, 4050517792, 356393447, 2410691914, 3873677099,
                    3682840055,
                  ],
                  [
                    3913112168, 2491498743, 4132185628, 2489919796, 1091903735,
                    1979897079, 3170134830, 3567386728, 3557303409, 857797738,
                    1136121015, 1342202287, 507115054, 2535736646, 337727348,
                    3213592640, 1301675037, 2528481711, 1895095763, 1721773893,
                    3216771564, 62756741, 2142006736, 835421444, 2531993523,
                    1442658625, 3659876326, 2882144922, 676362277, 1392781812,
                    170690266, 3921047035, 1759253602, 3611846912, 1745797284,
                    664899054, 1329594018, 3901205900, 3045908486, 2062866102,
                    2865634940, 3543621612, 3464012697, 1080764994, 553557557,
                    3656615353, 3996768171, 991055499, 499776247, 1265440854,
                    648242737, 3940784050, 980351604, 3713745714, 1749149687,
                    3396870395, 4211799374, 3640570775, 1161844396, 3125318951,
                    1431517754, 545492359, 4268468663, 3499529547, 1437099964,
                    2702547544, 3433638243, 2581715763, 2787789398, 1060185593,
                    1593081372, 2418618748, 4260947970, 69676912, 2159744348,
                    86519011, 2512459080, 3838209314, 1220612927, 3339683548,
                    133810670, 1090789135, 1078426020, 1569222167, 845107691,
                    3583754449, 4072456591, 1091646820, 628848692, 1613405280,
                    3757631651, 526609435, 236106946, 48312990, 2942717905,
                    3402727701, 1797494240, 859738849, 992217954, 4005476642,
                    2243076622, 3870952857, 3732016268, 765654824, 3490871365,
                    2511836413, 1685915746, 3888969200, 1414112111, 2273134842,
                    3281911079, 4080962846, 172450625, 2569994100, 980381355,
                    4109958455, 2819808352, 2716589560, 2568741196, 3681446669,
                    3329971472, 1835478071, 660984891, 3704678404, 4045999559,
                    3422617507, 3040415634, 1762651403, 1719377915, 3470491036,
                    2693910283, 3642056355, 3138596744, 1364962596, 2073328063,
                    1983633131, 926494387, 3423689081, 2150032023, 4096667949,
                    1749200295, 3328846651, 309677260, 2016342300, 1779581495,
                    3079819751, 111262694, 1274766160, 443224088, 298511866,
                    1025883608, 3806446537, 1145181785, 168956806, 3641502830,
                    3584813610, 1689216846, 3666258015, 3200248200, 1692713982,
                    2646376535, 4042768518, 1618508792, 1610833997, 3523052358,
                    4130873264, 2001055236, 3610705100, 2202168115, 4028541809,
                    2961195399, 1006657119, 2006996926, 3186142756, 1430667929,
                    3210227297, 1314452623, 4074634658, 4101304120, 2273951170,
                    1399257539, 3367210612, 3027628629, 1190975929, 2062231137,
                    2333990788, 2221543033, 2438960610, 1181637006, 548689776,
                    2362791313, 3372408396, 3104550113, 3145860560, 296247880,
                    1970579870, 3078560182, 3769228297, 1714227617, 3291629107,
                    3898220290, 166772364, 1251581989, 493813264, 448347421,
                    195405023, 2709975567, 677966185, 3703036547, 1463355134,
                    2715995803, 1338867538, 1343315457, 2802222074, 2684532164,
                    233230375, 2599980071, 2000651841, 3277868038, 1638401717,
                    4028070440, 3237316320, 6314154, 819756386, 300326615,
                    590932579, 1405279636, 3267499572, 3150704214, 2428286686,
                    3959192993, 3461946742, 1862657033, 1266418056, 963775037,
                    2089974820, 2263052895, 1917689273, 448879540, 3550394620,
                    3981727096, 150775221, 3627908307, 1303187396, 508620638,
                    2975983352, 2726630617, 1817252668, 1876281319, 1457606340,
                    908771278, 3720792119, 3617206836, 2455994898, 1729034894,
                    1080033504,
                  ],
                  [
                    976866871, 3556439503, 2881648439, 1522871579, 1555064734,
                    1336096578, 3548522304, 2579274686, 3574697629, 3205460757,
                    3593280638, 3338716283, 3079412587, 564236357, 2993598910,
                    1781952180, 1464380207, 3163844217, 3332601554, 1699332808,
                    1393555694, 1183702653, 3581086237, 1288719814, 691649499,
                    2847557200, 2895455976, 3193889540, 2717570544, 1781354906,
                    1676643554, 2592534050, 3230253752, 1126444790, 2770207658,
                    2633158820, 2210423226, 2615765581, 2414155088, 3127139286,
                    673620729, 2805611233, 1269405062, 4015350505, 3341807571,
                    4149409754, 1057255273, 2012875353, 2162469141, 2276492801,
                    2601117357, 993977747, 3918593370, 2654263191, 753973209,
                    36408145, 2530585658, 25011837, 3520020182, 2088578344,
                    530523599, 2918365339, 1524020338, 1518925132, 3760827505,
                    3759777254, 1202760957, 3985898139, 3906192525, 674977740,
                    4174734889, 2031300136, 2019492241, 3983892565, 4153806404,
                    3822280332, 352677332, 2297720250, 60907813, 90501309,
                    3286998549, 1016092578, 2535922412, 2839152426, 457141659,
                    509813237, 4120667899, 652014361, 1966332200, 2975202805,
                    55981186, 2327461051, 676427537, 3255491064, 2882294119,
                    3433927263, 1307055953, 942726286, 933058658, 2468411793,
                    3933900994, 4215176142, 1361170020, 2001714738, 2830558078,
                    3274259782, 1222529897, 1679025792, 2729314320, 3714953764,
                    1770335741, 151462246, 3013232138, 1682292957, 1483529935,
                    471910574, 1539241949, 458788160, 3436315007, 1807016891,
                    3718408830, 978976581, 1043663428, 3165965781, 1927990952,
                    4200891579, 2372276910, 3208408903, 3533431907, 1412390302,
                    2931980059, 4132332400, 1947078029, 3881505623, 4168226417,
                    2941484381, 1077988104, 1320477388, 886195818, 18198404,
                    3786409e3, 2509781533, 112762804, 3463356488, 1866414978,
                    891333506, 18488651, 661792760, 1628790961, 3885187036,
                    3141171499, 876946877, 2693282273, 1372485963, 791857591,
                    2686433993, 3759982718, 3167212022, 3472953795, 2716379847,
                    445679433, 3561995674, 3504004811, 3574258232, 54117162,
                    3331405415, 2381918588, 3769707343, 4154350007, 1140177722,
                    4074052095, 668550556, 3214352940, 367459370, 261225585,
                    2610173221, 4209349473, 3468074219, 3265815641, 314222801,
                    3066103646, 3808782860, 282218597, 3406013506, 3773591054,
                    379116347, 1285071038, 846784868, 2669647154, 3771962079,
                    3550491691, 2305946142, 453669953, 1268987020, 3317592352,
                    3279303384, 3744833421, 2610507566, 3859509063, 266596637,
                    3847019092, 517658769, 3462560207, 3443424879, 370717030,
                    4247526661, 2224018117, 4143653529, 4112773975, 2788324899,
                    2477274417, 1456262402, 2901442914, 1517677493, 1846949527,
                    2295493580, 3734397586, 2176403920, 1280348187, 1908823572,
                    3871786941, 846861322, 1172426758, 3287448474, 3383383037,
                    1655181056, 3139813346, 901632758, 1897031941, 2986607138,
                    3066810236, 3447102507, 1393639104, 373351379, 950779232,
                    625454576, 3124240540, 4148612726, 2007998917, 544563296,
                    2244738638, 2330496472, 2058025392, 1291430526, 424198748,
                    50039436, 29584100, 3605783033, 2429876329, 2791104160,
                    1057563949, 3255363231, 3075367218, 3463963227, 1469046755,
                    985887462,
                  ],
                ];
              var d = { pbox: [], sbox: [] };
              function g(v, E) {
                let p = (E >> 24) & 255,
                  x = (E >> 16) & 255,
                  b = (E >> 8) & 255,
                  D = E & 255,
                  B = v.sbox[0][p] + v.sbox[1][x];
                return (B = B ^ v.sbox[2][b]), (B = B + v.sbox[3][D]), B;
              }
              function u(v, E, p) {
                let x = E,
                  b = p,
                  D;
                for (let B = 0; B < o; ++B)
                  (x = x ^ v.pbox[B]),
                    (b = g(v, x) ^ b),
                    (D = x),
                    (x = b),
                    (b = D);
                return (
                  (D = x),
                  (x = b),
                  (b = D),
                  (b = b ^ v.pbox[o]),
                  (x = x ^ v.pbox[o + 1]),
                  { left: x, right: b }
                );
              }
              function m(v, E, p) {
                let x = E,
                  b = p,
                  D;
                for (let B = o + 1; B > 1; --B)
                  (x = x ^ v.pbox[B]),
                    (b = g(v, x) ^ b),
                    (D = x),
                    (x = b),
                    (b = D);
                return (
                  (D = x),
                  (x = b),
                  (b = D),
                  (b = b ^ v.pbox[1]),
                  (x = x ^ v.pbox[0]),
                  { left: x, right: b }
                );
              }
              function f(v, E, p) {
                for (let S = 0; S < 4; S++) {
                  v.sbox[S] = [];
                  for (let k = 0; k < 256; k++) v.sbox[S][k] = l[S][k];
                }
                let x = 0;
                for (let S = 0; S < o + 2; S++)
                  (v.pbox[S] = c[S] ^ E[x]), x++, x >= p && (x = 0);
                let b = 0,
                  D = 0,
                  B = 0;
                for (let S = 0; S < o + 2; S += 2)
                  (B = u(v, b, D)),
                    (b = B.left),
                    (D = B.right),
                    (v.pbox[S] = b),
                    (v.pbox[S + 1] = D);
                for (let S = 0; S < 4; S++)
                  for (let k = 0; k < 256; k += 2)
                    (B = u(v, b, D)),
                      (b = B.left),
                      (D = B.right),
                      (v.sbox[S][k] = b),
                      (v.sbox[S][k + 1] = D);
                return !0;
              }
              var h = (s.Blowfish = n.extend({
                _doReset: function () {
                  if (this._keyPriorReset !== this._key) {
                    var v = (this._keyPriorReset = this._key),
                      E = v.words,
                      p = v.sigBytes / 4;
                    f(d, E, p);
                  }
                },
                encryptBlock: function (v, E) {
                  var p = u(d, v[E], v[E + 1]);
                  (v[E] = p.left), (v[E + 1] = p.right);
                },
                decryptBlock: function (v, E) {
                  var p = m(d, v[E], v[E + 1]);
                  (v[E] = p.left), (v[E + 1] = p.right);
                },
                blockSize: 64 / 32,
                keySize: 128 / 32,
                ivSize: 64 / 32,
              }));
              i.Blowfish = n._createHelper(h);
            })(),
            a.Blowfish
          );
        });
      })(ca)),
    ca.exports
  );
}
var Kn = kt.exports,
  wi;
function Yn() {
  return (
    wi ||
      ((wi = 1),
      (function (t, e) {
        (function (a, i, r) {
          t.exports = i(
            Y(),
            fa(),
            Gr(),
            Wr(),
            Ve(),
            Yr(),
            Qe(),
            Wi(),
            Aa(),
            Jr(),
            zi(),
            an(),
            nn(),
            on(),
            Ma(),
            dn(),
            He(),
            se(),
            fn(),
            gn(),
            vn(),
            bn(),
            Cn(),
            Bn(),
            An(),
            kn(),
            Ln(),
            _n(),
            In(),
            qn(),
            $n(),
            On(),
            Un(),
            jn(),
            zn()
          );
        })(Kn, function (a) {
          return a;
        });
      })(kt)),
    kt.exports
  );
}
var Li;
function Vn() {
  if (Li) return _e;
  Li = 1;
  var t =
    (_e && _e.__assign) ||
    function () {
      return (
        (t =
          Object.assign ||
          function (i) {
            for (var r, n = 1, s = arguments.length; n < s; n++) {
              r = arguments[n];
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (i[o] = r[o]);
            }
            return i;
          }),
        t.apply(this, arguments)
      );
    };
  Object.defineProperty(_e, "__esModule", { value: !0 }),
    (_e.SimpleCrypto = void 0);
  var e = Yn(),
    a = (function () {
      function i(r) {
        if (r === void 0)
          throw new Error(
            "SimpleCrypto object MUST BE initialised with a SECRET KEY."
          );
        (this._dataBuffer = ""),
          (this._encoder = e.enc.Utf8),
          (this._secret = (0, e.SHA3)(typeof r == "string" ? r : r.toString())),
          (this._keySize = 256),
          (this._iterations = 100);
      }
      return (
        (i.sanitiseData = function (r) {
          if (r == null)
            throw new Error("There is no data provided. Process halted.");
          var n =
            typeof r == "object"
              ? JSON.stringify(r)
              : typeof r == "string" ||
                typeof r == "number" ||
                typeof r == "boolean"
              ? r.toString()
              : null;
          if (n === null)
            throw new Error(
              "Invalid data type. Only object, string, number and boolean data types are allowed."
            );
          return n;
        }),
        (i.transform = function (r) {
          if (r.toLowerCase() === "true" || r.toLowerCase() === "false")
            return r.toLowerCase() === "true";
          try {
            return JSON.parse(r);
          } catch {
            return /^-?[\d.]+(?:e-?\d+)?$/.test(r) && !isNaN(parseFloat(r))
              ? parseFloat(r)
              : r;
          }
        }),
        Object.defineProperty(i, "encoders", {
          get: function () {
            return t({ Default: e.enc.Utf8 }, e.enc);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (i.generateRandom = function (r, n) {
          r === void 0 && (r = 128), n === void 0 && (n = !1);
          var s = e.lib.WordArray.random(r / 8);
          return n ? s : s.toString();
        }),
        (i.generateRandomString = function (r) {
          return r === void 0 && (r = 128), i.generateRandom(r, !1);
        }),
        (i.generateRandomWordArray = function (r) {
          return r === void 0 && (r = 128), i.generateRandom(r, !0);
        }),
        (i.prototype._decrypt = function () {
          if (this._dataBuffer.length <= 64)
            throw new Error("Invalid cipher text. Decryption halted.");
          var r = e.enc.Hex.parse(this._dataBuffer.substring(0, 32)),
            n = e.enc.Hex.parse(this._dataBuffer.substring(32, 64)),
            s = this._dataBuffer.substring(64, this._dataBuffer.length - 64),
            o = (0, e.PBKDF2)(this._secret.toString(), r, {
              keySize: this._keySize / 32,
              iterations: this._iterations,
            }),
            c = this._dataBuffer.substring(this._dataBuffer.length - 64),
            l = this._dataBuffer.substring(0, this._dataBuffer.length - 64);
          if (c != (0, e.HmacSHA256)(l, o).toString())
            throw new Error(
              "Invalid encrypted text received. Decryption halted."
            );
          var d = e.AES.decrypt(s, o, {
            iv: n,
            padding: e.pad.Pkcs7,
            mode: e.mode.CBC,
          });
          return i.transform(d.toString(i.encoders.Default));
        }),
        (i.prototype._encrypt = function () {
          var r = i.generateRandom(128, !0),
            n = i.generateRandom(128, !0),
            s = (0, e.PBKDF2)(this._secret.toString(), r, {
              keySize: this._keySize / 32,
              iterations: this._iterations,
            }),
            o = e.AES.encrypt(this._dataBuffer, s, {
              iv: n,
              padding: e.pad.Pkcs7,
              mode: e.mode.CBC,
            }),
            c = r.toString() + n.toString() + o.toString(),
            l = (0, e.HmacSHA256)(c, s).toString();
          return c + l;
        }),
        (i.prototype.decrypt = function (r, n, s) {
          var o = this,
            c = function (l) {
              typeof l != "boolean" && o.setEncoder(l);
            };
          try {
            return (
              r !== void 0 && this.update(r),
              n !== void 0 && c(n),
              s !== void 0 && c(s),
              this._decrypt()
            );
          } catch (l) {
            throw l;
          }
        }),
        (i.prototype.encrypt = function (r) {
          try {
            return r !== void 0 && this.update(r), this._encrypt();
          } catch (n) {
            throw n;
          }
        }),
        (i.prototype.decryptObject = function (r) {
          return this.update(r).decrypt();
        }),
        (i.prototype.encryptObject = function (r) {
          return this.update(r).encrypt();
        }),
        (i.prototype.append = function (r) {
          try {
            return (
              (this._dataBuffer = this._dataBuffer + i.sanitiseData(r)), this
            );
          } catch (n) {
            throw n;
          }
        }),
        (i.prototype.update = function (r) {
          try {
            return (this._dataBuffer = i.sanitiseData(r)), this;
          } catch (n) {
            throw n;
          }
        }),
        (i.prototype.setEncoder = function (r) {
          return (this._encoder = r), this;
        }),
        (i.prototype.setSecret = function (r) {
          return (
            (this._secret = (0, e.SHA3)(
              typeof r == "string" ? r : r.toString()
            )),
            this
          );
        }),
        i
      );
    })();
  return (_e.SimpleCrypto = a), (_e.default = a), _e;
}
var Qn = Vn();
const Xn = Ir(Qn),
  ka = new Xn("secret"),
  nt = (t, e) => {
    t &&
      Object.keys(e).forEach((a) => {
        t.hasOwnProperty(a) &&
          (typeof e[a] == "object" &&
          !Array.isArray(e[a]) &&
          e[a] !== null &&
          t[a] !== null
            ? (e[a] = { ...e[a], ...t[a] })
            : (e[a] = t[a]));
      });
  };
function Fi() {
  const e = document.createElement("div");
  (e.style.position = "fixed"),
    (e.style.top = "0"),
    (e.style.left = "0"),
    (e.style.backgroundColor = "black"),
    (e.style.color = "white"),
    (e.style.border = "1px solid black"),
    (e.style.padding = "10px"),
    (e.style.maxHeight = "100%"),
    (e.style.maxWidth = "350px"),
    (e.style.overflowY = "scroll"),
    (e.style.zIndex = "9999"),
    (e.style.fontFamily = "monospace"),
    (e.style.fontSize = "12px"),
    e.classList.add("debug-ui"),
    document.body.appendChild(e);
  const a = new Map(JSON.parse(localStorage.getItem("debugUIState") || "[]"));
  function i() {
    localStorage.setItem("debugUIState", JSON.stringify([...a]));
  }
  function r(s, o, c = "", l = 0) {
    if (typeof s != "object" || s === null) {
      const d = document.createElement("span");
      (d.style.marginLeft = `${l * 10}px`),
        (d.textContent = JSON.stringify(s)),
        o.appendChild(d);
      return;
    }
    for (const d in s)
      if (Object.prototype.hasOwnProperty.call(s, d)) {
        const g = s[d],
          u = `${c}.${d}`;
        if (s instanceof Map) {
          const m = {};
          s.forEach((f, h) => {
            m[h] = f;
          }),
            r(m, o, c, l);
          return;
        }
        if (typeof s != "object" || s === null) {
          const m = document.createElement("span");
          (m.style.marginLeft = `${l * 10}px`),
            (m.textContent = JSON.stringify(s)),
            o.appendChild(m);
          return;
        }
        if (typeof g == "object" && g !== null) {
          const m = document.createElement("details");
          (m.style.marginLeft = `${l * 10}px`),
            a.has(u) ? (m.open = a.get(u)) : (m.open = !0),
            m.addEventListener("toggle", () => {
              a.set(u, m.open), i();
            });
          const f = document.createElement("summary");
          (f.textContent = d),
            (f.style.cursor = "pointer"),
            (f.style.fontWeight = "bold"),
            (f.style.color = "orange"),
            Array.isArray(g) &&
              ((f.textContent = d + "[]"), (f.style.color = "yellow")),
            l === 0 &&
              ((f.style.fontSize = "18px"), (f.style.color = "#00ff00")),
            m.appendChild(f),
            r(g, m, u, l + 1),
            o.appendChild(m);
        } else {
          const m = document.createElement("span");
          (m.style.marginLeft = `${(l + 1) * 10}px`),
            (m.textContent = `${d}: ${JSON.stringify(g)}`),
            o.appendChild(m),
            o.appendChild(document.createElement("br"));
        }
      }
  }
  function n() {
    e.innerHTML = "";
    for (let s = 0; s < localStorage.length; s++) {
      const o = localStorage.key(s);
      let c;
      if (o === "debugUIState") continue;
      try {
        c = JSON.parse(localStorage.getItem(o));
      } catch {
        c = localStorage.getItem(o);
      }
      const l = o,
        d = document.createElement("details");
      a.has(l) ? (d.open = a.get(l)) : (d.open = !0),
        d.addEventListener("toggle", () => {
          a.set(l, d.open);
        });
      const g = document.createElement("summary");
      (g.textContent = o), d.appendChild(g), r(c, d, l, 0), e.appendChild(d);
    }
  }
  n(), setInterval(n, 1e3), setInterval(A.saveGame, 1e3);
}
function _i() {
  const t = document.createElement("div");
  (t.className = "modify-panel modify-ui"), document.body.appendChild(t);
  const e = document.createElement("div");
  (e.innerHTML = "<h3>Hero</h3>"), t.appendChild(e);
  const a = document.createElement("button");
  (a.textContent = "Give 100 Attributes"),
    a.addEventListener("click", () => {
      (y.statPoints += 100),
        y.recalculateFromAttributes(),
        j("Gave 100 attribute points!");
    }),
    e.appendChild(a);
  const i = document.createElement("button");
  (i.textContent = "Give Experience for Level Up"),
    i.addEventListener("click", () => {
      const w = y.getExpToNextLevel() - y.exp;
      y.gainExp(w), j(`Gave ${w} experience to level up!`);
    }),
    e.appendChild(i);
  const r = document.createElement("button");
  (r.textContent = "Give Experience for 10 Level Ups"),
    r.addEventListener("click", () => {
      for (let w = 0; w < 10; w++) {
        const C = y.getExpToNextLevel() - y.exp;
        y.gainExp(C);
      }
      j("Gave experience for 10 level ups!");
    }),
    e.appendChild(r);
  const n = document.createElement("button");
  (n.textContent = "Give Experience for 100 Level Ups"),
    n.addEventListener("click", () => {
      for (let w = 0; w < 100; w++) {
        const C = y.getExpToNextLevel() - y.exp;
        y.gainExp(C);
      }
      j("Gave experience for 100 level ups!");
    }),
    e.appendChild(n);
  const s = document.createElement("button");
  (s.textContent = "Add Gold"),
    s.addEventListener("click", () => {
      y.gainGold(1e8), ie(), j("Added 100000000 gold!");
    }),
    e.appendChild(s);
  const o = document.createElement("button");
  (o.textContent = "Add Crystals"),
    o.addEventListener("click", () => {
      y.gainCrystals(1e3), ie(), j("Added 1000 crystals!");
    }),
    e.appendChild(o);
  const c = document.createElement("button");
  (c.textContent = "Add Souls"),
    c.addEventListener("click", () => {
      y.gainSouls(1e3), ie(), j("Added 1000 souls!");
    }),
    e.appendChild(c);
  const l = document.createElement("div");
  (l.innerHTML = "<h3>Inventory</h3>"), t.appendChild(l);
  const d = document.createElement("div");
  (d.style.display = "flex"),
    (d.style.alignItems = "center"),
    (d.style.gap = "8px");
  const g = document.createElement("select");
  (g.id = "item-type-select"),
    Object.keys(Mt).forEach((w) => {
      const C = document.createElement("option");
      (C.value = Mt[w]), (C.textContent = Mt[w]), g.appendChild(C);
    }),
    d.appendChild(g);
  const u = document.createElement("input");
  (u.type = "number"),
    (u.min = "1"),
    (u.max = "100"),
    (u.value = "1"),
    (u.style.width = "50px"),
    (u.title = "Item Level"),
    d.appendChild(u);
  const m = document.createElement("select");
  (m.id = "item-rarity-select"),
    Object.keys(re).forEach((w) => {
      const C = document.createElement("option");
      (C.value = re[w].name), (C.textContent = re[w].name), m.appendChild(C);
    }),
    d.appendChild(m);
  const f = document.createElement("button");
  (f.textContent = "Add Random Item"),
    f.addEventListener("click", () => {
      const w = g.value,
        C = parseInt(u.value, 10) || 1,
        M = m.value,
        L = O.createItem(w, C, M);
      O.addItemToInventory(L), j(`Added ${w} (level ${C}, ${M}) to inventory`);
    }),
    d.appendChild(f),
    l.appendChild(d);
  const h = document.createElement("button");
  (h.textContent = "Add Random Material"),
    h.addEventListener("click", () => {
      const w = O.getRandomMaterial();
      O.addMaterial({ id: w.id, icon: w.icon, qty: 1 }),
        j(`Added 1 ${w.name} to materials`);
    }),
    l.appendChild(h);
  const v = document.createElement("div");
  v.style.marginTop = "8px";
  const E = document.createElement("select");
  (E.id = "material-id-select"),
    Object.values(Ke).forEach((w) => {
      const C = document.createElement("option");
      (C.value = w.id),
        (C.textContent = `${w.icon} ${w.name}`),
        E.appendChild(C);
    });
  const p = document.createElement("input");
  (p.id = "material-qty-input"),
    (p.type = "number"),
    (p.min = "1"),
    (p.value = "1"),
    (p.style.width = "50px");
  const x = document.createElement("button");
  (x.id = "add-material-by-id-btn"),
    (x.textContent = "Add Material"),
    v.appendChild(E),
    v.appendChild(p),
    v.appendChild(x),
    l.appendChild(v),
    (x.onclick = () => {
      const w = E.value,
        C = parseInt(p.value, 10) || 1,
        M = Object.values(Ke).find((L) => L.id === w);
      M
        ? (O.addMaterial({ id: M.id, icon: M.icon, qty: C }),
          j(`Added ${C} ${M.name}${C > 1 ? "s" : ""} to materials`))
        : j("Invalid material ID", "error");
    });
  const b = document.createElement("div");
  (b.innerHTML = "<h3>Skill Tree</h3>"), t.appendChild(b);
  const D = document.createElement("button");
  (D.textContent = "Add 100 Skill Points"),
    D.addEventListener("click", () => {
      P.addSkillPoints(100);
    }),
    b.appendChild(D);
  const B = document.createElement("div");
  (B.innerHTML = "<h3>Training</h3>"), t.appendChild(B);
  const S = document.createElement("button");
  (S.textContent = "Reset Training"),
    S.addEventListener("click", () => {
      Ae.reset(),
        Ae.updateTrainingUI("gold-upgrades"),
        Ae.updateTrainingUI("crystal-upgrades"),
        y.recalculateFromAttributes(),
        fe();
    }),
    B.appendChild(S);
  const k = document.createElement("button");
  (k.textContent = "Reset All Progress"),
    k.addEventListener("click", () => {
      A.resetAllProgress();
    }),
    t.appendChild(k);
}
const R = [10, 25, 60, 150, 400, 750, 1200, 2e3, 3e3, 5e3, 1e4],
  $ = 1 / 0,
  ua = 10;
class Zn {
  constructor(e = null) {
    (this.skillPoints = 0),
      (this.selectedPath = null),
      (this.skills = {}),
      (this.autoCastSettings = {}),
      (this.displaySettings = {}),
      nt(e, this),
      Object.entries(this.skills).forEach(([a, i]) => {
        this.skills[a] = {};
        const r = this.getSkill(a);
        this.skills[a] = { ...r, ...i };
      }),
      (this.activeBuffs = new Map());
  }
  getPathBonuses() {
    var e, a;
    return (
      ((a = gt[(e = this.selectedPath) == null ? void 0 : e.name]) == null
        ? void 0
        : a.baseStats()) || {}
    );
  }
  getAllSkillTreeBonuses() {
    const e = this.getPathBonuses(),
      a = this.calculatePassiveBonuses(),
      i = this.getActiveBuffEffects(),
      r = {};
    return (
      Object.entries(e).forEach(([n, s]) => {
        r[n] = (r[n] || 0) + s;
      }),
      Object.entries(a).forEach(([n, s]) => {
        r[n] = (r[n] || 0) + s;
      }),
      Object.entries(i).forEach(([n, s]) => {
        r[n] = (r[n] || 0) + s;
      }),
      r
    );
  }
  calculatePassiveBonuses() {
    const e = {};
    return (
      Object.entries(this.skills).forEach(([a, i]) => {
        const r = this.getSkill(a);
        if (!r) {
          console.error("contact support. skill not found: ", a);
          return;
        }
        if (r.type() === "passive") {
          const n = this.getSkillEffect(a, i.level);
          Object.entries(n).forEach(([s, o]) => {
            e[s] = (e[s] || 0) + o;
          });
        }
      }),
      e
    );
  }
  isSkillActive(e) {
    var i;
    const a = this.getSkill(e);
    return (
      a &&
      (a.type() === "toggle" || a.type() === "buff") &&
      ((i = this.skills[e]) == null ? void 0 : i.active)
    );
  }
  addSkillPoints(e) {
    (this.skillPoints += e), Re();
  }
  selectPath(e) {
    return this.selectedPath || !gt[e] || !gt[e].enabled
      ? !1
      : y.level < ua
      ? (j(`Reach level ${ua} to select a class path!`, "warning"), !1)
      : ((this.selectedPath = { name: e }),
        y.recalculateFromAttributes(),
        A.saveGame(),
        typeof gtag == "function" &&
          gtag("event", "class_path_chosen", {
            event_category: "SkillTree",
            event_label: e,
          }),
        !0);
  }
  getSelectedPath() {
    var e;
    return { ...gt[(e = this.selectedPath) == null ? void 0 : e.name] };
  }
  getSkillsForPath(e) {
    return da[e] || [];
  }
  canUnlockSkill(e) {
    var n;
    if (!this.selectedPath) return !1;
    const a = this.getSkill(e);
    if (!a) return !1;
    const i = ((n = this.skills[e]) == null ? void 0 : n.level) || 0,
      r = 1 + Math.floor(i / 50);
    return (
      this.skillPoints >= r &&
      i < (a.maxLevel() || $) &&
      y.level >= a.requiredLevel()
    );
  }
  arePrerequisitesMet(e) {
    return e.row === 1
      ? !0
      : e.prerequisites.some((a) => {
          var r;
          return (((r = this.skills[a]) == null ? void 0 : r.level) || 0) > 0;
        });
  }
  unlockSkill(e) {
    var o, c;
    if (!this.canUnlockSkill(e)) return !1;
    const a = this.getSkill(e),
      i = ((o = this.skills[e]) == null ? void 0 : o.level) || 0,
      r = 1 + Math.floor(i / 50),
      n = i + 1,
      s = ((c = this.skills[e]) == null ? void 0 : c.active) || !1;
    return (
      (this.skills[e] = {
        ...a,
        level: n,
        active: a.type() === "toggle" ? s : !1,
        slot:
          a.type() !== "passive" ? Object.keys(this.skills).length + 1 : null,
      }),
      (this.skillPoints -= r),
      y.recalculateFromAttributes(),
      a.type() !== "passive" && De(),
      Re(),
      Ye(),
      !0
    );
  }
  toggleSkill(e) {
    if (!this.skills[e]) return;
    switch (this.getSkill(e).type()) {
      case "buff":
        this.activateSkill(e);
        break;
      case "toggle":
        (this.skills[e].active = !this.skills[e].active),
          y.recalculateFromAttributes();
        break;
      case "instant":
        this.useInstantSkill(e);
        break;
    }
    De();
  }
  getSkill(e) {
    var i;
    return {
      ...da[(i = this.selectedPath) == null ? void 0 : i.name][e],
      ...this.skills[e],
    };
  }
  getSkillEffect(e, a = 0) {
    var i, r;
    return (
      this.getSkill(e),
      (r = this.getSkill(e)) == null
        ? void 0
        : r.effect(
            a || ((i = this.getSkill(e)) == null ? void 0 : i.level) || 0
          )
    );
  }
  getSkillManaCost(e, a = 0) {
    let i = a || (e == null ? void 0 : e.level) || 0;
    return e != null && e.manaCost
      ? Math.floor(
          e.manaCost(i) -
            (e.manaCost(i) * y.stats.manaCostReductionPercent) / 100
        )
      : 0;
  }
  getSkillCooldown(e, a = 0) {
    let i = a || (e == null ? void 0 : e.level) || 0;
    return e != null && e.cooldown
      ? Math.floor(
          e.cooldown(i) -
            (e.cooldown(i) * y.stats.cooldownReductionPercent) / 100
        )
      : 0;
  }
  getSkillDuration(e, a = 0) {
    let i = a || (e == null ? void 0 : e.level) || 0;
    return e != null && e.duration
      ? Math.floor(
          e.duration(i) + (e.duration(i) * y.stats.buffDurationPercent) / 100
        )
      : 0;
  }
  useInstantSkill(e) {
    if (!A.gameStarted) return !1;
    const a = this.getSkill(e),
      i = this.getSkillEffect(e);
    if (y.stats.currentMana < this.getSkillManaCost(a)) return Ti(), !1;
    if (a.cooldownEndTime && a.cooldownEndTime > Date.now()) return !1;
    y.stats.currentMana -= this.getSkillManaCost(a);
    const r =
        i.damage ||
        0 + i.fireDamage ||
        0 + i.coldDamage ||
        0 + i.airDamage ||
        0 + i.earthDamage ||
        0,
      { damage: n, isCritical: s } = y.calculateTotalDamage(r);
    if (i.lifeSteal) {
      const o = n * (i.lifeSteal / 100);
      A.healPlayer(o);
    }
    return (
      i.lifePerHit && A.healPlayer(i.lifePerHit),
      i.life && A.healPlayer(i.life),
      i.manaPerHit && A.restoreMana(i.manaPerHit),
      r !== 0 && A.damageEnemy(n),
      (this.skills[a.id].cooldownEndTime =
        Date.now() + this.getSkillCooldown(a)),
      fe(),
      Pe(n, !1, s, !1, !1),
      !0
    );
  }
  applyToggleEffects() {
    let e = {};
    return (
      Object.entries(this.skills).forEach(([a, i]) => {
        const r = this.getSkill(a);
        r.type() === "toggle" &&
          i.active &&
          y.stats.currentMana >= this.getSkillManaCost(r) &&
          ((y.stats.currentMana -= this.getSkillManaCost(r)),
          (e = { ...e, ...this.getSkillEffect(a, i.level) }));
      }),
      De(),
      e
    );
  }
  activateSkill(e) {
    if (!A.gameStarted) return !1;
    const a = this.getSkill(e);
    if (a.type() !== "buff") return !1;
    if (y.stats.currentMana < this.getSkillManaCost(a)) return Ti(), !1;
    if (a.cooldownEndTime && a.cooldownEndTime > Date.now()) return !1;
    y.stats.currentMana -= this.getSkillManaCost(a);
    const i = Date.now() + this.getSkillDuration(a),
      r = Date.now() + this.getSkillCooldown(a);
    return (
      this.activeBuffs.set(e, {
        endTime: i,
        effects: this.getSkillEffect(e, a.level),
      }),
      (this.skills[e].cooldownEndTime = r),
      (this.skills[e].active = !0),
      y.recalculateFromAttributes(),
      De(),
      !0
    );
  }
  deactivateSkill(e) {
    this.activeBuffs.has(e) &&
      (this.activeBuffs.delete(e),
      this.skills[e] && (this.skills[e].active = !1),
      y.recalculateFromAttributes(),
      De());
  }
  getActiveBuffEffects() {
    const e = {};
    return (
      this.activeBuffs.forEach((a, i) => {
        if (a.endTime <= Date.now()) {
          this.deactivateSkill(i);
          return;
        }
        Object.entries(a.effects).forEach(([r, n]) => {
          e[r] = (e[r] || 0) + n;
        });
      }),
      e
    );
  }
  stopAllBuffs() {
    this.activeBuffs.clear(),
      Object.values(this.skills).forEach((e) => {
        e.cooldownEndTime && (e.cooldownEndTime = 0),
          e.type() !== "toggle" && (e.active = !1);
      }),
      y.recalculateFromAttributes(),
      De();
  }
  resetSkillTree() {
    const e = document.getElementById("skill-tree-container");
    e && (e.innerHTML = ""),
      (this.skillPoints = y.level - 1 + y.permaStats.skillPoints),
      (this.selectedPath = null),
      (this.skills = {}),
      (this.autoCastSettings = {}),
      (this.displaySettings = {}),
      this.activeBuffs.clear(),
      y.recalculateFromAttributes(),
      De(),
      Re(),
      A.saveGame(),
      typeof gtag == "function" &&
        gtag("event", "skill_tree_reset", { event_category: "SkillTree" });
  }
  setAutoCast(e, a) {
    (this.autoCastSettings[e] = a), A.saveGame();
  }
  isAutoCastEnabled(e) {
    return !!this.autoCastSettings[e];
  }
  setDisplay(e, a) {
    (this.displaySettings[e] = a), A.saveGame();
  }
  isDisplayEnabled(e) {
    return e in this.displaySettings ? !!this.displaySettings[e] : !0;
  }
  autoCastEligibleSkills() {
    A.gameStarted &&
      Object.entries(this.skills).forEach(([e, a]) => {
        var r, n;
        const i =
          (n = da[(r = this.selectedPath) == null ? void 0 : r.name]) == null
            ? void 0
            : n[e];
        !i ||
          !this.isAutoCastEnabled(e) ||
          (this.isDisplayEnabled(e) &&
            (i.type() === "instant"
              ? (!a.cooldownEndTime || a.cooldownEndTime <= Date.now()) &&
                y.stats.currentMana >= this.getSkillManaCost(i) &&
                this.useInstantSkill(e)
              : i.type() === "buff" &&
                !a.active &&
                (!a.cooldownEndTime || a.cooldownEndTime <= Date.now()) &&
                y.stats.currentMana >= this.getSkillManaCost(i) &&
                this.activateSkill(e)));
      });
  }
}
const Jn = {
    bash: {
      id: "bash",
      name: () => "Bash",
      type: () => "toggle",
      manaCost: (t) => 2 + t * 0.3,
      requiredLevel: () => R[0],
      icon: () => "war-axe",
      description: () =>
        "While active, increases damage but costs mana per attack",
      maxLevel: () => $,
      effect: (t) => ({ damage: t * 5 }),
    },
    toughness: {
      id: "toughness",
      name: () => "Toughness",
      type: () => "passive",
      requiredLevel: () => R[0],
      icon: () => "shield",
      description: () => "Permanently increases armor",
      maxLevel: () => $,
      effect: (t) => ({ armor: t * 20 }),
    },
    powerStrike: {
      id: "powerStrike",
      name: () => "Power Strike",
      type: () => "instant",
      manaCost: (t) => 4 + t * 0.3,
      cooldown: (t) => 2500,
      requiredLevel: () => R[1],
      icon: () => "sword",
      description: () => "A powerful strike that deals increased damage",
      maxLevel: () => $,
      effect: (t) => ({ damage: t * 20 }),
    },
    ironWill: {
      id: "ironWill",
      name: () => "Iron Will",
      type: () => "passive",
      requiredLevel: () => R[1],
      icon: () => "helmet",
      description: () => "Increases resistance to damage",
      maxLevel: () => $,
      effect: (t) => ({ vitality: t * 4, lifeRegen: t * 0.6 }),
    },
    battleCry: {
      id: "battleCry",
      name: () => "Battle Cry",
      type: () => "buff",
      manaCost: (t) => 20 + t * 1,
      cooldown: (t) => 6e4,
      duration: (t) => 45e3,
      requiredLevel: () => R[2],
      icon: () => "cry",
      description: () => "Temporarily increases damage",
      maxLevel: () => $,
      effect: (t) => ({ damage: t * 25 }),
    },
    fortitude: {
      id: "fortitude",
      name: () => "Fortitude",
      type: () => "passive",
      requiredLevel: () => R[2],
      icon: () => "armor",
      description: () => "Increases life regeneration",
      maxLevel: () => $,
      effect: (t) => ({ lifeRegen: t * 2 }),
    },
    groundSlam: {
      id: "groundSlam",
      name: () => "Ground Slam",
      type: () => "instant",
      manaCost: (t) => 10 + t * 1,
      cooldown: (t) => 5e3,
      requiredLevel: () => R[3],
      icon: () => "slam",
      description: () => "Deals instant damage",
      maxLevel: () => $,
      effect: (t) => ({ damage: t * 80 }),
    },
    shieldWall: {
      id: "shieldWall",
      name: () => "Shield Wall",
      type: () => "buff",
      manaCost: (t) => 30 + t * 0.5,
      cooldown: (t) => 2e4,
      duration: (t) => 16e3,
      requiredLevel: () => R[4],
      icon: () => "wall",
      description: () => "Increases armor and block chance temporarily",
      maxLevel: () => $,
      effect: (t) => ({ armor: t * 200, blockChance: t * 0.5 }),
    },
    berserk: {
      id: "berserk",
      name: () => "Berserk",
      type: () => "toggle",
      manaCost: (t) => 10 + t * 0.3,
      requiredLevel: () => R[5],
      icon: () => "berserk",
      description: () => "Gives huge amounts of physical and fire damage",
      maxLevel: () => $,
      effect: (t) => ({ damage: t * 20, fireDamage: t * 75 }),
    },
    lastStand: {
      id: "lastStand",
      name: () => "Last Stand",
      type: () => "passive",
      requiredLevel: () => R[5],
      icon: () => "last-stand",
      description: () => "Greatly increases offensive stats",
      maxLevel: () => $,
      effect: (t) => ({
        damage: t * 5,
        lifeSteal: t * 0.01,
        attackSpeed: t * 0.01,
        attackRating: t * 100,
      }),
    },
    warlord: {
      id: "warlord",
      name: () => "Warlord",
      type: () => "passive",
      requiredLevel: () => R[6],
      icon: () => "warlord",
      description: () => "Increases all attributes significantly",
      maxLevel: () => $,
      effect: (t) => ({
        lifePercent: t * 1,
        damagePercent: t * 1,
        strength: t * 10,
        vitality: t * 10,
        agility: t * 10,
        wisdom: t * 5,
        endurance: t * 10,
      }),
    },
  },
  es = {
    shadowDance: {
      id: "shadowDance",
      name: () => "Shadow Dance",
      type: () => "passive",
      requiredLevel: () => R[0],
      icon: () => "dagger",
      description: () =>
        "A quick dance from the shadows, increasing your damage.",
      maxLevel: () => $,
      effect: (t) => ({ damage: t * 2, critChance: t * 0.1, agility: t * 3 }),
    },
    evasion: {
      id: "evasion",
      name: () => "Evasion",
      type: () => "passive",
      requiredLevel: () => R[0],
      icon: () => "dodge",
      description: () => `
        Increases armor and block chance. 
        Additionally, when blocking, you also recover life equal to 5% of your maximum life.
        `,
      maxLevel: () => $,
      effect: (t) => ({ blockChance: t * 0.2, armor: t * 10 }),
    },
    poisonDagger: {
      id: "poisonDagger",
      name: () => "Poison Dagger",
      type: () => "toggle",
      manaCost: (t) => 5 + t * 0.2,
      requiredLevel: () => R[1],
      icon: () => "poison",
      description: () => "Applies physical damage to your attacks.",
      maxLevel: () => $,
      effect: (t) => ({ damage: t * 20 }),
    },
    shadowForm: {
      id: "shadowForm",
      name: () => "Shadow Form",
      type: () => "buff",
      manaCost: (t) => 10 + t * 0.5,
      cooldown: (t) => 6e4 - t * 1e3,
      duration: (t) => 45e3,
      requiredLevel: () => R[1],
      icon: () => "stealth",
      description: () =>
        "Shadow form increases crit chance, life steal and dexterity (crit damage).",
      maxLevel: () => $,
      effect: (t) => ({
        critChance: t * 0.1,
        lifeSteal: t * 0.03,
        dexterity: t * 10,
      }),
    },
    flurry: {
      id: "flurry",
      name: () => "Flurry",
      type: () => "instant",
      manaCost: (t) => 20 + t * 1,
      cooldown: (t) => 3e3,
      requiredLevel: () => R[2],
      icon: () => "flurry",
      description: () =>
        "Unleash a series of rapid attacks, dealing bonus damage.",
      maxLevel: () => $,
      effect: (t) => ({ damage: t * 60 }),
    },
    precision: {
      id: "precision",
      name: () => "Precision",
      type: () => "passive",
      requiredLevel: () => R[2],
      icon: () => "agility",
      description: () => "Significantly increases agility.",
      maxLevel: () => $,
      effect: (t) => ({ agility: t * 40 }),
    },
    backstab: {
      id: "backstab",
      name: () => "Backstab",
      type: () => "instant",
      manaCost: (t) => 5 + t * 0.5,
      cooldown: (t) => 6e3,
      requiredLevel: () => R[3],
      icon: () => "backstab",
      description: () =>
        "A devastating attack from behind, dealing massive damage and stealing resources.",
      maxLevel: () => $,
      effect: (t) => ({
        damage: t * 50,
        lifePerHit: t * 10,
        manaPerHit: t * 5,
      }),
    },
    darkPact: {
      id: "darkPact",
      name: () => "Dark Pact",
      type: () => "buff",
      manaCost: (t) => 30 + t * 0.3,
      cooldown: (t) => 1e4,
      duration: (t) => 4e4,
      requiredLevel: () => R[4],
      icon: () => "dark-pact",
      description: () => "Massively increases crit damage temporarily.",
      maxLevel: () => $,
      effect: (t) => ({ critDamage: t * 0.03 }),
    },
    assassination: {
      id: "assassination",
      name: () => "Assassination",
      type: () => "toggle",
      manaCost: (t) => 8 + t * 0.4,
      requiredLevel: () => R[5],
      icon: () => "assassination",
      description: () => "Greatly increases damage",
      maxLevel: () => $,
      effect: (t) => ({
        damage: t * 70,
        coldDamage: t * 50,
        airDamage: t * 50,
      }),
    },
    deadlyPrecision: {
      id: "deadlyPrecision",
      name: () => "Deadly Precision",
      type: () => "passive",
      requiredLevel: () => R[5],
      icon: () => "precision",
      description: () => "Permanently increases crit chance and crit damage.",
      maxLevel: () => $,
      effect: (t) => ({
        critChance: t * 0.01,
        critDamage: t * 0.01,
        attackRating: t * 100,
        attackRatingPercent: t * 5,
      }),
    },
    masterThief: {
      id: "masterThief",
      name: () => "Master Thief",
      type: () => "passive",
      requiredLevel: () => R[6],
      icon: () => "master",
      description: () => "Greatly increases attributes and gold gains.",
      maxLevel: () => $,
      effect: (t) => ({
        damagePercent: t * 2,
        dexterity: t * 10,
        strength: t * 20,
        wisdom: t * 10,
        bonusGoldPercent: t * 1,
      }),
    },
  },
  ts = {
    bloodSiphon: {
      id: "bloodSiphon",
      name: () => "Blood Siphon",
      type: () => "toggle",
      manaCost: (t) => 1 + t * 0.1,
      requiredLevel: () => R[0],
      icon: () => "blood",
      description: () => "Steal life from enemies with each attack.",
      maxLevel: () => $,
      effect: (t) => ({ lifePerHit: t * 1, damage: t * 3 }),
    },
    nightStalker: {
      id: "nightStalker",
      name: () => "Night Stalker",
      type: () => "passive",
      requiredLevel: () => R[0],
      icon: () => "moon",
      description: () => "Increases damage at night.",
      maxLevel: () => $,
      effect: (t) => ({ damage: t * 2, agility: t * 6 }),
    },
    vampiricStrike: {
      id: "vampiricStrike",
      name: () => "Vampiric Strike",
      type: () => "instant",
      manaCost: (t) => 10 + t * 0.4,
      cooldown: (t) => 5e3,
      requiredLevel: () => R[1],
      icon: () => "bite",
      description: () => "A powerful strike that restores life.",
      maxLevel: () => $,
      effect: (t) => ({ damage: t * 12, lifePerHit: t * 3 }),
    },
    darkAura: {
      id: "darkAura",
      name: () => "Dark Aura",
      type: () => "buff",
      manaCost: (t) => 20 + t * 2,
      cooldown: (t) => 4e4,
      duration: (t) => 4e4,
      requiredLevel: () => R[1],
      icon: () => "blood-aura",
      description: () => "Increases life steal and damage temporarily.",
      maxLevel: () => $,
      effect: (t) => ({ lifeSteal: t * 0.05, damagePercent: t * 1 }),
    },
    drainingTouch: {
      id: "drainingTouch",
      name: () => "Draining Touch",
      type: () => "instant",
      manaCost: (t) => 0 + t * 0.1,
      cooldown: (t) => 8e3,
      requiredLevel: () => R[2],
      icon: () => "drain",
      description: () => "Drains life from enemies, restoring your life.",
      maxLevel: () => $,
      effect: (t) => ({ earthDamage: t * 30, manaPerHit: t * 1 }),
    },
    greaterBloodHunger: {
      id: "greaterBloodHunger",
      name: () => "Greater Blood Hunger",
      type: () => "passive",
      requiredLevel: () => R[2],
      icon: () => "bloodlust",
      description: () => "Increases strength and vitality.",
      maxLevel: () => $,
      effect: (t) => ({ strength: t * 10, vitality: t * 10 }),
    },
    crimsonBurst: {
      id: "crimsonBurst",
      name: () => "Crimson Burst",
      type: () => "instant",
      manaCost: (t) => 10 + t * 0.5,
      cooldown: (t) => 2500,
      requiredLevel: () => R[3],
      icon: () => "burst",
      description: () =>
        "Unleashes a burst of crimson energy, greatly damaging the enemy at the cost of life.",
      maxLevel: () => $,
      effect: (t) => ({ damage: t * 100, lifePerHit: t * -5 }),
    },
    bloodPact: {
      id: "bloodPact",
      name: () => "Blood Pact",
      type: () => "buff",
      manaCost: (t) => 30 + t * 0.2,
      cooldown: (t) => 6e4,
      duration: (t) => 12e4,
      requiredLevel: () => R[4],
      icon: () => "pact",
      description: () => "Increases life steal and life temporarily.",
      maxLevel: () => $,
      effect: (t) => ({ lifePercent: t * 4 }),
    },
    eternalThirst: {
      id: "eternalThirst",
      name: () => "Eternal Thirst",
      type: () => "toggle",
      manaCost: (t) => 5 + t * 1,
      requiredLevel: () => R[5],
      icon: () => "thirst",
      description: () => "Increases life steal and damage.",
      maxLevel: () => $,
      effect: (t) => ({ damage: t * 25, lifePerHit: t * 10 }),
    },
    deathlyPresence: {
      id: "deathlyPresence",
      name: () => "Deathly Presence",
      type: () => "passive",
      requiredLevel: () => R[5],
      icon: () => "presence",
      description: () => "Increases life greatly, and strength mildly.",
      maxLevel: () => $,
      effect: (t) => ({
        lifePercent: t * 1,
        strengthPercent: t * 1,
        vitalityPercent: t * 1,
      }),
    },
    lordOfNight: {
      id: "lordOfNight",
      name: () => "Lord of Night",
      type: () => "passive",
      requiredLevel: () => R[6],
      icon: () => "lord",
      description: () =>
        "Greatly increases all attributes and gives resurrection.",
      maxLevel: () => $,
      effect: (t) => ({
        strengthPercent: t * 3,
        vitalityPercent: t * 2,
        resurrectionChance: t * 0.4,
        wisdom: t * 10,
        wisdomPercent: t * 2,
      }),
    },
  },
  as = {
    holyLight: {
      id: "holyLight",
      name: () => "Holy Light",
      type: () => "instant",
      manaCost: (t) => 6 + t * 0.2,
      cooldown: (t) => 5e3,
      requiredLevel: () => R[0],
      icon: () => "light",
      description: () =>
        "A burst of holy light that heals allies and damages enemies.",
      maxLevel: () => $,
      effect: (t) => ({ life: t * 6 }),
    },
    shieldBash: {
      id: "shieldBash",
      name: () => "Shield Bash",
      type: () => "instant",
      manaCost: (t) => 3 + t * 0.1,
      cooldown: (t) => 2e3,
      requiredLevel: () => R[0],
      icon: () => "bash",
      description: () => "Bashes an enemy with your shield, stunning them.",
      maxLevel: () => $,
      effect: (t) => ({ damage: t * 9 }),
    },
    divineProtection: {
      id: "divineProtection",
      name: () => "Divine Protection",
      type: () => "passive",
      requiredLevel: () => R[0],
      icon: () => "protection",
      description: () => "Greatly increases armor and block chance.",
      maxLevel: () => $,
      effect: (t) => ({
        armor: t * 7,
        blockChance: t * 0.1,
        thornsDamage: t * 0.5,
        thornsDamagePercent: t * 1,
      }),
    },
    consecration: {
      id: "consecration",
      name: () => "Consecration",
      type: () => "buff",
      manaCost: (t) => 15 + t * 0.6,
      cooldown: (t) => 1e4,
      duration: (t) => 6e4,
      requiredLevel: () => R[1],
      icon: () => "consecration",
      description: () => "Blesses the ground, dealing holy damage to enemies.",
      maxLevel: () => $,
      effect: (t) => ({ fireDamage: t * 12, coldDamage: t * 12 }),
    },
    greaterHealing: {
      id: "greaterHealing",
      name: () => "Greater Healing",
      type: () => "instant",
      manaCost: (t) => 10 + t * 0.3,
      cooldown: (t) => 1e4,
      requiredLevel: () => R[1],
      icon: () => "heal",
      description: () => "Heals a large amount of life instantly.",
      maxLevel: () => $,
      effect: (t) => ({ life: t * 12 }),
    },
    divineShield: {
      id: "divineShield",
      name: () => "Divine Shield",
      type: () => "buff",
      manaCost: (t) => 20 + t * 0.5,
      cooldown: (t) => 15e3,
      duration: (t) => 1e4 + t * 1e3,
      requiredLevel: () => R[2],
      icon: () => "holy-shield",
      description: () => "Creates a shield that absorbs damage.",
      maxLevel: () => $,
      effect: (t) => ({ armor: t * 50, blockChance: t * 0.5 }),
    },
    auraOfLight: {
      id: "auraOfLight",
      name: () => "Aura of Light",
      type: () => "passive",
      requiredLevel: () => R[2],
      icon: () => "holy-aura",
      description: () => "Increases healing effects and reduces damage taken.",
      maxLevel: () => $,
      effect: (t) => ({ lifePercent: t * 2.5, armorPercent: t * 2 }),
    },
    wrathOfTheHeavens: {
      id: "wrathOfTheHeavens",
      name: () => "Wrath of the Heavens",
      type: () => "instant",
      manaCost: (t) => 20 + t * 1,
      cooldown: (t) => 6e3,
      requiredLevel: () => R[3],
      icon: () => "wrath",
      description: () => "Calls down holy energy to smite enemies.",
      maxLevel: () => $,
      effect: (t) => ({
        damage: t * 30,
        fireDamage: t * 50,
        airDamage: t * 50,
      }),
    },
    beaconOfFaith: {
      id: "beaconOfFaith",
      name: () => "Beacon of Faith",
      type: () => "passive",
      requiredLevel: () => R[3],
      icon: () => "beacon",
      description: () => "Increases healing done.",
      maxLevel: () => $,
      effect: (t) => ({
        lifeRegen: t * 1,
        lifeRegenPercent: t * 1,
        wisdom: t * 5,
      }),
    },
    holyBarrier: {
      id: "holyBarrier",
      name: () => "Holy Barrier",
      type: () => "buff",
      manaCost: (t) => 60 + t * 1,
      cooldown: (t) => 2e4,
      duration: (t) => 8e4,
      requiredLevel: () => R[4],
      icon: () => "barrier",
      description: () =>
        "Creates a holy barrier that increases all healing effects.",
      maxLevel: () => $,
      effect: (t) => ({
        vitality: t * 10,
        vitalityPercent: t * 1,
        resurrectionChance: t * 0.15,
      }),
    },
    divineWrath: {
      id: "divineWrath",
      name: () => "Divine Wrath",
      type: () => "toggle",
      manaCost: (t) => 15 + t * 0.5,
      requiredLevel: () => R[5],
      icon: () => "wrath",
      description: () =>
        "Unleashes divine energy to increase damage and healing.",
      maxLevel: () => $,
      effect: (t) => ({ damage: t * 10, lifePerHit: t * 20 }),
    },
    guardianAngel: {
      id: "guardianAngel",
      name: () => "Guardian Angel",
      type: () => "passive",
      requiredLevel: () => R[5],
      icon: () => "angel",
      description: () =>
        "Provides a chance to resurrect with maximum life upon death",
      maxLevel: () => $,
      effect: (t) => ({
        resurrectionChance: t * 0.1,
        lifeRegen: t * 3,
        lifeRegenPercent: t * 1,
        manaRegen: t * 0.5,
        manaRegenPercent: t * 1,
      }),
    },
    ascension: {
      id: "ascension",
      name: () => "Ascension",
      type: () => "passive",
      requiredLevel: () => R[6],
      icon: () => "ascension",
      description: () => "Grants significant bonuses to all attributes.",
      maxLevel: () => $,
      effect: (t) => ({
        endurancePercent: t * 2,
        vitalityPercent: t * 2,
        attackRating: t * 200,
        attackRatingPercent: t * 5,
        mana: t * 10,
        manaPercent: t * 2,
      }),
    },
  },
  is = {
    frenzy: {
      id: "frenzy",
      name: () => "Frenzy",
      type: () => "toggle",
      manaCost: (t) => 3 + t * 0.1,
      requiredLevel: () => R[0],
      icon: () => "frenzy",
      description: () => "Increases attack speed and damage while active.",
      maxLevel: () => $,
      effect: (t) => ({ damage: t * 12, lifePerHit: t * -1 }),
    },
    toughSkin: {
      id: "toughSkin",
      name: () => "Tough Skin",
      type: () => "passive",
      requiredLevel: () => R[0],
      icon: () => "tough-skin",
      description: () => "Increases armor and reduces damage taken.",
      maxLevel: () => $,
      effect: (t) => ({ armor: t * 18, armorPercent: t * 2 }),
    },
    recklessSwing: {
      id: "recklessSwing",
      name: () => "Reckless Swing",
      type: () => "instant",
      manaCost: (t) => 6 + t * 0.1,
      cooldown: (t) => 1e3,
      requiredLevel: () => R[1],
      icon: () => "swing",
      description: () => "A powerful strike that sacrifices life for damage.",
      maxLevel: () => $,
      effect: (t) => ({ damage: t * 100, lifePerHit: t * -7.5 }),
    },
    battleCry: {
      id: "battleCry",
      name: () => "Battle Cry",
      type: () => "buff",
      manaCost: (t) => 8 + t * 0.2,
      cooldown: (t) => 12e3,
      duration: (t) => 6e3 + t * 500,
      requiredLevel: () => R[1],
      icon: () => "battle-cry",
      description: () => "Boosts damage and attack speed temporarily.",
      maxLevel: () => $,
      effect: (t) => ({
        damagePercent: t * 0.5,
        attackSpeed: t * 0.01,
        lifeSteal: t * 0.01,
      }),
    },
    berserkersRage: {
      id: "berserkersRage",
      name: () => "Berserker's Rage",
      type: () => "toggle",
      manaCost: (t) => 4 + t * 0.1,
      requiredLevel: () => R[2],
      icon: () => "berserker-rage",
      description: () => "Greatly increases damage but lowers defense.",
      maxLevel: () => $,
      effect: (t) => ({
        fireDamage: t * 30,
        airDamage: t * 30,
        doubleDamageChance: t * 0.2,
      }),
    },
    greaterFrenzy: {
      id: "greaterFrenzy",
      name: () => "Greater Frenzy",
      type: () => "passive",
      requiredLevel: () => R[2],
      icon: () => "greater-rage",
      description: () => "Further enhances attack speed and damage.",
      maxLevel: () => $,
      effect: (t) => ({ attackSpeed: t * 0.02, lifePerHit: t * 1 }),
    },
    earthquake: {
      id: "earthquake",
      name: () => "Earthquake",
      type: () => "instant",
      manaCost: (t) => 14 + t * 0.3,
      cooldown: (t) => 3500,
      requiredLevel: () => R[3],
      icon: () => "earthquake",
      description: () => "Smashes the ground, dealing earth damage.",
      maxLevel: () => $,
      effect: (t) => ({ damage: t * 30, earthDamage: t * 150 }),
    },
    rageMastery: {
      id: "rageMastery",
      name: () => "Rage Mastery",
      type: () => "passive",
      requiredLevel: () => R[3],
      icon: () => "mastery",
      description: () => "Increases critical chance and critical damage.",
      maxLevel: () => $,
      effect: (t) => ({
        critChance: t * 0.1,
        critDamage: t * 0.01,
        doubleDamageChance: t * 0.1,
        attackRating: t * 300,
      }),
    },
    bloodLust: {
      id: "bloodLust",
      name: () => "Blood Lust",
      type: () => "buff",
      manaCost: (t) => 20 + t * 0.25,
      cooldown: (t) => 2e4,
      duration: (t) => 2e4 + t * 300,
      requiredLevel: () => R[4],
      icon: () => "bloodlust",
      description: () => "Increases attack speed and life steal temporarily.",
      maxLevel: () => $,
      effect: (t) => ({
        attackSpeed: t * 0.01,
        lifeSteal: t * 0.02,
        lifePercent: t * 3,
      }),
    },
    unbridledFury: {
      id: "unbridledFury",
      name: () => "Unbridled Fury",
      type: () => "toggle",
      manaCost: (t) => 0,
      requiredLevel: () => R[5],
      icon: () => "fury",
      description: () => "Increases damage and restores resources.",
      maxLevel: () => $,
      effect: (t) => ({
        damage: t * 20,
        manaPerHit: t * 0.4,
        lifePerHit: t * 8,
      }),
    },
    undyingRage: {
      id: "undyingRage",
      name: () => "Undying Rage",
      type: () => "passive",
      requiredLevel: () => R[5],
      icon: () => "undying",
      description: () => "Provides a chance to survive fatal damage.",
      maxLevel: () => $,
      effect: (t) => ({ resurrectionChance: t * 0.25, lifeRegen: t * 10 }),
    },
    warlord: {
      id: "warlord",
      name: () => "Warlord",
      type: () => "passive",
      requiredLevel: () => R[6],
      icon: () => "warlord",
      description: () => "Significantly increases all combat stats.",
      maxLevel: () => $,
      effect: (t) => ({
        strength: t * 10,
        strengthPercent: t * 2,
        critChance: t * 0.2,
        attackSpeed: t * 0.01,
        damage: t * 10,
      }),
    },
  },
  rs = {
    fireball: {
      id: "fireball",
      name: () => "Fireball",
      type: () => "instant",
      manaCost: (t) => 6 + t * 0.1,
      cooldown: (t) => 2500,
      requiredLevel: () => R[0],
      icon: () => "fireball",
      description: () => "Launches a fireball that deals fire damage.",
      maxLevel: () => $,
      effect: (t) => ({ fireDamage: t * 20 }),
    },
    frostArmor: {
      id: "frostArmor",
      name: () => "Frost Armor",
      type: () => "buff",
      manaCost: (t) => 30 + t * 3,
      cooldown: (t) => 2e4,
      duration: (t) => 1e4 + t * 1e3,
      requiredLevel: () => R[0],
      icon: () => "frost-armor",
      description: () => "Encases the caster in frost, increasing armor.",
      maxLevel: () => $,
      effect: (t) => ({ armor: t * 40 }),
    },
    warmth: {
      id: "warmth",
      name: () => "Warmth",
      type: () => "passive",
      requiredLevel: () => R[0],
      icon: () => "storm",
      description: () => "Increases mana and mana regeneration",
      maxLevel: () => $,
      effect: (t) => ({ mana: t * 10, manaRegen: t * 0.2, wisdom: t * 1 }),
    },
    lightningStrike: {
      id: "lightningStrike",
      name: () => "Lightning Strike",
      type: () => "instant",
      manaCost: (t) => 12 + t * 0.2,
      cooldown: (t) => 1500,
      requiredLevel: () => R[1],
      icon: () => "lightning",
      description: () => "Strikes an enemy with a bolt of lightning.",
      maxLevel: () => $,
      effect: (t) => ({ airDamage: t * 36 }),
    },
    elementalMastery: {
      id: "elementalMastery",
      name: () => "Elemental Mastery",
      type: () => "passive",
      requiredLevel: () => R[1],
      icon: () => "elemental-mastery",
      description: () => "Increases all elemental damage.",
      maxLevel: () => $,
      effect: (t) => ({ elementalDamagePercent: t * 2 }),
    },
    blizzard: {
      id: "blizzard",
      name: () => "Blizzard",
      type: () => "buff",
      manaCost: (t) => 40 + t * 4,
      cooldown: (t) => 15e3,
      duration: (t) => 2e4,
      requiredLevel: () => R[2],
      icon: () => "blizzard",
      description: () =>
        "Summons a blizzard, covering the battlefield in frost.",
      maxLevel: () => $,
      effect: (t) => ({ coldDamagePercent: t * 5, airDamagePercent: t * 5 }),
    },
    fireShield: {
      id: "fireShield",
      name: () => "Fire Shield",
      type: () => "buff",
      manaCost: (t) => 30 + t * 0.4,
      cooldown: (t) => 5e3,
      duration: (t) => 6e4,
      requiredLevel: () => R[2],
      icon: () => "fire-shield",
      description: () =>
        "Surrounds the caster with a shield of fire. Deals only fire damage.",
      maxLevel: () => $,
      effect: (t) => ({ reflectFireDamage: t * 38 }),
    },
    arcaneWisdom: {
      id: "arcaneWisdom",
      name: () => "Arcane Wisdom",
      type: () => "passive",
      requiredLevel: () => R[2],
      icon: () => "wisdom",
      description: () => "Increases mana and mana regeneration.",
      maxLevel: () => $,
      effect: (t) => ({ manaPercent: t * 2, manaRegen: t * 0.2 }),
    },
    elementalStorm: {
      id: "elementalStorm",
      name: () => "Elemental Storm",
      type: () => "instant",
      manaCost: (t) => 60,
      cooldown: (t) => 2e3,
      requiredLevel: () => R[3],
      icon: () => "storm",
      description: () => "Unleashes a storm of fire, ice, and lightning.",
      maxLevel: () => $,
      effect: (t) => ({
        fireDamage: t * 40,
        coldDamage: t * 40,
        airDamage: t * 40,
      }),
    },
    elementalAffinity: {
      id: "elementalAffinity",
      name: () => "Elemental Affinity",
      type: () => "passive",
      requiredLevel: () => R[3],
      icon: () => "affinity",
      description: () => "Increases resistance to elemental damage.",
      maxLevel: () => $,
      effect: (t) => ({
        fireDamagePercent: t * 3,
        coldDamagePercent: t * 3,
        airDamagePercent: t * 3,
      }),
    },
    arcanePulse: {
      id: "arcanePulse",
      name: () => "Arcane Pulse",
      type: () => "buff",
      manaCost: (t) => 40 + t * 0.6,
      cooldown: (t) => 3e4,
      duration: (t) => 6e4,
      requiredLevel: () => R[4],
      icon: () => "pulse",
      description: () => "Increases attack rating and resource stealing.",
      maxLevel: () => $,
      effect: (t) => ({
        attackRating: t * 150,
        lifePerHit: t * 5,
        manaPerHit: t * 0.5,
        attackSpeed: t * 0.02,
      }),
    },
    elementalOverload: {
      id: "elementalOverload",
      name: () => "Elemental Overload",
      type: () => "toggle",
      manaCost: (t) => 1 + t * 0.3,
      requiredLevel: () => R[5],
      icon: () => "overload",
      description: () =>
        "Boosts all elemental damage at the cost of mana regeneration.",
      maxLevel: () => $,
      effect: (t) => ({
        fireDamage: t * 100,
        coldDamage: t * 100,
        airDamage: t * 100,
        earthDamage: t * 100,
        manaPerHit: t * -0.2,
      }),
    },
    primordialControl: {
      id: "primordialControl",
      name: () => "Primordial Control",
      type: () => "passive",
      requiredLevel: () => R[5],
      icon: () => "control",
      description: () =>
        "Grants control over elemental forces, increasing all stats.",
      maxLevel: () => $,
      effect: (t) => ({
        earthDamage: t * 100,
        vitality: t * 15,
        wisdom: t * 8,
        dexterity: t * 6,
      }),
    },
    avatarOfTheElements: {
      id: "avatarOfTheElements",
      name: () => "Avatar of the Elements",
      type: () => "passive",
      requiredLevel: () => R[6],
      icon: () => "avatar-of-elements",
      description: () =>
        "Transforms the caster into a being of pure elemental power.",
      maxLevel: () => $,
      effect: (t) => ({
        fireDamage: t * 40,
        coldDamage: t * 40,
        airDamage: t * 40,
        earthDamage: t * 40,
        elementalDamagePercent: t * 5,
      }),
    },
  },
  gt = {
    WARRIOR: {
      name: () => "Warrior",
      enabled: () => !0,
      avatar: () => "warrior-avatar.jpg",
      baseStats: () => ({
        strength: 30,
        vitality: 20,
        armor: 60,
        lifePercent: 30,
      }),
      description: () =>
        "A mighty warrior specializing in heavy armor and raw strength",
    },
    ROGUE: {
      name: () => "Rogue",
      enabled: () => !0,
      avatar: () => "rogue-avatar.jpg",
      baseStats: () => ({
        agility: 40,
        critChance: 5,
        attackSpeed: 0.3,
        damage: 30,
      }),
      description: () =>
        "Swift and deadly, focusing on critical hits and attack speed",
    },
    VAMPIRE: {
      name: () => "Vampire",
      enabled: () => !0,
      avatar: () => "vampire-avatar.jpg",
      baseStats: () => ({
        lifeSteal: 1,
        lifePercent: 10,
        attackSpeed: 0.4,
        damage: 25,
      }),
      description: () => "Master of life-stealing and critical strikes",
    },
    PALADIN: {
      name: () => "Paladin",
      enabled: () => !0,
      avatar: () => "paladin-avatar.jpg",
      baseStats: () => ({
        blockChance: 5,
        armor: 50,
        vitality: 30,
        lifePercent: 20,
      }),
      description: () => "Holy warrior specializing in defense and vitality",
    },
    BERSERKER: {
      name: () => "Berserker",
      enabled: () => !0,
      avatar: () => "berserker-avatar.jpg",
      baseStats: () => ({
        damage: 30,
        attackSpeed: 0.2,
        damagePercent: 15,
        lifePercent: -20,
      }),
      description: () => "Frenzied fighter focusing on raw damage output",
    },
    ELEMENTALIST: {
      name: () => "Elementalist",
      enabled: () => !0,
      avatar: () => "elementalist-avatar.jpg",
      baseStats: () => ({
        fireDamage: 25,
        airDamage: 25,
        coldDamage: 25,
        earthDamage: 25,
        elementalDamagePercent: 25,
      }),
      description: () => "Master of elemental damage types",
    },
  },
  da = {
    WARRIOR: Jn,
    ROGUE: es,
    VAMPIRE: ts,
    PALADIN: as,
    BERSERKER: is,
    ELEMENTALIST: rs,
  };
function $e({ id: t, className: e, content: a, onClose: i }) {
  const r = document.getElementById(t);
  r && r.remove();
  const n = document.createElement("div");
  (n.id = t),
    n.classList.add("modal"),
    e && n.classList.add(...e.split(" ")),
    (n.innerHTML = a),
    document.body.appendChild(n);
  const s = n.querySelector(
    ".training-modal-close, .skill-modal-close, .modal-close"
  );
  return (
    s && s.addEventListener("click", () => Ie(t)),
    n.addEventListener("click", (o) => {
      o.target === n && Ie(t);
    }),
    typeof i == "function" && (n._onClose = i),
    n
  );
}
function Ie(t) {
  const e = typeof t == "string" ? document.getElementById(t) : t;
  if (e) {
    const a = e._onClose;
    e.classList.add("hidden"), a && a();
  }
}
const wa = String.raw;
function bt() {
  document.getElementById("skilltree");
  const t = document.getElementById("class-selection"),
    e = document.getElementById("skill-tree-container");
  P.selectedPath
    ? (t.classList.add("hidden"), e.classList.remove("hidden"), Qi())
    : (t.classList.remove("hidden"), e.classList.add("hidden"), ns()),
    Re(),
    De();
}
function ns() {
  const t = document.getElementById("class-selection");
  (t.innerHTML = ""),
    Object.entries(gt).forEach(([e, a]) => {
      if (!a.enabled) return;
      const i = document.createElement("div");
      (i.className = "class-path"),
        (i.innerHTML = wa`
      <div style="display: flex; align-items: flex-start; gap: 18px;">
        <img
          src="${"./"}avatars/${a.avatar()}"
          alt="${a.name()} Avatar"
          style="width: 72px; height: 72px; border-radius: 8px; object-fit: cover; background: #222;"
        />
        <div style="flex: 1;">
          <h3>${a.name()}</h3>
          <p>${a.description()}</p>
        </div>
      </div>
      <div class="base-stats" style="margin-top: 15px;">
        ${Object.entries(a.baseStats())
          .map(([n, s]) => {
            let o = n
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (d) => d.toUpperCase()),
              c = s;
            n.endsWith("Percent") &&
              ((o = o.replace(/ Percent$/, "")), (c = `${s}%`));
            const l = s > 0 ? "+" : "";
            return `<div>${o}: ${l}${c}</div>`;
          })
          .join("")}
      </div>
    `);
      const r = document.createElement("button");
      (r.textContent = y.level < ua ? `Requires Level ${ua}` : "Choose Path"),
        r.addEventListener("click", () => ss(e)),
        i.appendChild(r),
        t.appendChild(i);
    });
}
function ss(t) {
  P.selectPath(t) &&
    (document.getElementById("class-selection").classList.add("hidden"),
    document.getElementById("skill-tree-container").classList.remove("hidden"),
    Qi(),
    bt());
}
function Ki() {
  if (!P.selectedPath) return;
  const t = document.getElementById("skill-tree-container");
  t.innerHTML = "";
  const e = document.createElement("div");
  (e.className = "skill-points-header"), t.appendChild(e);
  const a = !1,
    i = da[P.selectedPath.name],
    r = R.reduce((n, s) => ((s <= y.level || a) && (n[s] = []), n), {});
  Object.entries(i).forEach(([n, s]) => {
    s.requiredLevel() <= y.level &&
      r[s.requiredLevel()] &&
      r[s.requiredLevel()].push({ id: n, ...s });
  }),
    Object.entries(r).forEach(([n, s]) => {
      if (s.length > 0) {
        const o = document.createElement("div");
        o.className = "skill-row";
        const c = document.createElement("div");
        (c.className = "level-requirement"),
          (c.textContent = `Level ${n}`),
          t.appendChild(c),
          s.forEach((l) => {
            const d = ms(l);
            o.appendChild(d);
          }),
          t.appendChild(o);
      }
    }),
    Re(),
    Yi(),
    Vi();
}
function Yi() {
  const t = document.getElementById("skill-tree-container");
  let e = document.getElementById("auto-cast-section");
  if ((e && e.remove(), !be.hasAutoSpellCastUpgrade())) return;
  const a = Object.entries(P.skills)
    .filter(([i, r]) => {
      const n = P.getSkill(i);
      return (
        n && (n.type() === "instant" || n.type() === "buff") && r.level > 0
      );
    })
    .map(([i, r]) => ({ ...P.getSkill(i), id: i }));
  a.length !== 0 &&
    ((e = document.createElement("div")),
    (e.id = "auto-cast-section"),
    (e.style.marginTop = "32px"),
    (e.innerHTML = '<h3 style="margin-bottom:8px;">Auto-Cast Settings</h3>'),
    a.forEach((i) => {
      const r = document.createElement("div");
      (r.className = "auto-cast-switch"),
        (r.style.alignItems = "center"),
        (r.style.marginBottom = "6px");
      const n = document.createElement("div");
      (n.className = "skill-icon"),
        (n.style.width = "28px"),
        (n.style.height = "28px"),
        (n.style.backgroundImage = `url('./skills/${i.icon()}.jpg')`),
        (n.style.marginRight = "8px"),
        r.appendChild(n);
      const s = document.createElement("label");
      (s.textContent = i.name()),
        (s.style.marginRight = "8px"),
        r.appendChild(s);
      const o = document.createElement("input");
      (o.type = "checkbox"),
        (o.checked = P.isAutoCastEnabled(i.id)),
        o.addEventListener("change", (c) => {
          be.hasAutoSpellCastUpgrade()
            ? P.setAutoCast(i.id, c.target.checked)
            : (c.preventDefault(),
              j(
                "Purchase Auto Spell Cast upgrade to enable auto-casting.",
                "warning"
              ),
              (o.checked = !1));
        }),
        r.appendChild(o),
        e.appendChild(r);
    }),
    t.appendChild(e));
}
function Vi() {
  const t = document.getElementById("skill-tree-container");
  let e = document.getElementById("display-section");
  e && e.remove();
  const a = Object.entries(P.skills)
    .filter(([i, r]) => {
      const n = P.getSkill(i);
      return n && n.type() !== "passive" && r.level > 0;
    })
    .map(([i]) => ({ ...P.getSkill(i), id: i }));
  a.length !== 0 &&
    ((e = document.createElement("div")),
    (e.id = "display-section"),
    (e.innerHTML = '<h3 style="margin-bottom:8px;">Slot Display Settings</h3>'),
    a.forEach((i) => {
      const r = document.createElement("div");
      r.className = "display-switch";
      const n = document.createElement("div");
      (n.className = "skill-icon"),
        (n.style.width = "28px"),
        (n.style.height = "28px"),
        (n.style.backgroundImage = `url('./skills/${i.icon()}.jpg')`),
        (n.style.marginRight = "8px"),
        r.appendChild(n);
      const s = document.createElement("label");
      (s.textContent = i.name()),
        (s.style.marginRight = "8px"),
        r.appendChild(s);
      const o = document.createElement("input");
      (o.type = "checkbox"),
        (o.checked = P.isDisplayEnabled(i.id)),
        o.addEventListener("change", (c) => {
          P.setDisplay(i.id, c.target.checked), De();
        }),
        r.appendChild(o),
        e.appendChild(r);
    }),
    t.appendChild(e));
}
function Re() {
  const t = document.getElementById("character-avatar"),
    e = document.getElementById("character-name");
  if (!P.selectedPath) {
    let s = t.querySelector("img");
    (s = document.createElement("img")),
      (s.alt = "Peasant Avatar"),
      (t.innerHTML = ""),
      t.appendChild(s),
      (s.src = "./avatars/peasant-avatar.jpg"),
      (e.textContent = "");
    return;
  }
  const a = P.getSelectedPath();
  if (t && a != null && a.avatar) {
    let s = t.querySelector("img");
    s ||
      ((s = document.createElement("img")),
      (s.alt = a.name() + " avatar"),
      (t.innerHTML = ""),
      t.appendChild(s)),
      (s.src = `./avatars/${a.avatar()}`);
  }
  const i =
    P.selectedPath.name.charAt(0).toUpperCase() +
    P.selectedPath.name.slice(1).toLowerCase();
  e.textContent = `${i}`;
  const r = document.getElementById("skill-tree-container"),
    n = r.querySelector(".skill-points-header");
  (n.innerHTML = `
    <span class="skill-path-name">${i}</span> Available Skill Points: ${P.skillPoints}`),
    r.querySelectorAll(".skill-node").forEach((s) => {
      var u;
      const o = s.dataset.skillId,
        c = ((u = P.skills[o]) == null ? void 0 : u.level) || 0,
        l = P.canUnlockSkill(o),
        d = s.querySelector(".skill-level"),
        g = P.getSkill(o);
      (d.textContent = g.maxLevel() == 1 / 0 ? `${c}` : `${c}/${g.maxLevel()}`),
        s.classList.toggle("available", l),
        s.classList.toggle("unlocked", !!P.skills[o]);
    }),
    Yi(),
    Vi();
}
function Qi() {
  document.getElementById("skill-tree-container").children.length ? Re() : Ki();
}
let K,
  we,
  Ue = 1;
function Pi(t, e) {
  let a = 0;
  for (let i = 0; i < e; i++) a += 1 + Math.floor((t + i) / 50);
  return a;
}
function os(t, e, a) {
  let i = 0,
    r = 0;
  for (; t + i < a; ) {
    const n = 1 + Math.floor((t + i) / 50);
    if (r + n > e) break;
    (r += n), i++;
  }
  return i;
}
function ls() {
  if (K) return;
  const t = wa`
    <div class="skill-modal-content">
      <span class="skill-modal-close">&times;</span>
      <div class="modal-skill-icon"></div>
      <h2 class="modal-skill-name"></h2>
      <p class="modal-skill-desc"></p>
      <div class="modal-skill-stats">
        <p>Level: <span class="modal-level"></span>/<span class="modal-max-level"></span></p>
        <p>Available Points: <span class="modal-available-points"></span></p>
        <p>Skill Point Cost: <span class="modal-sp-cost"></span></p>
        <p class="modal-mana-row">
          Mana Cost: <span class="modal-current-mana-cost"></span> (<span class="modal-next-mana-cost"></span>)
        </p>
        <p class="modal-cooldown-row">
          Cooldown: <span class="modal-current-cooldown"></span> (<span class="modal-next-cooldown"></span>)
        </p>
        <p class="modal-duration-row">
          Duration: <span class="modal-current-duration"></span> (<span class="modal-next-duration"></span>)
        </p>
      </div>
      <div class="modal-skill-effects">
        <h3>Effects</h3>
        <div class="effects-list"></div>
      </div>
      <div class="modal-controls">
        <button data-qty="1">+1</button>
        <button data-qty="5">+5</button>
        <button data-qty="10">+10</button>
        <button class="max-btn" data-qty="max">Max</button>
      </div>
      <button class="modal-buy">Buy</button>
    </div>
  `;
  (K = $e({
    id: "skill-modal",
    className: "skill-modal hidden",
    content: t,
    onClose: ds,
  })),
    K.querySelectorAll(".modal-controls button").forEach((e) => {
      e.onclick = () => {
        (Ue = e.dataset.qty), La();
      };
    }),
    (K.querySelector(".modal-buy").onclick = () => us());
}
function cs(t) {
  var E;
  ls(), (we = t);
  const e = P.getSkill(t),
    a = K.querySelector(".modal-skill-icon");
  a.style.backgroundImage = `url('./skills/${e.icon()}.jpg')`;
  const i = ((E = P.skills[t]) == null ? void 0 : E.level) || 0,
    r = i + 1;
  (K.querySelector(".modal-skill-name").textContent = e.name()),
    (K.querySelector(".modal-skill-desc").innerHTML = e
      .description()
      .replace(/\n/g, "<br>")),
    (K.querySelector(".modal-level").textContent = i),
    (K.querySelector(".modal-max-level").textContent =
      e.maxLevel() === 1 / 0 ? "∞" : e.maxLevel()),
    (K.querySelector(".modal-available-points").textContent = P.skillPoints);
  const n = P.getSkillManaCost(e, i),
    s = P.getSkillManaCost(e, r);
  (K.querySelector(".modal-current-mana-cost").textContent = n),
    (K.querySelector(".modal-next-mana-cost").textContent = s);
  const o = P.getSkillCooldown(e, i),
    c = P.getSkillCooldown(e, r);
  (K.querySelector(".modal-current-cooldown").textContent = o / 1e3 + "s"),
    (K.querySelector(".modal-next-cooldown").textContent = c / 1e3 + "s");
  const l = P.getSkillDuration(e, i),
    d = P.getSkillDuration(e, r);
  (K.querySelector(".modal-current-duration").textContent = l / 1e3 + "s"),
    (K.querySelector(".modal-next-duration").textContent = d / 1e3 + "s");
  const g = K.querySelector(".modal-mana-row");
  e.manaCost ? (g.style.display = "") : (g.style.display = "none");
  const u = K.querySelector(".modal-cooldown-row");
  e.cooldown ? (u.style.display = "") : (u.style.display = "none");
  const m = K.querySelector(".modal-duration-row");
  e.duration ? (m.style.display = "") : (m.style.display = "none");
  const f = P.getSkillEffect(t, i),
    h = P.getSkillEffect(t, r),
    v = K.querySelector(".effects-list");
  (v.innerHTML = ""),
    Object.entries(h).forEach(([p, x]) => {
      const b = f[p] || 0,
        D = x - b,
        B = G[p].decimalPlaces || 0;
      v.innerHTML += `
      <p>${xe(p)}: ${b.toFixed(B)} (${D >= 0 ? "+" : ""}${D.toFixed(B)})</p>
    `;
    }),
    (Ue = 1),
    La(),
    K.classList.remove("hidden");
}
function ds() {
  K && K.classList.add("hidden");
}
function La() {
  var b;
  const t = Ue === "max" ? 1 / 0 : parseInt(Ue, 10),
    e = ((b = P.skills[we]) == null ? void 0 : b.level) || 0,
    a = P.getSkill(we),
    i = a.maxLevel() || 1 / 0,
    r = P.skillPoints,
    n = os(e, r, i),
    s = Ue === "max" ? n : Math.min(t, n),
    o = e + s;
  (K.querySelector(".modal-level").textContent = e),
    (K.querySelector(".modal-max-level").textContent = i === 1 / 0 ? "∞" : i),
    (K.querySelector(".modal-available-points").textContent = P.skillPoints);
  const c = Pi(e, s);
  (K.querySelector(".modal-sp-cost").textContent = c + " SP"),
    K.querySelectorAll(".modal-controls button").forEach((D) => {
      const B = D.dataset.qty;
      let S;
      B === "max" ? (S = n) : (S = Math.min(parseInt(B, 10), n));
      const k = Pi(e, S);
      D.textContent = (B === "max" ? "Max" : "+" + B) + " (" + k + " SP)";
    });
  const l = P.getSkillManaCost(a, e),
    d = P.getSkillManaCost(a, o);
  (K.querySelector(".modal-current-mana-cost").textContent = l),
    (K.querySelector(".modal-next-mana-cost").textContent = d);
  const g = K.querySelector(".modal-mana-row");
  a.manaCost ? (g.style.display = "") : (g.style.display = "none");
  const u = P.getSkillCooldown(a, e) / 1e3,
    m = P.getSkillCooldown(a, o) / 1e3;
  (K.querySelector(".modal-current-cooldown").textContent = u + "s"),
    (K.querySelector(".modal-next-cooldown").textContent = m + "s");
  const f = P.getSkillDuration(a, e) / 1e3,
    h = P.getSkillDuration(a, o) / 1e3;
  (K.querySelector(".modal-current-duration").textContent = f + "s"),
    (K.querySelector(".modal-next-duration").textContent = h + "s");
  const v = P.getSkillEffect(we, e),
    E = P.getSkillEffect(we, o),
    p = K.querySelector(".effects-list");
  (p.innerHTML = ""),
    Object.entries(E).forEach(([D, B]) => {
      const S = v[D] || 0,
        k = B - S,
        w = G[D].decimalPlaces || 0;
      p.innerHTML += `<p>${xe(D)}: ${S.toFixed(w)} (${
        k >= 0 ? "+" : ""
      }${k.toFixed(w)})</p>`;
    });
  const x = K.querySelector(".modal-buy");
  (x.disabled = s <= 0), (x.textContent = `Buy ${s} for ${c} SP`);
}
function us() {
  var r;
  let t = Ue === "max" ? 1 / 0 : parseInt(Ue, 10);
  const e = ((r = P.skills[we]) == null ? void 0 : r.level) || 0,
    a = P.getSkill(we).maxLevel() || 1 / 0,
    i = Math.min(P.skillPoints, a - e, t === 1 / 0 ? P.skillPoints : t);
  for (let n = 0; n < i; n++) P.unlockSkill(we);
  typeof gtag == "function" &&
    gtag("event", "skill_leveled_up_bulk", {
      event_category: "SkillTree",
      event_label: we,
      value: i,
      final_level: e + i,
    }),
    Re(),
    De(),
    La();
}
function ms(t) {
  var i;
  let e = P.getSkill(t.id);
  const a = document.createElement("div");
  return (
    (a.className = "skill-node"),
    (a.dataset.skillId = e.id),
    (a.dataset.skillType = e.type),
    (a.innerHTML = wa`
    <div
      class="skill-icon"
      style="background-image: url('${"./"}skills/${e.icon()}.jpg')"
    ></div>
    <div class="skill-level">
      ${((i = P.skills[e.id]) == null ? void 0 : i.level) || 0}${
      e.maxLevel() !== 1 / 0 ? `/${e.maxLevel()}` : ""
    }
    </div>
  `),
    a.addEventListener("mouseenter", (r) => ge(ps(e.id), r)),
    a.addEventListener("mousemove", ue),
    a.addEventListener("mouseleave", he),
    a.addEventListener("click", (r) => {
      cs(e.id);
    }),
    a
  );
}
const ps = (t) => {
  var m;
  let e = P.getSkill(t);
  const a = ((m = P.skills[e.id]) == null ? void 0 : m.level) || 0;
  P.canUnlockSkill(e.id);
  const i = P.getSkillEffect(e.id),
    r = a < e.maxLevel() ? a + 1 : a,
    n = P.getSkillEffect(e.id, r);
  let s = `
      <strong>${e.name()} [${e.type().toUpperCase()}]</strong><br>
      ${e
        .description()
        .split(
          `
`
        )
        .map((f) => f.trim())
        .filter((f) => f)
        .join("<br>")}
      <br>
      Level: ${a}${e.maxLevel() !== 1 / 0 ? `/${e.maxLevel()}` : ""}
    `;
  const o = P.getSkillManaCost(e),
    c = P.getSkillManaCost(e, r);
  o && (s += `<br />Mana Cost: ${o} (+${c - o})`);
  const l = P.getSkillCooldown(e),
    d = P.getSkillCooldown(e, r);
  l && (s += `<br />Cooldown: ${l / 1e3}s (${(d - l) / 1e3}s)`);
  const g = P.getSkillDuration(e),
    u = P.getSkillDuration(e, r);
  return (
    g && (s += `<br />Duration: ${g / 1e3}s (+${(u - g) / 1e3}s)`),
    i &&
      Object.keys(i).length > 0 &&
      ((s += "<br /><u>Current Effects:</u><br />"),
      Object.entries(i).forEach(([f, h]) => {
        const v = G[f].decimalPlaces || 0,
          E = h.toFixed(v),
          p = h > 0 ? "+" : "";
        s += `${xe(f)}: ${p}${E}<br />`;
      })),
    (a < e.maxLevel() || e.maxLevel() === 1 / 0) &&
      ((s += "<br /><u>Next Level Effects:</u><br />"),
      Object.entries(n).forEach(([f, h]) => {
        const v = G[f].decimalPlaces || 0,
          E = i[f] || 0,
          p = h - E,
          x = h >= 0 ? "+" : "",
          b = p >= 0 ? "+" : "";
        s += `${xe(f)}: ${x}${h.toFixed(
          v
        )} <span class="bonus">(${b}${p.toFixed(v)})</span><br />`;
      })),
    s
  );
};
function De() {
  const t = document.querySelector(".skill-slots");
  if (!t) return;
  t.innerHTML = "";
  let e = 1;
  Object.entries(P.skills).forEach(([a, i]) => {
    if (i.type() === "passive" || !P.isDisplayEnabled(a)) return;
    const r = document.createElement("div");
    (r.className = "skill-slot"), (r.dataset.skillId = a), (r.dataset.key = e);
    const n = document.createElement("div");
    (n.className = "key-indicator"), r.appendChild(n);
    const s = document.createElement("div");
    (s.className = "cooldown-overlay"), r.appendChild(s);
    const o = document.createElement("div");
    (o.className = "skill-icon"),
      (o.style.backgroundImage = `url('./skills/${i.icon()}.jpg')`),
      r.appendChild(o),
      P.activeBuffs.has(a) && r.classList.add("active"),
      r.addEventListener("mouseenter", (c) => ge(fs(a), c)),
      r.addEventListener("mousemove", ue),
      r.addEventListener("mouseleave", he),
      r.addEventListener("click", () => P.toggleSkill(a)),
      t.appendChild(r),
      e++;
  }),
    ma(),
    xs();
}
function fs(t) {
  const e = P.getSkill(t),
    a = (e == null ? void 0 : e.level) || 0,
    i = P.getSkillEffect(t, a);
  let r = `
      <div class="tooltip-header">${e.name()}</div>
      <div class="tooltip-type">${e.type().toUpperCase()}</div>
      <div class="tooltip-level">Level: ${a}</div>
      <div class="tooltip-mana">Mana Cost: ${P.getSkillManaCost(e)}</div>
  `;
  return (
    (r += '<div class="tooltip-effects">'),
    Object.entries(i).forEach(([n, s]) => {
      const o = G[n].decimalPlaces || 0,
        c = s.toFixed(o),
        l = s > 0 ? "+" : "";
      r += `<div>${xe(n)}: ${l}${c}</div>`;
    }),
    (r += "</div>"),
    P.getSkillCooldown(e) &&
      (r += `<div class="tooltip-cooldown">Cooldown: ${
        P.getSkillCooldown(e) / 1e3
      }s</div>`),
    P.getSkillDuration(e) &&
      (r += `<div class="tooltip-duration">Duration: ${
        P.getSkillDuration(e) / 1e3
      }s</div>`),
    r
  );
}
function xs() {
  document.removeEventListener("keydown", Ii),
    document.addEventListener("keydown", Ii);
}
function Ii(t) {
  if (t.key >= "1" && t.key <= "9") {
    const e = document.querySelector(`.skill-slot[data-key="${t.key}"]`);
    if (e) {
      const a = e.dataset.skillId;
      P.toggleSkill(a);
    }
  }
}
function ma() {
  document.querySelectorAll(".skill-slot").forEach((t) => {
    const e = t.dataset.skillId,
      a = P.getSkill(e),
      i = t.querySelector(".cooldown-overlay"),
      r =
        (a.type() === "buff" && P.activeBuffs.has(e)) ||
        (a.type() === "toggle" && a.active);
    if (
      (t.classList.toggle("active", r),
      (a.type() === "buff" || a.type() === "instant") &&
        a != null &&
        a.cooldownEndTime)
    ) {
      const n = a.cooldownEndTime - Date.now();
      if (n > 0) {
        const s = (n / P.getSkillCooldown(a)) * 100;
        (i.style.height = `${s}%`), t.classList.add("on-cooldown");
      } else (i.style.height = "0"), t.classList.remove("on-cooldown");
    }
  });
}
function Ti() {
  j("Not enough mana!", "warning", 1500);
}
let Et = null;
const qi = String.raw;
function gs() {
  (A.currentEnemy = new ze(A.stage)),
    (A.activeTab = "stats"),
    (Et = new Pr()),
    document.querySelectorAll(".tab-btn").forEach((a) => {
      a.addEventListener("click", () => hs(A, a.dataset.tab));
    }),
    document.getElementById("start-btn").addEventListener("click", () => Ca()),
    [
      {
        selector: ".resource-gold",
        tooltip: () => `
        <div class="tooltip-header">Gold <span class="icon">💰</span></div>
        <div class="tooltip-desc">Used to buy upgrades.</div>
        <div class="tooltip-note"></div>
      `,
      },
      {
        selector: ".resource-crystal",
        tooltip: () => `
        <div class="tooltip-header">Crystals <span class="icon">💎</span></div>
        <div class="tooltip-desc">Rare currency for powerful upgrades and skill resets.</div>
        <div class="tooltip-note"></div>
      `,
      },
      {
        selector: ".resource-souls",
        tooltip: () => `
        <div class="tooltip-header">Souls <span class="icon">👻</span></div>
        <div class="tooltip-desc">Earned from killing monsters.</div>
        <div class="tooltip-note"></div>
      `,
      },
    ].forEach(({ selector: a, tooltip: i }) => {
      const r = document.querySelector(a);
      r &&
        (r.classList.add("tooltip-target"),
        r.addEventListener("mouseenter", (n) => ge(i(), n)),
        r.addEventListener("mousemove", ue),
        r.addEventListener("mouseleave", he));
    }),
    Ge(),
    Be(),
    (A.fightMode = "explore"),
    (A.bossLevel = A.bossLevel || 1),
    document.querySelectorAll(".region-tab").forEach((a) => {
      a.addEventListener("click", async () => {
        const i = a.dataset.region;
        if (
          !(await je(
            `Are you sure you want to change to ${i}? That will reset your stage progress and will find you a new enemy`
          ))
        )
          return;
        A.gameStarted && Ca(),
          (A.fightMode = i),
          oe(),
          A.fightMode === "explore"
            ? (A.currentEnemy = new ze(A.stage))
            : A.fightMode === "arena" && Gi(A),
          document
            .querySelectorAll(".region-tab")
            .forEach((o) => o.classList.toggle("active", o === a)),
          Ri(i),
          oe();
        const n = document.getElementById("stage-display");
        i === "explore"
          ? (n.textContent = `Stage: ${A.stage}`)
          : i === "arena" && (n.textContent = `Boss Level: ${y.bossLevel}`);
        const s = document.getElementById("region-selector");
        s.style.display = i === "arena" ? "none" : "";
      });
    }),
    Ri(A.fightMode);
  const e = document.getElementById("region-selector");
  e.style.display = A.fightMode === "arena" ? "none" : "";
}
function hs(t, e) {
  document
    .querySelectorAll(".tab-panel")
    .forEach((a) => a.classList.remove("active")),
    document
      .querySelectorAll(".tab-btn")
      .forEach((a) => a.classList.remove("active")),
    document.getElementById(e).classList.add("active"),
    document.querySelector(`[data-tab="${e}"]`).classList.add("active"),
    e === "stats" && oe(),
    e === "quests" && Be(),
    e === "inventory" && (O == null || O.clearNewItemsFlag()),
    (t.activeTab = e),
    Et && Et.markTabAsVisited(e),
    Ye();
}
function ie() {
  if (!A || typeof A.stage != "number") {
    console.error("Game is not initialized properly:", A);
    return;
  }
  (document.getElementById("souls").textContent = y.souls || 0),
    (document.getElementById("crystals").textContent = y.crystals || 0),
    (document.getElementById("gold").textContent = y.gold || 0);
}
function fe() {
  const t = y.stats;
  A.gameStarted || (t.currentLife = t.life);
  const e = (t.currentLife / t.life) * 100;
  (document.getElementById("life-fill").style.width = `${e}%`),
    (document.getElementById("life-text").textContent = `${Math.max(
      0,
      Math.floor(t.currentLife)
    )}/${Math.floor(t.life)}`);
  const a = (t.currentMana / t.mana) * 100;
  (document.getElementById("mana-fill").style.width = `${a}%`),
    (document.getElementById("mana-text").textContent = `${Math.max(
      0,
      Math.floor(t.currentMana)
    )}/${Math.floor(t.mana)}`);
}
function Se() {
  const t = A.currentEnemy,
    e = (t.currentLife / t.life) * 100;
  (document.getElementById("enemy-life-fill").style.width = `${e}%`),
    (document.getElementById("enemy-life-text").textContent = `${Math.max(
      0,
      Math.floor(t.currentLife)
    )}/${Math.floor(t.life)}`);
  const a = document.getElementById("enemy-damage-value");
  a && (a.textContent = Math.floor(t.damage)),
    A.fightMode === "arena" ||
      (A.fightMode === "explore" &&
        (A.currentEnemy.setEnemyColor(), A.currentEnemy.setEnemyName()));
}
async function Ca() {
  const t = document.getElementById("start-btn");
  A.toggle(),
    (t.textContent = A.gameStarted ? "Stop" : "Fight"),
    (t.style.backgroundColor = A.gameStarted ? "#DC2626" : "#059669");
}
function Ge() {
  const t = A.stage,
    e = document.getElementById("stage-display");
  if (e && A.fightMode === "arena") {
    e.textContent = `Boss Level: ${y.bossLevel}`;
    return;
  }
  e && (e.textContent = `Stage: ${t}`);
}
function j(t, e = "normal", a = 3e3) {
  const i = document.querySelector(".toast");
  i && i.remove();
  const r = document.createElement("div");
  (r.className = `toast ${e}`),
    (r.textContent = t),
    document.body.appendChild(r),
    setTimeout(() => r.classList.add("show"), 10),
    setTimeout(() => {
      r.classList.remove("show"), setTimeout(() => r.remove(), 300);
    }, a);
}
function ge(t, e, a = "") {
  const i = document.getElementById("tooltip");
  (i.innerHTML = t), (i.className = `tooltip show ${a}`), ue(e);
}
function he() {
  const t = document.getElementById("tooltip");
  t.classList.remove("show"), t.classList.add("hidden");
}
function ue(t) {
  const e = document.getElementById("tooltip"),
    a = e.getBoundingClientRect(),
    i = 10;
  let r = t.clientY + i,
    n = t.clientX + i;
  r + a.height > window.innerHeight && (r = t.clientY - a.height - i),
    n + a.width > window.innerWidth && (n = t.clientX - a.width - i),
    (e.style.top = `${r}px`),
    (e.style.left = `${n}px`);
}
document.querySelectorAll(".tooltip-target").forEach((t) => {
  t.addEventListener("mouseenter", (e) => ge("Your tooltip content here", e)),
    t.addEventListener("mousemove", ue),
    t.addEventListener("mouseleave", he);
});
function je(t, e = {}) {
  return new Promise((a) => {
    let i = document.getElementById("custom-confirm-dialog");
    i ||
      ((i = document.createElement("div")),
      (i.id = "custom-confirm-dialog"),
      (i.innerHTML = `
        <div class="confirm-backdrop"></div>
        <div class="confirm-content">
          <div class="confirm-message"></div>
          <div class="confirm-actions">
            <button class="confirm-btn confirm-yes">Yes</button>
            <button class="confirm-btn confirm-no">No</button>
          </div>
        </div>
      `),
      document.body.appendChild(i)),
      (i.querySelector(".confirm-message").innerHTML = t.replace(
        /\n/g,
        "<br>"
      )),
      (i.style.display = "flex"),
      i.classList.add("show");
    const r = i.querySelector(".confirm-yes"),
      n = i.querySelector(".confirm-no"),
      s = () => {
        i.classList.remove("show"),
          setTimeout(() => {
            i.style.display = "none";
          }, 200),
          r.removeEventListener("click", o),
          n.removeEventListener("click", c),
          i.querySelector(".confirm-backdrop").removeEventListener("click", c);
      },
      o = () => {
        s(), a(!0);
      },
      c = () => {
        s(), a(!1);
      };
    r.addEventListener("click", o),
      n.addEventListener("click", c),
      i.querySelector(".confirm-backdrop").addEventListener("click", c);
  });
}
if (!document.getElementById("custom-confirm-dialog-style")) {
  const t = document.createElement("style");
  (t.id = "custom-confirm-dialog-style"),
    (t.textContent = `
    #custom-confirm-dialog {
      position: fixed;
      left: 0; top: 0; right: 0; bottom: 0;
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      font-family: inherit;
    }
    #custom-confirm-dialog.show { display: flex; }
    #custom-confirm-dialog .confirm-backdrop {
      position: absolute;
      left: 0; top: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.4);
    }
    #custom-confirm-dialog .confirm-content {
      position: relative;
      background: #222;
      color: #fff;
      border-radius: 8px;
      padding: 24px 32px;
      min-width: 300px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.4);
      z-index: 1;
      text-align: center;
      animation: popin 0.2s;
    }
    #custom-confirm-dialog .confirm-message {
      margin-bottom: 18px;
      font-size: 1.1em;
      line-height: 1.5;
    }
    #custom-confirm-dialog .confirm-actions {
      display: flex;
      gap: 16px;
      justify-content: center;
    }
    #custom-confirm-dialog .confirm-btn {
      padding: 8px 24px;
      border: none;
      border-radius: 4px;
      font-size: 1em;
      cursor: pointer;
      background: #059669;
      color: #fff;
      transition: background 0.2s;
    }
    #custom-confirm-dialog .confirm-btn.confirm-no {
      background: #DC2626;
    }
    #custom-confirm-dialog .confirm-btn:hover {
      filter: brightness(1.1);
    }
    @keyframes popin {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `),
    document.head.appendChild(t);
}
const xe = (t) =>
  t === "critChance"
    ? "Crit Chance"
    : t === "critDamage"
    ? "Crit Damage"
    : t === "lifeSteal"
    ? "Life Steal"
    : t === "attackSpeed"
    ? "Attack Speed"
    : t === "attackRating" || t === "attackRatingPercent"
    ? "Attack Rating"
    : t === "damage"
    ? "Damage"
    : t === "damagePercent"
    ? "Damage %"
    : t === "lifePercent"
    ? "Life %"
    : t === "manaPercent"
    ? "Mana %"
    : t === "armorPercent"
    ? "Armor %"
    : t === "elementalDamagePercent"
    ? "Elemental Damage %"
    : t === "lifeRegen"
    ? "Life Regeneration"
    : t === "manaRegen"
    ? "Mana Regeneration"
    : t === "bonusGoldPercent"
    ? "Bonus Gold"
    : t === "bonusExperience"
    ? "Bonus Experience"
    : t === "blockChance"
    ? "Block Chance"
    : t === "fireDamage"
    ? "Fire Damage"
    : t === "coldDamage"
    ? "Cold Damage"
    : t === "airDamage"
    ? "Air Damage"
    : t === "earthDamage"
    ? "Earth Damage"
    : t === "fireDamagePercent"
    ? "Fire Damage %"
    : t === "coldDamagePercent"
    ? "Cold Damage %"
    : t === "airDamagePercent"
    ? "Air Damage %"
    : t === "earthDamagePercent"
    ? "Earth Damage %"
    : t === "strength"
    ? "Strength"
    : t === "strengthPercent"
    ? "Strength %"
    : t === "agility"
    ? "Agility"
    : t === "agilityPercent"
    ? "Agility %"
    : t === "vitality"
    ? "Vitality"
    : t === "vitalityPercent"
    ? "Vitality %"
    : t === "wisdom"
    ? "Wisdom"
    : t === "wisdomPercent"
    ? "Wisdom %"
    : t === "endurance"
    ? "Endurance"
    : t === "endurancePercent"
    ? "Endurance %"
    : t === "dexterity"
    ? "Dexterity"
    : t === "dexterityPercent"
    ? "Dexterity %"
    : t === "lifePerHit"
    ? "Life Per Hit"
    : t === "lifePerHitPercent"
    ? "Life Per Hit %"
    : t === "manaPerHit"
    ? "Mana Per Hit"
    : t === "manaPerHitPercent"
    ? "Mana Per Hit %"
    : t === "thornsDamage"
    ? "Thorns Damage"
    : t === "thornsDamagePercent"
    ? "Thorns Damage %"
    : t === "cooldownReductionPercent"
    ? "Cooldown Reduction %"
    : t === "manaCostReductionPercent"
    ? "Mana Cost Reduction %"
    : t === "buffDurationPercent"
    ? "Buff Duration %"
    : t === "itemBonusesPercent"
    ? "Item Bonuses %"
    : t === "doubleDamageChance"
    ? "Double Damage Chance"
    : t === "resurrectionChance"
    ? "Resurrection Chance"
    : t === "reflectFireDamage"
    ? "Reflect Fire Damage"
    : t === "skillPoints"
    ? "Bonus Skill Points"
    : t
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (e) => e.toUpperCase())
        .replace(/Percent$/, "%")
        .trim();
function Ye() {
  var a;
  if (!Et) return;
  const t =
      ((a = Te == null ? void 0 : Te.quests) == null
        ? void 0
        : a.filter((i) => i.isComplete(Q) && !i.claimed).length) || 0,
    e = {
      unallocatedStatPoints: (y == null ? void 0 : y.statPoints) || 0,
      hasNewInventoryItems: (O == null ? void 0 : O.hasNewItems) || !1,
      unallocatedSkillPoints: (P == null ? void 0 : P.skillPoints) || 0,
      claimableQuests: t,
      currentTab: (A == null ? void 0 : A.activeTab) || "stats",
    };
  Et.updateAll(e);
}
function Ri(t) {
  const e = document.getElementById("region-panel-container");
  if (e)
    if (((e.innerHTML = ""), t === "arena")) {
      const a = document.createElement("div");
      (a.id = "arena-panel"),
        a.classList.add("region-panel"),
        (a.innerHTML = qi`<div class="enemy-section">
      <div class="enemy-main-row">
        <div class="enemy-avatar"></div>
        <div class="enemy-life-and-stats">
          <div class="enemy-name"></div>
          <div class="enemy-life-bar">
            <div id="enemy-life-fill"></div>
            <div id="enemy-life-text"></div>
          </div>
          <div class="enemy-stats">
            <div class="enemy-damage">Damage: <span id="enemy-damage-value"></span></div>
          </div>
        </div>
      </div>
    </div>`),
        e.appendChild(a),
        Ct(A.currentEnemy);
    } else {
      const a = document.createElement("div");
      (a.id = "explore-panel"),
        a.classList.add("region-panel"),
        (a.innerHTML = qi`<div class="enemy-section">
      <div class="enemy-main-row">
        <div class="enemy-avatar"></div>
        <div class="enemy-life-and-stats">
          <div class="enemy-name"></div>
          <div class="enemy-life-bar">
            <div id="enemy-life-fill"></div>
            <div id="enemy-life-text"></div>
          </div>
          <div class="enemy-stats">
            <div class="enemy-damage">Damage: <span id="enemy-damage-value"></span></div>
          </div>
        </div>
      </div>
    </div>`),
        e.appendChild(a),
        Se(),
        ie();
    }
}
const vs = String.raw,
  ht = {
    extraLife: {
      label: "Extra Life",
      bonus: "Gain 1 resurrection per run",
      baseCost: 1e3,
      oneTime: !0,
    },
    bonusGold: {
      label: "Bonus Gold",
      bonus: 0.05,
      baseCost: 3,
      costIncrement: 0,
      stat: "bonusGold",
    },
    bonusExperience: {
      label: "Bonus Experience",
      bonus: 0.05,
      baseCost: 3,
      costIncrement: 0,
      stat: "bonusExperience",
    },
    damageBoost: {
      label: "Damage Boost",
      bonus: 0.03,
      baseCost: 5,
      costIncrement: 0,
      stat: "damagePercent",
    },
    lifeBoost: {
      label: "Life Boost",
      bonus: 0.03,
      baseCost: 5,
      costIncrement: 0,
      stat: "lifePercent",
    },
    manaBoost: {
      label: "Mana Boost",
      bonus: 0.03,
      baseCost: 10,
      costIncrement: 0,
      stat: "manaPercent",
    },
    extraMaterialDropPercent: {
      label: "Extra Material Drop Chance",
      bonus: 0.01,
      baseCost: 10,
      costIncrement: 1,
      stat: "extraMaterialDropPercent",
      suffix: "%",
    },
    extraMaterialDropMax: {
      label: "Extra Material Drop Max",
      bonus: 1,
      baseCost: 250,
      costIncrement: 0,
      stat: "extraMaterialDropMax",
    },
  };
class ys {
  constructor(e = null) {
    (this.soulUpgrades = {}),
      nt(e, this),
      (this.modal = null),
      (this.currentStat = null),
      (this.selectedQty = 1);
  }
  async initializeSoulShopUI() {
    const e = document.querySelector("#soulshop");
    if (!e) return;
    const a = e.querySelector(".soul-shop-upgrades-container");
    a &&
      (a.innerHTML = `
        <div class="crystal-upgrades-grid">
          ${Object.entries(ht)
            .map(([i, r]) => this.createSoulUpgradeButton(i, r))
            .join("")}
        </div>
      `),
      this.setupSoulUpgradeHandlers(),
      this.modal || this.createUpgradeModal();
  }
  resetSoulShop() {
    (this.soulUpgrades = {}),
      (this.modal = null),
      (this.currentStat = null),
      (this.selectedQty = 1);
  }
  createSoulUpgradeButton(e, a) {
    const i = a.oneTime,
      r = a.multiple,
      n = typeof a.bonus == "number" && !a.oneTime;
    let s = i && this.soulUpgrades[e];
    const o = i || r ? void 0 : this.soulUpgrades[e] || 0;
    let c;
    i || r
      ? (c = a.bonus)
      : n
      ? (c = `+${Math.floor(a.bonus * (this.soulUpgrades[e] || 0) * 100)}${
          a.suffix || ""
        } ${a.label}`)
      : (c = `+${a.bonus * (this.soulUpgrades[e] || 0)} ${a.label}`);
    const l =
      i || r
        ? a.baseCost
        : a.baseCost + (a.costIncrement || 0) * (this.soulUpgrades[e] || 0);
    return `
      <button class="crystal-upgrade-btn ${
        s ? "purchased" : ""
      }" data-stat="${e}" ${s ? "disabled" : ""}>
        <span class="upgrade-name">${a.label} ${
      i || r ? "" : `(Lvl ${o})`
    }</span>
        <span class="upgrade-bonus">${c}</span>
        <span class="upgrade-cost">${s ? "Purchased" : `${l} Souls`}</span>
      </button>
    `;
  }
  setupSoulUpgradeHandlers() {
    document.querySelectorAll(".crystal-upgrade-btn").forEach((a) => {
      a.addEventListener("click", () => {
        const i = a.dataset.stat;
        this.openUpgradeModal(i);
      });
    });
  }
  createUpgradeModal() {
    const e = vs`
      <div class="training-modal-content">
        <button class="training-modal-close" aria-label="Close">&times;</button>
        <h2 class="modal-title"></h2>
        <div class="modal-fields"></div>
        <div class="modal-controls" style="display:none;"></div>
        <button class="modal-buy">Buy</button>
      </div>
    `;
    (this.modal = $e({
      id: "soulshop-modal",
      className: "training-modal hidden",
      content: e,
      onClose: () => this.closeModal(),
    })),
      (this.modal.querySelector(".training-modal-close").onclick = () =>
        this.closeModal()),
      (this.modal.querySelector(".modal-buy").onclick = () =>
        this.buyBulk(this.currentStat, this.selectedQty));
  }
  openUpgradeModal(e) {
    const a = ht[e];
    if (!a) return;
    this.currentStat = e;
    const i = this.modal;
    i.querySelector(".modal-title").textContent = a.label;
    const r = i.querySelector(".modal-fields"),
      n = i.querySelector(".modal-controls"),
      s = i.querySelector(".modal-buy");
    this.selectedQty = 1;
    const o = typeof a.bonus == "number" && !a.oneTime;
    if (o)
      (r.innerHTML = `
        <p>Current Level: <span class="modal-level"></span></p>
        <p>Current Bonus: <span class="modal-bonus"></span></p>
        <p>Next Level Bonus: <span class="modal-next-bonus"></span></p>
        <p>Total Bonus: <span class="modal-total-bonus"></span></p>
        <p>Total Cost: <span class="modal-total-cost"></span> Souls (<span class="modal-qty">1</span>)</p>
      `),
        (n.style.display = ""),
        (n.innerHTML = `
        <button data-qty="1">+1</button>
        <button data-qty="10">+10</button>
        <button data-qty="50">+50</button>
        <button data-qty="max">Max</button>
      `),
        n.querySelectorAll("button").forEach((c) => {
          c.onclick = () => {
            (this.selectedQty =
              c.dataset.qty === "max" ? "max" : parseInt(c.dataset.qty, 10)),
              this.updateModalDetails();
          };
        }),
        (s.style.display = ""),
        this.updateModalDetails();
    else if (a.oneTime) {
      n.style.display = "none";
      const c = !!this.soulUpgrades[e];
      (r.innerHTML = `
        <p>${a.bonus && typeof a.bonus == "string" ? a.bonus : ""}</p>
        <p>Cost: <span class="modal-total-cost">${a.baseCost}</span> Souls</p>
        <div class="modal-status">${
          c
            ? '<span style="color:#10b981;font-weight:bold;">Purchased</span>'
            : ""
        }</div>
      `),
        (s.style.display = c ? "none" : ""),
        (s.disabled = c);
    } else
      a.multiple &&
        ((n.style.display = "none"),
        (r.innerHTML = `
        <p>${a.bonus && typeof a.bonus == "string" ? a.bonus : ""}</p>
        <p>Cost: <span class="modal-total-cost">${a.baseCost}</span> Souls</p>
      `),
        (s.style.display = ""),
        (s.disabled = !1));
    i.classList.remove("hidden"), o && this.updateModalDetails();
  }
  updateModalDetails() {
    if (!this.currentStat) return;
    const e = this.currentStat,
      a = ht[e],
      i = this.modal,
      r = (s) => i.querySelector(s);
    if (typeof a.bonus == "number" && !a.oneTime) {
      const s = this.soulUpgrades[e] || 0,
        o = y.souls;
      let c = this.selectedQty === "max" ? 0 : this.selectedQty,
        l = 0;
      if (this.selectedQty === "max") {
        let m = s,
          f = o;
        for (;;) {
          const h = a.baseCost + (a.costIncrement || 0) * m;
          if (f < h) break;
          (f -= h), (l += h), m++, c++;
        }
      } else
        for (let m = 0; m < c; m++) {
          const f = a.baseCost + (a.costIncrement || 0) * (s + m);
          l += f;
        }
      const d = (a.bonus || 0) * c,
        g = 0;
      r(".modal-qty") && (r(".modal-qty").textContent = c),
        r(".modal-total-cost") && (r(".modal-total-cost").textContent = l),
        r(".modal-total-bonus") &&
          (r(".modal-total-bonus").textContent = `+${d.toFixed(g)} ${a.label}`),
        r(".modal-level") && (r(".modal-level").textContent = s),
        r(".modal-bonus") &&
          (r(".modal-bonus").textContent = this.getBonusText(e, a, s)),
        r(".modal-next-bonus") &&
          (r(".modal-next-bonus").textContent = this.getBonusText(e, a, s + 1));
      const u = r(".modal-buy");
      u && (u.disabled = c <= 0 || l > o);
    }
  }
  getBonusText(e, a, i) {
    return typeof a.bonus == "string"
      ? a.bonus
      : typeof a.bonus == "number" && !a.oneTime
      ? `+${Math.floor(a.bonus * i * 100)}${a.suffix || "%"} ${a.label}`
      : `+${a.bonus * i}${a.suffix || ""} ${a.label}`;
  }
  async buyBulk(e, a) {
    const i = ht[e];
    if (!i) return;
    if (typeof i.bonus == "number" && !i.oneTime) {
      let n = 0;
      if (a === "max") {
        let s = this.soulUpgrades[e] || 0;
        for (;;) {
          const o = i.baseCost + (i.costIncrement || 0) * s;
          if (y.souls < o) break;
          (y.souls -= o), s++, n++;
        }
        this.soulUpgrades[e] = s;
      } else
        for (let s = 0; s < a; s++) {
          const o =
            i.baseCost +
            (i.costIncrement || 0) * ((this.soulUpgrades[e] || 0) + s);
          if (y.souls < o) break;
          (y.souls -= o),
            (this.soulUpgrades[e] = (this.soulUpgrades[e] || 0) + 1),
            n++;
        }
      A.saveGame(),
        ie(),
        this.updateModalDetails(),
        this.initializeSoulShopUI(),
        j(`Upgraded ${i.label} by ${n} levels!`, n > 0 ? "success" : "error");
      return;
    }
    if (i.oneTime) {
      if (this.soulUpgrades[e]) return;
      const n = i.baseCost;
      if (y.souls < n) {
        j("Not enough souls!", "error");
        return;
      }
      (y.souls -= n), (this.soulUpgrades[e] = !0);
    }
    if (i.multiple) {
      const n = i.baseCost;
      if (y.souls < n) {
        j("Not enough souls!", "error");
        return;
      }
      (y.souls -= n), (this.soulUpgrades[e] = (this.soulUpgrades[e] || 0) + 1);
    }
    A.saveGame(),
      ie(),
      this.initializeSoulShopUI(),
      this.closeModal(),
      j(`Purchased ${i.label}!`, "success");
  }
  closeModal() {
    this.modal && this.modal.classList.add("hidden");
  }
}
const bs = 3;
class Es {
  constructor(e = null) {
    this.setBaseStats(e);
  }
  setBaseStats(e = null) {
    (this.level = 1),
      (this.gold = 0),
      (this.crystals = 0),
      (this.exp = 0),
      (this.statPoints = 0),
      (this.souls = 0),
      (this.highestStage = 1),
      (this.bossLevel = 1),
      (this.primaryStats = {
        strength: 0,
        agility: 0,
        vitality: 0,
        wisdom: 0,
        endurance: 0,
        dexterity: 0,
      }),
      (this.permaStats = {});
    for (const [a, i] of Object.entries(G)) this.permaStats[a] = 0;
    this.stats = {};
    for (const [a, i] of Object.entries(G)) this.stats[a] = i.base;
    (this.stats.currentLife = this.stats.life),
      (this.stats.currentMana = this.stats.mana),
      nt(e, this);
  }
  getExpToNextLevel() {
    return 66 + 84 * (this.level - 1);
  }
  gainExp(e) {
    for (this.exp += e; this.exp >= this.getExpToNextLevel(); ) this.levelUp();
  }
  gainGold(e) {
    Q.increment("totalGoldEarned", null, e), (this.gold += e);
  }
  gainCrystals(e) {
    Q.increment("totalCrystalsEarned", null, e), (this.crystals += e);
  }
  gainSouls(e) {
    Q.increment("totalSoulsEarned", null, e), (this.souls += e);
  }
  levelUp() {
    (this.exp -= this.getExpToNextLevel()),
      this.level++,
      (this.statPoints += bs),
      this.recalculateFromAttributes(),
      _r(`LEVEL UP! (${this.level})`),
      P.addSkillPoints(1),
      fe(),
      oe(),
      Ki(),
      A.saveGame(),
      rt(),
      Ye();
  }
  allocateStat(e) {
    return this.statPoints > 0 && this.primaryStats[e] !== void 0
      ? (this.primaryStats[e]++,
        this.statPoints--,
        this.recalculateFromAttributes(),
        e === "vitality" &&
          !A.gameStarted &&
          (this.stats.currentLife = this.stats.life),
        A.saveGame(),
        Ye(),
        !0)
      : !1;
  }
  recalculateFromAttributes() {
    const e = P.getAllSkillTreeBonuses(),
      a = O.getEquipmentBonuses(),
      i = Ae.getTrainingBonuses();
    this.calculatePrimaryStats(e, a, i);
    const r = this.calculateFlatValues({}, e, a, i),
      n = this.calculatePercentBonuses({}, e, a, i);
    Object.keys(ke).forEach((l) => {
      const d = n[`${l}Percent`] || 0;
      let g = r[l] * (1 + d);
      const u = G[l].decimalPlaces ?? 0;
      this.stats[l] = u > 0 ? Number(g.toFixed(u)) : Math.floor(g);
    });
    const s = this.calculateAttributeEffects(),
      o = this.calculateFlatValues(s, e, a, i),
      c = this.calculatePercentBonuses(s, e, a, i);
    this.applyFinalCalculations(o, c), fe(), oe();
  }
  calculatePrimaryStats(e, a, i) {
    (this.stats.strength =
      this.primaryStats.strength +
      this.permaStats.strength +
      (a.strength || 0) +
      (e.strength || 0) +
      (i.strength || 0)),
      (this.stats.agility =
        this.primaryStats.agility +
        this.permaStats.agility +
        (a.agility || 0) +
        (e.agility || 0) +
        (i.agility || 0)),
      (this.stats.vitality =
        this.primaryStats.vitality +
        this.permaStats.vitality +
        (a.vitality || 0) +
        (e.vitality || 0) +
        (i.vitality || 0)),
      (this.stats.wisdom =
        this.primaryStats.wisdom +
        this.permaStats.wisdom +
        (a.wisdom || 0) +
        (e.wisdom || 0) +
        (i.wisdom || 0)),
      (this.stats.endurance =
        this.primaryStats.endurance +
        this.permaStats.endurance +
        (a.endurance || 0) +
        (e.endurance || 0) +
        (i.endurance || 0)),
      (this.stats.dexterity =
        this.primaryStats.dexterity +
        this.permaStats.dexterity +
        (a.dexterity || 0) +
        (e.dexterity || 0) +
        (i.dexterity || 0));
  }
  calculateAttributeEffects() {
    const e = {};
    for (const a in G) {
      let i = 0,
        r = 0;
      for (const n in ke) {
        const s = ke[n].effects,
          o = a + "PerPoint";
        o in s && (i += (this.stats[n] || 0) * s[o]);
        const c = a + "PercentPer";
        c in s &&
          s[c].enabled &&
          (r += Math.floor((this.stats[n] || 0) / s[c].points) * s[c].value);
      }
      i !== 0 && (e[a] = i), r !== 0 && (e[a + "Percent"] = r);
    }
    return e;
  }
  calculateFlatValues(e, a, i, r) {
    const n = {};
    for (const s in G)
      n[s] =
        (this.primaryStats[s] ?? 0) +
        (this.permaStats[s] ?? 0) +
        (G[s].base ?? 0) +
        (e[s] ?? 0) +
        (G[s].levelUpBonus ?? 0) * (this.level - 1) +
        (r[s] ?? 0) +
        (i[s] ?? 0) +
        (a[s] ?? 0);
    return n;
  }
  calculatePercentBonuses(e, a, i, r) {
    const n = {};
    for (const s in G)
      s.endsWith("Percent") &&
        (n[s] =
          (e[s] || 0) +
          (this.permaStats[s] || 0) / 100 +
          (a[s] || 0) / 100 +
          (i[s] || 0) / 100 +
          (r[s] || 0) / 100);
    return n;
  }
  getSoulShopBonuses() {
    const e = {};
    if (!qe || !qe.soulUpgrades) return e;
    const { soulUpgrades: a } = qe,
      i = ht;
    for (const [r, n] of Object.entries(i))
      n &&
        typeof n.bonus == "number" &&
        typeof n.stat == "string" &&
        a[r] &&
        (e[n.stat] = (e[n.stat] || 0) + a[r] * n.bonus);
    return e;
  }
  applyFinalCalculations(e, a) {
    for (const i in G)
      if (i.endsWith("Percent")) {
        let r = a[i] || 0;
        const n = this.getSoulShopBonuses();
        n[i] && (r += n[i]), (this.stats[i] = r), (a[i] = r);
      }
    for (const i in G)
      if (!i.endsWith("Percent")) {
        let r = a[i + "Percent"] || 0,
          n = e[i];
        if ((r && (n *= 1 + r), i === "attackSpeed")) {
          const c = e.attackSpeed - G.attackSpeed.base;
          n = G.attackSpeed.base + (c > 0 ? 3 * (1 - Math.exp(-c / 7)) : 0);
        }
        const s = this.getSoulShopBonuses();
        i.endsWith("Percent") ? (n += s[i] || 0) : s[i] && (n += s[i]);
        const o = G[i].decimalPlaces ?? 0;
        (n = o > 0 ? Number(n.toFixed(o)) : Math.floor(n)),
          i === "blockChance" && (n = Math.min(n, 75)),
          i === "critChance" && (n = Math.min(n, 100)),
          i === "attackSpeed" && (n = Math.min(n, 5)),
          i === "resurrectionChance" && (n = Math.min(n, 50)),
          i === "extraMaterialDropMax" && (n = Math.max(n, 1)),
          (this.stats[i] = n);
      }
    (this.stats.fireDamage = Math.floor(
      e.fireDamage *
        (1 + this.stats.elementalDamagePercent + a.fireDamagePercent)
    )),
      (this.stats.coldDamage = Math.floor(
        e.coldDamage *
          (1 + this.stats.elementalDamagePercent + a.coldDamagePercent)
      )),
      (this.stats.airDamage = Math.floor(
        e.airDamage *
          (1 + this.stats.elementalDamagePercent + a.airDamagePercent)
      )),
      (this.stats.earthDamage = Math.floor(
        e.earthDamage *
          (1 + this.stats.elementalDamagePercent + a.earthDamagePercent)
      )),
      (this.stats.reflectFireDamage = (() => {
        const i = e.fireDamage + e.reflectFireDamage;
        return Math.floor(
          i * (1 + this.stats.elementalDamagePercent + a.fireDamagePercent)
        );
      })());
  }
  calculateArmorReduction() {
    let e = A.stage || 1;
    A.currentRegion === "arena" && (e = this.bossLevel * 15 || 15);
    const a = this.stats.armor,
      r = 100 * (1 + (e - 1) * 0.15),
      n = (a / (a + r)) * 100;
    return Math.min(n, 75);
  }
  regenerate() {
    (this.stats.currentLife = Math.min(
      this.stats.life,
      this.stats.currentLife + this.stats.lifeRegen / 10
    )),
      (this.stats.currentMana = Math.min(
        this.stats.mana,
        this.stats.currentMana + this.stats.manaRegen / 10
      )),
      fe();
  }
  calculateTotalDamage(e = 0) {
    const a = Math.random() * 100 < this.stats.critChance;
    let i = this.stats.damage * (1 + this.stats.damagePercent / 100);
    const r = A.currentEnemy.element;
    let n = i + e;
    const s = P.applyToggleEffects();
    let o = 0;
    const c = {
      fire: this.stats.fireDamage,
      cold: this.stats.coldDamage,
      air: this.stats.airDamage,
      earth: this.stats.earthDamage,
    };
    return (
      s.fireDamage && (c.fire += s.fireDamage),
      s.coldDamage && (c.cold += s.coldDamage),
      s.airDamage && (c.air += s.airDamage),
      s.earthDamage && (c.earth += s.earthDamage),
      Object.entries(c).forEach(([l, d]) => {
        d > 0 &&
          (Er[l] === r ? (o += d * 2) : l === r ? (o += 0) : (o += d * 0.25));
      }),
      (n += o),
      s.damage && (n += s.damage),
      s.lifePerHit && A.healPlayer(s.lifePerHit),
      s.manaPerHit && A.restoreMana(s.manaPerHit),
      s.doubleDamageChance &&
        Math.random() * 100 < s.doubleDamageChance &&
        (n *= 2),
      { damage: a ? n * this.stats.critDamage : n, isCritical: a }
    );
  }
  calculateTotalThornsDamage(e) {
    return (
      (this.stats.thornsDamage + e) *
        (1 + this.stats.thornsDamagePercent / 100) || 0
    );
  }
  willRessurect() {
    return this.stats.resurrectionChance > 0 &&
      Math.random() * 100 < this.stats.resurrectionChance
      ? ((this.stats.currentLife = this.stats.life),
        (this.stats.currentMana = this.stats.mana),
        !0)
      : !1;
  }
  calculateBlockHealing() {
    if (P.skills.evasion) {
      const a = this.stats.life * 0.05;
      return A.healPlayer(a), a;
    }
    return 0;
  }
  getStartingStage() {
    return be.crystalUpgrades.startingStage || 1;
  }
  resetAttributes() {
    let e = 0;
    for (const a in this.primaryStats)
      (e += this.primaryStats[a]), (this.primaryStats[a] = 0);
    (this.statPoints += e), this.recalculateFromAttributes(), A.saveGame();
  }
}
const pt = Object.fromEntries(
  Object.entries(G)
    .filter(([t, e]) => e.item)
    .map(([t, e]) => [t, e.item])
);
class ba {
  constructor(e, a, i, r = null) {
    (this.type = e),
      (this.level = a),
      (this.rarity = i.toUpperCase()),
      (this.stats = r || this.generateStats()),
      (this.id = crypto.randomUUID());
  }
  generateStats() {
    const e = {},
      a = gr[this.type],
      i = re[this.rarity].statMultiplier,
      r = re[this.rarity].totalStats,
      n = (c, l) => {
        const g =
            pt[c].scaling === "capped"
              ? l * i * Math.min(1 + this.level * (1 / 200), 2)
              : l * i * (1 + this.level * 0.03),
          u = G[c].decimalPlaces || 0;
        return Number(g.toFixed(u));
      };
    a.mandatory.forEach((c) => {
      const l = pt[c],
        d = Math.random() * (l.max - l.min) + l.min;
      e[c] = n(c, d);
    });
    const s = r - a.mandatory.length,
      o = [...a.possible].filter((c) => !a.mandatory.includes(c));
    for (let c = 0; c < s && o.length > 0; c++) {
      const l = Math.floor(Math.random() * o.length),
        d = o.splice(l, 1)[0],
        g = pt[d],
        u = Math.random() * (g.max - g.min) + g.min;
      e[d] = n(d, u);
    }
    return e;
  }
  getIcon() {
    return xr[this.type] || "❓";
  }
  getDisplayName() {
    return `${re[this.rarity].name} ${this.type}`;
  }
  getTooltipHTML(e = !1) {
    const a = String.raw,
      i = (r) =>
        r.endsWith("Percent") ||
        r === "critChance" ||
        r === "blockChance" ||
        r === "lifeSteal";
    return a`
      <div class="item-tooltip">
        <div class="item-name" style="color: ${re[this.rarity].color};">
          ${e ? "(Equipped) " : ""}${this.getDisplayName()}
        </div>
        <div class="item-level">Level ${this.level}</div>
        <div class="item-stats">
          ${Object.entries(this.stats)
            .map(([r, n]) => {
              const s = G[r].decimalPlaces || 0,
                o = n.toFixed(s);
              return `<div>${xe(r)}: ${o}${i(r) ? "%" : ""}</div>`;
            })
            .join("")}
        </div>
      </div>
    `;
  }
  getBaseStatValues() {
    const e = {};
    for (const a of Object.keys(this.stats)) {
      const i = pt[a];
      if (!i) continue;
      const r = i.scaling,
        n = re[this.rarity].statMultiplier,
        s = this.stats[a];
      if (r === "capped") {
        const o = Math.min(1 + this.level * 0.005, 2);
        e[a] = s / (n * o);
      } else {
        const o = 1 + this.level * 0.03;
        e[a] = s / (n * o);
      }
    }
    return e;
  }
  applyLevelToStats(e, a) {
    for (const i of Object.keys(this.stats)) {
      const r = pt[i];
      if (!r) continue;
      const n = r.scaling,
        s = re[this.rarity].statMultiplier,
        o = e[i];
      if (o === void 0) continue;
      let c;
      if (n === "capped") {
        const d = Math.min(1 + a * 0.005, 2);
        c = o * s * d;
      } else {
        const d = 1 + a * 0.03;
        c = o * s * d;
      }
      const l = G[i].decimalPlaces || 0;
      this.stats[i] = Number(c.toFixed(l));
    }
    this.level = a;
  }
}
function Cs(t) {
  const e = document.querySelector(".grid-container");
  for (let c = 0; c < at; c++) {
    const l = document.createElement("div");
    l.classList.add("grid-cell"),
      c < it && l.classList.add("persistent"),
      e.appendChild(l);
  }
  Me(t);
  const a = document.getElementById("sort-inventory"),
    i = document.getElementById("items-tab"),
    r = document.getElementById("materials-tab"),
    n = document.querySelector(".materials-grid");
  function s() {
    i.classList.contains("active"), (a.textContent = "🔃");
  }
  s(),
    i &&
      r &&
      e &&
      n &&
      (i.addEventListener("click", () => {
        i.classList.add("active"),
          r.classList.remove("active"),
          (e.style.display = ""),
          (n.style.display = "none"),
          s();
      }),
      r.addEventListener("click", () => {
        r.classList.add("active"),
          i.classList.remove("active"),
          (e.style.display = "none"),
          (n.style.display = ""),
          Ne(t),
          s();
      })),
    a.addEventListener("click", () => {
      i.classList.contains("active")
        ? ($i(), j("Sorted items by rarity, then level", "success"))
        : (ks(), j("Sorted materials by quantity, then id", "success"));
    }),
    document.querySelectorAll(".salvage-options div").forEach((c) => {
      c.addEventListener("click", () => {
        const l = c.dataset.rarity;
        O.salvageItemsByRarity(l), $i();
      });
    });
  const o = document.querySelector(".materials-container");
  if (o) {
    o.innerHTML = "";
    for (let c = 0; c < We; c++) {
      const l = document.createElement("div");
      l.classList.add("materials-cell"), o.appendChild(l);
    }
  }
  a.addEventListener("mouseenter", (c) => {
    const d = `<div class="item-tooltip"><b>${
      i.classList.contains("active")
        ? "Sort items by rarity then level"
        : "Sort materials"
    }</b></div>`;
    ge(d, c, "flex-tooltip");
  }),
    a.addEventListener("mousemove", ue),
    a.addEventListener("mouseleave", he);
}
function Me(t) {
  t || (t = O),
    Fa(),
    document.querySelectorAll(".grid-cell").forEach((i) => (i.innerHTML = "")),
    document.querySelectorAll(".inventory-item").forEach((i) => i.remove()),
    t.inventoryItems.forEach((i, r) => {
      const n = document.querySelector(`.grid-cell:nth-child(${r + 1})`),
        s = String.raw;
      n &&
        i &&
        (n.innerHTML = s`
        <div class="inventory-item rarity-${i.rarity.toLowerCase()}" draggable="true" data-item-id="${
          i.id
        }">
          <div class="item-icon">${i.getIcon()}</div>
        </div>
      `);
    }),
    Object.entries(t.equippedItems).forEach(([i, r]) => {
      const n = document.querySelector(`[data-slot="${i}"]`);
      if (n && r) {
        const s = document.createElement("div");
        (s.className = "inventory-item"),
          (s.draggable = !0),
          (s.dataset.itemId = r.id),
          (s.style.borderColor = re[r.rarity].color),
          (s.innerHTML = `<div class="item-icon">${r.getIcon()}</div>`);
        const o = n.querySelector(".inventory-item");
        o ? n.replaceChild(s, o) : n.appendChild(s);
      }
    }),
    Ds(),
    Ne(t);
}
function Fa() {
  document.querySelectorAll(".item-tooltip").forEach((e) => e.remove());
}
function Ds() {
  Bs(), Ss(), As(), Ms();
  const t = document.querySelector(".inventory-trash");
  t &&
    (t.addEventListener("dragover", (e) => {
      e.preventDefault(), t.classList.add("drag-over");
    }),
    t.addEventListener("dragleave", () => {
      t.classList.remove("drag-over");
    }),
    t.addEventListener("drop", (e) => {
      e.preventDefault(), t.classList.remove("drag-over");
      const a = e.dataTransfer.getData("text/plain"),
        i = O.getItemById(a);
      if (!i) return;
      let r = !1;
      const n = O.inventoryItems.findIndex((s) => s && s.id === i.id);
      if (n !== -1) (O.inventoryItems[n] = null), (r = !0);
      else
        for (const [s, o] of Object.entries(O.equippedItems))
          if (o && o.id === i.id) {
            delete O.equippedItems[s], (r = !0);
            break;
          }
      if (r) {
        let s = 10 * (i.level + 1) * (Oe.indexOf(i.rarity) + 1),
          o = i.rarity === "MYTHIC" ? 1 : 0;
        s > 0 && (y.gold = (y.gold || 0) + s),
          o > 0 && (y.crystals = (y.crystals || 0) + o);
        let c = `Salvaged 1 ${i.rarity.toLowerCase()} item`;
        s > 0 && (c += `, gained ${s} gold`),
          o > 0 && (c += `, gained ${o} crystal${o > 1 ? "s" : ""}`),
          j(c, "success"),
          Me(),
          A.saveGame();
      }
    }),
    t.addEventListener("mouseenter", (e) => {
      ge(
        `
      <div class="item-tooltip" style="text-align:center;">
        <div style="font-size:2em;">🗑️</div>
        <b>Salvage Item</b>
        <div style="margin-top:4px;font-size:0.95em;">
          Drag and drop an item here to salvage it.
        </div>
      </div>
    `,
        e,
        "flex-tooltip"
      );
    }),
    t.addEventListener("mousemove", ue),
    t.addEventListener("mouseleave", he));
}
function Bs() {
  document.querySelectorAll(".grid-cell").forEach((a) => {
    const i = a.cloneNode(!0);
    a.parentNode.replaceChild(i, a);
  }),
    document.querySelectorAll(".equipment-slot").forEach((a) => {
      const i = a.cloneNode(!0);
      a.parentNode.replaceChild(i, a);
    });
}
function Ss() {
  document.querySelectorAll(".grid-cell").forEach((e) => {
    e.addEventListener("dragover", Xi.bind(O)),
      e.addEventListener("drop", Zi.bind(O));
  });
}
function Xi(t) {
  t.preventDefault();
}
function Zi(t) {
  var n;
  t.preventDefault(), Fa();
  const e = t.dataTransfer.getData("text/plain"),
    a = O.getItemById(e),
    i = t.target.closest(".equipment-slot"),
    r = t.target.closest(".grid-cell");
  if (a) {
    if (i) {
      if (
        ((n = Object.entries(O.equippedItems).find(
          ([o, c]) => (c == null ? void 0 : c.id) === a.id
        )) == null
          ? void 0
          : n[0]) === i.dataset.slot
      )
        return;
      i.dataset.slot === "ring1" || i.dataset.slot === "ring2"
        ? O.handleRingSlotDrop(a, i.dataset.slot)
        : O.canEquipInSlot(a, i.dataset.slot) && O.equipItem(a, i.dataset.slot);
    } else if (r) {
      const s = Array.from(r.parentNode.children).indexOf(r);
      O.moveItemToPosition(a, s);
    }
    Me();
  }
}
function As() {
  document.querySelectorAll(".equipment-slot").forEach((e) => {
    e.addEventListener("dragover", Xi.bind(O)),
      e.addEventListener("drop", Zi.bind(O));
  });
}
function Ms() {
  document.querySelectorAll(".inventory-item").forEach((e) => {
    e.addEventListener("dblclick", (a) => {
      var n;
      const i = O.getItemById(e.dataset.itemId);
      if (!i) return;
      const r =
        (n = Object.entries(O.equippedItems).find(
          ([s, o]) => (o == null ? void 0 : o.id) === i.id
        )) == null
          ? void 0
          : n[0];
      if (r) {
        const s = O.inventoryItems.findIndex((o) => o === null);
        s !== -1 &&
          ((O.inventoryItems[s] = i),
          delete O.equippedItems[r],
          y.recalculateFromAttributes(),
          Me(),
          A.saveGame());
        return;
      }
      for (const [s, o] of Object.entries(tt))
        if (
          o.includes(i.type) &&
          (!O.equippedItems[s] || O.canEquipInSlot(i, s))
        ) {
          O.equipItem(i, s), y.recalculateFromAttributes(), Me();
          return;
        }
    }),
      e.addEventListener("dragstart", (a) => {
        a.target.classList.add("dragging"),
          a.dataTransfer.setData("text/plain", e.dataset.itemId),
          Fa();
      }),
      e.addEventListener("dragend", (a) => {
        a.target.classList.remove("dragging"),
          document.querySelectorAll(".equipment-slot").forEach((i) => {
            i.classList.remove("valid-target", "invalid-target");
          });
      }),
      e.addEventListener("mouseenter", (a) => {
        if (e.classList.contains("dragging")) return;
        const i = O.getItemById(e.dataset.itemId);
        if (!i) return;
        let r = `<div>${i.getTooltipHTML()}</div>`;
        const n = O.inventoryItems.some(
            (o) => (o == null ? void 0 : o.id) === i.id
          ),
          s = [];
        for (const [o, c] of Object.entries(O.equippedItems))
          tt[o].includes(i.type) && n && s.push(c);
        s.length > 0 &&
          s.forEach((o) => {
            o && o.id !== i.id && (r += `<div>${o.getTooltipHTML(!0)}</div>`);
          }),
          ge(r, a, "flex-tooltip");
      }),
      e.addEventListener("mousemove", ue),
      e.addEventListener("mouseleave", he);
  });
}
function ks() {
  const t = O.materials.filter((e) => e !== null);
  t.sort((e, a) => {
    if (a.qty !== e.qty) return a.qty - e.qty;
    const i = Object.values(Ke).find((o) => o.id === e.id),
      r = Object.values(Ke).find((o) => o.id === a.id),
      n = (i == null ? void 0 : i.sort) ?? 9999,
      s = (r == null ? void 0 : r.sort) ?? 9999;
    return n !== s ? n - s : e.id.localeCompare(a.id);
  }),
    (O.materials = [...t, ...new Array(We - t.length).fill(null)]),
    Ne(),
    A.saveGame();
}
function Ne(t) {
  t || (t = O);
  const e = document.querySelector(".materials-container");
  if (e) {
    e.innerHTML = "";
    for (let a = 0; a < We; a++) {
      const i = t.materials[a],
        r = document.createElement("div");
      if ((r.classList.add("materials-cell"), i)) {
        const n = Object.values(Ke).find((c) => c.id === i.id) || {};
        let s = i.qty > 9 ? "+" : String(i.qty).padStart(2, " ");
        r.innerHTML = `<div class="material-item" data-mat-id="${i.id}">
          ${i.icon || "🔹"}
          <span class="mat-qty">${s}</span>
        </div>`;
        const o = r.querySelector(".material-item");
        o.addEventListener("mouseenter", (c) => {
          let l = `<div class="item-tooltip"><b>${n.icon || i.icon || "🔹"} ${
            n.name || i.name || ""
          } &times; ${i.qty}</b>`;
          n.description &&
            (l += `<div style="margin-top:4px;">${n.description}</div>`),
            (l += "</div>"),
            ge(l, c, "flex-tooltip");
        }),
          o.addEventListener("mousemove", ue),
          o.addEventListener("mouseleave", he),
          o.addEventListener("click", () => {
            O.openMaterialDialog(i);
          });
      }
      e.appendChild(r);
    }
  }
}
function $i() {
  const t = O.inventoryItems.slice(0, it),
    e = O.inventoryItems.slice(it).filter((a) => a !== null);
  e.sort((a, i) => {
    const r = Oe.indexOf(a.rarity),
      n = Oe.indexOf(i.rarity);
    return r !== n ? -(r - n) : i.level - a.level;
  }),
    (O.inventoryItems = [
      ...t,
      ...e,
      ...new Array(at - it - e.length).fill(null),
    ]),
    Me(),
    A.saveGame();
}
const ws = String.raw,
  at = 200,
  it = 30,
  We = 50;
class Ls {
  constructor(e = null) {
    (this.equipmentBonuses = {}), (this.hasNewItems = !1);
    for (const a in G) this.equipmentBonuses[a] = 0;
    (this.equippedItems = (e == null ? void 0 : e.equippedItems) || {}),
      (this.inventoryItems =
        (e == null ? void 0 : e.inventoryItems) || new Array(at).fill(null)),
      (this.materials =
        (e == null ? void 0 : e.materials) || new Array(We).fill(null)),
      e
        ? ((this.equippedItems = {}),
          Object.entries(e.equippedItems).forEach(([a, i]) => {
            i &&
              ((this.equippedItems[a] = new ba(
                i.type,
                i.level,
                i.rarity,
                i.stats
              )),
              (this.equippedItems[a].id = i.id));
          }),
          (this.inventoryItems = e.inventoryItems.map((a) => {
            if (a) {
              const i = new ba(a.type, a.level, a.rarity, a.stats);
              return (i.id = a.id), i;
            }
            return null;
          })),
          (this.materials = e.materials
            ? e.materials.map((a) => (a ? { ...a } : null))
            : new Array(We).fill(null)))
        : ((this.equippedItems = {}),
          (this.inventoryItems = new Array(at).fill(null)),
          (this.materials = new Array(We).fill(null))),
      Cs(this),
      (this.removeTooltip = this.removeTooltip.bind(this)),
      window.addEventListener("mouseout", (a) => {
        a.relatedTarget === null && this.removeTooltip();
      });
  }
  addMaterial(e) {
    let a = this.materials.findIndex((i) => i && i.id === e.id);
    a !== -1
      ? (this.materials[a].qty += e.qty)
      : ((a = this.materials.findIndex((i) => i === null)),
        a !== -1 && (this.materials[a] = { ...e, qty: e.qty || 1 })),
      (this.hasNewItems = !0),
      Ne(),
      A.saveGame();
  }
  openMaterialDialog(e) {
    const a = Object.values(Ke).find((s) => s.id === e.id) || {};
    if (a.upgradeType) {
      const s = hr(a.upgradeType),
        o = vr(a.upgradeType),
        c = Object.entries(this.equippedItems)
          .filter(([u, m]) => s.includes(u) && m && o.includes(m.type))
          .map(([u, m]) => ({ slot: u, item: m }));
      let d = (0, String.raw)`
        <div class="training-modal-content">
          <button class="training-modal-close">&times;</button>
          <h2>${a.name || e.name || ""}</h2>
          <p>${a.description || ""}</p>
          <p>You have <b>${e.qty}</b></p>
          <div style="margin-bottom:10px;">Select an equipped item to upgrade:</div>
          <div id="upgrade-item-list">
            ${
              c.length === 0
                ? '<div style="color:#f55;">No eligible equipped items.</div>'
                : c
                    .map(
                      (
                        { slot: u, item: m },
                        f
                      ) => `<div class="upgrade-item-row" data-slot="${u}" data-idx="${f}" style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
                        <span style="font-size:1.5em;">${m.getIcon()}</span>
                        <span><b>${m.type}</b> (Lvl ${m.level})</span>
                        <span style="color:${re[m.rarity].color};">${
                        m.rarity
                      }</span>
                        <input type="number" class="upgrade-qty-input" data-idx="${f}" min="1" max="${
                        e.qty
                      }" value="1" style="width:48px;margin-left:8px;" aria-label="Upgrade quantity" />
                        <button class="upgrade-btn" data-slot="${u}" data-idx="${f}">Upgrade</button>
                      </div>`
                    )
                    .join("")
            }
          </div>
          <div class="modal-controls">
            <button id="material-use-cancel">Cancel</button>
          </div>
        </div>
      `;
      const g = $e({
        id: "material-upgrade-dialog",
        className: "training-modal",
        content: d,
      });
      (g.querySelector("#material-use-cancel").onclick = () =>
        Ie("material-upgrade-dialog")),
        g.querySelectorAll(".upgrade-btn").forEach((u) => {
          u.onclick = () => {
            const m = parseInt(u.dataset.idx, 10),
              { slot: f, item: h } = c[m],
              v = g.querySelector(`.upgrade-qty-input[data-idx='${m}']`);
            let E = parseInt(v.value, 10);
            (isNaN(E) || E < 1) && (E = 1), E > e.qty && (E = e.qty);
            const p = h.level,
              x = h.getBaseStatValues(),
              b = p + E;
            if ((h.applyLevelToStats(x, b), (e.qty -= E), e.qty <= 0)) {
              const D = this.materials.findIndex((B) => B && B.id === e.id);
              D !== -1 && (this.materials[D] = null);
            }
            y.recalculateFromAttributes(),
              Ne(),
              Me(),
              A.saveGame(),
              ie(),
              oe(),
              Ie("material-upgrade-dialog"),
              j(`Upgraded ${h.type} (Lvl ${p} → ${h.level})`, "success");
          };
        });
      return;
    }
    const i = ws`
      <div class="training-modal-content">
        <button class="training-modal-close">&times;</button>
        <h2>${a.name || e.name || ""}</h2>
        <p>${a.description || ""}</p>
        <p>You have <b>${e.qty}</b></p>
        <label for="material-use-qty">Quantity:</label>
        <input
          id="material-use-qty"
          style="padding: 5px; border-radius: 10px;"
          type="number"
          min="1"
          max="${e.qty}"
          value="${e.qty}"
        />
        <div class="modal-controls">
          <button class="modal-buy" id="material-use-btn">Use</button>
          <button id="material-use-cancel">Cancel</button>
        </div>
      </div>
    `,
      r = $e({
        id: "material-use-dialog",
        className: "training-modal",
        content: i,
      }),
      n = r.querySelector("#material-use-qty");
    n.focus(),
      n.select(),
      (r.querySelector("#material-use-btn").onclick = () => {
        let s = parseInt(n.value, 10);
        if (
          ((isNaN(s) || s < 1) && (s = 1),
          s > e.qty && (s = e.qty),
          a && typeof a.onUse == "function" && a.onUse(y, s),
          (e.qty -= s),
          e.qty <= 0)
        ) {
          const o = this.materials.findIndex((c) => c && c.id === e.id);
          o !== -1 && (this.materials[o] = null);
        }
        y.recalculateFromAttributes(),
          Ne(),
          A.saveGame(),
          ie(),
          oe(),
          Ie("material-use-dialog"),
          j(
            `Used ${s} ${a.name || e.name || ""}${s > 1 ? "s" : ""}`,
            "success"
          );
      }),
      (r.querySelector("#material-use-cancel").onclick = () =>
        Ie("material-use-dialog"));
  }
  salvageItemsByRarity(e) {
    let a = 0,
      i = 0,
      r = 0;
    const n = Oe.slice(0, Oe.indexOf(e) + 1);
    if (
      ((this.inventoryItems = this.inventoryItems.map((s, o) =>
        o < it
          ? s
          : s && n.includes(s.rarity)
          ? (a++,
            (i += 10 * (s.level + 1) * (Oe.indexOf(s.rarity) + 1)),
            s.rarity === "MYTHIC" && r++,
            null)
          : s
      )),
      a > 0)
    ) {
      i > 0 && (y.gold = (y.gold || 0) + i),
        r > 0 && (y.crystals = (y.crystals || 0) + r);
      let s = `Salvaged ${a} ${e.toLowerCase()} or lower items`;
      i > 0 && (s += `, gained ${i} gold`),
        r > 0 && (s += `, gained ${r} crystal${r > 1 ? "s" : ""}`),
        j(s, "success"),
        Me(),
        Ne(),
        ie(),
        A.saveGame();
    } else j(`No ${e.toLowerCase()} or lower items to salvage`, "info");
  }
  handleRingSlotDrop(e, a) {
    var r, n;
    const i =
      ((r = this.equippedItems.ring1) == null ? void 0 : r.id) === e.id
        ? "ring1"
        : ((n = this.equippedItems.ring2) == null ? void 0 : n.id) === e.id
        ? "ring2"
        : null;
    if (i) {
      const s = this.equippedItems[a];
      s
        ? ((this.equippedItems[i] = s), (this.equippedItems[a] = e))
        : (delete this.equippedItems[i], (this.equippedItems[a] = e));
    } else {
      const s = this.inventoryItems.findIndex(
        (o) => (o == null ? void 0 : o.id) === e.id
      );
      s !== -1 &&
        ((this.inventoryItems[s] = this.equippedItems[a] || null),
        (this.equippedItems[a] = e));
    }
    y.recalculateFromAttributes(), A.saveGame();
  }
  moveItemToPosition(e, a) {
    const i = this.inventoryItems.findIndex((n) => n && n.id === e.id),
      r = this.inventoryItems[a];
    if (i !== -1) (this.inventoryItems[i] = r), (this.inventoryItems[a] = e);
    else
      for (const [n, s] of Object.entries(this.equippedItems))
        if (s.id === e.id) {
          delete this.equippedItems[n],
            r
              ? this.canEquipInSlot(r, n) &&
                ((this.equippedItems[n] = r), (this.inventoryItems[a] = e))
              : (this.inventoryItems[a] = e);
          break;
        }
    Me(), y.recalculateFromAttributes(), A.saveGame();
  }
  getEquippedItemById(e) {
    for (const [a, i] of Object.entries(this.equippedItems))
      if (i.id === e) return i;
    return null;
  }
  createItem(e, a, i = this.generateRarity()) {
    return new ba(e, a, i);
  }
  generateRarity() {
    const e = Object.keys(N),
      a = A.currentEnemy,
      i = a != null && a.rarity ? e.indexOf(a.rarity) : 0,
      r = e.length - 1,
      n = i / r,
      s = Object.entries(re).map(([l, d]) => {
        const g = Oe.indexOf(d.name),
          u = d.chance * (1 + n * g);
        return { key: l, weight: u };
      }),
      o = s.reduce((l, d) => l + d.weight, 0);
    let c = Math.random() * o;
    for (const { key: l, weight: d } of s) {
      if (c < d) return l;
      c -= d;
    }
    return re.NORMAL.name;
  }
  addItemToInventory(e, a = null) {
    if (!e) {
      console.error("Attempted to add null item to inventory");
      return;
    }
    if (
      (Q.increment("totalItemsFound", null, 1),
      (this.hasNewItems = !0),
      a !== null && a < at && !this.inventoryItems[a])
    )
      this.inventoryItems[a] = e;
    else {
      const i = this.inventoryItems.findIndex((r, n) => r === null && n >= it);
      i !== -1 && (this.inventoryItems[i] = e);
    }
    Me(), A.saveGame();
  }
  removeTooltip() {
    document.querySelectorAll(".item-tooltip").forEach((a) => a.remove());
  }
  canEquipInSlot(e, a) {
    return tt[a].includes(e.type);
  }
  getItemById(e) {
    if (!e) return console.error("Attempted to get item with null id"), null;
    const a = this.inventoryItems.find((i) => i && i.id === e);
    return a || Object.values(this.equippedItems).find((i) => i && i.id === e);
  }
  equipItem(e, a) {
    const i = this.inventoryItems.findIndex((r) => r && r.id === e.id);
    if (this.equippedItems[a]) {
      const r = this.equippedItems[a];
      if (i !== -1) this.inventoryItems[i] = r;
      else {
        const n = this.inventoryItems.findIndex((s) => s === null);
        n !== -1 && (this.inventoryItems[n] = r);
      }
    } else i !== -1 && (this.inventoryItems[i] = null);
    (this.equippedItems[a] = e), A.saveGame();
  }
  updateItemBonuses() {
    Object.keys(this.equipmentBonuses).forEach((e) => {
      this.equipmentBonuses[e] = 0;
    }),
      Object.values(this.equippedItems).forEach((e) => {
        Object.entries(e.stats).forEach(([a, i]) => {
          this.equipmentBonuses[a] !== void 0 &&
            (this.equipmentBonuses[a] += i);
        });
      });
  }
  getEquipmentBonuses() {
    return this.updateItemBonuses(), { ...this.equipmentBonuses };
  }
  getRandomMaterial() {
    var m, f;
    const e = Ui(),
      a = A.currentEnemy,
      i = [...((a == null ? void 0 : a.canDrop) || []), ...(e.canDrop || [])],
      r = Object.values(Ke)
        .filter((h) => h.dropChance > 0)
        .filter((h) => !h.exclusive || i.includes(h.id)),
      n = e.materialDropMultiplier || 1,
      s =
        ((m = a == null ? void 0 : a.enemyData) == null
          ? void 0
          : m.materialDropMultiplier) || 1,
      o = n * s,
      c = e.materialDropWeights || {},
      l =
        ((f = a == null ? void 0 : a.enemyData) == null
          ? void 0
          : f.materialDropWeights) || {},
      d = {};
    r.forEach((h) => {
      const v = (c[h.id] || 0) + (l[h.id] || 0);
      d[h.id] = v > 0 ? v : 1;
    });
    const g = r.reduce((h, v) => h + v.dropChance * o * d[v.id], 0);
    let u = Math.random() * g;
    for (const h of r) {
      const v = h.dropChance * o * d[h.id];
      if (u < v) return h;
      u -= v;
    }
    return r[0];
  }
  clearNewItemsFlag() {
    this.hasNewItems = !1;
  }
}
class Fs {
  constructor() {
    (this.fightMode = "explore"),
      (this.gameStarted = !1),
      (this.currentEnemy = null),
      (this.stage = 1),
      (this.lastPlayerAttack = Date.now()),
      (this.lastRegen = Date.now());
  }
  incrementStage() {
    (this.stage += 1),
      this.stage > y.highestStage &&
        (Q.highestStageReached < this.stage &&
          Q.set("highestStageReached", null, this.stage),
        (y.highestStage = this.stage)),
      Ge(),
      ie();
  }
  damagePlayer(e) {
    (y.stats.currentLife -= e),
      y.stats.currentLife <= 0 &&
        (y.willRessurect() || ((y.stats.currentLife = 0), Wa())),
      fe();
  }
  healPlayer(e) {
    (y.stats.currentLife += e),
      y.stats.currentLife > y.stats.life &&
        (y.stats.currentLife = y.stats.life),
      y.stats.currentLife <= 0 && Wa(),
      fe();
  }
  restoreMana(e) {
    (y.stats.currentMana += e),
      y.stats.currentMana > y.stats.mana &&
        (y.stats.currentMana = y.stats.mana),
      fe();
  }
  damageEnemy(e) {
    if (((e = Math.floor(e)), A.fightMode === "arena" && this.currentEnemy)) {
      this.currentEnemy.takeDamage(e) && za(), Se(), Ct(this.currentEnemy);
      return;
    }
    this.currentEnemy &&
      (e > Q.highestDamageDealt && Q.set("highestDamageDealt", null, e),
      (this.currentEnemy.currentLife -= e),
      this.currentEnemy.currentLife < 0 && (this.currentEnemy.currentLife = 0),
      Se(),
      this.currentEnemy.currentLife <= 0 && za());
  }
  resetAllLife() {
    (y.stats.currentLife = y.stats.life),
      (y.stats.currentMana = y.stats.mana),
      fe(),
      this.currentEnemy.resetLife(),
      Se();
    const e = Date.now();
    (this.lastPlayerAttack = e),
      this.currentEnemy && (this.currentEnemy.lastAttack = e);
  }
  gameLoop() {
    if (!this.gameStarted) return;
    P.getActiveBuffEffects(), ma();
    const e = Date.now();
    Lr(e),
      wr(e),
      Q.addFightTime(0.1),
      e - this.lastRegen >= 100 && (y.regenerate(), (this.lastRegen = e)),
      this.stageChanged &&
        ((this.stageChanged = !1), be.initializeCrystalShopUI()),
      e % 3e4 < 16 && A.saveGame(),
      P.autoCastEligibleSkills();
  }
  toggle() {
    (this.gameStarted = !this.gameStarted),
      this.gameStarted
        ? ((this.currentEnemy.lastAttack = Date.now()),
          this.resetAllLife(),
          ie(),
          Se())
        : (P.stopAllBuffs(),
          ma(),
          (this.stage = y.getStartingStage()),
          Ge(),
          oe(),
          A.fightMode === "arena" && A.currentEnemy
            ? (this.currentEnemy = A.currentEnemy)
            : (this.currentEnemy = new ze(this.stage)),
          (y.stats.currentLife = y.stats.life),
          (y.stats.currentMana = y.stats.mana),
          this.currentEnemy.resetLife(),
          fe(),
          Se());
  }
  saveGame() {
    Q.updateStatisticsUI();
    const e = {
      hero: y,
      skillTree: P,
      crystalShop: be,
      training: Ae,
      inventory: O,
      statistics: Q,
      quests: Te,
      soulShop: qe,
    };
    localStorage.setItem("gameProgress", JSON.stringify(e));
  }
  loadGame() {
    const e = localStorage.getItem("gameProgress");
    return e ? JSON.parse(e) : null;
  }
  clearSave() {
    localStorage.removeItem("gameProgress");
  }
  resetCoreGameState() {
    y.setBaseStats(null),
      (A.stage = y.getStartingStage()),
      (A.gameStarted = !1),
      (A.currentEnemy = new ze(A.stage)),
      A.currentEnemy.resetLife(),
      Ge(),
      ie(),
      fe(),
      Se();
  }
  resetAllProgress() {
    (O.equippedItems = {}),
      (O.inventoryItems = new Array(at).fill(null)),
      (O.materials = new Array(We).fill(null)),
      Me(),
      qe.resetSoulShop(),
      Ae.reset(),
      Q.resetStatistics(),
      Te.reset(),
      be.resetCrystalShop(),
      be.initializeCrystalShopUI(),
      P.resetSkillTree(),
      (P.skillPoints = 0),
      bt(),
      le.reset(),
      this.resetCoreGameState(),
      y.recalculateFromAttributes(),
      oe(),
      rt(),
      Be(),
      Ae.updateTrainingUI("gold-upgrades"),
      Ae.updateTrainingUI("crystal-upgrades"),
      Q.updateStatisticsUI();
    const e = document.getElementById("start-btn");
    e && ((e.textContent = "Fight"), (e.style.backgroundColor = "#059669")),
      j("All progress has been reset!"),
      this.saveGame();
  }
}
const Hi = String.raw,
  Ea = [
    { key: "offense", label: "Offense", stats: Object.keys(Da) },
    { key: "defense", label: "Defense", stats: Object.keys(Ba) },
    { key: "misc", label: "Misc", stats: Object.keys(Sa) },
  ];
class _s {
  constructor(e = null) {
    (this.upgradeLevels = {}),
      (this.trainingBonuses = {}),
      Object.entries(G).forEach(([a, i]) => {
        i.training &&
          i.training.available &&
          ((this.upgradeLevels[a] = 0), (this.trainingBonuses[a] = 0));
      }),
      nt(e, this),
      (this.activeSection = Ea[0].key),
      this.initializeTrainingUI();
  }
  reset() {
    Object.keys(this.upgradeLevels).forEach((e) => {
      this.upgradeLevels[e] = 0;
    }),
      Object.keys(this.trainingBonuses).forEach((e) => {
        this.trainingBonuses[e] = 0;
      });
  }
  initializeTrainingUI() {
    const e = document.querySelector(".training-grid");
    if (!e) return;
    let a = document.querySelector(".training-section-nav");
    a ||
      ((a = document.createElement("div")),
      (a.className = "training-section-nav"),
      (a.style.display = "flex"),
      (a.style.gap = "8px"),
      (a.style.marginBottom = "12px"),
      e.parentElement.insertBefore(a, e)),
      (a.innerHTML = Ea.map(
        (r) => `
      <button class="training-section-btn${
        this.activeSection === r.key ? " active" : ""
      }" data-section="${r.key}">${r.label}</button>
    `
      ).join("")),
      a.querySelectorAll("button[data-section]").forEach((r) => {
        r.onclick = () => {
          (this.activeSection = r.dataset.section),
            this.updateTrainingUI("gold-upgrades"),
            a
              .querySelectorAll("button")
              .forEach((n) => n.classList.remove("active")),
            r.classList.add("active");
        };
      });
    const i = document.querySelector("#gold-upgrades .training-grid");
    if (
      (i && this.attachGridListeners(i),
      this.updateTrainingUI("gold-upgrades"),
      !this.modal)
    ) {
      const r = Hi`
        <div class="training-modal-content">
          <button class="training-modal-close">&times;</button>
          <h2 class="modal-title"></h2>
          <p>Current Level: <span class="modal-level"></span></p>
          <p>Current Bonus: <span class="modal-bonus"></span></p>
          <p>Next Level Bonus: <span class="modal-next-bonus"></span></p>
          <p>Total Bonus: <span class="modal-total-bonus"></span></p>
          <p>Total Cost: <span class="modal-total-cost"></span> Gold (<span class="modal-qty">1</span>)</p>
          <div class="modal-controls">
            <button data-qty="1">+1</button>
            <button data-qty="10">+10</button>
            <button data-qty="50">+50</button>
            <button data-qty="max">Max</button>
          </div>
          <button class="modal-buy">Buy</button>
        </div>
      `;
      (this.modal = $e({
        id: "training-modal",
        className: "training-modal hidden",
        content: r,
        onClose: () => this.closeModal(),
      })),
        this.modal.querySelectorAll(".modal-controls button").forEach((n) => {
          n.onclick = () => {
            (this.selectedQty =
              n.dataset.qty === "max" ? "max" : parseInt(n.dataset.qty, 10)),
              this.updateModalDetails();
          };
        }),
        (this.modal.querySelector(".modal-buy").onclick = () =>
          this.buyBulk(this.currentStat, this.selectedQty));
    }
  }
  attachGridListeners(e) {
    e.addEventListener("click", (a) => {
      const i = a.target.closest("button[data-stat]");
      if (i) {
        const r = i.dataset.stat;
        this.openModal(r);
      }
    });
  }
  openModal(e) {
    const a = G[e].training;
    if (!a || !a.available) return;
    this.currentStat = e;
    const i = this.modal;
    (i.querySelector(".modal-title").textContent =
      e.charAt(0).toUpperCase() + e.slice(1)),
      (i.querySelector(".modal-level").textContent =
        this.upgradeLevels[e] || 0),
      (i.querySelector(".modal-bonus").textContent = this.getBonusText(
        e,
        G[e].training,
        this.upgradeLevels[e] || 0
      )),
      (i.querySelector(".modal-next-bonus").textContent = this.getBonusText(
        e,
        G[e].training,
        (this.upgradeLevels[e] || 0) + 1
      )),
      (this.selectedQty = 1),
      this.updateModalDetails(),
      i.classList.remove("hidden");
  }
  closeModal() {
    this.modal.classList.add("hidden");
  }
  updateModalDetails() {
    if (!this.currentStat) return;
    const e = this.currentStat,
      a = G[e].training;
    if (!a || !a.available) {
      this.closeModal();
      return;
    }
    const i = a,
      r = this.upgradeLevels[e] || 0,
      n = y.gold;
    let s = this.selectedQty === "max" ? 0 : this.selectedQty,
      o = 0;
    if (this.selectedQty === "max") {
      let g = r,
        u = n;
      for (;;) {
        const m = i.cost * (g + 1);
        if (u < m) break;
        (u -= m), (o += m), g++, s++;
      }
    } else
      for (let g = 0; g < s; g++) {
        const u = i.cost * (r + g + 1);
        o += u;
      }
    const c = (i.bonus || 0) * s,
      l = G[e].decimalPlaces || 0;
    (this.modal.querySelector(".modal-qty").textContent = s),
      (this.modal.querySelector(".modal-total-cost").textContent = o),
      (this.modal.querySelector(
        ".modal-total-bonus"
      ).textContent = `+${c.toFixed(l)} ${xe(e)}`),
      (this.modal.querySelector(".modal-level").textContent = r),
      (this.modal.querySelector(".modal-bonus").textContent = this.getBonusText(
        e,
        i,
        r
      )),
      (this.modal.querySelector(".modal-next-bonus").textContent =
        this.getBonusText(e, i, r + 1));
    const d = this.modal.querySelector(".modal-buy");
    d.disabled = s <= 0 || o > n;
  }
  updateTrainingUI(e) {
    const a = document.querySelector(`#${e} .training-grid`);
    if (!a) return;
    const i = Ea.find((r) => r.key === this.activeSection);
    a.innerHTML = Object.entries(G)
      .filter(
        ([r, n]) => n.training && n.training.available && i.stats.includes(r)
      )
      .map(([r, n]) => this.createUpgradeButton(r, n))
      .join("");
  }
  createUpgradeButton(e, a) {
    const i = this.upgradeLevels[e] || 0,
      r = this.getBonusText(e, a.training, i);
    return Hi`
      <button data-stat="${e}">
        <span class="upgrade-name">${xe(e)} (Lvl ${i})</span>
        <span class="upgrade-bonus">${r}</span>
      </button>
    `;
  }
  getBonusText(e, a, i) {
    const r = a.bonus * i,
      n = G[e].decimalPlaces || 0;
    return `+${r.toFixed(n)}${a.suffix || ""} ${xe(e)}`;
  }
  getUpgradeCost(e) {
    const a = this.upgradeLevels[e] || 0;
    return G[e].training ? G[e].training.cost * (a + 1) : 0;
  }
  buyUpgrade(e) {
    const a = "gold",
      i = this.getUpgradeCost(e);
    if (y[a] < i) {
      j(`Not enough ${a}!`, "error");
      return;
    }
    (y[a] -= i),
      (this.upgradeLevels[e] = (this.upgradeLevels[e] || 0) + 1),
      this.updateTrainingUI("gold-upgrades"),
      y.recalculateFromAttributes(),
      oe(),
      ie(),
      A.saveGame(),
      this.modal &&
        !this.modal.classList.contains("hidden") &&
        this.currentStat === e &&
        this.updateModalDetails();
  }
  getTrainingBonuses() {
    return this.updateTrainingBonuses(), this.trainingBonuses;
  }
  updateTrainingBonuses() {
    Object.keys(this.trainingBonuses).forEach((e) => {
      this.trainingBonuses[e] = 0;
    }),
      Object.keys(G).forEach((e) => {
        var a;
        this.trainingBonuses[e] !== void 0 &&
          this.upgradeLevels[e] !== void 0 &&
          (this.trainingBonuses[e] +=
            this.upgradeLevels[e] *
            ((a = G[e].training) == null ? void 0 : a.bonus));
      });
  }
  buyBulk(e, a) {
    const i = "gold";
    let r = 0;
    if (a === "max")
      for (;;) {
        const n = this.getUpgradeCost(e);
        if (y[i] < n) break;
        (y[i] -= n), this.upgradeLevels[e]++, r++;
      }
    else
      for (let n = 0; n < a; n++) {
        const s = this.getUpgradeCost(e);
        if (y[i] < s) break;
        (y[i] -= s), this.upgradeLevels[e]++, r++;
      }
    r > 0
      ? j(`Upgraded ${xe(e)} by ${r} levels!`)
      : j(`Not enough gold to upgrade ${xe(e)}!`, "error"),
      this.updateTrainingUI("gold-upgrades"),
      y.recalculateFromAttributes(),
      oe(),
      ie(),
      A.saveGame(),
      this.modal &&
        !this.modal.classList.contains("hidden") &&
        this.currentStat === e &&
        this.updateModalDetails();
  }
}
const Ps = String.raw,
  ft = {
    startingStage: {
      label: "Starting Stage",
      bonus: 1,
      bonusLabel: "Increases starting stage by 1",
      showLevel: !0,
      baseCost: 2,
      costIncrement: 0,
      multiple: !0,
    },
    continuousPlay: {
      label: "Continuous Play",
      bonus: "Auto-continue after death",
      bonusLabel: "Auto-continue after death",
      baseCost: 20,
      oneTime: !0,
    },
    autoSpellCast: {
      label: "Auto Spell Cast",
      bonus: "Automatically casts instant and buff skills",
      bonusLabel: "Automatically casts instant and buff skills",
      baseCost: 40,
      oneTime: !0,
    },
    resetSkillTree: {
      label: "Reset Skill Tree",
      bonus: "Refund all skill points and reset path",
      bonusLabel: "Refund all skill points and reset path",
      baseCost: 10,
      multiple: !0,
    },
    resetAttributes: {
      label: "Reset Attributes",
      bonus: "Refund all allocated attribute points",
      bonusLabel: "Refund all allocated attribute points",
      baseCost: 10,
      multiple: !0,
    },
    resetArenaLevel: {
      label: "Reset Arena Level",
      bonus: "Reset Arena level to 1",
      bonusLabel: "Reset Arena level to 1",
      baseCost: 10,
      multiple: !0,
    },
  };
class Is {
  constructor(e = null) {
    (this.crystalUpgrades = {}),
      nt(e, this),
      (this.modal = null),
      (this.currentStat = null),
      (this.selectedQty = 1);
  }
  resetCrystalShop() {
    this.crystalUpgrades = {};
  }
  async initializeCrystalShopUI() {
    const e = document.querySelector("#crystalShop");
    if (!e) return;
    const a = e.querySelector(".crystalShop-upgrades-container");
    a &&
      (a.innerHTML = `
        <div class="crystal-upgrades-grid">
          ${Object.entries(ft)
            .map(([i, r]) => this.createCrystalUpgradeButton(i, r))
            .join("")}
        </div>
      `),
      this.setupCrystalUpgradeHandlers(),
      this.modal || this.createUpgradeModal();
  }
  createCrystalUpgradeButton(e, a) {
    let i = a.oneTime && this.crystalUpgrades[e];
    const r = this.crystalUpgrades[e] || 0,
      n = a.baseCost + (a.costIncrement || 0) * (this.crystalUpgrades[e] || 0);
    return `
      <button class="crystal-upgrade-btn ${
        i ? "purchased" : ""
      }" data-stat="${e}" ${i ? "disabled" : ""}>
        <span class="upgrade-name">${a.label} ${
      a.showLevel ? `(Lvl ${r})` : ""
    }</span>
        <span class="upgrade-bonus">${a.bonusLabel}</span>
        <span class="upgrade-cost">${i ? "Purchased" : `${n} Crystals`}</span>
      </button>
    `;
  }
  setupCrystalUpgradeHandlers() {
    document.querySelectorAll(".crystal-upgrade-btn").forEach((a) => {
      a.addEventListener("click", () => {
        const i = a.dataset.stat;
        this.openUpgradeModal(i);
      });
    });
  }
  createUpgradeModal() {
    const e = Ps`
      <div class="training-modal-content">
        <button class="training-modal-close" aria-label="Close">&times;</button>
        <h2 class="modal-title"></h2>
        <div class="modal-fields"></div>
        <div class="modal-controls" style="display:none;"></div>
        <button class="modal-buy">Buy</button>
      </div>
    `;
    (this.modal = $e({
      id: "crystalShop-modal",
      className: "training-modal hidden",
      content: e,
      onClose: () => this.closeModal(),
    })),
      (this.modal.querySelector(".training-modal-close").onclick = () =>
        this.closeModal()),
      (this.modal.querySelector(".modal-buy").onclick = () =>
        this.buyBulk(this.currentStat, this.selectedQty));
  }
  async confirmReset(e) {
    const a = ft[e].baseCost;
    if (y.crystals < a) {
      j(`Need ${a} crystals for this upgrade`, "error");
      return;
    }
    let i;
    if (e === "resetSkillTree") {
      if (
        ((i = await je(
          `Are you sure you want to reset your class and refund all skill points?<br>This will cost <strong>${a} crystals</strong> and cannot be undone.`
        )),
        !i)
      )
        return;
      (y.crystals -= a),
        P.resetSkillTree(),
        Re(),
        De(),
        bt(),
        j("Class has been reset and all points refunded.", "success");
    } else if (e === "resetAttributes") {
      if (
        ((i = await je(
          `Are you sure you want to reset all allocated attribute points?<br>This will cost <strong>${a} crystals</strong> and cannot be undone.`
        )),
        !i)
      )
        return;
      (y.crystals -= a),
        y.resetAttributes(),
        oe(),
        j("All attribute points have been refunded.", "success");
    } else if (e === "resetArenaLevel") {
      if (
        ((i = await je(
          `Are you sure you want to reset your boss level to 1?<br>This will cost <strong>${a} crystals</strong> and cannot be undone.`
        )),
        !i)
      )
        return;
      (y.crystals -= a),
        (y.bossLevel = 1),
        j("Boss level has been reset to 1.", "success");
    }
    ie(), A.saveGame(), this.initializeCrystalShopUI();
  }
  async openUpgradeModal(e) {
    if (
      e === "resetSkillTree" ||
      e === "resetAttributes" ||
      e === "resetArenaLevel"
    ) {
      await this.confirmReset(e);
      return;
    }
    const a = ft[e];
    if (!a) return;
    this.currentStat = e;
    const i = this.modal;
    i.querySelector(".modal-title").textContent = a.label;
    const r = i.querySelector(".modal-fields"),
      n = i.querySelector(".modal-controls"),
      s = i.querySelector(".modal-buy");
    if (((this.selectedQty = 1), e === "startingStage"))
      (r.innerHTML = `
        <p>Current Level: <span class="modal-level"></span></p>
        <p>Current Bonus: <span class="modal-bonus"></span></p>
        <p>Next Level Bonus: <span class="modal-next-bonus"></span></p>
        <p>Total Bonus: <span class="modal-total-bonus"></span></p>
        <p>Total Cost: <span class="modal-total-cost"></span> Crystals (<span class="modal-qty">1</span>)</p>
      `),
        (n.style.display = ""),
        (n.innerHTML = `
        <button data-qty="1">+1</button>
        <button data-qty="10">+10</button>
        <button data-qty="50">+50</button>
        <button data-qty="max">Max</button>
      `),
        n.querySelectorAll("button").forEach((o) => {
          o.onclick = () => {
            (this.selectedQty =
              o.dataset.qty === "max" ? "max" : parseInt(o.dataset.qty, 10)),
              this.updateModalDetails();
          };
        }),
        (s.style.display = ""),
        this.updateModalDetails();
    else if (a.oneTime) {
      n.style.display = "none";
      const o = !!this.crystalUpgrades[e];
      (r.innerHTML = `
        <p>${a.bonus && typeof a.bonus == "string" ? a.bonus : ""}</p>
        <p>Cost: <span class="modal-total-cost">${
          a.baseCost
        }</span> Crystals</p>
        <div class="modal-status">${
          o
            ? '<span style="color:#10b981;font-weight:bold;">Purchased</span>'
            : ""
        }</div>
      `),
        (s.style.display = o ? "none" : ""),
        (s.disabled = o);
    } else
      a.multiple &&
        ((n.style.display = "none"),
        (r.innerHTML = `
        <p>${a.bonus && typeof a.bonus == "string" ? a.bonus : ""}</p>
        <p>Cost: <span class="modal-total-cost">${
          a.baseCost
        }</span> Crystals</p>
      `),
        (s.style.display = ""),
        (s.disabled = !1));
    i.classList.remove("hidden"),
      e === "startingStage" && this.updateModalDetails();
  }
  updateModalDetails() {
    if (!this.currentStat) return;
    const e = this.currentStat,
      a = ft[e],
      i = this.modal,
      r = (n) => i.querySelector(n);
    if (e === "startingStage") {
      const n = this.crystalUpgrades[e] || 0,
        s = y.crystals;
      let o = this.selectedQty === "max" ? 0 : this.selectedQty,
        c = 0;
      if (this.selectedQty === "max") {
        let g = n,
          u = s;
        for (;;) {
          const m = a.baseCost + (a.costIncrement || 0) * g;
          if (u < m) break;
          (u -= m), (c += m), g++, o++;
        }
      } else
        for (let g = 0; g < o; g++) {
          const u = a.baseCost + (a.costIncrement || 0) * (n + g);
          c += u;
        }
      const l = (a.bonus || 0) * o;
      r(".modal-qty") && (r(".modal-qty").textContent = o),
        r(".modal-total-cost") && (r(".modal-total-cost").textContent = c),
        r(".modal-total-bonus") &&
          (r(".modal-total-bonus").textContent = `+${l} ${a.label}`),
        r(".modal-level") && (r(".modal-level").textContent = n),
        r(".modal-bonus") &&
          (r(".modal-bonus").textContent = this.getBonusText(e, a, n)),
        r(".modal-next-bonus") &&
          (r(".modal-next-bonus").textContent = this.getBonusText(e, a, n + 1));
      const d = r(".modal-buy");
      d && (d.disabled = o <= 0 || c > s);
    }
  }
  getBonusText(e, a, i) {
    return a.oneTime ? "" : `+${(a.bonus || 0) * i} ${a.label}`;
  }
  closeModal() {
    this.modal && this.modal.classList.add("hidden");
  }
  async _bulkPurchase(e, a, i) {
    const { baseCost: r, costIncrement: n = 0, label: s } = a;
    let o = this.crystalUpgrades[e] || 0,
      c = 0;
    const l = (d) => r + n * d;
    if (i === "max")
      for (; y.crystals >= l(o); ) {
        const d = l(o++);
        (y.crystals -= d), c++;
      }
    else
      for (let d = 0; d < i; d++) {
        const g = l(o);
        if (y.crystals < g) break;
        (y.crystals -= g), o++, c++;
      }
    (this.crystalUpgrades[e] = o),
      this._commitChanges(!1),
      this.updateModalDetails(),
      j(
        `Upgraded ${s} by ${c} level${c !== 1 ? "s" : ""}!`,
        c > 0 ? "success" : "error"
      );
  }
  async _handleOneTimePurchase(e, a) {
    const { baseCost: i, label: r } = a;
    if (!this.crystalUpgrades[e]) {
      if (y.crystals < i) {
        j("Not enough crystals!", "error");
        return;
      }
      (y.crystals -= i),
        (this.crystalUpgrades[e] = !0),
        this._commitChanges(),
        j(`Purchased ${r}!`, "success"),
        e === "autoSpellCast" && bt();
    }
  }
  async _handleMultiplePurchase(e, a) {
    const { baseCost: i, label: r } = a;
    if (y.crystals < i) {
      j("Not enough crystals!", "error");
      return;
    }
    (y.crystals -= i),
      (this.crystalUpgrades[e] = (this.crystalUpgrades[e] || 0) + 1),
      this._commitChanges(),
      j(`Purchased ${r}!`, "success");
  }
  _commitChanges(e = !0) {
    try {
      A.saveGame(),
        ie(),
        this.initializeCrystalShopUI(),
        e && this.closeModal();
    } catch (a) {
      console.error(a), j("Error updating shop. Please try again.", "error");
    }
  }
  async buyBulk(e, a) {
    const i = ft[e];
    if (i) {
      if (
        ["resetSkillTree", "resetAttributes", "resetArenaLevel"].includes(e)
      ) {
        await this.confirmReset(e);
        return;
      }
      if (i.multiple && i.costIncrement != null) {
        if (e === "startingStage") {
          const r = this.crystalUpgrades.startingStage || 0,
            n = Math.floor(y.highestStage * 0.75);
          if (r >= n) {
            j(
              `Cannot upgrade Starting Stage above ${n}. Reach a higher stage to unlock more.`,
              "error"
            );
            return;
          }
          a === "max" ? (a = n - r) : (a = Math.min(a, n - r));
        }
        await this._bulkPurchase(e, i, a);
        return;
      }
      if (i.oneTime) {
        await this._handleOneTimePurchase(e, i);
        return;
      }
      i.multiple && (await this._handleMultiplePurchase(e, i));
    }
  }
  hasAutoSpellCastUpgrade() {
    return !!this.crystalUpgrades.autoSpellCast;
  }
}
class Ts {
  constructor(e = null) {
    (this.bossesKilled = 0),
      (this.enemiesKilled = {
        total: 0,
        normal: 0,
        rare: 0,
        epic: 0,
        legendary: 0,
        mythic: 0,
      }),
      (this.highestDamageDealt = 0),
      (this.totalGoldEarned = 0),
      (this.totalCrystalsEarned = 0),
      (this.totalSoulsEarned = 0),
      (this.totalItemsFound = 0),
      (this.totalTimePlayed = 0),
      (this.highestStageReached = 0),
      (this.totalTimeInFights = 0),
      nt(e, this),
      (this.lastUpdate = Date.now());
  }
  resetStatistics() {
    (this.bossesKilled = 0),
      (this.enemiesKilled = {
        total: 0,
        normal: 0,
        rare: 0,
        epic: 0,
        legendary: 0,
        mythic: 0,
      }),
      (this.highestDamageDealt = 0),
      (this.totalGoldEarned = 0),
      (this.totalCrystalsEarned = 0),
      (this.totalSoulsEarned = 0),
      (this.totalItemsFound = 0),
      (this.totalTimePlayed = 0),
      (this.highestStageReached = 0),
      (this.totalTimeInFights = 0),
      this.updateStatisticsUI();
  }
  initializeStatisticsUI() {
    this.updateStatisticsUI();
  }
  updateStatisticsUI() {
    const e = document.getElementById("stat-bosses-killed");
    e && (e.textContent = `Bosses Defeated: ${this.bossesKilled}`);
    const a = document.getElementById("stat-total-time-played");
    if (a) {
      const g = Math.floor(this.totalTimePlayed),
        u = Math.floor(g / 3600),
        m = Math.floor((g % 3600) / 60);
      a.textContent = `Total Time Played: ${u}h ${m}m`;
    }
    const i = document.getElementById("stat-enemies-killed");
    i &&
      (i.textContent = `Total Enemies Killed: ${
        this.enemiesKilled.total || 0
      }`);
    const r = document.getElementById("stat-highest-damage");
    r &&
      (r.textContent = `Highest Damage Dealt: ${
        Math.floor(this.highestDamageDealt) || 0
      }`);
    const n = document.getElementById("stat-total-gold");
    n && (n.textContent = `Total Gold Earned: ${this.totalGoldEarned || 0}`);
    const s = document.getElementById("stat-total-crystals");
    s &&
      (s.textContent = `Total Crystals Earned: ${
        this.totalCrystalsEarned || 0
      }`);
    const o = document.getElementById("stat-total-souls");
    o && (o.textContent = `Total Souls Earned: ${this.totalSoulsEarned || 0}`);
    const c = document.getElementById("stat-items-found");
    c && (c.textContent = `Total Items Found: ${this.totalItemsFound || 0}`);
    const l = document.getElementById("stat-highest-stage");
    l &&
      (l.textContent = `Highest Stage Reached: ${
        this.highestStageReached || 1
      }`);
    const d = document.getElementById("stat-total-time-in-fights");
    if (d) {
      const g = Math.floor(this.totalTimeInFights),
        u = Math.floor(g / 3600),
        m = Math.floor((g % 3600) / 60);
      d.textContent = `Total Time In Fights: ${u}h ${m}m ${g % 60}s`;
    }
  }
  increment(e, a = null, i = 1) {
    a
      ? (this[e][a] || (this[e][a] = 0), (this[e][a] += i))
      : (this[e] || (this[e] = 0), (this[e] += i)),
      this.updateStatisticsUI();
  }
  set(e, a = null, i) {
    a ? this[e] && (this[e][a] = i) : (this[e] = i), this.updateStatisticsUI();
  }
  update() {
    const e = Date.now(),
      a = (e - this.lastUpdate) / 1e3;
    (this.totalTimePlayed += a),
      (this.lastUpdate = e),
      this.updateStatisticsUI();
  }
  addFightTime(e) {
    (this.totalTimeInFights += e), this.updateStatisticsUI();
  }
}
const Ji = [
  {
    id: "kill10",
    category: "kills",
    title: "First Blood",
    description: "Defeat 10 enemies.",
    type: "kill",
    target: 10,
    reward: { gold: 500 },
    icon: "⚔️",
  },
  {
    id: "kill50",
    category: "kills",
    title: "Warrior",
    description: "Defeat 50 enemies.",
    type: "kill",
    target: 50,
    reward: { gold: 1500 },
    icon: "⚔️",
  },
  {
    id: "kill250",
    category: "kills",
    title: "Destroyer",
    description: "Defeat 250 enemies.",
    type: "kill",
    target: 250,
    reward: { gold: 4e3 },
    icon: "💥",
  },
  {
    id: "kill1000",
    category: "kills",
    title: "Massacre",
    description: "Defeat 1000 enemies.",
    type: "kill",
    target: 1e3,
    reward: { gold: 1e4, crystals: 1 },
    icon: "💀",
  },
  {
    id: "kill2500",
    category: "kills",
    title: "Harbinger",
    description: "Defeat 2500 enemies.",
    type: "kill",
    target: 2500,
    reward: { gold: 3e4, crystals: 4 },
    icon: "💀",
  },
  {
    id: "kill5000",
    category: "kills",
    title: "Death Incarnate",
    description: "Defeat 5000 enemies.",
    type: "kill",
    target: 5e3,
    reward: { gold: 6e4, crystals: 2 },
    icon: "☠️",
  },
  {
    id: "kill10000",
    category: "kills",
    title: "Apocalypse",
    description: "Defeat 10000 enemies.",
    type: "kill",
    target: 1e4,
    reward: { gold: 1e5, crystals: 3 },
    icon: "☠️",
  },
  {
    id: "kill25000",
    category: "kills",
    title: "World Ender",
    description: "Defeat 25000 enemies.",
    type: "kill",
    target: 25e3,
    reward: { gold: 2e5, crystals: 5 },
    icon: "🌍",
  },
  {
    id: "kill50000",
    category: "kills",
    title: "Extinction Event",
    description: "Defeat 50000 enemies.",
    type: "kill",
    target: 5e4,
    reward: { gold: 4e5, crystals: 8 },
    icon: "🌍",
  },
  {
    id: "kill100000",
    category: "kills",
    title: "Universal Threat",
    description: "Defeat 100000 enemies.",
    type: "kill",
    target: 1e5,
    reward: { gold: 7e5, crystals: 12 },
    icon: "🌌",
  },
  {
    id: "kill250000",
    category: "kills",
    title: "Cosmic Terror",
    description: "Defeat 250000 enemies.",
    type: "kill",
    target: 25e4,
    reward: { gold: 2e6, crystals: 20 },
    icon: "🌌",
  },
  {
    id: "kill500000",
    category: "kills",
    title: "Reality Breaker",
    description: "Defeat 500000 enemies.",
    type: "kill",
    target: 5e5,
    reward: { gold: 6e6, crystals: 30 },
    icon: "⭐",
  },
  {
    id: "kill1000000",
    category: "kills",
    title: "Infinite Void",
    description: "Defeat 1000000 enemies.",
    type: "kill",
    target: 1e6,
    reward: { gold: 15e6, crystals: 50 },
    icon: "⭐",
  },
  {
    id: "kill_rare_10",
    category: "rarity",
    title: "Rare Hunter",
    description: "Defeat 10 rare enemies.",
    type: "kill_rarity",
    rarity: "rare",
    target: 10,
    reward: { gold: 300, crystals: 1 },
    icon: "🔵",
  },
  {
    id: "kill_rare_50",
    category: "rarity",
    title: "Rare Specialist",
    description: "Defeat 50 rare enemies.",
    type: "kill_rarity",
    rarity: "rare",
    target: 50,
    reward: { gold: 1500, crystals: 1 },
    icon: "🔵",
  },
  {
    id: "kill_rare_100",
    category: "rarity",
    title: "Rare Exterminator",
    description: "Defeat 100 rare enemies.",
    type: "kill_rarity",
    rarity: "rare",
    target: 100,
    reward: { gold: 3e3, crystals: 2 },
    icon: "🔵",
  },
  {
    id: "kill_rare_500",
    category: "rarity",
    title: "Rare Nemesis",
    description: "Defeat 500 rare enemies.",
    type: "kill_rarity",
    rarity: "rare",
    target: 500,
    reward: { gold: 15e3, crystals: 3 },
    icon: "🔵",
  },
  {
    id: "kill_rare_1000",
    category: "rarity",
    title: "Rare Apocalypse",
    description: "Defeat 1000 rare enemies.",
    type: "kill_rarity",
    rarity: "rare",
    target: 1e3,
    reward: { gold: 3e4, crystals: 5 },
    icon: "🔵",
  },
  {
    id: "kill_epic_5",
    category: "rarity",
    title: "Epic Slayer",
    description: "Defeat 5 epic enemies.",
    type: "kill_rarity",
    rarity: "epic",
    target: 5,
    reward: { gold: 1e3, crystals: 1 },
    icon: "🟣",
  },
  {
    id: "kill_epic_25",
    category: "rarity",
    title: "Epic Destroyer",
    description: "Defeat 25 epic enemies.",
    type: "kill_rarity",
    rarity: "epic",
    target: 25,
    reward: { gold: 5e3, crystals: 2 },
    icon: "🟣",
  },
  {
    id: "kill_epic_50",
    category: "rarity",
    title: "Epic Vanquisher",
    description: "Defeat 50 epic enemies.",
    type: "kill_rarity",
    rarity: "epic",
    target: 50,
    reward: { gold: 1e4, crystals: 3 },
    icon: "🟣",
  },
  {
    id: "kill_epic_100",
    category: "rarity",
    title: "Epic Bane",
    description: "Defeat 100 epic enemies.",
    type: "kill_rarity",
    rarity: "epic",
    target: 100,
    reward: { gold: 2e4, crystals: 5 },
    icon: "🟣",
  },
  {
    id: "kill_epic_500",
    category: "rarity",
    title: "Epic Annihilator",
    description: "Defeat 500 epic enemies.",
    type: "kill_rarity",
    rarity: "epic",
    target: 500,
    reward: { gold: 1e5, crystals: 8 },
    icon: "🟣",
  },
  {
    id: "kill_legendary_1",
    category: "rarity",
    title: "Legendary Conqueror",
    description: "Defeat 1 legendary enemy.",
    type: "kill_rarity",
    rarity: "legendary",
    target: 1,
    reward: { gold: 2500, crystals: 2 },
    icon: "🟠",
  },
  {
    id: "kill_legendary_10",
    category: "rarity",
    title: "Legendary Hunter",
    description: "Defeat 10 legendary enemies.",
    type: "kill_rarity",
    rarity: "legendary",
    target: 10,
    reward: { gold: 25e3, crystals: 5 },
    icon: "🟠",
  },
  {
    id: "kill_legendary_25",
    category: "rarity",
    title: "Legendary Slayer",
    description: "Defeat 25 legendary enemies.",
    type: "kill_rarity",
    rarity: "legendary",
    target: 25,
    reward: { gold: 62500, crystals: 8 },
    icon: "🟠",
  },
  {
    id: "kill_legendary_50",
    category: "rarity",
    title: "Legendary Destroyer",
    description: "Defeat 50 legendary enemies.",
    type: "kill_rarity",
    rarity: "legendary",
    target: 50,
    reward: { gold: 125e3, crystals: 12 },
    icon: "🟠",
  },
  {
    id: "kill_legendary_100",
    category: "rarity",
    title: "Legendary Nightmare",
    description: "Defeat 100 legendary enemies.",
    type: "kill_rarity",
    rarity: "legendary",
    target: 100,
    reward: { gold: 25e4, crystals: 20 },
    icon: "🟠",
  },
  {
    id: "kill_mythic_1",
    category: "rarity",
    title: "Mythic Bane",
    description: "Defeat 1 mythic enemy.",
    type: "kill_rarity",
    rarity: "mythic",
    target: 1,
    reward: { gold: 5e3, crystals: 3 },
    icon: "🔴",
  },
  {
    id: "kill_mythic_5",
    category: "rarity",
    title: "Mythic Slayer",
    description: "Defeat 5 mythic enemies.",
    type: "kill_rarity",
    rarity: "mythic",
    target: 5,
    reward: { gold: 25e3, crystals: 8 },
    icon: "🔴",
  },
  {
    id: "kill_mythic_10",
    category: "rarity",
    title: "Mythic Hunter",
    description: "Defeat 10 mythic enemies.",
    type: "kill_rarity",
    rarity: "mythic",
    target: 10,
    reward: { gold: 5e4, crystals: 15 },
    icon: "🔴",
  },
  {
    id: "kill_mythic_25",
    category: "rarity",
    title: "Mythic Destroyer",
    description: "Defeat 25 mythic enemies.",
    type: "kill_rarity",
    rarity: "mythic",
    target: 25,
    reward: { gold: 125e3, crystals: 25 },
    icon: "🔴",
  },
  {
    id: "kill_mythic_50",
    category: "rarity",
    title: "Mythic Apocalypse",
    description: "Defeat 50 mythic enemies.",
    type: "kill_rarity",
    rarity: "mythic",
    target: 50,
    reward: { gold: 25e4, crystals: 40 },
    icon: "🔴",
  },
  {
    id: "gold_1000",
    category: "resources",
    title: "Pocket Change",
    description: "Earn a total of 1,000 gold.",
    type: "resource",
    resource: "totalGoldEarned",
    target: 1e3,
    reward: { gold: 500 },
    icon: "💰",
  },
  {
    id: "gold_5000",
    category: "resources",
    title: "Small Fortune",
    description: "Earn a total of 5,000 gold.",
    type: "resource",
    resource: "totalGoldEarned",
    target: 5e3,
    reward: { crystals: 1 },
    icon: "💰",
  },
  {
    id: "gold_15000",
    category: "resources",
    title: "Gold Hoarder",
    description: "Earn a total of 15,000 gold.",
    type: "resource",
    resource: "totalGoldEarned",
    target: 15e3,
    reward: { crystals: 1 },
    icon: "💰",
  },
  {
    id: "gold_50000",
    category: "resources",
    title: "Wealthy Adventurer",
    description: "Earn a total of 50,000 gold.",
    type: "resource",
    resource: "totalGoldEarned",
    target: 5e4,
    reward: { crystals: 1 },
    icon: "💰",
  },
  {
    id: "gold_150000",
    category: "resources",
    title: "Rich Merchant",
    description: "Earn a total of 150,000 gold.",
    type: "resource",
    resource: "totalGoldEarned",
    target: 15e4,
    reward: { crystals: 2 },
    icon: "💰",
  },
  {
    id: "gold_500000",
    category: "resources",
    title: "Treasure Tycoon",
    description: "Earn a total of 500,000 gold.",
    type: "resource",
    resource: "totalGoldEarned",
    target: 5e5,
    reward: { crystals: 2 },
    icon: "🏆",
  },
  {
    id: "gold_1500000",
    category: "resources",
    title: "Gold Baron",
    description: "Earn a total of 1,500,000 gold.",
    type: "resource",
    resource: "totalGoldEarned",
    target: 15e5,
    reward: { crystals: 3 },
    icon: "🏆",
  },
  {
    id: "gold_5000000",
    category: "resources",
    title: "Millionaire",
    description: "Earn a total of 5,000,000 gold.",
    type: "resource",
    resource: "totalGoldEarned",
    target: 5e6,
    reward: { crystals: 5 },
    icon: "🏆",
  },
  {
    id: "gold_15000000",
    category: "resources",
    title: "Golden Emperor",
    description: "Earn a total of 15,000,000 gold.",
    type: "resource",
    resource: "totalGoldEarned",
    target: 15e6,
    reward: { crystals: 8 },
    icon: "👑",
  },
  {
    id: "gold_50000000",
    category: "resources",
    title: "Treasure God",
    description: "Earn a total of 50,000,000 gold.",
    type: "resource",
    resource: "totalGoldEarned",
    target: 5e7,
    reward: { crystals: 12 },
    icon: "👑",
  },
  {
    id: "gold_100000000",
    category: "resources",
    title: "Midas Touch",
    description: "Earn a total of 100,000,000 gold.",
    type: "resource",
    resource: "totalGoldEarned",
    target: 1e8,
    reward: { crystals: 20 },
    icon: "👑",
  },
  {
    id: "gold_250000000",
    category: "resources",
    title: "Infinite Wealth",
    description: "Earn a total of 250,000,000 gold.",
    type: "resource",
    resource: "totalGoldEarned",
    target: 25e7,
    reward: { crystals: 30 },
    icon: "✨",
  },
  {
    id: "crystals_5",
    category: "resources",
    title: "Crystal Seeker",
    description: "Earn a total of 5 crystals.",
    type: "resource",
    resource: "crystals",
    target: 5,
    reward: { gold: 1e3 },
    icon: "🔷",
  },
  {
    id: "crystals_10",
    category: "resources",
    title: "Crystal Collector",
    description: "Earn a total of 10 crystals.",
    type: "resource",
    resource: "crystals",
    target: 10,
    reward: { gold: 2e3 },
    icon: "🔷",
  },
  {
    id: "crystals_25",
    category: "resources",
    title: "Crystal Hoarder",
    description: "Earn a total of 25 crystals.",
    type: "resource",
    resource: "crystals",
    target: 25,
    reward: { gold: 5e3 },
    icon: "🔷",
  },
  {
    id: "crystals_50",
    category: "resources",
    title: "Crystal Merchant",
    description: "Earn a total of 50 crystals.",
    type: "resource",
    resource: "crystals",
    target: 50,
    reward: { gold: 1e4 },
    icon: "💎",
  },
  {
    id: "crystals_100",
    category: "resources",
    title: "Crystal Master",
    description: "Earn a total of 100 crystals.",
    type: "resource",
    resource: "crystals",
    target: 100,
    reward: { gold: 25e3 },
    icon: "💎",
  },
  {
    id: "crystals_250",
    category: "resources",
    title: "Crystal Emperor",
    description: "Earn a total of 250 crystals.",
    type: "resource",
    resource: "crystals",
    target: 250,
    reward: { gold: 5e4 },
    icon: "💎",
  },
  {
    id: "crystals_500",
    category: "resources",
    title: "Crystal God",
    description: "Earn a total of 500 crystals.",
    type: "resource",
    resource: "crystals",
    target: 500,
    reward: { gold: 1e5 },
    icon: "✨",
  },
  {
    id: "level_5",
    category: "progression",
    title: "Rookie",
    description: "Reach level 5.",
    type: "level",
    target: 5,
    reward: { gold: 200 },
    icon: "🧙",
  },
  {
    id: "level_10",
    category: "progression",
    title: "Novice Adventurer",
    description: "Reach level 10.",
    type: "level",
    target: 10,
    reward: { gold: 500 },
    icon: "🧙",
  },
  {
    id: "level_25",
    category: "progression",
    title: "Experienced Fighter",
    description: "Reach level 25.",
    type: "level",
    target: 25,
    reward: { gold: 1e3, crystals: 1 },
    icon: "🦸",
  },
  {
    id: "level_50",
    category: "progression",
    title: "Seasoned Hero",
    description: "Reach level 50.",
    type: "level",
    target: 50,
    reward: { gold: 2e3, crystals: 1 },
    icon: "🦸",
  },
  {
    id: "level_75",
    category: "progression",
    title: "Veteran Warrior",
    description: "Reach level 75.",
    type: "level",
    target: 75,
    reward: { gold: 5e3, crystals: 2 },
    icon: "🦸",
  },
  {
    id: "level_100",
    category: "progression",
    title: "Elite Champion",
    description: "Reach level 100.",
    type: "level",
    target: 100,
    reward: { gold: 1e4, crystals: 3 },
    icon: "⭐",
  },
  {
    id: "level_150",
    category: "progression",
    title: "Master Hero",
    description: "Reach level 150.",
    type: "level",
    target: 150,
    reward: { gold: 2e4, crystals: 5 },
    icon: "⭐",
  },
  {
    id: "level_200",
    category: "progression",
    title: "Legendary Being",
    description: "Reach level 200.",
    type: "level",
    target: 200,
    reward: { gold: 4e4, crystals: 8 },
    icon: "🌟",
  },
  {
    id: "level_300",
    category: "progression",
    title: "Transcendent",
    description: "Reach level 300.",
    type: "level",
    target: 300,
    reward: { gold: 8e4, crystals: 12 },
    icon: "🌟",
  },
  {
    id: "level_500",
    category: "progression",
    title: "Ascended One",
    description: "Reach level 500.",
    type: "level",
    target: 500,
    reward: { gold: 15e4, crystals: 20 },
    icon: "✨",
  },
  {
    id: "stage_10",
    category: "progression",
    title: "First Steps",
    description: "Reach stage 10.",
    type: "stage",
    target: 10,
    reward: { gold: 300 },
    icon: "🗺️",
  },
  {
    id: "stage_25",
    category: "progression",
    title: "Wanderer",
    description: "Reach stage 25.",
    type: "stage",
    target: 25,
    reward: { gold: 600 },
    icon: "🗺️",
  },
  {
    id: "stage_50",
    category: "progression",
    title: "Explorer",
    description: "Reach stage 50.",
    type: "stage",
    target: 50,
    reward: { gold: 1e3 },
    icon: "🗺️",
  },
  {
    id: "stage_100",
    category: "progression",
    title: "Pathfinder",
    description: "Reach stage 100.",
    type: "stage",
    target: 100,
    reward: { gold: 2500, crystals: 1 },
    icon: "🗺️",
  },
  {
    id: "stage_200",
    category: "progression",
    title: "Voyager",
    description: "Reach stage 200.",
    type: "stage",
    target: 200,
    reward: { gold: 5e3, crystals: 2 },
    icon: "🌍",
  },
  {
    id: "stage_300",
    category: "progression",
    title: "World Traveler",
    description: "Reach stage 300.",
    type: "stage",
    target: 300,
    reward: { gold: 1e4, crystals: 3 },
    icon: "🌍",
  },
  {
    id: "stage_500",
    category: "progression",
    title: "Dimensional Walker",
    description: "Reach stage 500.",
    type: "stage",
    target: 500,
    reward: { gold: 25e3, crystals: 5 },
    icon: "🌌",
  },
  {
    id: "stage_1000",
    category: "progression",
    title: "Reality Hopper",
    description: "Reach stage 1000.",
    type: "stage",
    target: 1e3,
    reward: { gold: 5e4, crystals: 10 },
    icon: "🌌",
  },
  {
    id: "damage_1000",
    category: "progression",
    title: "Big Hit",
    description: "Deal 1,000 damage in a single hit.",
    type: "damage",
    target: 1e3,
    reward: { crystals: 1 },
    icon: "💥",
  },
  {
    id: "damage_10000",
    category: "progression",
    title: "Devastating Strike",
    description: "Deal 10,000 damage in a single hit.",
    type: "damage",
    target: 1e4,
    reward: { crystals: 2 },
    icon: "💥",
  },
  {
    id: "damage_100000",
    category: "progression",
    title: "Cataclysmic Blow",
    description: "Deal 100,000 damage in a single hit.",
    type: "damage",
    target: 1e5,
    reward: { crystals: 3 },
    icon: "💢",
  },
  {
    id: "damage_1000000",
    category: "progression",
    title: "Reality Shattering",
    description: "Deal 1,000,000 damage in a single hit.",
    type: "damage",
    target: 1e6,
    reward: { crystals: 5 },
    icon: "💢",
  },
];
class pa {
  constructor(
    {
      id: e,
      title: a,
      description: i,
      type: r,
      target: n,
      reward: s,
      icon: o,
      category: c,
      rarity: l,
      resource: d,
    },
    g = !1
  ) {
    (this.id = e),
      (this.title = a),
      (this.description = i),
      (this.type = r),
      (this.target = n),
      (this.reward = s),
      (this.icon = o),
      (this.category = c),
      (this.rarity = l),
      (this.resource = d),
      (this.claimed = g);
  }
  getProgress(e) {
    if (this.type === "kill")
      return Math.min(e.enemiesKilled.total, this.target);
    if (this.type === "kill_rarity" && this.rarity) {
      const a = this.rarity.toLowerCase();
      return Math.min(e.enemiesKilled[a] || 0, this.target);
    }
    if (this.type === "resource" && this.resource) {
      if (this.resource === "totalGoldEarned")
        return Math.min(e.totalGoldEarned, this.target);
      if (this.resource === "crystals")
        return Math.min(y.crystals, this.target);
    }
    return this.type === "level"
      ? Math.min(y.level, this.target)
      : this.type === "stage"
      ? Math.min(e.highestStageReached, this.target)
      : this.type === "damage"
      ? Math.min(e.highestDamageDealt, this.target)
      : 0;
  }
  isComplete(e) {
    return this.getProgress(e) >= this.target;
  }
  claim(e) {
    return !this.isComplete(e) || this.claimed
      ? null
      : ((this.claimed = !0),
        this.reward.gold && y.gainGold(this.reward.gold),
        this.reward.exp && y.gainExp(this.reward.exp),
        this.reward.crystals && y.gainCrystals(this.reward.crystals),
        j(`Quest "${this.title}" claimed!`, "normal"),
        ie(),
        Ye(),
        this.reward);
  }
  toJSON() {
    return { claimed: this.claimed };
  }
  static fromJSON(e, a = {}) {
    return new pa(e, a.claimed || !1);
  }
}
class qs {
  constructor(e = Ji, a = null) {
    (this.definitions = e),
      (this.quests = e.map((i) =>
        pa.fromJSON(i, a == null ? void 0 : a[i.id])
      ));
  }
  claim(e, a) {
    const i = this.quests.find((r) => r.id === e);
    return i ? i.claim(a) : null;
  }
  toJSON() {
    const e = {};
    return (
      this.quests.forEach((a) => {
        e[a.id] = a.toJSON();
      }),
      e
    );
  }
  reset() {
    this.quests = this.definitions.map((e) => pa.fromJSON(e));
  }
}
const Rs = "https://d1ev.gho1st-team.top/api",
  $s = "endless";
function _a(t, e = {}) {
  const a = t.startsWith("http") ? t : `${Rs}${t}`;
  return fetch(a, { ...e, credentials: "include" });
}
async function Hs(t, e, a) {
  const i = {
      data_json: ka.encrypt(JSON.stringify(e.data_json)),
      game_name: e.game_name,
    },
    r = await _a(`/game-data/${t}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${a}`,
      },
      body: JSON.stringify(i),
    });
  if (!r.ok) throw new Error("Failed to save game data");
  return await r.json();
}
async function Oi(t, e, a = "no") {
  const i = await _a(`/game-data/${t}?premium=${a}&gameName=${$s}`, {
    headers: { Authorization: `Bearer ${e}` },
  });
  if (!i.ok) throw new Error("Failed to load game data");
  const r = await i.json();
  return {
    data: r.data_json ? ka.decrypt(r.data_json) : null,
    updated_at: r.updated_at || 0,
  };
}
function Os() {
  const t = document.getElementById("reset-progress");
  t &&
    (t.onclick = async () => {
      try {
        (await je(
          "Are you sure you want to reset all progress? This cannot be undone!"
        )) && A.resetAllProgress();
      } catch (e) {
        console.error("Error resetting progress:", e),
          alert("An error occurred while resetting progress.");
      }
    });
}
const Ns = [
  {
    id: "gold-mine",
    name: "Gold Mine",
    description:
      "Produces gold automatically over time. More mines = more gold.",
    cost: { gold: 1e3 },
    bonus: { goldPerMinute: 10 },
    image: "buildings/gold-mine.png",
  },
  {
    id: "crystal-lab",
    name: "Crystal Lab",
    description:
      "Generates rare crystals every minute. Essential for advanced upgrades.",
    cost: { crystals: 10 },
    bonus: { crystalsPerMinute: 0.1 },
    image: "buildings/crystal-lab.png",
  },
  {
    id: "soul-forge",
    name: "Soul Forge",
    description: "Harvests souls from the void, even while you are away.",
    cost: { souls: 5 },
    bonus: { soulsPerMinute: 0.05 },
    image: "buildings/soul-forge.png",
  },
];
function er(t, e) {
  (le.mapSpots = t), (le.spotPositions = e), le.save();
}
function Us() {
  return le.load(), { mapSpots: le.mapSpots, spotPositions: le.spotPositions };
}
function Gs() {
  const { mapSpots: t, spotPositions: e } = Us(),
    a = document.getElementById("buildings");
  a &&
    ((a.innerHTML = `
    <div id="buildings-bonus-summary"></div>
    <button id="open-building-map-btn" class="open-map-btn">Open Building Map</button>
  `),
    js(),
    (document.getElementById("open-building-map-btn").onclick = () =>
      Ws(t, e)));
}
function js() {
  let t = 0,
    e = 0,
    a = 0;
  le.playerBuildings.forEach((n) => {
    n.bonus.goldPerMinute && (t += n.bonus.goldPerMinute * n.owned),
      n.bonus.crystalsPerMinute && (e += n.bonus.crystalsPerMinute * n.owned),
      n.bonus.soulsPerMinute && (a += n.bonus.soulsPerMinute * n.owned);
  });
  const i = le.playerBuildings
      .map((n) =>
        n.owned > 0
          ? `<div class="built-building-row"><span class="built-building-name">${n.name}</span> <span class="built-building-level">Lv. ${n.owned}</span></div>`
          : ""
      )
      .filter(Boolean)
      .join(""),
    r = `
    <div class="bonus-summary">
      <b>Current Bonuses:</b>
      <span class="bonus-gold gold-color">+${t} gold/min</span>
      <span class="bonus-crystals crystals-color">+${e.toFixed(
        2
      )} crystals/min</span>
      <span class="bonus-souls souls-color">+${a.toFixed(2)} souls/min</span>
    </div>
    <div class="built-buildings-list">
      ${
        i ||
        '<span class="built-building-none">No buildings constructed yet.</span>'
      }
    </div>
  `;
  document.getElementById("buildings-bonus-summary").innerHTML = r;
}
function Ws(t, e) {
  (t = t ? [...t] : []), (e = e ? [...e] : []);
  for (let r = t.length - 1; r >= 0; r--)
    t[r] === null && (t.splice(r, 1), e.splice(r, 1));
  const i = $e({
    id: "buildings-map-modal",
    className: "building-modal",
    content: `
    <div id="buildings-map-modal-content">
      <button class="modal-close" style="float:right">&times;</button>
      <h2>Building Map</h2>
      <button id="add-empty-spot-btn" class="add-spot-btn">Add Empty Spot</button>
      <div id="buildings-map-outer">
        <div id="buildings-map-container">
          <div id="buildings-map"></div>
        </div>
      </div>
    </div>
  `,
    onClose: () => {
      for (let r = t.length - 1; r >= 0; r--)
        t[r] === null && (t.splice(r, 1), e.splice(r, 1));
      er(t, e);
    },
  });
  (document.getElementById("add-empty-spot-btn").onclick = () => {
    t.push(null), e.push({ left: 50, top: 50 }), Ni(t, e);
  }),
    enableMapDragScroll(),
    Ni(t, e),
    (i.querySelector(".modal-close").onclick = () => Ie("buildings-map-modal"));
}
function Ni(t, e) {
  const a = document.getElementById("buildings-map");
  (a.innerHTML = ""),
    e.forEach((i, r) => {
      const n = t[r],
        s = document.createElement("div");
      if (
        ((s.className = "building-spot"),
        (s.style.left = i.left + "%"),
        (s.style.top = i.top + "%"),
        s.setAttribute("data-spot-idx", r),
        (s.style.position = "absolute"),
        (s.draggable = !1),
        n != null)
      ) {
        const o = le.playerBuildings[n];
        (s.title = o.name),
          (s.onclick = (c) => {
            s._dragging || showBuildingModal(n, r, t, e);
          });
      }
      a.appendChild(s);
    }),
    er(t, e);
}
class tr {
  constructor(e) {
    (e = e || {}),
      (this.playerBuildings = Ns.map((a, i) => {
        var r, n;
        return {
          ...a,
          owned:
            ((n = (r = e.playerBuildings) == null ? void 0 : r[i]) == null
              ? void 0
              : n.owned) || 0,
        };
      })),
      (this.lastOnline = e.lastOnline || Date.now()),
      (this.mapSpots = e.mapSpots || []),
      (this.spotPositions = e.spotPositions || []),
      (this.interval = null);
  }
  buildBuilding(e) {
    const a = this.playerBuildings[e];
    return (a.cost.gold && y.gold < a.cost.gold) ||
      (a.cost.crystals && y.crystals < a.cost.crystals) ||
      (a.cost.souls && y.souls < a.cost.souls)
      ? !1
      : (a.cost.gold && (y.gold -= a.cost.gold),
        a.cost.crystals && (y.crystals -= a.cost.crystals),
        a.cost.souls && (y.souls -= a.cost.souls),
        a.owned++,
        this.save(),
        !0);
  }
  save() {
    localStorage.setItem(
      "buildings",
      JSON.stringify({
        playerBuildings: this.playerBuildings.map((e) => ({ owned: e.owned })),
        lastOnline: this.lastOnline,
        mapSpots: this.mapSpots,
        spotPositions: this.spotPositions,
      })
    );
  }
  load() {
    const e = JSON.parse(localStorage.getItem("buildings"));
    e &&
      (this.playerBuildings.forEach((a, i) => {
        var r, n;
        a.owned =
          ((n = (r = e.playerBuildings) == null ? void 0 : r[i]) == null
            ? void 0
            : n.owned) || 0;
      }),
      (this.lastOnline = e.lastOnline || Date.now()),
      (this.mapSpots = e.mapSpots || []),
      (this.spotPositions = e.spotPositions || []));
  }
  calculateOfflineBonus() {
    const e = Date.now(),
      a = Math.floor((e - this.lastOnline) / 6e4);
    let i = 0,
      r = 0,
      n = 0;
    return (
      this.playerBuildings.forEach((s) => {
        s.bonus.goldPerMinute && (i += s.bonus.goldPerMinute * s.owned * a),
          s.bonus.crystalsPerMinute &&
            (r += s.bonus.crystalsPerMinute * s.owned * a),
          s.bonus.soulsPerMinute && (n += s.bonus.soulsPerMinute * s.owned * a);
      }),
      (i = Math.floor(i)),
      (r = Math.floor(r)),
      (n = Math.floor(n)),
      (y.gold += i),
      (y.crystals += r),
      (y.souls += n),
      (this.lastOnline = e),
      this.save(),
      { minutes: a, gold: i, crystals: r, souls: n }
    );
  }
  startGeneration() {
    this.interval && clearInterval(this.interval),
      (this.interval = setInterval(() => {
        let e = 0,
          a = 0,
          i = 0;
        this.playerBuildings.forEach((r) => {
          r.bonus.goldPerMinute &&
            (e += (r.bonus.goldPerMinute * r.owned) / 60),
            r.bonus.crystalsPerMinute &&
              (a += (r.bonus.crystalsPerMinute * r.owned) / 60),
            r.bonus.soulsPerMinute &&
              (i += (r.bonus.soulsPerMinute * r.owned) / 60);
        }),
          e >= 1 && (y.gold += Math.floor(e)),
          a >= 1 && (y.crystals += Math.floor(a)),
          i >= 1 && (y.souls += Math.floor(i)),
          this.save();
      }, 1e3));
  }
  stopGeneration() {
    this.interval && clearInterval(this.interval), (this.interval = null);
  }
  showOfflineBonusDialog(e) {
    if (!e) return;
    const { minutes: a, gold: i, crystals: r, souls: n } = e;
    if (a <= 0 || (i === 0 && r === 0 && n === 0)) return;
    const s = `
      <div class="building-modal-content">
        <h2>Welcome Back!</h2>
        <p>While you were away (${a} min):</p>
        <p style="font-size:1.2em;margin:18px 0;">
          <span class="bonus-gold">+${Math.floor(i)} gold</span><br>
          <span class="bonus-crystals">+${r.toFixed(2)} crystals</span><br>
          <span class="bonus-souls">+${n.toFixed(2)} souls</span><br>
        </p>
        <button class="collect-btn">Collect</button>
      </div>
    `,
      o = $e({
        id: "offline-bonus-modal",
        className: "building-modal",
        content: s,
        onClose: () => {},
      });
    o.querySelector(".collect-btn").onclick = () => {
      Ie("offline-bonus-modal"), ie();
    };
  }
  reset() {
    this.playerBuildings.forEach((e) => (e.owned = 0)),
      (this.lastOnline = Date.now()),
      (this.mapSpots = []),
      (this.spotPositions = []),
      this.save();
  }
}
new tr();
window.qwe = console.log;
window.qw = console.log;
window.qq = console.log;
window.q = console.log;
window.log = console.log;
let xt = !1;
(async () => {
  const t = new Fs(),
    e = await t.loadGame(),
    a = new Es(e == null ? void 0 : e.hero),
    i = new Ls(e == null ? void 0 : e.inventory),
    r = new Zn(e == null ? void 0 : e.skillTree),
    n = new Is(e == null ? void 0 : e.crystalShop),
    s = new _s(e == null ? void 0 : e.training),
    o = new Ts(e == null ? void 0 : e.statistics),
    c = new qs(Ji, e == null ? void 0 : e.quests),
    l = new ys(e == null ? void 0 : e.soulShop),
    d = new tr(e == null ? void 0 : e.building);
  br({
    game: t,
    hero: a,
    inventory: i,
    training: s,
    skillTree: r,
    crystalShop: n,
    statistics: o,
    quests: c,
    soulShop: l,
    building: d,
  });
  const g = d.calculateOfflineBonus();
  d.showOfflineBonusDialog(g),
    Gs(),
    d.startGeneration(),
    (A.stage = y.getStartingStage() || 1),
    gs(),
    be.initializeCrystalShopUI(),
    qe.initializeSoulShopUI(),
    Q.initializeStatisticsUI(),
    bt(),
    ie(),
    y.recalculateFromAttributes(),
    A.healPlayer(y.stats.life),
    (y.stats.currentMana = y.stats.mana),
    fe(),
    oe(),
    Ge(),
    Se(),
    Ye(),
    B(),
    window.addEventListener("DOMContentLoaded", () => {
      Ar(), rt(), Os();
    }),
    (A.saveGame = function () {
      Q.updateStatisticsUI();
      const S = {
        hero: y,
        skillTree: P,
        crystalShop: be,
        training: Ae,
        inventory: O,
        statistics: Q,
        quests,
        soulShop: qe,
        building: {
          playerBuildings: le.playerBuildings.map((k) => ({ owned: k.owned })),
          lastOnline: le.lastOnline,
          mapSpots: le.mapSpots,
          spotPositions: le.spotPositions,
        },
      };
      localStorage.setItem("gameProgress", JSON.stringify(S));
    });
  let u = !1;
  if (
    (setInterval(() => {
      u || ((u = !0), A.gameLoop(), (u = !1));
    }, 100),
    setInterval(() => {
      Q.update(), A.saveGame();
    }, 6e4),
    xt)
  )
    log("Dev mode is enabled."),
      document.body.classList.add("dev-active"),
      Fi(),
      _i();
  else {
    document.body.classList.remove("dev-active");
    const S = document.querySelector(".debug-ui"),
      k = document.querySelector(".modify-ui");
    S && S.remove(), k && k.remove();
  }
  let m = [];
  const f = ["e", "d", "e", "v"];
  document.addEventListener("keydown", (S) => {
    if (
      (m.push(S.key.toLowerCase()),
      m.length > f.length && m.shift(),
      m.join("") === f.join(""))
    )
      if (
        ((xt = !xt),
        console.log(`Dev mode is now ${xt ? "enabled" : "disabled"}.`),
        xt)
      )
        document.body.classList.add("dev-active"), Fi(), _i();
      else {
        document.body.classList.remove("dev-active");
        const k = document.querySelector(".debug-ui"),
          w = document.querySelector(".modify-ui");
        k && k.remove(), w && w.remove();
      }
  });
  const h = document.getElementById("cloud-save-status"),
    v = document.getElementById("cloud-save-btn"),
    E = document.getElementById("cloud-load-btn");
  let p = null,
    x = null;
  const b = "endless";
  async function D() {
    var S, k;
    try {
      const w = await _a("/user/session", { credentials: "include" });
      if (!w.ok) throw new Error("Not logged in");
      x = (await w.json()).user;
      let C = null,
        M = null;
      try {
        const H = await Oi(x.id, x.token);
        (C = (S = H == null ? void 0 : H.data) == null ? void 0 : S.hero),
          (M =
            (H == null ? void 0 : H.updated_at) ||
            ((k = H == null ? void 0 : H.data) == null
              ? void 0
              : k.updated_at));
      } catch (H) {
        console.error("Failed to load cloud data:", H);
      }
      const L = y;
      let _ = "Ready to save to cloud";
      const U = (H) => {
        if (!H) return "unknown";
        const W = new Date(H),
          J = {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          };
        return W.toLocaleString(void 0, J);
      };
      C && (C.exp !== L.exp || C.gold !== L.gold)
        ? (_ = `Last save: ${U(M)}`)
        : M
        ? (_ = `Last save: ${U(M)}`)
        : M || (_ = "Ready to save"),
        (h.textContent = _),
        (h.className = ""),
        (v.disabled = !1),
        v.classList.remove("disabled"),
        (E.disabled = !1),
        E.classList.remove("disabled");
    } catch {
      x = null;
      let C = "/login";
      (h.innerHTML =
        '<span class="login-status">Not logged in</span><div><a href="' +
        C +
        '" class="login-link" target="_blank">Log in</a></div>'),
        (h.className = "not-logged-in"),
        (v.disabled = !0),
        v.classList.add("disabled"),
        (E.disabled = !0),
        E.classList.add("disabled");
    }
  }
  v.addEventListener("click", async () => {
    if (x) {
      (v.disabled = !0),
        (h.textContent = "Saving..."),
        (h.className = "saving");
      try {
        await Hs(
          x.id,
          {
            data_json: ka.encrypt(
              JSON.stringify({
                hero: y,
                skillTree: P,
                crystalShop: be,
                training: Ae,
                inventory: O,
                statistics: Q,
              })
            ),
            game_name: b,
          },
          x.token
        ),
          (p = Date.now()),
          (h.textContent = `Last cloud save: ${new Date(
            p
          ).toLocaleTimeString()}`);
      } catch {
        (h.textContent = "Cloud save failed"), (h.className = "failed");
      } finally {
        v.disabled = !x;
      }
    }
  }),
    E.addEventListener("click", async () => {
      if (x) {
        (E.disabled = !0), (E.textContent = "Loading...");
        try {
          const { data: S } = await Oi(x.id, x.token);
          if (!S) throw new Error("No cloud save found");
          const k = S.hero || {},
            w = `Cloud Save Info:

Level: ${k.level || 1}
Gold: ${k.gold || 0}
Crystals: ${k.crystals || 0}
Souls: ${k.souls || 0}

Are you sure you want to overwrite your local save with this cloud save? This cannot be undone.`;
          (await je(w)) &&
            (localStorage.setItem(
              "gameProgress",
              JSON.stringify({ ...S, lastUpdated: Date.now() })
            ),
            window.location.reload());
        } catch (S) {
          alert("Failed to load from cloud: " + (S.message || S));
        } finally {
          (E.disabled = !x), (E.textContent = "Load from Cloud");
        }
      }
    }),
    D(),
    setInterval(D, 6e4 * 60);
  function B() {
    const S = "./";
    Array.from(new Set(de.map((w) => S + w.image))).forEach((w) => {
      const C = new Image();
      C.src = w;
    });
  }
})();
