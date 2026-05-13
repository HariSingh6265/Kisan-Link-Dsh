// --- KisanConnect Frontend Logic (LocalStorage & Dummy Data) ---

// Dummy Data Initialization
const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        farmerId: 'f1',
        farmerName: 'Ramesh Kumar',
        farmerLocation: 'Dewas, MP',
        cropName: 'Organic Tomatoes',
        category: 'Vegetables',
        pricePerKg: 40,
        quantityAvailable: 150,
        harvestDate: '2024-05-12',
        description: 'Deep red, juicy organic tomatoes grown without pesticides.',
        imageURL: 'https://images.unsplash.com/photo-1546473427-e1bc638c4e94?auto=format&fit=crop&w=400&h=300',
        rating: 4.8
    },
    {
        id: 'p2',
        farmerId: 'f2',
        farmerName: 'Sunita Devi',
        farmerLocation: 'Nashik, MH',
        cropName: 'Kesar Mangoes',
        category: 'Fruits',
        pricePerKg: 120,
        quantityAvailable: 50,
        harvestDate: '2024-05-11',
        description: 'Sweet and aromatic Kesar mangoes from the orchards of Maharashtra.',
        imageURL: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&h=300',
        rating: 4.9
    },
    {
        id: 'p3',
        farmerId: 'f3',
        farmerName: 'Mohan Singh',
        farmerLocation: 'Amritsar, PB',
        cropName: 'Basmati Rice',
        category: 'Grains',
        pricePerKg: 95,
        quantityAvailable: 500,
        harvestDate: '2024-04-20',
        description: 'Extra long grain premium Basmati rice, aged for 1 year.',
        imageURL: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&h=300',
        rating: 4.7
    },
    {
        id: 'p4',
        farmerId: 'f4',
        farmerName: 'Radha Patel',
        farmerLocation: 'Surat, GJ',
        cropName: 'Fresh Spinach',
        category: 'Vegetables',
        pricePerKg: 28,
        quantityAvailable: 200,
        harvestDate: '2024-05-14',
        description: 'Crisp, leafy spinach harvested at its freshest for nutritious meals.',
        imageURL: 'https://images.unsplash.com/photo-1542444459-db5e35f6b596?auto=format&fit=crop&w=400&h=300',
        rating: 4.6
    },
    {
        id: 'p5',
        farmerId: 'f5',
        farmerName: 'Amit Joshi',
        farmerLocation: 'Pune, MH',
        cropName: 'Sweet Bananas',
        category: 'Fruits',
        pricePerKg: 45,
        quantityAvailable: 120,
        harvestDate: '2024-05-10',
        description: 'Ripe and naturally sweet bananas packed with energy.',
        imageURL: 'https://images.unsplash.com/photo-1574226516831-e1dff420e38e?auto=format&fit=crop&w=400&h=300',
        rating: 4.5
    },
    {
        id: 'p6',
        farmerId: 'f6',
        farmerName: 'Neha Sharma',
        farmerLocation: 'Jaipur, RJ',
        cropName: 'Whole Wheat',
        category: 'Grains',
        pricePerKg: 52,
        quantityAvailable: 350,
        harvestDate: '2024-04-25',
        description: 'Freshly milled whole wheat grains ideal for chapatis and baking.',
        imageURL: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&h=300',
        rating: 4.4
    },
    {
        id: 'p7',
        farmerId: 'f7',
        farmerName: 'Priya Verma',
        farmerLocation: 'Lucknow, UP',
        cropName: 'Crunchy Cauliflower',
        category: 'Vegetables',
        pricePerKg: 35,
        quantityAvailable: 90,
        harvestDate: '2024-05-13',
        description: 'Firm-headed cauliflower perfect for curries and stir-fries.',
        imageURL: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=400&h=300',
        rating: 4.7
    },
    {
        id: 'p8',
        farmerId: 'f8',
        farmerName: 'Vikram Rao',
        farmerLocation: 'Thrissur, KL',
        cropName: 'Sweet Pineapple',
        category: 'Fruits',
        pricePerKg: 85,
        quantityAvailable: 70,
        harvestDate: '2024-05-09',
        description: 'Juicy, tropical pineapples with a sweet and tangy flavor.',
        imageURL: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&h=300',
        rating: 4.8
    },
    {
        id: 'p9',
        farmerId: 'f4',
        farmerName: 'Radha Patel',
        farmerLocation: 'Surat, GJ',
        cropName: 'Green Chickpeas',
        category: 'Grains',
        pricePerKg: 110,
        quantityAvailable: 220,
        harvestDate: '2024-04-28',
        description: 'Protein-rich green chickpeas perfect for salads, curries, and snacks.',
        imageURL: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=400&h=300',
        rating: 4.6
    },
    {
        id: 'p10',
        farmerId: 'f9',
        farmerName: 'Suresh Raina',
        farmerLocation: 'Shimla, HP',
        cropName: 'Shimla Apples',
        category: 'Fruits',
        pricePerKg: 150,
        quantityAvailable: 300,
        harvestDate: '2024-05-10',
        description: 'Crispy and sweet premium apples from the orchards of Himachal Pradesh.',
        imageURL: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&h=300',
        rating: 4.9
    },
    {
        id: 'p11',
        farmerId: 'f9',
        farmerName: 'Suresh Raina',
        farmerLocation: 'Shimla, HP',
        cropName: 'Golden Pears',
        category: 'Fruits',
        pricePerKg: 110,
        quantityAvailable: 150,
        harvestDate: '2024-05-12',
        description: 'Succulent and juicy golden pears, freshly harvested.',
        imageURL: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&w=400&h=300',
        rating: 4.7
    },
    {
        id: 'p12',
        farmerId: 'f10',
        farmerName: 'Kavita Reddy',
        farmerLocation: 'Guntur, AP',
        cropName: 'Guntur Chillies',
        category: 'Vegetables',
        pricePerKg: 180,
        quantityAvailable: 100,
        harvestDate: '2024-05-08',
        description: 'Famous spicy red chillies from Guntur, perfect for seasoning.',
        imageURL: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=400&h=300',
        rating: 4.8
    },
    {
        id: 'p13',
        farmerId: 'f10',
        farmerName: 'Kavita Reddy',
        farmerLocation: 'Guntur, AP',
        cropName: 'Bell Peppers',
        category: 'Vegetables',
        pricePerKg: 90,
        quantityAvailable: 120,
        harvestDate: '2024-05-14',
        description: 'Fresh and colorful bell peppers, rich in vitamins.',
        imageURL: 'https://images.unsplash.com/photo-1566275529824-cca6d00a1b66?auto=format&fit=crop&w=400&h=300',
        rating: 4.6
    },
    {
        id: 'p14',
        farmerId: 'f11',
        farmerName: 'Arjun Singh',
        farmerLocation: 'Nagpur, MH',
        cropName: 'Nagpur Oranges',
        category: 'Fruits',
        pricePerKg: 70,
        quantityAvailable: 400,
        harvestDate: '2024-05-11',
        description: 'Zesty and sweet oranges from the orange city of India.',
        imageURL: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=400&h=300',
        rating: 4.9
    },
    {
        id: 'p15',
        farmerId: 'f11',
        farmerName: 'Arjun Singh',
        farmerLocation: 'Nagpur, MH',
        cropName: 'Fresh Lemons',
        category: 'Fruits',
        pricePerKg: 120,
        quantityAvailable: 250,
        harvestDate: '2024-05-13',
        description: 'Tangy and juicy lemons, essential for your daily refreshment.',
        imageURL: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=400&h=300',
        rating: 4.5
    }
];

const DUMMY_USERS = [
    {
        uid: 'f1',
        name: 'Ramesh Kumar',
        phone: '9000000001',
        password: 'farmer123',
        role: 'farmer',
        village: 'Dewas',
        state: 'MP',
        aadhaarNumber: '1111-2222-3333',
        bankAccount: 'XXXX-XXXX-XXXX-1111',
        about: 'Expert in organic vegetable farming with over 15 years of experience. Believes in sustainable agriculture and chemical-free produce.',
        specialties: ['Organic Tomatoes', 'Green Chillies', 'Potatoes'],
        experience: '15+ Years',
        createdAt: '2024-05-12T08:00:00Z'
    },
    {
        uid: 'f2',
        name: 'Sunita Devi',
        phone: '9000000002',
        password: 'farmer123',
        role: 'farmer',
        village: 'Nashik',
        state: 'MH',
        aadhaarNumber: '2222-3333-4444',
        bankAccount: 'XXXX-XXXX-XXXX-2222',
        about: 'Specializes in fruit orchards, especially mangoes and grapes. Dedicated to providing the sweetest natural fruits.',
        specialties: ['Kesar Mangoes', 'Grapes', 'Pomegranates'],
        experience: '10 Years',
        createdAt: '2024-05-10T09:00:00Z'
    },
    {
        uid: 'f3',
        name: 'Mohan Singh',
        phone: '9000000003',
        password: 'farmer123',
        role: 'farmer',
        village: 'Amritsar',
        state: 'PB',
        aadhaarNumber: '3333-4444-5555',
        bankAccount: 'XXXX-XXXX-XXXX-3333',
        about: 'Grain specialist focusing on premium Basmati rice and high-quality wheat. Traditional farming methods passed down through generations.',
        specialties: ['Basmati Rice', 'Whole Wheat', 'Mustard'],
        experience: '20+ Years',
        createdAt: '2024-05-08T10:00:00Z'
    },
    {
        uid: 'f4',
        name: 'Radha Patel',
        phone: '9000000004',
        password: 'farmer123',
        role: 'farmer',
        village: 'Surat',
        state: 'GJ',
        aadhaarNumber: '4444-5555-6666',
        bankAccount: 'XXXX-XXXX-XXXX-4444',
        about: 'Passionate about leafy greens and seasonal vegetables. Uses modern drip irrigation for water conservation.',
        specialties: ['Spinach', 'Fenugreek', 'Green Chickpeas'],
        experience: '8 Years',
        createdAt: '2024-05-14T11:00:00Z'
    },
    {
        uid: 'f5',
        name: 'Amit Joshi',
        phone: '9000000005',
        password: 'farmer123',
        role: 'farmer',
        village: 'Pune',
        state: 'MH',
        aadhaarNumber: '5555-6666-7777',
        bankAccount: 'XXXX-XXXX-XXXX-5555',
        about: 'Fruit farmer with a focus on bananas and papayas. Ensures ethical labor practices and high-quality yields.',
        specialties: ['Sweet Bananas', 'Papaya', 'Guava'],
        experience: '12 Years',
        createdAt: '2024-05-09T12:00:00Z'
    },
    {
        uid: 'f6',
        name: 'Neha Sharma',
        phone: '9000000006',
        password: 'farmer123',
        role: 'farmer',
        village: 'Jaipur',
        state: 'RJ',
        aadhaarNumber: '6666-7777-8888',
        bankAccount: 'XXXX-XXXX-XXXX-6666',
        about: 'Cultivates high-quality grains and pulses in the arid climate of Rajasthan using drought-resistant techniques.',
        specialties: ['Whole Wheat', 'Bajra', 'Moong Dal'],
        experience: '7 Years',
        createdAt: '2024-05-13T13:00:00Z'
    },
    {
        uid: 'f7',
        name: 'Priya Verma',
        phone: '9000000007',
        password: 'farmer123',
        role: 'farmer',
        village: 'Lucknow',
        state: 'UP',
        aadhaarNumber: '7777-8888-9999',
        bankAccount: 'XXXX-XXXX-XXXX-7777',
        about: 'Diverse vegetable farmer committed to community-supported agriculture. Always experimenting with new crop varieties.',
        specialties: ['Cauliflower', 'Brinjal', 'Ladyfinger'],
        experience: '9 Years',
        createdAt: '2024-05-13T14:00:00Z'
    },
    {
        uid: 'f8',
        name: 'Vikram Rao',
        phone: '9000000008',
        password: 'farmer123',
        role: 'farmer',
        village: 'Thrissur',
        state: 'KL',
        aadhaarNumber: '8888-9999-0000',
        bankAccount: 'XXXX-XXXX-XXXX-8888',
        about: 'Tropical fruit expert from Kerala. Specializes in pineapples and coconuts using natural manure.',
        specialties: ['Sweet Pineapple', 'Coconut', 'Ginger'],
        experience: '18 Years',
        createdAt: '2024-05-11T15:00:00Z'
    },
    {
        uid: 'f9',
        name: 'Suresh Raina',
        phone: '9000000009',
        password: 'farmer123',
        role: 'farmer',
        village: 'Shimla',
        state: 'HP',
        aadhaarNumber: '9999-0000-1111',
        bankAccount: 'XXXX-XXXX-XXXX-9999',
        about: 'Apple orchardist from the hills of Himachal. Passionate about preserving heirloom apple varieties.',
        specialties: ['Shimla Apples', 'Golden Pears', 'Plums'],
        experience: '25 Years',
        createdAt: '2024-05-10T08:30:00Z'
    },
    {
        uid: 'f10',
        name: 'Kavita Reddy',
        phone: '9000000010',
        password: 'farmer123',
        role: 'farmer',
        village: 'Guntur',
        state: 'AP',
        aadhaarNumber: '0000-1111-2222',
        bankAccount: 'XXXX-XXXX-XXXX-0000',
        about: 'Spice and vegetable farmer known for the famous Guntur chillies and vibrant bell peppers.',
        specialties: ['Guntur Chillies', 'Bell Peppers', 'Turmeric'],
        experience: '14 Years',
        createdAt: '2024-05-08T09:45:00Z'
    },
    {
        uid: 'f11',
        name: 'Arjun Singh',
        phone: '9000000011',
        password: 'farmer123',
        role: 'farmer',
        village: 'Nagpur',
        state: 'MH',
        aadhaarNumber: '1111-2222-3333',
        bankAccount: 'XXXX-XXXX-XXXX-1111',
        about: 'Citrus fruit specialist. Managing vast orange orchards with a focus on export-quality produce.',
        specialties: ['Nagpur Oranges', 'Lemons', 'Sweet Lime'],
        experience: '11 Years',
        createdAt: '2024-05-11T10:15:00Z'
    }
];

// Initialize LocalStorage Data
function syncDummyData() {
    const existingProducts = JSON.parse(localStorage.getItem('kisan_products')) || [];
    const existingUsers = JSON.parse(localStorage.getItem('kisan_users')) || [];
    
    // Add missing dummy products
    let productsUpdated = false;
    DUMMY_PRODUCTS.forEach(dp => {
        if (!existingProducts.find(p => p.id === dp.id)) {
            existingProducts.push(dp);
            productsUpdated = true;
        }
    });
    
    // Update/Add dummy users
    let usersUpdated = false;
    DUMMY_USERS.forEach(du => {
        const existing = existingUsers.find(u => u.uid === du.uid);
        if (!existing) {
            existingUsers.push(du);
            usersUpdated = true;
        } else {
            // Update fields if missing or just overwrite for dummy users to ensure latest data
            existing.about = du.about;
            existing.specialties = du.specialties;
            existing.experience = du.experience;
            usersUpdated = true;
        }
    });
    
    if (productsUpdated || existingProducts.length === 0) {
        localStorage.setItem('kisan_products', JSON.stringify(existingProducts));
    }
    if (usersUpdated || existingUsers.length === 0) {
        localStorage.setItem('kisan_users', JSON.stringify(existingUsers));
    }
    
    if (!localStorage.getItem('kisan_orders')) {
        localStorage.setItem('kisan_orders', JSON.stringify([]));
    }
}

syncDummyData();

// --- Shared Utilities ---

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    const bgColor = type === 'error' ? '#ef4444' : '#2d5a27';
    toast.style.cssText = `
        position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
        background: ${bgColor}; color: white; padding: 12px 24px;
        border-radius: 30px; z-index: 9999; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-weight: 500; font-size: 0.9rem; transition: all 0.3s ease;
    `;
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function toggleLoading(btn, isLoading) {
    if (isLoading) {
        btn.disabled = true;
        btn.dataset.originalText = btn.innerText;
        btn.innerHTML = '<span class="spinner"></span> Loading...';
    } else {
        btn.disabled = false;
        btn.innerText = btn.dataset.originalText || 'Submit';
    }
}

function checkAuthState(requiredRole = null) {
    const user = JSON.parse(localStorage.getItem('kisan_current_user'));
    if (!user) {
        if (!window.location.pathname.includes('login') && !window.location.pathname.includes('index.html') && window.location.pathname !== '/') {
            window.location.href = 'index.html';
        }
        return null;
    }

    if (requiredRole && user.role !== requiredRole) {
        const redirectUrl = user.role === 'farmer' ? 'farmer-dashboard.html' : 'consumer-home.html';
        window.location.href = redirectUrl;
        return null;
    }
    return user;
}

function logoutUser() {
    localStorage.removeItem('kisan_current_user');
    window.location.href = 'index.html';
}

function getCart() {
    return JSON.parse(localStorage.getItem('kisan_cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('kisan_cart', JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    const cart = getCart();
    const badges = document.querySelectorAll('.cart-count');
    badges.forEach(badge => {
        badge.innerText = cart.length;
        badge.style.display = cart.length > 0 ? 'flex' : 'none';
    });
}

// Initialize common UI
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    const logoutBtns = document.querySelectorAll('.logout-btn');
    logoutBtns.forEach(btn => btn.addEventListener('click', logoutUser));
});
