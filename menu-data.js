// ---------- Burger Shot menu data ----------
// Shared between index.html (the calculator) and admin.html (the menu editor).
//
// Categories (same shape Bean Machine uses):
//   classic          -> 🍔 A La Carte (burgers, fries, drinks, shakes, whatever isn't a combo)
//   bundles          -> 🍔 Combos & Bundles (built with the Choose & Add wizard)
//   iceCream         -> 🍦 Ice Cream
//   extras           -> 🎁 Extras
//   cateringPackages -> 🎉 Catering Bundles (admin-editable from the Combos & Bundles panel)
//   specialty/deals/packs -> unused placeholders kept only so nothing throws if
//                       older code paths look them up; leave them empty.
//
// Items below were pulled over from the old calculator (index__Burgershot_.html):
// entrees, drinks, shakes -> classic; combos -> bundles (rebuilt using the
// components wizard instead of the old includedEntrees/drinksIncluded fields).
// extras/cateringPackages start empty — add those from admin.html.

const MENU = {
  classic: [
    // Entrees
    { id:'en-nuggets',   name:'Chicken Nuggets',               icon:'🍗', price:60,  type:'entree' },
    { id:'en-ham',       name:'Hamburger',                     icon:'🍔', price:60,  type:'entree' },
    { id:'en-cheese',    name:'Cheeseburger',                  icon:'🧀', price:100, type:'entree' },
    { id:'en-bacon',     name:'Bacon Cheeseburger',             icon:'🥓', price:120, type:'entree' },
    { id:'en-breakfast', name:`Bacon n' Egg Cheeseburger`,      icon:'🍳', price:140, type:'entree' },
    { id:'en-veggie',    name:'Veggie Burger',                 icon:'🥬', price:60,  type:'entree' },
    { id:'en-fries',     name:'Fries',                         icon:'🍟', price:60,  type:'entree' },

    // Drinks
    { id:'dr-water',      name:'Water',       icon:'💧', price:50, type:'drink' },
    { id:'dr-koka',       name:'Koka',        icon:'🥤', price:50, type:'drink' },
    { id:'dr-frezzi',     name:'Frezzi',      icon:'❄️', price:50, type:'drink' },
    { id:'dr-sprunk',     name:'Sprunk',      icon:'⚡', price:50, type:'drink' },
    { id:'dr-tanga',      name:'Tanga',       icon:'🍊', price:50, type:'drink' },
    { id:'dr-greenapple', name:'Green Apple', icon:'🍏', price:50, type:'drink' },

    // Shakes
    { id:'shk-vanilla', name:'Vanilla Shake',    icon:'🍦', price:100, type:'shake' },
    { id:'shk-choc',    name:'Chocolate Shake',  icon:'🍫', price:100, type:'shake' },
    { id:'shk-avo',     name:'Avocado Shake',    icon:'🥑', price:100, type:'shake' },
    { id:'shk-banana',  name:'Banana Shake',     icon:'🍌', price:100, type:'shake' }
  ],

  specialty: [],
  deals: [],
  packs: [],

  bundles: [
    {
      id:'cb-nuglife', name:'Nug Life', icon:'🍗', price:250, type:'bundle',
      description: '2x Chicken Nuggets • 2x Fries • 4 Drinks of choice',
      components: [
        { type:'fixed',  category:'classic', qty:2, itemId:'en-nuggets', poolIds:[] },
        { type:'fixed',  category:'classic', qty:2, itemId:'en-fries',   poolIds:[] },
        { type:'choice', category:'classic', qty:4, itemId:null, poolIds:['dr-water','dr-koka','dr-frezzi','dr-sprunk','dr-tanga','dr-greenapple'] }
      ]
    },
    {
      id:'cb-plainjane', name:'Plain Jane', icon:'🍔', price:200, type:'bundle',
      description: '2x Hamburgers • 2x Fries • 4 Drinks of choice',
      components: [
        { type:'fixed',  category:'classic', qty:2, itemId:'en-ham',   poolIds:[] },
        { type:'fixed',  category:'classic', qty:2, itemId:'en-fries', poolIds:[] },
        { type:'choice', category:'classic', qty:4, itemId:null, poolIds:['dr-water','dr-koka','dr-frezzi','dr-sprunk','dr-tanga','dr-greenapple'] }
      ]
    },
    {
      id:'cb-meltdown', name:'The Meltdown', icon:'🧀', price:250, type:'bundle',
      description: '2x Cheeseburgers • 2x Fries • 4 Drinks of choice',
      components: [
        { type:'fixed',  category:'classic', qty:2, itemId:'en-cheese', poolIds:[] },
        { type:'fixed',  category:'classic', qty:2, itemId:'en-fries',  poolIds:[] },
        { type:'choice', category:'classic', qty:4, itemId:null, poolIds:['dr-water','dr-koka','dr-frezzi','dr-sprunk','dr-tanga','dr-greenapple'] }
      ]
    },
    {
      id:'cb-porker', name:'The Porker', icon:'🥓', price:350, type:'bundle',
      description: '2x Bacon Cheeseburgers • 2x Fries • 4 Drinks of choice',
      components: [
        { type:'fixed',  category:'classic', qty:2, itemId:'en-bacon', poolIds:[] },
        { type:'fixed',  category:'classic', qty:2, itemId:'en-fries', poolIds:[] },
        { type:'choice', category:'classic', qty:4, itemId:null, poolIds:['dr-water','dr-koka','dr-frezzi','dr-sprunk','dr-tanga','dr-greenapple'] }
      ]
    },
    {
      id:'cb-brawler', name:'The Breakfast Brawler', icon:'🍳', price:450, type:'bundle',
      description: `2x Bacon n' Egg Cheeseburgers • 2x Fries • 4 Drinks of choice`,
      components: [
        { type:'fixed',  category:'classic', qty:2, itemId:'en-breakfast', poolIds:[] },
        { type:'fixed',  category:'classic', qty:2, itemId:'en-fries',     poolIds:[] },
        { type:'choice', category:'classic', qty:4, itemId:null, poolIds:['dr-water','dr-koka','dr-frezzi','dr-sprunk','dr-tanga','dr-greenapple'] }
      ]
    },
    {
      id:'cb-gobbler', name:'Garden Gobbler', icon:'🥬', price:200, type:'bundle',
      description: '2x Veggie Burgers • 2x Fries • 4 Drinks of choice',
      components: [
        { type:'fixed',  category:'classic', qty:2, itemId:'en-veggie', poolIds:[] },
        { type:'fixed',  category:'classic', qty:2, itemId:'en-fries',  poolIds:[] },
        { type:'choice', category:'classic', qty:4, itemId:null, poolIds:['dr-water','dr-koka','dr-frezzi','dr-sprunk','dr-tanga','dr-greenapple'] }
      ]
    }
  ],

  extras: [
    { id:'ex-toy', name:'Adult Toy', icon:'🎁', price:1000, type:'extra' }
  ],

  iceCream: [
    { id:'ic-vanilla',     name:'Vanilla Ice Cream',     icon:'🍦', price:100, type:'ice' },
    { id:'ic-choc',        name:'Chocolate Ice Cream',   icon:'🍫', price:100, type:'ice' },
    { id:'ic-apple',       name:'Apple Ice Cream',       icon:'🍏', price:100, type:'ice' },
    { id:'ic-banana',      name:'Banana Ice Cream',      icon:'🍌', price:100, type:'ice' },
    { id:'ic-lemon',       name:'Lemon Ice Cream',       icon:'🍋', price:100, type:'ice' },
    { id:'ic-mango',       name:'Mango Ice Cream',       icon:'🥭', price:100, type:'ice' },
    { id:'ic-pomegranate', name:'Pomegranate Ice Cream', icon:'❤️', price:100, type:'ice' },
    { id:'ic-watermelon',  name:'Watermelon Ice Cream',  icon:'🍉', price:100, type:'ice' }
  ],

  cateringPackages: []
};

// Recipes (for ingredient list / cost tracking), pulled straight from the old calculator.
const RECIPE_MAP = {
  // Entrees
  'en-ham':       { 'Burger Buns':1, 'Raw Patty':1, 'Lettuce':1 },
  'en-cheese':    { 'Burger Buns':1, 'Raw Patty':1, 'Lettuce':1, 'Cheese':1 },
  'en-bacon':     { 'Burger Buns':1, 'Raw Patty':1, 'Lettuce':1, 'Cheese':1, 'Raw Bacon':1 },
  'en-breakfast': { 'Burger Buns':1, 'Raw Patty':1, 'Lettuce':1, 'Cheese':1, 'Raw Bacon':1, 'Eggs':1 },
  'en-veggie':    { 'Burger Buns':1, 'Lettuce':4 },
  'en-nuggets':   { 'Breadcrumbs':1, 'Chicken Breast':1 },
  'en-fries':     { 'Potato':3 },

  // Drinks (bought finished)
  'dr-water':      { 'Water':1 },
  'dr-koka':       { 'Koka':1 },
  'dr-frezzi':     { 'Frezzi':1 },
  'dr-sprunk':     { 'Sprunk':1 },
  'dr-tanga':      { 'Tanga':1 },
  'dr-greenapple': { 'Green Apple':1 },

  // Ice cream (1 Cone + Milk + flavour)
  'ic-vanilla':     { 'Ice Cream Cone':1, 'Milk':2 },
  'ic-choc':        { 'Ice Cream Cone':1, 'Milk':1, 'Cocoa Powder':1 },
  'ic-apple':       { 'Ice Cream Cone':1, 'Milk':1, 'Apple':1 },
  'ic-banana':      { 'Ice Cream Cone':1, 'Milk':1, 'Banana':1 },
  'ic-lemon':       { 'Ice Cream Cone':1, 'Milk':1, 'Lemon':1 },
  'ic-mango':       { 'Ice Cream Cone':1, 'Milk':1, 'Mango':1 },
  'ic-pomegranate': { 'Ice Cream Cone':1, 'Milk':1, 'Pomegranate':1 },
  'ic-watermelon':  { 'Ice Cream Cone':1, 'Milk':1, 'Watermelon':1 },

  // Shakes (2 Milk + 3 flavour, except Avocado)
  'shk-vanilla': { 'Milk':2 },
  'shk-choc':    { 'Milk':2, 'Cocoa Powder':3 },
  'shk-avo':     { 'Avocado':2 },
  'shk-banana':  { 'Milk':2, 'Banana':3 },

  // Extras
  'ex-toy': { 'Adult Surprise':1 }
};

// Empty for now. Ingredient prices are added from admin.html's Ingredients
// panel, or hand-write entries here like: { 'Burger Buns': 2.5 }
const INGREDIENT_PRICES = {};

// Discount tiers and delivery zone fees used at checkout — editable later from
// admin.html's Shop Settings panel. These are just starting defaults.
const SHOP_SETTINGS = {
  discountTiers: [
    { pct:10, label:'10%' },
    { pct:20, label:'20%' },
    { pct:30, label:'30%' },
    { pct:50, label:'50%' }
  ],
  deliveryZones: [
    { key:'city',   label:'City',   fee:50 },
    { key:'sandy',  label:'Sandy',  fee:100 },
    { key:'paleto', label:'Paleto', fee:150 }
  ]
};
