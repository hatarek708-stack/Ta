/* =====================================================================
   NEON - Thrifted Culture | Shared Data
   Products & Categories used across index.html, product.html,
   categories.html and search.html
   ===================================================================== */

const NEON_DATA = {
  /* ----------------------------- CATEGORIES ----------------------------- */
  categories: [
    {
      id: 'hoodies',
      name: 'Hoodies',
      blurb: 'Heavyweight comfort, thrifted character.',
      image: 'https://images.unsplash.com/photo-1556821840-0a63f95cbfae?w=600&h=750&fit=crop',
      cover: 'https://images.unsplash.com/photo-1556821840-0a63f95cbfae?w=900&h=1100&fit=crop'
    },
    {
      id: 'tshirts',
      name: 'T-Shirts',
      blurb: 'Vintage washes, oversized fits, daily essentials.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop',
      cover: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&h=1100&fit=crop'
    },
    {
      id: 'pants',
      name: 'Pants',
      blurb: 'Utility cargos, wide legs, thrifted denim.',
      image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=750&fit=crop',
      cover: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=900&h=1100&fit=crop'
    },
    {
      id: 'jackets',
      name: 'Neon Jackets',
      blurb: 'Statement outerwear for cold nights out.',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=750&fit=crop',
      cover: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&h=1100&fit=crop'
    },
    {
      id: 'accessories',
      name: 'Neon Accessories',
      blurb: 'Caps, bags and bits that finish the look.',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=750&fit=crop',
      cover: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=900&h=1100&fit=crop'
    }
  ],

  /* ----------------------------- PRODUCTS ----------------------------- */
  products: [
    {
      id: 1,
      name: 'Dark Dreams Hoodie',
      category: 'hoodies',
      categoryLabel: 'Hoodies',
      price: 1699,
      originalPrice: 2499,
      rating: 4.8,
      reviews: 128,
      badge: 'Best Seller',
      isNew: true,
      images: [
        'https://images.unsplash.com/photo-1556821840-0a63f95cbfae?w=900&h=1100&fit=crop',
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=900&h=1100&fit=crop',
        'https://images.unsplash.com/photo-1556821840-0a63f95cbfae?w=900&h=1100&fit=crop&sat=-30',
        'https://images.unsplash.com/photo-1556821840-0a63f95cbfae?w=900&h=1100&fit=crop&hue=20'
      ],
      shortDesc:
        'Premium heavyweight cotton hoodie with an oversized fit for ultimate comfort and modern street style.',
      colors: [
        { name: 'Charcoal Black', hex: '#1f2937' },
        { name: 'Heather Gray', hex: '#9ca3af' },
        { name: 'Washed Cream', hex: '#e7e5e4' },
        { name: 'Midnight Navy', hex: '#1e293b' }
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      details: [
        'Oversized boxy fit',
        'Heavyweight 400 GSM cotton',
        'Adjustable drawstring hood',
        'Ribbed cuffs and hem',
        'Drop shoulder construction',
        'Unisex style'
      ],
      materials:
        '100% combed heavyweight cotton. Pre-shrunk and garment washed for a soft, lived-in feel from day one.',
      sizeFit:
        'Oversized fit. Model is 6ft and wearing size M. For a regular fit, size down one size.',
      shipping:
        'Free shipping on orders above ₹1499. Dispatched within 24 hours. Delivery in 3-5 business days. 30-day easy returns.'
    },
    {
      id: 2,
      name: 'Chaos Club Tee',
      category: 'tshirts',
      categoryLabel: 'T-Shirts',
      price: 899,
      originalPrice: 1299,
      rating: 4.6,
      reviews: 92,
      badge: 'New Arrival',
      isNew: true,
      images: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&h=1100&fit=crop',
        'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900&h=1100&fit=crop',
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&h=1100&fit=crop&sat=-30',
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&h=1100&fit=crop&hue=20'
      ],
      shortDesc:
        'Boxy cropped tee in vintage-washed cotton with a bold graphic print on the back.',
      colors: [
        { name: 'Washed Black', hex: '#374151' },
        { name: 'Bone White', hex: '#f5f5f4' },
        { name: 'Faded Olive', hex: '#4d5d53' }
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      details: [
        'Boxy cropped fit',
        '240 GSM heavyweight cotton',
        'Vintage enzyme wash',
        'Screen-printed graphic',
        'Ribbed crew neckline',
        'Unisex style'
      ],
      materials:
        '100% heavyweight cotton, 240 GSM. Enzyme washed for a soft vintage handfeel.',
      sizeFit:
        'Boxy cropped fit. Model is 5ft 9in and wearing size S. Fits true to size.',
      shipping:
        'Free shipping on orders above ₹1499. Dispatched within 24 hours. Delivery in 3-5 business days. 30-day easy returns.'
    },
    {
      id: 3,
      name: 'Vintage Washed Tee',
      category: 'tshirts',
      categoryLabel: 'T-Shirts',
      price: 949,
      originalPrice: 1399,
      rating: 4.7,
      reviews: 64,
      badge: 'Thrift Pick',
      isNew: false,
      images: [
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&h=1100&fit=crop',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&h=1100&fit=crop',
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&h=1100&fit=crop&sat=-30',
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=900&h=1100&fit=crop&hue=20'
      ],
      shortDesc:
        'Sun-faded vintage tee with a relaxed fit and that perfect broken-in handfeel.',
      colors: [
        { name: 'Faded Slate', hex: '#64748b' },
        { name: 'Sun Bleached Sand', hex: '#d6d3d1' },
        { name: 'Wine Stain', hex: '#7f1d1d' }
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      details: [
        'Relaxed regular fit',
        '180 GSM single jersey cotton',
        'Stone washed for vintage fade',
        'Crew neckline',
        'Each piece is unique'
      ],
      materials:
        '100% cotton single jersey, 180 GSM. Stone washed — colour and fade vary piece to piece.',
      sizeFit: 'Relaxed fit. Model is 5ft 11in and wearing size M. Fits true to size.',
      shipping:
        'Free shipping on orders above ₹1499. Dispatched within 24 hours. Delivery in 3-5 business days. 30-day easy returns.'
    },
    {
      id: 4,
      name: 'Utility Cargo Pants',
      category: 'pants',
      categoryLabel: 'Pants',
      price: 1599,
      originalPrice: 2299,
      rating: 4.9,
      reviews: 156,
      badge: 'Best Seller',
      isNew: false,
      images: [
        'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=900&h=1100&fit=crop',
        'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=900&h=1100&fit=crop',
        'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=900&h=1100&fit=crop&sat=-30',
        'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=900&h=1100&fit=crop&hue=20'
      ],
      shortDesc:
        'Wide-leg utility cargos with six pockets, drawstring hem and a relaxed thrifted drape.',
      colors: [
        { name: 'Field Olive', hex: '#4d5d53' },
        { name: 'Desert Khaki', hex: '#a8a29e' },
        { name: 'Jet Black', hex: '#111827' }
      ],
      sizes: ['28', '30', '32', '34', '36', '38'],
      details: [
        'Wide-leg relaxed fit',
        'Cotton-twill utility fabric',
        'Six functional pockets',
        'Adjustable drawstring hem',
        'YKK metal zipper fly',
        'Reinforced bartack stitching'
      ],
      materials:
        '98% cotton twill, 2% elastane. 320 GSM. Rugged but soft, breaks in beautifully.',
      sizeFit:
        'Wide-leg relaxed fit. Model is 6ft and wearing size 32. Fits true to size — size up for an extra baggy look.',
      shipping:
        'Free shipping on orders above ₹1499. Dispatched within 24 hours. Delivery in 3-5 business days. 30-day easy returns.'
    },
    {
      id: 5,
      name: 'Neon Oversized Tee',
      category: 'tshirts',
      categoryLabel: 'T-Shirts',
      price: 999,
      originalPrice: 1499,
      rating: 4.5,
      reviews: 71,
      badge: 'New Arrival',
      isNew: true,
      images: [
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&h=1100&fit=crop',
        'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=900&h=1100&fit=crop',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&h=1100&fit=crop&sat=-30',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&h=1100&fit=crop&hue=20'
      ],
      shortDesc:
        'Drop-shoulder oversized tee in heavyweight cotton with a small chest embroidery.',
      colors: [
        { name: 'Acid Wash Black', hex: '#1f2937' },
        { name: 'Cloud Gray', hex: '#d1d5db' },
        { name: 'Toxic Lime', hex: '#84cc16' }
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      details: [
        'Drop-shoulder oversized fit',
        '240 GSM heavyweight cotton',
        'Tonal chest embroidery',
        'Ribbed crew neckline',
        'Double-needle hems',
        'Unisex style'
      ],
      materials: '100% heavyweight cotton, 240 GSM. Pre-shrunk and garment dyed.',
      sizeFit:
        'Oversized fit. Model is 5ft 10in and wearing size M. For a regular fit, size down.',
      shipping:
        'Free shipping on orders above ₹1499. Dispatched within 24 hours. Delivery in 3-5 business days. 30-day easy returns.'
    },
    {
      id: 6,
      name: 'Essential Hoodie',
      category: 'hoodies',
      categoryLabel: 'Hoodies',
      price: 1499,
      originalPrice: 2199,
      rating: 4.8,
      reviews: 143,
      badge: 'Best Seller',
      isNew: false,
      images: [
        'https://images.unsplash.com/photo-1556821840-0a63f95cbfae?w=900&h=1100&fit=crop&sat=-100',
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=900&h=1100&fit=crop&sat=-50',
        'https://images.unsplash.com/photo-1556821840-0a63f95cbfae?w=900&h=1100&fit=crop&sat=-100&hue=20',
        'https://images.unsplash.com/photo-1556821840-0a63f95cbfae?w=900&h=1100&fit=crop&sat=-100&hue=-20'
      ],
      shortDesc:
        'Minimalist everyday hoodie in heavyweight fleece with a clean, no-logo front.',
      colors: [
        { name: 'Heather Gray', hex: '#9ca3af' },
        { name: 'Carbon Black', hex: '#111827' },
        { name: 'Bone', hex: '#e7e5e4' },
        { name: 'Moss Green', hex: '#3f4d3a' }
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      details: [
        'Regular relaxed fit',
        '380 GSM brushed fleece',
        'Kangaroo front pocket',
        'Self-fabric drawcord',
        'Ribbed cuffs and hem',
        'Unisex style'
      ],
      materials:
        '60% cotton, 40% polyester brushed fleece, 380 GSM. Soft, warm and holds its shape.',
      sizeFit:
        'Regular relaxed fit. Model is 5ft 11in and wearing size M. Fits true to size.',
      shipping:
        'Free shipping on orders above ₹1499. Dispatched within 24 hours. Delivery in 3-5 business days. 30-day easy returns.'
    }
  ],

  /* ----------------------------- HELPERS ----------------------------- */
  getProductById(id) {
    return this.products.find((p) => String(p.id) === String(id));
  },

  getCategoryById(id) {
    return this.categories.find((c) => c.id === id);
  },

  getProductsByCategory(catId) {
    if (!catId || catId === 'all') return this.products;
    return this.products.filter((p) => p.category === catId);
  },

  getRelatedProducts(currentId, limit = 4) {
    const current = this.getProductById(currentId);
    if (!current) return this.products.slice(0, limit);
    const sameCat = this.products.filter(
      (p) => p.category === current.category && p.id !== current.id
    );
    const others = this.products.filter(
      (p) => p.category !== current.category && p.id !== current.id
    );
    return [...sameCat, ...others].slice(0, limit);
  },

  formatPrice(n) {
    return '₹' + Number(n).toLocaleString('en-IN');
  },

  discountPercent(price, original) {
    if (!original || original <= price) return 0;
    return Math.round(((original - price) / original) * 100);
  },

  searchProducts(query) {
    if (!query) return this.products;
    const q = query.trim().toLowerCase();
    if (!q) return this.products;
    return this.products.filter((p) => {
      const cat = this.getCategoryById(p.category);
      const haystack = [
        p.name,
        p.shortDesc,
        p.categoryLabel,
        cat ? cat.name : '',
        p.badge,
        p.details.join(' '),
        p.colors.map((c) => c.name).join(' ')
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }
};

/* expose globally */
window.NEON_DATA = NEON_DATA;
