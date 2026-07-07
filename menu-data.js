// ---------- Burger Shot menu data ----------
// Shared between index.html (the calculator) and admin.html (the menu editor).
// Starts completely empty — add items through admin.html once your Supabase
// project is set up (fill in SUPABASE_URL / SUPABASE_ANON_KEY in both files).
//
// Categories (same shape Bean Machine uses):
//   classic          -> 🍔 A La Carte (burgers, fries, drinks, shakes, whatever isn't a combo)
//   bundles          -> 🍔 Combos & Bundles (built with the Choose & Add wizard)
//   iceCream         -> 🍦 Ice Cream
//   extras           -> 🎁 Extras
//   cateringPackages -> 🎉 Catering (not admin-editable yet, same limitation Bean has —
//                       add packages directly in this file if/when you need them)
//   specialty/deals/packs -> unused placeholders kept only so nothing throws if
//                       older code paths look them up; leave them empty.

const MENU = {
  classic: [],
  specialty: [],
  deals: [],
  packs: [],
  bundles: [],
  extras: [],
  iceCream: [],
  cateringPackages: []
};

// Empty for now. Recipes are added per-item from admin.html's Recipes panel,
// or you can hand-write entries here like:
//   'some-item-id': { 'Burger Buns':1, 'Raw Patty':1 }
const RECIPE_MAP = {};

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
