/*
Keep the site simple, just html, css & js. keep code simple and easy to understand (I am a student and this is for a prototype, not for production).
Put css in a seperate folderr, put js in a js folder
For interactions, create filler content in the form of local json. this is a mid-fidelity protoype, keep the colour scheme /type minimal, no branding needed. Do not use advanced techniques of outside tools, do not generate images (use placeholders), do not start servers to verify (I will test it myself).
*/

// Sub Sandwich Ordering Application Prototype Logic
// High-Fidelity Interactive Flowchart Implementation

const fallbackData = {
  "stores": [
    { "id": 1, "name": "Main Street Branch", "address": "123 Main St, Downtown" },
    { "id": 2, "name": "University Campus Branch", "address": "456 University Ave, Block B" },
    { "id": 3, "name": "Westside Mall Branch", "address": "789 West Mall Blvd, Suite 10" }
  ],
  "exampleAddresses": [
    "123 Main Street, Apt 4B, Downtown",
    "777 Campus Drive, Suite 102, University District",
    "456 Oakwood Avenue, Westside",
    "890 Elm Street, North Hills",
    "321 College Park Road, Dorm Hall 3"
  ],
  "sizes": [
    { "name": "Mini", "desc": "Approx 4-5 inches", "price": 7.50 },
    { "name": "Regular", "desc": "Approx 7-8 inches", "price": 9.50 },
    { "name": "Giant", "desc": "Approx 14-15 inches", "price": 17.95 }
  ],
  "addons": [
    { "id": "addon-bacon", "name": "Extra Hardwood Bacon (3 pc)", "price": 2.15, "image": "Images/bacon-3-pc-1.png" },
    { "id": "addon-cheese", "name": "Extra Sliced Cheese", "price": 1.55 }
  ],
  "premadeSubs": [
    {
      "id": "sub-1",
      "name": "Philly Cheesesteak",
      "category": "Fresh Grilled Hot Subs",
      "price": 9.50,
      "image": "Images/17-philly-cheesesteak-reg.png",
      "description": "Thinly sliced steak, melted white American cheese, grilled onions, and peppers on freshly baked bread.",
      "defaultIngredients": ["Steak", "White American", "Grilled Onions", "Peppers"]
    },
    {
      "id": "sub-2",
      "name": "Chipotle Chicken Cheesesteak",
      "category": "Fresh Grilled Hot Subs",
      "price": 9.50,
      "image": "Images/42-chipotle-chicken-cheesesteak-reg.png",
      "description": "Grilled chicken breast, melted cheese, grilled peppers, onions, and spicy chipotle mayo.",
      "defaultIngredients": ["Grilled Chicken", "Cheddar", "Grilled Peppers", "Onions", "Chipotle Mayo"]
    },
    {
      "id": "sub-3",
      "name": "Buffalo Chicken Cheesesteak",
      "category": "Fresh Grilled Hot Subs",
      "price": 9.50,
      "image": "Images/44-buffalo-chicken-cheesesteak-reg.png",
      "description": "Hot grilled chicken, Frank's RedHot buffalo sauce, melted swiss, and creamy blue cheese/ranch.",
      "defaultIngredients": ["Buffalo Chicken", "Swiss Cheese", "Lettuce", "Pickles", "Ranch"]
    },
    {
      "id": "sub-4",
      "name": "The Original Italian",
      "category": "Classic Subs",
      "price": 9.50,
      "image": "Images/hot-italian-reg-back.png",
      "description": "Provolone, ham, prosciuttini, cappacuolo, salami, and pepperoni served Mike's Way.",
      "defaultIngredients": ["Provolone", "Ham", "Cappacuolo", "Salami", "Pepperoni", "Lettuce", "Tomato", "Oil & Vinegar"]
    },
    {
      "id": "sub-5",
      "name": "Cancro Special",
      "category": "Classic Subs",
      "price": 9.50,
      "image": "Images/12-cancro-special-reg.png",
      "description": "All-natural roast beef, oven-roasted turkey, and provolone cheese, dressed Mike's Way.",
      "defaultIngredients": ["Roast Beef", "Turkey", "Provolone", "Lettuce", "Tomato", "Oil & Vinegar"]
    },
    {
      "id": "sub-6",
      "name": "Club Sub (Turkey & Bacon)",
      "category": "Classic Subs",
      "price": 9.50,
      "image": "Images/2-jersey-fav-reg.png",
      "description": "Turkey breast, crispy applewood smoked bacon, provolone, lettuce, tomato, and mayo.",
      "defaultIngredients": ["Turkey", "Bacon", "Provolone", "Lettuce", "Tomato", "Mayo"]
    },
    {
      "id": "sub-7",
      "name": "Roast Beef & Provolone",
      "category": "Classic Subs",
      "price": 9.50,
      "image": "Images/6-roast-beef-reg.png",
      "description": "Cooked on premise top round roast beef, melted or cold provolone, and seasonings.",
      "defaultIngredients": ["Roast Beef", "Provolone", "Lettuce", "Tomato", "Oil & Vinegar"]
    },
    {
      "id": "sub-8",
      "name": "The Veggie Sub",
      "category": "Classic Subs",
      "price": 9.50,
      "image": "Images/14-veggie-reg.png",
      "description": "Swiss and provolone cheese, fresh bell peppers, onions, tomatoes, lettuce, and oregano.",
      "defaultIngredients": ["Swiss Cheese", "Provolone", "Green Peppers", "Tomatoes", "Lettuce", "Oil & Vinegar"]
    }
  ],
  "beverages": [
    {
      "id": "bev-1",
      "name": "Fountain Drink (22oz)",
      "category": "Beverages",
      "price": 3.09,
      "image": "Images/fountain-drink-22oz.png",
      "description": "Ice-cold refreshing fountain beverage. Choose your flavor upon pickup or delivery."
    },
    {
      "id": "bev-2",
      "name": "Fresh Dole Lemonade (20oz)",
      "category": "Beverages",
      "price": 3.09,
      "image": "Images/dole-lemonade-20oz.png",
      "description": "Sweet, crisp, fresh squeezed flavor lemonade served chilled."
    },
    {
      "id": "bev-3",
      "name": "Pepsi Bottle (20oz)",
      "category": "Beverages",
      "price": 3.09,
      "image": "Images/pepsi-20oz.png",
      "description": "Classic crisp, bold cola taste in a resealable 20oz bottle."
    },
    {
      "id": "bev-4",
      "name": "Pepsi Zero Sugar (20oz)",
      "category": "Beverages",
      "price": 3.09,
      "image": "Images/pepsi-zero-20oz.png",
      "description": "Max Pepsi flavor with zero sugar and zero calories."
    },
    {
      "id": "bev-5",
      "name": "Mountain Dew (20oz)",
      "category": "Beverages",
      "price": 3.09,
      "image": "Images/mountain-dew-20oz.png",
      "description": "The exhilarating one-of-a-kind citrus soda taste."
    },
    {
      "id": "bev-6",
      "name": "Starry Lemon-Lime (20oz)",
      "category": "Beverages",
      "price": 3.09,
      "image": "Images/starry-20oz.png",
      "description": "Bright, refreshing caffeine-free lemon-lime soda."
    },
    {
      "id": "bev-7",
      "name": "Aquafina Purified Water (20oz)",
      "category": "Beverages",
      "price": 3.09,
      "image": "Images/aquafina-20oz.png",
      "description": "Pure, refreshing bottled spring water."
    }
  ],
  "sidesAndCombos": [
    {
      "id": "side-combo-fountain",
      "name": "Fountain Drink & Chips Combo",
      "price": 4.49,
      "image": "Images/combo-reg-fountain.png",
      "description": "Make it a meal with a 22oz fountain drink and your choice of chips."
    },
    {
      "id": "side-combo-bottle",
      "name": "Bottled Soda & Chips Combo",
      "price": 4.49,
      "image": "Images/combo-soda-bottle.png",
      "description": "Includes a 20oz bottled beverage and a bag of premium chips."
    },
    {
      "id": "side-chips",
      "name": "Assorted Chips",
      "price": 1.99,
      "image": "Images/groupshot-chip.png",
      "description": "Crispy salted or flavored potato chips to accompany your sandwich."
    }
  ],
  "customOptions": {
    "breads": [
      { "name": "White Italian", "price": 0.00 },
      { "name": "9-Grain Wheat", "price": 0.00 },
      { "name": "Rosemary Parmesan", "price": 0.50 },
      { "name": "Gluten-Free Roll", "price": 1.25 }
    ],
    "proteins": [
      { "name": "Ham", "price": 0.00, "desc": "Tender deli smoked ham" },
      { "name": "Genoa Salami", "price": 0.00, "desc": "Zesty cured Italian salami" },
      { "name": "Tuna Salad", "price": 0.00, "desc": "Fresh house blended tuna with mayo" },
      { "name": "Grilled Steak", "price": 1.50, "desc": "Seasoned sliced sirloin steak" },
      { "name": "Grilled Chicken", "price": 1.00, "desc": "Juicy grilled chicken breast strips" },
      { "name": "Oven Turkey Breast", "price": 0.00, "desc": "Slow-roasted lean turkey breast" },
      { "name": "Roast Beef", "price": 1.50, "desc": "Top round roast beef" },
      { "name": "Plant-Based Patty", "price": 1.00, "desc": "Hearty vegan vegetable patty" }
    ],
    "cheeses": [
      { "name": "Provolone", "price": 0.00 },
      { "name": "White American", "price": 0.00 },
      { "name": "Swiss", "price": 0.00 },
      { "name": "Cheddar", "price": 0.00 },
      { "name": "No Cheese", "price": 0.00 }
    ],
    "veggies": [
      { "name": "Lettuce", "image": "Images/lettuce.png" },
      { "name": "Tomatoes", "image": "Images/tomato.png" },
      { "name": "Onions", "image": "Images/onions.png" },
      { "name": "Grilled Onions", "image": "Images/grilled-onions.png" },
      { "name": "Dill Pickles", "image": "Images/dill-pickles.png" },
      { "name": "Banana Peppers", "image": "Images/banana-peppers.png" },
      { "name": "Jalapenos", "image": "Images/jalepenos.png" },
      { "name": "Cherry Pepper Relish", "image": "Images/cherry-pepper-relish.png" }
    ],
    "sauces": [
      { "name": "Olive Oil Blend", "image": "Images/olive-oil-blend.png", "desc": "Mike's Way signature oil" },
      { "name": "Red Wine Vinegar", "image": "Images/red-wine-vinegar.png", "desc": "Mike's Way signature red wine vinegar" },
      { "name": "Mayonnaise", "image": "Images/mayonaise.png", "desc": "Rich creamy mayo" },
      { "name": "Yellow Mustard", "image": "Images/yellow-mustard.png", "desc": "Classic tangy yellow mustard" },
      { "name": "Honey Mustard", "image": "Images/honey-mustard.png", "desc": "Sweet & tangy honey mustard" },
      { "name": "Oregano & Salt", "image": "Images/oregano.png", "desc": "Signature Italian herbs & spices" }
    ]
  }
};

const app = {
  data: null,
  currentCategory: 'all',
  orderState: {
    userType: 'guest',
    fulfillment: 'Delivery', // 'Delivery' or 'Pickup'
    isFulfillmentSet: false, // DEFAULTS TO NOTHING / NO ADDRESS AS REQUESTED
    address: '',             // Empty by default
    store: '',               // Empty by default
    cart: []
  },
  currentCustomizingSub: null,

  init: function() {
    fetch('data.json')
      .then(res => res.json())
      .then(json => {
        this.data = json;
        this.finishInit();
      })
      .catch(() => {
        this.data = fallbackData;
        this.finishInit();
      });
  },

  finishInit: function() {
    this.populateStoreSelect();
    this.populateDatalists();
    this.renderMenuItems('all');
    this.updateHeaderBar();
    this.showScreen('main-menu-screen');
  },

  populateDatalists: function() {
    const list = document.getElementById('example-addresses-list');
    if (!list || !this.data || !this.data.exampleAddresses) return;
    list.innerHTML = '';
    this.data.exampleAddresses.forEach(addr => {
      const opt = document.createElement('option');
      opt.value = addr;
      list.appendChild(opt);
    });
  },

  populateStoreSelect: function() {
    const selects = [
      document.getElementById('store-select'),
      document.getElementById('modal-store-select')
    ];
    
    selects.forEach(select => {
      if (!select || !this.data) return;
      select.innerHTML = '';
      this.data.stores.forEach(store => {
        const opt = document.createElement('option');
        opt.value = store.name;
        opt.textContent = `${store.name} (${store.address})`;
        select.appendChild(opt);
      });
    });
  },

  // Screen Navigation Helper
  showScreen: function(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (screenId === 'payment-screen') {
      this.renderCart();
    }

    this.updateHeaderBar();
  },

  // Location Required Warning Modal & Clickable Notification Guard
  checkFulfillmentBeforeAction: function(callback) {
    if (!this.orderState.isFulfillmentSet || (!this.orderState.address && !this.orderState.store)) {
      this.showFulfillmentWarningModal();
      this.showToast('📍 You haven\'t selected a delivery or pickup location yet! Click here to set location.', 'fulfillment');
      return false;
    }
    if (callback) callback();
    return true;
  },

  showFulfillmentWarningModal: function() {
    const modal = document.getElementById('fulfillment-warning-modal');
    if (modal) modal.classList.add('active');
  },

  closeFulfillmentWarningModal: function() {
    const modal = document.getElementById('fulfillment-warning-modal');
    if (modal) modal.classList.remove('active');
  },

  proceedToFulfillmentFromWarning: function() {
    this.closeFulfillmentWarningModal();
    this.openFulfillmentModal();
  },

  // Quick Toggle (Delivery vs Pickup)
  quickToggleFulfillment: function(mode) {
    this.orderState.fulfillment = mode;
    this.openFulfillmentModal();
    const radio = document.querySelector(`input[name="modal-fulfillment"][value="${mode}"]`);
    if (radio) radio.checked = true;
    this.toggleModalFulfillmentFields(mode);
  },

  // Header & Fulfillment Bar Updates
  // If location NOT set: Button is solid red without ANY white borders, with Grilled Cheese BTN font.
  // Once location IS set: Button is no longer red; looks like the Login/Sign Up button (transparent, 2px white border, Grilled Cheese BTN).
  updateHeaderBar: function() {
    const fulfillmentBtn = document.getElementById('nav-fulfillment-btn');
    const cartCountEl = document.getElementById('cart-count');
    const authBtn = document.getElementById('header-auth-btn');

    // Total Cart Count
    const totalCartCount = this.orderState.cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    if (cartCountEl) {
      cartCountEl.textContent = totalCartCount;
    }

    // Update Auth button text (No Emoji, Thicker Border, Grilled Cheese BTN font)
    if (authBtn) {
      if (this.orderState.userType === 'signedIn') {
        authBtn.textContent = 'Student Account';
        authBtn.title = "View Account Setup";
        authBtn.onclick = () => this.showScreen('user-setup-screen');
      } else {
        authBtn.textContent = 'Log In / Sign Up';
        authBtn.title = "Log in or create account";
        authBtn.onclick = () => this.showScreen('signin-screen');
      }
    }

    // Update Delivery / Pickup Button
    if (fulfillmentBtn) {
      if (this.orderState.isFulfillmentSet && (this.orderState.address || this.orderState.store)) {
        // STATE B: LOCATION HAS BEEN CHOSEN -> No longer red! Looks like login & sign up button with Grilled Cheese BTN
        fulfillmentBtn.className = 'fulfillment-btn location-set';
        const locationText = this.orderState.fulfillment === 'Delivery'
          ? `Delivery: ${this.orderState.address.split(',')[0]}`
          : `Pickup: ${this.orderState.store.split(' ')[0]} Branch`;

        fulfillmentBtn.innerHTML = `
          <span class="location-display-text">${locationText}</span>
          <span class="location-change-tag">Change</span>
        `;
        fulfillmentBtn.title = "Click to change delivery address or pickup store";
        fulfillmentBtn.onclick = () => this.openFulfillmentModal();
      } else {
        // STATE A: NO LOCATION CHOSEN -> Solid red button with NO white borders, Grilled Cheese BTN font!
        fulfillmentBtn.className = 'fulfillment-btn needs-location';
        fulfillmentBtn.innerHTML = `Delivery / Pickup`;
        fulfillmentBtn.title = "Click to select delivery or pickup location";
        fulfillmentBtn.onclick = () => this.openFulfillmentModal();
      }
    }
  },

  // Unified Delivery / Pickup Switch Modal
  openFulfillmentModal: function() {
    const modal = document.getElementById('fulfillment-setup-modal');
    if (!modal) return;

    const radios = document.querySelectorAll('input[name="modal-fulfillment"]');
    radios.forEach(r => {
      r.checked = (r.value === this.orderState.fulfillment);
    });

    const addrInput = document.getElementById('modal-address-input');
    if (addrInput) {
      addrInput.value = this.orderState.address || '';
    }

    const storeSelect = document.getElementById('modal-store-select');
    if (storeSelect && this.orderState.store) {
      storeSelect.value = this.orderState.store;
    }

    this.toggleModalFulfillmentFields(this.orderState.fulfillment);
    modal.classList.add('active');
  },

  closeFulfillmentModal: function() {
    const modal = document.getElementById('fulfillment-setup-modal');
    if (modal) modal.classList.remove('active');
  },

  toggleModalFulfillmentFields: function(mode) {
    const delSec = document.getElementById('modal-delivery-section');
    const pickSec = document.getElementById('modal-pickup-section');
    if (!delSec || !pickSec) return;

    if (mode === 'Delivery') {
      delSec.classList.remove('hidden');
      pickSec.classList.add('hidden');
    } else {
      delSec.classList.add('hidden');
      pickSec.classList.remove('hidden');
    }
  },

  fillModalAddress: function(addr) {
    const input = document.getElementById('modal-address-input');
    if (input) input.value = addr;
  },

  fillGuestAddress: function(addr) {
    const input = document.getElementById('guest-address');
    if (input) input.value = addr;
  },

  saveFulfillmentModal: function(e) {
    if (e) e.preventDefault();

    const selectedRadio = document.querySelector('input[name="modal-fulfillment"]:checked');
    const mode = selectedRadio ? selectedRadio.value : 'Delivery';

    if (mode === 'Delivery') {
      const addr = document.getElementById('modal-address-input').value.trim();
      if (!addr) {
        alert('Please enter a delivery address.');
        return;
      }
      this.orderState.address = addr;
      this.orderState.fulfillment = 'Delivery';
    } else {
      const store = document.getElementById('modal-store-select').value;
      this.orderState.store = store;
      this.orderState.fulfillment = 'Pickup';
    }

    this.orderState.isFulfillmentSet = true;
    this.updateHeaderBar();
    this.closeFulfillmentModal();
    this.showToast(`Fulfillment set to ${this.orderState.fulfillment}! (Click to edit location)`, 'fulfillment');
  },

  // Clickable Toast Notification (Clicking it directly brings up the Delivery & Pickup Card)
  showToast: function(message, actionType = 'cart') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${actionType === 'fulfillment' ? 'toast-fulfillment' : ''}`;
    const hintText = actionType === 'fulfillment' ? 'Set Location &rarr;' : 'View Cart &rarr;';
    toast.innerHTML = `<span>${message}</span> <span class="toast-hint">${hintText}</span>`;
    
    // Clicking the notification brings the user directly to the delivery / pickup card!
    toast.onclick = () => {
      if (actionType === 'fulfillment') {
        this.closeFulfillmentWarningModal();
        this.openFulfillmentModal();
      } else {
        this.showScreen('payment-screen');
      }
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    };

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-fade-out');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 4500);
  },

  // Contact Form Submission Handler
  handleContactSubmit: function(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    this.showToast(`Thank you, ${name}! Your message has been sent to our customer team.`, 'none');
    document.getElementById('contact-form').reset();
    setTimeout(() => {
      this.showScreen('main-menu-screen');
    }, 1200);
  },

  // Signed In User Flow
  handleSignIn: function(e) {
    e.preventDefault();
    this.orderState.userType = 'signedIn';
    this.orderState.address = document.getElementById('user-default-address') ? document.getElementById('user-default-address').value : '777 Campus Drive, Suite 102';
    this.orderState.store = document.getElementById('user-default-store') ? document.getElementById('user-default-store').value : 'Main Street Branch';
    this.showScreen('user-setup-screen');
  },

  confirmUserSetup: function() {
    const checkedRadio = document.querySelector('input[name="user-fulfillment"]:checked');
    const selectedMode = checkedRadio ? checkedRadio.value : 'Delivery';
    this.orderState.fulfillment = selectedMode;
    this.orderState.isFulfillmentSet = true;
    this.updateHeaderBar();
    this.showToast(`Welcome back! Fulfillment set to ${selectedMode}.`, 'fulfillment');
    this.showScreen('main-menu-screen');
  },

  // Guest Flow
  handleGuestAddress: function(e) {
    e.preventDefault();
    const addr = document.getElementById('guest-address').value.trim();
    if (!addr) return;
    this.orderState.address = addr;
    this.showScreen('guest-store-screen');
  },

  handleGuestStore: function(e) {
    e.preventDefault();
    const checkedRadio = document.querySelector('input[name="guest-fulfillment"]:checked');
    const mode = checkedRadio ? checkedRadio.value : 'Delivery';
    const store = document.getElementById('store-select').value;
    this.orderState.fulfillment = mode;
    this.orderState.store = store;
    this.orderState.isFulfillmentSet = true;
    this.updateHeaderBar();
    this.showToast(`Fulfillment set to ${mode}!`, 'fulfillment');
    this.showScreen('main-menu-screen');
  },

  // Count how many of an item ID/name are in the cart
  getItemCartCount: function(itemId, itemName) {
    return this.orderState.cart.reduce((total, item) => {
      if ((itemId && item.id === itemId) || item.name === itemName) {
        return total + (item.quantity || 1);
      }
      return total;
    }, 0);
  },

  // Main Menu Rendering
  renderMenuItems: function(categoryFilter) {
    this.currentCategory = categoryFilter;
    const subsContainer = document.getElementById('subs-grid');
    const beveragesSection = document.getElementById('beverages-section');
    const beveragesContainer = document.getElementById('beverages-grid');
    const premadeTitle = document.getElementById('premade-subs-title');
    const customBanner = document.getElementById('custom-banner-section');

    if (!subsContainer || !this.data) return;

    // Filter Premade Subs
    subsContainer.innerHTML = '';
    const showSubs = categoryFilter !== 'Beverages';
    const showBeverages = categoryFilter === 'all' || categoryFilter === 'Beverages';

    if (premadeTitle) premadeTitle.style.display = showSubs ? 'flex' : 'none';
    if (customBanner) customBanner.style.display = showSubs ? 'flex' : 'none';
    subsContainer.style.display = showSubs ? 'grid' : 'none';

    if (showSubs) {
      const filtered = categoryFilter === 'all'
        ? this.data.premadeSubs
        : this.data.premadeSubs.filter(s => s.category.toLowerCase() === categoryFilter.toLowerCase());

      filtered.forEach(sub => {
        const inCartCount = this.getItemCartCount(sub.id, sub.name);
        const card = document.createElement('div');
        card.className = `sub-card ${inCartCount > 0 ? 'has-items-in-cart' : ''}`;
        card.id = `card-${sub.id}`;
        card.style.cursor = 'pointer';
        card.onclick = () => app.handleSelectSub(sub.id);
        
        card.innerHTML = `
          ${inCartCount > 0 ? `<div class="card-cart-badge">${inCartCount} in Order</div>` : ''}
          <div class="sub-image-container">
            <img src="${sub.image}" alt="${sub.name}" class="sub-card-photo">
          </div>
          <div class="sub-title">${sub.name}</div>
          <div class="sub-category-tag">${sub.category}</div>
          <div class="sub-description">${sub.description}</div>
          <div class="sub-footer">
            <span class="sub-price">$${sub.price.toFixed(2)}</span>
            <button class="btn btn-secondary" onclick="event.stopPropagation(); app.handleSelectSub('${sub.id}')">Order Now</button>
          </div>
        `;
        subsContainer.appendChild(card);
      });
    }

    // Render Beverages (All priced at $3.09)
    if (beveragesSection && beveragesContainer && this.data.beverages) {
      if (showBeverages) {
        beveragesSection.style.display = 'block';
        beveragesContainer.innerHTML = '';
        this.data.beverages.forEach(bev => {
          const inCartCount = this.getItemCartCount(bev.id, bev.name);
          const bCard = document.createElement('div');
          bCard.className = `sub-card ${inCartCount > 0 ? 'has-items-in-cart' : ''}`;
          bCard.id = `card-${bev.id}`;
          bCard.style.cursor = 'pointer';
          bCard.onclick = () => app.handleAddBeverageDirect(bev.id);

          bCard.innerHTML = `
            ${inCartCount > 0 ? `<div class="card-cart-badge">${inCartCount} in Order</div>` : ''}
            <div class="sub-image-container">
              <img src="${bev.image}" alt="${bev.name}" class="bev-card-photo">
            </div>
            <div class="sub-title">${bev.name}</div>
            <div class="sub-category-tag">Beverage</div>
            <div class="sub-description">${bev.description}</div>
            <div class="sub-footer">
              <span class="sub-price">$${bev.price.toFixed(2)}</span>
              <button class="btn btn-primary" onclick="event.stopPropagation(); app.handleAddBeverageDirect('${bev.id}')">+ Add to Cart</button>
            </div>
          `;
          beveragesContainer.appendChild(bCard);
        });
      } else {
        beveragesSection.style.display = 'none';
      }
    }

    this.updateTabButtons(categoryFilter);
  },

  updateTabButtons: function(category) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
      const text = btn.textContent.toLowerCase();
      if (category === 'all' && text.includes('all')) {
        btn.classList.add('active');
      } else if (category.toLowerCase().includes('hot') && text.includes('hot')) {
        btn.classList.add('active');
      } else if (category.toLowerCase().includes('classic') && text.includes('classic')) {
        btn.classList.add('active');
      } else if (category.toLowerCase().includes('beverage') && text.includes('beverage')) {
        btn.classList.add('active');
      }
    });
  },

  filterCategory: function(category) {
    this.renderMenuItems(category);
    const tabs = document.querySelector('.tab-buttons');
    if (tabs) {
      tabs.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  },

  navigateToMenu: function(category) {
    this.showScreen('main-menu-screen');
    this.filterCategory(category);
  },

  // Hero Card "Order Now" Handler (Requires fulfillment)
  handleHeroOrder: function(category) {
    this.checkFulfillmentBeforeAction(() => {
      this.filterCategory(category);
      const grid = document.getElementById('subs-grid');
      if (grid) grid.scrollIntoView({ behavior: 'smooth' });
    });
  },

  // Handlers for Sub and Beverage actions (Requires location before ordering!)
  handleSelectSub: function(subId) {
    this.checkFulfillmentBeforeAction(() => {
      this.openCustomizePremade(subId);
    });
  },

  handleAddBeverageDirect: function(bevId) {
    this.checkFulfillmentBeforeAction(() => {
      const bev = this.data.beverages.find(b => b.id === bevId);
      if (!bev) return;

      this.orderState.cart.push({
        id: bev.id,
        name: bev.name,
        price: bev.price || 3.09,
        details: 'Chilled 20oz/22oz Refreshing Beverage',
        quantity: 1
      });

      this.triggerCartBump();
      this.showToast(`${bev.name} added to cart! (Click to view cart)`, 'cart');
      this.updateHeaderBar();
      this.renderMenuItems(this.currentCategory);
    });
  },

  triggerCartBump: function() {
    const btn = document.getElementById('view-cart-btn');
    if (btn) {
      btn.classList.remove('cart-bump');
      void btn.offsetWidth;
      btn.classList.add('cart-bump');
    }
  },

  // Select Size Card Helper
  selectSizeCard: function(cardElement) {
    const parent = cardElement.parentNode;
    parent.querySelectorAll('.size-option-card').forEach(c => c.classList.remove('selected'));
    cardElement.classList.add('selected');
    const radio = cardElement.querySelector('input[name="cust-size-choice"]');
    if (radio) {
      radio.checked = true;
    }
    this.updateCustomizePrice();
    this.updateLivePreview();
  },

  // Customize Premade Sub
  openCustomizePremade: function(subId) {
    const sub = this.data.premadeSubs.find(s => s.id === subId);
    if (!sub) return;

    this.currentCustomizingSub = {
      isCustom: false,
      baseId: sub.id,
      name: sub.name,
      basePrice: 9.50
    };

    document.getElementById('customize-title').textContent = `Customize: ${sub.name}`;
    
    const fieldsContainer = document.getElementById('customize-fields');
    fieldsContainer.innerHTML = `
      <!-- 1. Choose Size (Mini $7.50, Regular $9.50, Giant $17.95) -->
      <div class="form-group">
        <label>1. Select Size</label>
        <div class="sizes-selection-grid">
          <div class="size-option-card" onclick="app.selectSizeCard(this)">
            <input type="radio" name="cust-size-choice" value="Mini" data-price="7.50">
            <div class="size-card-name">Mini</div>
            <div class="size-card-desc">Approx 4-5 inches</div>
            <div class="size-card-price">$7.50</div>
          </div>
          <div class="size-option-card selected" onclick="app.selectSizeCard(this)">
            <input type="radio" name="cust-size-choice" value="Regular" data-price="9.50" checked>
            <div class="size-card-name">Regular</div>
            <div class="size-card-desc">Approx 7-8 inches</div>
            <div class="size-card-price">$9.50</div>
          </div>
          <div class="size-option-card" onclick="app.selectSizeCard(this)">
            <input type="radio" name="cust-size-choice" value="Giant" data-price="17.95">
            <div class="size-card-name">Giant</div>
            <div class="size-card-desc">Approx 14-15 inches</div>
            <div class="size-card-price">$17.95</div>
          </div>
        </div>
      </div>

        <!-- 2. Bread options (also available for premade sandwiches) -->
        <div class="form-group">
          <label>2. Choose Bread Style</label>
          <div class="choice-tiles-grid" id="bread-tiles">
            ${this.data.customOptions.breads.map((b, idx) => `
              <div class="choice-tile ${idx === 0 ? 'selected' : ''}" onclick="app.selectTile(this, 'cust-bread'); app.updateCustomizePrice(); app.updateLivePreview();">
                <input type="radio" name="cust-bread" value="${b.name}" data-price="${b.price}" ${idx === 0 ? 'checked' : ''}>
                ${b.image ? `<img class="choice-tile-image" src="${b.image}" alt="${b.name}" loading="lazy">` : ''}
                <span class="choice-tile-title">${b.name}</span>
                <span class="choice-tile-price">${b.price > 0 ? '+$' + b.price.toFixed(2) : 'Included'}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 3. Add-Ons & Extras (Bacon $2.15, Extra Cheese $1.55) -->
        <div class="form-group">
          <label>3. Premium Add-Ons & Extras</label>
          <div class="addons-grid">
            <label class="addon-card" >
              <input type="checkbox" onchange="app.syncIngredientCard(this); app.updateCustomizePrice(); app.updateLivePreview();" name="cust-extra-bacon" value="Extra Bacon">
              <img src="Images/bacon-3-pc-1.png" alt="Bacon" class="addon-thumb">
              <div>
                <div class="addon-name">Extra Bacon (3 pc)</div>
                <div class="addon-price">+$2.15</div>
              </div>
            </label>
            <label class="addon-card" >
              <input type="checkbox" onchange="app.syncIngredientCard(this); app.updateCustomizePrice(); app.updateLivePreview();" name="cust-extra-cheese" value="Extra Cheese">
              <div class="addon-cheese-badge">🧀</div>
              <div>
                <div class="addon-name">Extra Sliced Cheese</div>
                <div class="addon-price">+$1.55</div>
              </div>
            </label>
          </div>
        </div>

        <!-- 3. Toasted Preference -->
        <div class="form-group">
          <label>4. Toasting Preference</label>
          <div class="radio-group">
            <label><input type="radio" name="cust-toast" value="Toasted" checked> Toasted Hot</label>
            <label><input type="radio" name="cust-toast" value="Cold / Fresh"> Cold / Fresh</label>
          </div>
        </div>

        <!-- 4. Fresh Toppings (Enlarged Legible Thumbnails - No Squinting) -->
        <div class="form-group">
          <label>5. Fresh Toppings (Deselect to remove, or tap to add)</label>
          <div class="toppings-photo-grid">
            ${this.data.customOptions.veggies.map(v => {
              const isDefault = sub.defaultIngredients.some(di => di.toLowerCase().includes(v.name.toLowerCase()));
              return `
                <label class="topping-photo-card ${isDefault ? 'checked' : ''}" >
                  <input type="checkbox" onchange="app.syncIngredientCard(this); app.updateLivePreview();" name="cust-ingredients" value="${v.name}" ${isDefault ? 'checked' : ''}>
                  <img src="${v.image}" alt="${v.name}" class="topping-thumb">
                  <div class="topping-info">
                    <div class="topping-title">${v.name}</div>
                    ${v.desc ? `<div class="topping-desc">${v.desc}</div>` : ''}
                  </div>
                </label>
              `;
            }).join('')}
          </div>
        </div>

        <!-- 5. Signature Condiments & Sauces (Enlarged Legible Thumbnails) -->
        <div class="form-group">
          <label>6. Signature Condiments & Sauces</label>
          <div class="toppings-photo-grid">
            ${this.data.customOptions.sauces.map(s => {
              const isDefault = sub.defaultIngredients.some(di => di.toLowerCase().includes(s.name.toLowerCase()));
              return `
                <label class="topping-photo-card ${isDefault ? 'checked' : ''}" >
                  <input type="checkbox" onchange="app.syncIngredientCard(this); app.updateLivePreview();" name="cust-extra-sauces" value="${s.name}" ${isDefault ? 'checked' : ''}>
                  <img src="${s.image}" alt="${s.name}" class="topping-thumb">
                  <div class="topping-info">
                    <div class="topping-title">${s.name}</div>
                    ${s.desc ? `<div class="topping-desc">${s.desc}</div>` : ''}
                  </div>
                </label>
              `;
            }).join('')}
          </div>
        </div>
    `;

    this.showScreen('customize-screen');
    this.updateCustomizePrice();
    this.updateLivePreview();
  },

  // Open Custom Sub Builder (Requires fulfillment location)
  openCustomBuilder: function() {
    this.checkFulfillmentBeforeAction(() => {
      this.currentCustomizingSub = {
        isCustom: true,
        baseId: 'custom-sub',
        name: "Custom Sub",
        basePrice: 9.50
      };

      document.getElementById('customize-title').textContent = "Build Your Own Custom Sub";
      const fieldsContainer = document.getElementById('customize-fields');
      const opts = this.data.customOptions;

      fieldsContainer.innerHTML = `
        <!-- 1. Size Selection -->
        <div class="form-group">
          <label>1. Select Size</label>
          <div class="sizes-selection-grid">
            <div class="size-option-card" onclick="app.selectSizeCard(this)">
              <input type="radio" name="cust-size-choice" value="Mini" data-price="7.50">
              <div class="size-card-name">Mini</div>
              <div class="size-card-desc">Approx 4-5 inches</div>
              <div class="size-card-price">$7.50</div>
            </div>
            <div class="size-option-card selected" onclick="app.selectSizeCard(this)">
              <input type="radio" name="cust-size-choice" value="Regular" data-price="9.50" checked>
              <div class="size-card-name">Regular</div>
              <div class="size-card-desc">Approx 7-8 inches</div>
              <div class="size-card-price">$9.50</div>
            </div>
            <div class="size-option-card" onclick="app.selectSizeCard(this)">
              <input type="radio" name="cust-size-choice" value="Giant" data-price="17.95">
              <div class="size-card-name">Giant</div>
              <div class="size-card-desc">Approx 14-15 inches</div>
              <div class="size-card-price">$17.95</div>
            </div>
          </div>
        </div>

        <!-- 2. Add-Ons & Extras (Bacon $2.15, Extra Cheese $1.55) -->
        <div class="form-group">
          <label>2. Premium Add-Ons & Extras</label>
          <div class="addons-grid">
            <label class="addon-card" >
              <input type="checkbox" onchange="app.syncIngredientCard(this); app.updateCustomizePrice(); app.updateLivePreview();" name="cust-extra-bacon" value="Extra Bacon">
              <img src="Images/bacon-3-pc-1.png" alt="Bacon" class="addon-thumb">
              <div>
                <div class="addon-name">Extra Bacon (3 pc)</div>
                <div class="addon-price">+$2.15</div>
              </div>
            </label>
            <label class="addon-card" >
              <input type="checkbox" onchange="app.syncIngredientCard(this); app.updateCustomizePrice(); app.updateLivePreview();" name="cust-extra-cheese" value="Extra Cheese">
              <div class="addon-cheese-badge">🧀</div>
              <div>
                <div class="addon-name">Extra Sliced Cheese</div>
                <div class="addon-price">+$1.55</div>
              </div>
            </label>
          </div>
        </div>

        <!-- 3. Choose Bread Style -->
        <div class="form-group">
          <label>3. Choose Bread Style</label>
          <div class="choice-tiles-grid" id="bread-tiles">
            ${opts.breads.map((b, idx) => `
              <div class="choice-tile ${idx === 0 ? 'selected' : ''}" onclick="app.selectTile(this, 'cust-bread'); app.updateCustomizePrice(); app.updateLivePreview();">
                <input type="radio" name="cust-bread" value="${b.name}" data-price="${b.price}" ${idx === 0 ? 'checked' : ''}>
                ${b.image ? `<img class="choice-tile-image" src="${b.image}" alt="${b.name}" loading="lazy">` : ''}
                <span class="choice-tile-title">${b.name}</span>
                <span class="choice-tile-price">${b.price > 0 ? '+$' + b.price.toFixed(2) : 'Included'}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 4. Choose Protein -->
        <div class="form-group">
          <label>4. Choose Protein / Deli Meat</label>
          <div class="choice-tiles-grid" id="protein-tiles">
            ${opts.proteins.map((p, idx) => `
              <div class="choice-tile ${idx === 0 ? 'selected' : ''}" onclick="app.selectTile(this, 'cust-protein'); app.updateCustomizePrice(); app.updateLivePreview();">
                <input type="radio" name="cust-protein" value="${p.name}" data-price="${p.price}" ${idx === 0 ? 'checked' : ''}>
                ${p.image ? `<img class="choice-tile-image" src="${p.image}" alt="${p.name}" loading="lazy">` : ''}
                <span class="choice-tile-title">${p.name}</span>
                <span class="choice-tile-desc">${p.desc || ''}</span>
                <span class="choice-tile-price">${p.price > 0 ? '+$' + p.price.toFixed(2) : 'Included'}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 5. Choose Cheese -->
        <div class="form-group">
          <label>5. Choose Sliced Cheese</label>
          <div class="choice-tiles-grid" id="cheese-tiles">
            ${opts.cheeses.map((c, idx) => `
              <div class="choice-tile ${idx === 0 ? 'selected' : ''}" onclick="app.selectTile(this, 'cust-cheese'); app.updateCustomizePrice(); app.updateLivePreview();">
                <input type="radio" name="cust-cheese" value="${c.name}" data-price="${c.price}" ${idx === 0 ? 'checked' : ''}>
                ${c.image ? `<img class="choice-tile-image" src="${c.image}" alt="${c.name}" loading="lazy">` : ''}
                <span class="choice-tile-title">${c.name}</span>
                <span class="choice-tile-price">Included</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 6. Fresh Toppings (Enlarged Photos - No Squinting) -->
        <div class="form-group">
          <label>6. Fresh Veggies & Toppings</label>
          <div class="toppings-photo-grid">
            ${opts.veggies.map((v, idx) => `
              <label class="topping-photo-card" >
                <input type="checkbox" onchange="app.syncIngredientCard(this); app.updateLivePreview();" name="cust-custom-veggie" value="${v.name}">
                <img src="${v.image}" alt="${v.name}" class="topping-thumb">
                <div class="topping-info">
                  <div class="topping-title">${v.name}</div>
                  ${v.desc ? `<div class="topping-desc">${v.desc}</div>` : ''}
                </div>
              </label>
            `).join('')}
          </div>
        </div>

        <!-- 7. Condiments & Sauces (Enlarged Photos) -->
        <div class="form-group">
          <label>7. Condiments & Dressings</label>
          <div class="toppings-photo-grid">
            ${opts.sauces.map((s, idx) => `
              <label class="topping-photo-card" >
                <input type="checkbox" onchange="app.syncIngredientCard(this); app.updateLivePreview();" name="cust-custom-sauce" value="${s.name}">
                <img src="${s.image}" alt="${s.name}" class="topping-thumb">
                <div class="topping-info">
                  <div class="topping-title">${s.name}</div>
                  ${s.desc ? `<div class="topping-desc">${s.desc}</div>` : ''}
                </div>
              </label>
            `).join('')}
          </div>
        </div>

        <!-- 8. Toasting -->
        <div class="form-group">
          <label>8. Toasting Preference</label>
          <div class="radio-group">
            <label><input type="radio" name="cust-toast" value="Toasted" checked> Toasted Hot</label>
            <label><input type="radio" name="cust-toast" value="Cold / Fresh"> Cold / Fresh</label>
          </div>
        </div>
      `;

      this.showScreen('customize-screen');
      this.updateCustomizePrice();
      this.updateLivePreview();
    });
  },

  // Keep the visual selection tied to the checkbox, not to a separate click toggle.
  syncIngredientCard: function(checkbox) {
    const card = checkbox.closest('.topping-photo-card, .addon-card');
    if (card) card.classList.toggle('checked', checkbox.checked);
  },

  selectTile: function(tileElement, radioName) {
    const parent = tileElement.parentNode;
    parent.querySelectorAll('.choice-tile').forEach(t => t.classList.remove('selected'));
    tileElement.classList.add('selected');
    const radio = tileElement.querySelector(`input[name="${radioName}"]`);
    if (radio) {
      radio.checked = true;
    }
  },

  // Live Price Calculator
  // Mini: $7.50, Regular: $9.50, Giant: $17.95
  // Extra Bacon: +$2.15, Extra Cheese: +$1.55
  updateCustomizePrice: function() {
    const sizeRadio = document.querySelector('input[name="cust-size-choice"]:checked');
    let basePrice = sizeRadio ? parseFloat(sizeRadio.dataset.price) : 9.50;

    let addonsTotal = 0;
    const extraBacon = document.querySelector('input[name="cust-extra-bacon"]:checked');
    if (extraBacon) addonsTotal += 2.15;

    const extraCheese = document.querySelector('input[name="cust-extra-cheese"]:checked');
    if (extraCheese) addonsTotal += 1.55;

    const breadInput = document.querySelector('input[name="cust-bread"]:checked');
    if (breadInput) addonsTotal += parseFloat(breadInput.dataset.price || 0);
    if (this.currentCustomizingSub && this.currentCustomizingSub.isCustom) {
      const proteinInput = document.querySelector('input[name="cust-protein"]:checked');
      if (proteinInput) addonsTotal += parseFloat(proteinInput.dataset.price || 0);
    }

    const finalPrice = basePrice + addonsTotal;
    if (this.currentCustomizingSub) {
      this.currentCustomizingSub.calculatedPrice = finalPrice;
      this.currentCustomizingSub.selectedSize = sizeRadio ? sizeRadio.value : 'Regular';
    }

    const priceEl = document.getElementById('custom-item-price');
    if (priceEl) priceEl.textContent = `$${finalPrice.toFixed(2)}`;
  },

  // Live Visual Sandwich Diagram
  updateLivePreview: function() {
    const stack = document.getElementById('sandwich-stack');
    const pills = document.getElementById('ingredient-pills-list');
    if (!stack || !pills || !this.currentCustomizingSub) return;

    let bread = "Fresh Italian Bread";
    let protein = "";
    let cheese = "Provolone";
    let veggies = [];
    let sauces = [];
    let hasBacon = !!document.querySelector('input[name="cust-extra-bacon"]:checked');
    let hasExtraCheese = !!document.querySelector('input[name="cust-extra-cheese"]:checked');

    if (!this.currentCustomizingSub.isCustom) {
      const selectedBread = document.querySelector('input[name="cust-bread"]:checked');
      if (selectedBread) bread = selectedBread.value;
      const checkedIng = Array.from(document.querySelectorAll('input[name="cust-ingredients"]:checked')).map(i => i.value);
      const extraSauces = Array.from(document.querySelectorAll('input[name="cust-extra-sauces"]:checked')).map(s => s.value);
      
      veggies = checkedIng;
      sauces = extraSauces;
      protein = this.currentCustomizingSub.name;
    } else {
      const breadInput = document.querySelector('input[name="cust-bread"]:checked');
      const proteinInput = document.querySelector('input[name="cust-protein"]:checked');
      const cheeseInput = document.querySelector('input[name="cust-cheese"]:checked');

      if (breadInput) bread = breadInput.value;
      if (proteinInput) protein = proteinInput.value;
      if (cheeseInput) cheese = cheeseInput.value;

      veggies = Array.from(document.querySelectorAll('input[name="cust-custom-veggie"]:checked')).map(v => v.value);
      sauces = Array.from(document.querySelectorAll('input[name="cust-custom-sauce"]:checked')).map(s => s.value);
    }

    let layersHtml = '';

    // 1. Top Bread
    layersHtml += `<div class="layer layer-bread-top">Top Roll (${bread})</div>`;

    // 2. Extra Bacon if selected
    if (hasBacon) {
      layersHtml += `<div class="layer layer-bacon">Crispy Hardwood Bacon (+$2.15)</div>`;
    }

    // 3. Sauces
    if (sauces.length > 0) {
      layersHtml += `<div class="layer layer-sauce">${sauces.join(', ')}</div>`;
    } else {
      layersHtml += `<div class="layer layer-empty">No Sauces Selected</div>`;
    }

    // 4. Veggies
    if (veggies.length > 0) {
      layersHtml += `<div class="layer layer-veggie">${veggies.join(', ')}</div>`;
    } else {
      layersHtml += `<div class="layer layer-empty">No Veggies Selected</div>`;
    }

    // 5. Cheese
    if (cheese && !cheese.toLowerCase().includes('no cheese')) {
      layersHtml += `<div class="layer layer-cheese">${cheese} ${hasExtraCheese ? '(Extra Cheese +$1.55)' : ''}</div>`;
    } else {
      layersHtml += `<div class="layer layer-empty">No Cheese Selected</div>`;
    }

    // 6. Protein
    if (protein) {
      layersHtml += `<div class="layer layer-protein">${protein}</div>`;
    } else {
      layersHtml += `<div class="layer layer-empty">No Protein Selected</div>`;
    }

    // 7. Bottom Bread
    layersHtml += `<div class="layer layer-bread-bottom">Bottom Roll (${bread})</div>`;

    stack.innerHTML = layersHtml;

    // Active Pills List
    const activePills = [
      this.currentCustomizingSub.selectedSize || 'Regular',
      bread,
      protein,
      cheese,
      hasBacon ? 'Extra Bacon (+$2.15)' : null,
      hasExtraCheese ? 'Extra Cheese (+$1.55)' : null,
      ...veggies,
      ...sauces
    ].filter(Boolean);

    pills.innerHTML = activePills.map(ing => `<span class="ingredient-pill">${ing}</span>`).join('');
  },

  // Add Item to Cart & Trigger Upsell Modal
  handleAddToCart: function(e) {
    if (e) e.preventDefault();
    let details = '';

    const sizeChoice = document.querySelector('input[name="cust-size-choice"]:checked')?.value || 'Regular';
    const toastChoice = document.querySelector('input[name="cust-toast"]:checked')?.value || 'Toasted';
    const hasBacon = !!document.querySelector('input[name="cust-extra-bacon"]:checked');
    const hasExtraCheese = !!document.querySelector('input[name="cust-extra-cheese"]:checked');
    const notes = document.getElementById('special-instructions')?.value || '';

    if (!this.currentCustomizingSub.isCustom) {
      const bread = document.querySelector('input[name="cust-bread"]:checked')?.value || 'White Italian';
      const ingList = Array.from(document.querySelectorAll('input[name="cust-ingredients"]:checked')).map(i => i.value);
      const extraSauces = Array.from(document.querySelectorAll('input[name="cust-extra-sauces"]:checked')).map(s => s.value);

      details = `Size: ${sizeChoice}, Bread: ${bread}, ${toastChoice}. ${hasBacon ? 'Extra Bacon (+$2.15). ' : ''}${hasExtraCheese ? 'Extra Cheese (+$1.55). ' : ''}Toppings: ${ingList.join(', ') || 'None'}. Condiments: ${extraSauces.join(', ') || 'None'}. ${notes ? '(' + notes + ')' : ''}`;
    } else {
      const bread = document.querySelector('input[name="cust-bread"]:checked')?.value || 'White Italian';
      const protein = document.querySelector('input[name="cust-protein"]:checked')?.value || 'Ham';
      const cheese = document.querySelector('input[name="cust-cheese"]:checked')?.value || 'Provolone';
      const veggies = Array.from(document.querySelectorAll('input[name="cust-custom-veggie"]:checked')).map(v => v.value);
      const sauces = Array.from(document.querySelectorAll('input[name="cust-custom-sauce"]:checked')).map(s => s.value);

      details = `Size: ${sizeChoice}, ${bread}, ${protein}, ${cheese}, ${toastChoice}. ${hasBacon ? 'Extra Bacon (+$2.15). ' : ''}${hasExtraCheese ? 'Extra Cheese (+$1.55). ' : ''}Veggies: ${veggies.join(', ') || 'None'}. Condiments: ${sauces.join(', ') || 'None'}. ${notes ? '(' + notes + ')' : ''}`;
    }

    const price = this.currentCustomizingSub.calculatedPrice || 9.50;

    this.orderState.cart.push({
      id: this.currentCustomizingSub.baseId || 'sub-custom',
      name: `${this.currentCustomizingSub.name} (${sizeChoice})`,
      price: price,
      details: details,
      quantity: 1
    });

    this.triggerCartBump();
    this.updateHeaderBar();
    this.renderMenuItems(this.currentCategory);

    // Offer Upsell Drink / Side Modal as requested!
    this.openUpsellModal();
  },

  // Upsell Modal Methods
  openUpsellModal: function() {
    const modal = document.getElementById('upsell-modal');
    if (!modal) return;
    modal.querySelectorAll('input[name="upsell-item"]').forEach(i => i.checked = false);
    modal.querySelectorAll('.upsell-option-card').forEach(c => c.classList.remove('checked'));
    modal.classList.add('active');
  },

  closeUpsellModal: function(goToCart = true) {
    const modal = document.getElementById('upsell-modal');
    if (modal) modal.classList.remove('active');
    if (goToCart) {
      this.showScreen('payment-screen');
    } else {
      this.showScreen('main-menu-screen');
    }
  },

  confirmUpsell: function() {
    const modal = document.getElementById('upsell-modal');
    if (!modal) return;

    const checkedItems = modal.querySelectorAll('input[name="upsell-item"]:checked');
    checkedItems.forEach(item => {
      const name = item.dataset.name;
      const price = parseFloat(item.dataset.price);

      this.orderState.cart.push({
        id: item.value,
        name: name,
        price: price,
        details: 'Side / Refreshing Drink Selection',
        quantity: 1
      });
    });

    this.closeUpsellModal(true);
    this.showToast('Selected meal items added to cart!', 'cart');
  },

  // Cart Screen Rendering
  renderCart: function() {
    const listContainer = document.getElementById('cart-items-list');
    if (!listContainer) return;

    if (this.orderState.cart.length === 0) {
      listContainer.innerHTML = '<p style="color:#64748b; padding: 12px 0;">Your cart is currently empty. Please select sandwiches or drinks from the menu!</p>';
      document.getElementById('cart-subtotal').textContent = '$0.00';
      document.getElementById('cart-tax').textContent = '$0.00';
      document.getElementById('cart-total').textContent = '$0.00';
      document.getElementById('pay-submit-btn').disabled = true;
      return;
    }

    document.getElementById('pay-submit-btn').disabled = false;
    listContainer.innerHTML = '';
    let subtotal = 0;

    this.orderState.cart.forEach((item, index) => {
      const itemTotal = item.price * (item.quantity || 1);
      subtotal += itemTotal;
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <div>
          <strong>${item.name}</strong> ${item.quantity > 1 ? `(x${item.quantity})` : ''}
          <div class="cart-item-details">${item.details}</div>
        </div>
        <div style="text-align:right;">
          <strong>$${itemTotal.toFixed(2)}</strong><br>
          <button class="btn-link" style="color:#DA291C; font-size:0.85rem;" onclick="app.removeFromCart(${index})">Remove</button>
        </div>
      `;
      listContainer.appendChild(div);
    });

    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
  },

  removeFromCart: function(index) {
    const removed = this.orderState.cart.splice(index, 1);
    if (removed.length > 0) {
      this.showToast(`Removed ${removed[0].name} from cart`, 'cart');
    }
    this.updateHeaderBar();
    this.renderCart();
    this.renderMenuItems(this.currentCategory);
  },

  // Payment & Order Confirmation
  handlePayment: function(e) {
    if (e) e.preventDefault();
    if (this.orderState.cart.length === 0) return;

    const subtotal = this.orderState.cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const total = subtotal * 1.08;

    document.getElementById('summary-order-id').textContent = '#JM-' + Math.floor(1000 + Math.random() * 9000);
    document.getElementById('summary-mode').textContent = this.orderState.fulfillment;
    document.getElementById('summary-location').textContent = this.orderState.fulfillment === 'Delivery' ? this.orderState.address : this.orderState.store;
    
    const summaryItems = document.getElementById('summary-items-list');
    summaryItems.innerHTML = '';
    this.orderState.cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} ($${(item.price * (item.quantity || 1)).toFixed(2)}) - ${item.details}`;
      summaryItems.appendChild(li);
    });

    document.getElementById('summary-total').textContent = `$${total.toFixed(2)}`;
    this.showScreen('order-screen');
    this.showToast('Order successfully confirmed!', 'none');
  },

  // Reset Order (Defaults back to no location set)
  resetOrder: function() {
    this.orderState = {
      userType: 'guest',
      fulfillment: 'Delivery',
      isFulfillmentSet: false,
      address: '',
      store: '',
      cart: []
    };
    this.updateHeaderBar();
    this.renderMenuItems('all');
    this.showScreen('main-menu-screen');
  }
};

document.addEventListener('DOMContentLoaded', () => app.init());
