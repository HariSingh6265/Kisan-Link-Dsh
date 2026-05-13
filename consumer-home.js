let products = [];
let filteredProducts = [];
let currentCategory = 'All';
let searchQuery = '';

function init() {
    // Note: Consumer home might be accessible without login for browsing in some apps,
    // but based on earlier logic, let's keep it guarded or relaxed.
    // checkAuthState('consumer'); 
    
    loadProducts();
    loadFarmers();
    setupEventListeners();
}

function loadFarmers() {
    const users = JSON.parse(localStorage.getItem('kisan_users')) || [];
    const farmers = users.filter(u => u.role === 'farmer');
    renderFarmers(farmers);
}

function renderFarmers(farmers) {
    const container = document.getElementById('farmers-list');
    if (!container) return;
    
    // Using a few distinct unsplash profiles for variety
    const profilePics = [
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        'https://images.unsplash.com/photo-1580489944761-15a19d654956'
    ];

    container.innerHTML = farmers.map((f, index) => {
        const profilePic = `${profilePics[index % profilePics.length]}?auto=format&fit=crop&w=100&h=100`;
        return `
        <div class="card" style="min-width: 150px; text-align: center; padding: 15px; cursor: pointer;" onclick="showFarmerModal('${f.uid}', '${profilePic}')">
            <img src="${profilePic}" 
                 style="width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 10px; object-fit: cover;">
            <h4 style="font-size: 0.9rem;">${f.name}</h4>
            <p style="font-size: 0.7rem; color: var(--text-muted);">${f.village}, ${f.state}</p>
        </div>
    `}).join('');
}

window.showFarmerModal = (farmerId, profilePic) => {
    const users = JSON.parse(localStorage.getItem('kisan_users')) || [];
    const farmer = users.find(u => u.uid === farmerId);
    if (!farmer) return;

    document.getElementById('modal-farmer-img').src = profilePic;
    document.getElementById('modal-farmer-name').innerText = farmer.name;
    document.getElementById('modal-farmer-location').innerText = `${farmer.village}, ${farmer.state}`;
    document.getElementById('modal-farmer-exp').innerText = farmer.experience || '5+';
    document.getElementById('modal-farmer-about').innerText = farmer.about || 'A dedicated farmer serving the community with fresh produce.';
    
    const specialtiesContainer = document.getElementById('modal-farmer-specialties');
    const specialties = farmer.specialties || ['Organic Produce', 'Seasonal Crops'];
    specialtiesContainer.innerHTML = specialties.map(s => `<span class="badge">${s}</span>`).join('');

    document.getElementById('farmer-modal-overlay').style.display = 'flex';
};

window.closeFarmerModal = () => {
    document.getElementById('farmer-modal-overlay').style.display = 'none';
};

function loadProducts() {
    products = JSON.parse(localStorage.getItem('kisan_products')) || [];
    applyFilters();
}

function applyFilters() {
    filteredProducts = products.filter(p => {
        const matchesCategory = currentCategory === 'All' || p.category === currentCategory;
        const matchesSearch = p.cropName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              p.farmerName.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    grid.innerHTML = filteredProducts.map(p => {
        let freshnessText = "Freshly harvested";
        if (p.harvestDate) {
            const harvestDate = new Date(p.harvestDate);
            const now = new Date();
            const diffHours = Math.floor((now - harvestDate) / (1000 * 60 * 60));
            freshnessText = diffHours > 24 ? `Harvested ${Math.floor(diffHours/24)}d ago` : `Harvested ${diffHours}h ago`;
        }
        return `
            <div class="product-card" onclick="window.location.href='product-detail.html?id=${p.id}'">
                <img src="${p.imageURL || 'https://via.placeholder.com/400x300'}" class="product-img">
                <div class="product-info">
                    <div class="product-name">${p.cropName}</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">🧑🌾 ${p.farmerName}</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">📍 ${p.farmerLocation}</div>
                    <div class="product-price">₹${p.pricePerKg}/kg</div>
                    <div class="freshness-tag">🌾 ${freshnessText}</div>
                    <button class="btn btn-primary btn-block mt-1" style="padding: 8px; font-size: 0.8rem;" 
                        onclick="event.stopPropagation(); addToCart('${p.id}')">Add to Cart</button>
                </div>
            </div>`;
    }).join('') || '<p class="text-center" style="grid-column: 1/-1;">No products found.</p>';
}

function setupEventListeners() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            applyFilters();
        });
    }
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            applyFilters();
        });
    });
    const translateBtn = document.getElementById('translate-btn');
    if (translateBtn) {
        let isHindi = false;
        translateBtn.onclick = () => {
            isHindi = !isHindi;
            translateBtn.innerText = isHindi ? 'English' : 'Hindi/हिंदी';
            document.querySelectorAll('[data-hi]').forEach(el => {
                el.innerText = isHindi ? el.dataset.hi : el.dataset.en;
            });
        };
    }
}

window.addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const cart = getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) existing.quantity += 1;
    else cart.push({ id: product.id, cropName: product.cropName, pricePerKg: product.pricePerKg, farmerId: product.farmerId, farmerName: product.farmerName, imageURL: product.imageURL, quantity: 1 });
    saveCart(cart);
    showToast(`Added ${product.cropName} to cart!`);
};

init();
