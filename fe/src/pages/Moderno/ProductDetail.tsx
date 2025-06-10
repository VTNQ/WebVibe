import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const ProductDetail = () => {
    const products = [
      {
        id: 56,
        brand: "PRADA",
        name: "Satin One-Shoulder Gown",
        price: "$2,780.00",
        description: "An exquisite satin gown with a sleek one-shoulder silhouette and fluid drape.",
        img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
        imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
      },
  {
          id: 56,
          brand: "PRADA",
          name: "Satin One-Shoulder Gown",
          price: "$2,780.00",
          description: "An exquisite satin gown with a sleek one-shoulder silhouette and fluid drape.",
          img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
          imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
        },
    {
            id: 56,
            brand: "PRADA",
            name: "Satin One-Shoulder Gown",
            price: "$2,780.00",
            description: "An exquisite satin gown with a sleek one-shoulder silhouette and fluid drape.",
            img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
            imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
          },
      {
              id: 56,
              brand: "PRADA",
              name: "Satin One-Shoulder Gown",
              price: "$2,780.00",
              description: "An exquisite satin gown with a sleek one-shoulder silhouette and fluid drape.",
              img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
              imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
            },
      {
        id: 57,
        brand: "BURBERRY",
        name: "Structured Silk Cocktail Dress",
        price: "$2,999.00",
        description: "A bold silk cocktail dress with structured pleats and modern tailoring.",
        img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
        imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
      },
  {
          id: 57,
          brand: "BURBERRY",
          name: "Structured Silk Cocktail Dress",
          price: "$2,999.00",
          description: "A bold silk cocktail dress with structured pleats and modern tailoring.",
          img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
          imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
        },
    {
            id: 57,
            brand: "BURBERRY",
            name: "Structured Silk Cocktail Dress",
            price: "$2,999.00",
            description: "A bold silk cocktail dress with structured pleats and modern tailoring.",
            img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
            imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
          },
      {
              id: 57,
              brand: "BURBERRY",
              name: "Structured Silk Cocktail Dress",
              price: "$2,999.00",
              description: "A bold silk cocktail dress with structured pleats and modern tailoring.",
              img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
              imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
            },
      {
        id: 58,
        brand: "VALENTINO",
        name: "Layered Lace Evening Dress",
        price: "$3,200.00",
        description: "Romantic lace layers and a cinched waist elevate this timeless evening piece.",
        img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
        imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
      },
  {
          id: 58,
          brand: "VALENTINO",
          name: "Layered Lace Evening Dress",
          price: "$3,200.00",
          description: "Romantic lace layers and a cinched waist elevate this timeless evening piece.",
          img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
          imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
        },
    {
            id: 58,
            brand: "VALENTINO",
            name: "Layered Lace Evening Dress",
            price: "$3,200.00",
            description: "Romantic lace layers and a cinched waist elevate this timeless evening piece.",
            img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
            imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
          },
      {
        id: 59,
        brand: "STELLA MCCARTNEY",
        name: "Eco-Conscious Tulle Midi",
        price: "$1,950.00",
        description: "Crafted from sustainable materials, this midi dress offers elegance with a cause.",
        img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
        imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
      },
  {
          id: 59,
          brand: "STELLA MCCARTNEY",
          name: "Eco-Conscious Tulle Midi",
          price: "$1,950.00",
          description: "Crafted from sustainable materials, this midi dress offers elegance with a cause.",
          img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
          imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
        },
    {
            id: 59,
            brand: "STELLA MCCARTNEY",
            name: "Eco-Conscious Tulle Midi",
            price: "$1,950.00",
            description: "Crafted from sustainable materials, this midi dress offers elegance with a cause.",
            img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
            imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
          },
      {
        id: 60,
        brand: "MISSONI",
        name: "Metallic Zigzag Maxi Dress",
        price: "$2,750.00",
        description: "Shimmering zigzag patterns bring signature flair to this floor-length stunner.",
        img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
        imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
      },
  {
          id: 60,
          brand: "MISSONI",
          name: "Metallic Zigzag Maxi Dress",
          price: "$2,750.00",
          description: "Shimmering zigzag patterns bring signature flair to this floor-length stunner.",
          img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
          imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
        },
    {
            id: 60,
            brand: "MISSONI",
            name: "Metallic Zigzag Maxi Dress",
            price: "$2,750.00",
            description: "Shimmering zigzag patterns bring signature flair to this floor-length stunner.",
            img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
            imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
          },
      {
              id: 60,
              brand: "MISSONI",
              name: "Metallic Zigzag Maxi Dress",
              price: "$2,750.00",
              description: "Shimmering zigzag patterns bring signature flair to this floor-length stunner.",
              img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
              imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
            },
      {
        id: 61,
        brand: "THE ROW",
        name: "Minimalist Jersey Slip Dress",
        price: "$1,480.00",
        description: "A timeless jersey slip dress with understated lines and effortless drape.",
        img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
        imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
      },
  {
          id: 61,
          brand: "THE ROW",
          name: "Minimalist Jersey Slip Dress",
          price: "$1,480.00",
          description: "A timeless jersey slip dress with understated lines and effortless drape.",
          img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
          imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
        },
    {
            id: 61,
            brand: "THE ROW",
            name: "Minimalist Jersey Slip Dress",
            price: "$1,480.00",
            description: "A timeless jersey slip dress with understated lines and effortless drape.",
            img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
            imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
          },
      {
              id: 61,
              brand: "THE ROW",
              name: "Minimalist Jersey Slip Dress",
              price: "$1,480.00",
              description: "A timeless jersey slip dress with understated lines and effortless drape.",
              img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
              imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
            },
      {
        id: 62,
        brand: "ZELLA",
        name: "Performance Knit Dress",
        price: "$980.00",
        description: "Athleisure-inspired dress with breathable knit and modern streetwear style.",
        img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
        imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
      },
  {
          id: 62,
          brand: "ZELLA",
          name: "Performance Knit Dress",
          price: "$980.00",
          description: "Athleisure-inspired dress with breathable knit and modern streetwear style.",
          img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
          imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
        },
    {
            id: 62,
            brand: "ZELLA",
            name: "Performance Knit Dress",
            price: "$980.00",
            description: "Athleisure-inspired dress with breathable knit and modern streetwear style.",
            img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
            imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
          },
      {
              id: 62,
              brand: "ZELLA",
              name: "Performance Knit Dress",
              price: "$980.00",
              description: "Athleisure-inspired dress with breathable knit and modern streetwear style.",
              img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
              imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
            },
      {
        id: 63,
        brand: "VALENTINO",
        name: "V-Logo Embellished Shift",
        price: "$3,600.00",
        description: "A signature shift silhouette adorned with Valentino’s iconic V-logo motif.",
        img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
        imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
      },
  {
          id: 63,
          brand: "VALENTINO",
          name: "V-Logo Embellished Shift",
          price: "$3,600.00",
          description: "A signature shift silhouette adorned with Valentino’s iconic V-logo motif.",
          img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
          imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
        },
    {
            id: 63,
            brand: "VALENTINO",
            name: "V-Logo Embellished Shift",
            price: "$3,600.00",
            description: "A signature shift silhouette adorned with Valentino’s iconic V-logo motif.",
            img: "https://keyblissboutique.com/cdn/shop/products/SS9525_uw.jpg?v=1645303601",
            imgHover: "https://keyblissboutique.com/cdn/shop/products/SS9525_al.jpg?v=1645303601",
          },
    ];



  const location = useLocation();
  const { id } = useParams();
  const product = location.state?.product;

  const [showInfo, setShowInfo] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showDescription, setShowDescription] = useState(true);
  const showInvalidFeature = () => {
    Swal.fire({
      icon: 'info',
      title: 'Invalid feature',
      text: 'Tính năng này chưa được hỗ trợ.',
      confirmButtonText: 'OK',
    });
  };

  if (!product) {
    return <p>Không tìm thấy sản phẩm hoặc chưa truyền dữ liệu.</p>;
  }
  const relatedProducts = products.filter(p => p.brand === product.brand && p.id !== product.id);

  return (
    <div className="product-detail-container">
      <div className="product-grid">
        {/* Left: Image gallery */}
        <div className="image-gallery">
          <div className="thumbnail-grid">
            <img className="thumbnail" src={product.img} alt="Front" />
            <img className="thumbnail" src={product.imgHover} alt="Back" />
          </div>
        </div>

        {/* Right: Product info */}

        <div className="product-info">
        <div className="breadcrumb">
                <span>HOME</span> &gt; <span>SHOP</span> &gt; <span>WOMEN</span> &gt; <span>DRESSES</span> &gt; <span className="current">{product.name?.toUpperCase()}</span>
              </div>
          <h1 className="product-title">{product.name}</h1>
          <span className="price">{product.price}</span>

          <p className="short-description">{product.description}</p>

          <form className="purchase-form" onSubmit={(e) => {
            e.preventDefault();
            showInvalidFeature();
          }}>
            <div className="form-group">
              <label htmlFor="size">SIZE</label>
              <select id="size" name="size" onChange={showInvalidFeature}>
                <option value="10">10</option>
                <option value="4">4</option>
                <option value="8">8</option>
              </select>
            </div>

            <div className="add-to-cart-row">
              <div className="form-group quantity-group">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  defaultValue={1}
                  onChange={showInvalidFeature}
                />
              </div>
              <button type="submit" className="add-to-cart-btn">
                ADD TO CART
              </button>
            </div>
          </form>
            <div className="action-row">
              <button className="wishlist-btn" onClick={showInvalidFeature}>
                ❤️ ADD TO WISHLIST
              </button>
              <button className="share-btn" onClick={showInvalidFeature}>
                🔗 SHARE
              </button>
            </div>

          <div className="meta-row">
            <span><strong>Brand:</strong> {product.brand}</span>
            <span><strong>SKU:</strong> 562181211599</span>
            <span><strong>Category:</strong> DRESSES</span>
            <span><strong>Tag:</strong> DRESS</span>
          </div>


          <div className="accordion-section">
            <div className="accordion-item">
              <h4 onClick={() => setShowDescription(!showDescription)} className="accordion-title">
                DESCRIPTION
                <span className="accordion-icon">{showDescription ? "−" : "+"}</span>
              </h4>
              {showDescription && (
                <div className="accordion-content">
                  <ul>
                    <li>Back zip closure</li>
                    <li>Strapless sweetheart neck</li>
                    <li>Sleeveless</li>
                    <li>Silk lining</li>
                    <li>57% silk, 43% polyester</li>
                    <li>Dry clean</li>
                    <li>Women’s Designer Clothing</li>
                  </ul>
                  <p className="brand-description">
                    {product.brand} is a luxury house with a commitment to quality, innovation and creativity.
                  </p>
                </div>
              )}
            </div>

            <div className="accordion-item">
              <h4 onClick={() => setShowInfo(!showInfo)} className="accordion-title">
                ADDITIONAL INFORMATION
                <span className="accordion-icon">{showInfo ? "−" : "+"}</span>
              </h4>
              {showInfo && (
                <div className="accordion-content">
                  <p>Size guide, material details, shipping info, etc.</p>
                </div>
              )}
            </div>

            <div className="accordion-item">
              <h4 onClick={() => setShowReview(!showReview)} className="accordion-title">
                REVIEWS (0)
                <span className="accordion-icon">{showReview ? "−" : "+"}</span>
              </h4>
              {showReview && (
                <div className="accordion-content">
                  <p>There are no reviews yet.</p>
                  <h5>BE THE FIRST TO REVIEW “{product.name}”</h5>
                  <p>Your email address will not be published. Required fields are marked *</p>

                  <div className="form-group">
                    <label>YOUR RATING *</label>
                    <div className="rating-stars">★★★★★</div>
                  </div>

                  <div className="form-group">
                    <label>Your review *</label>
                    <textarea rows={5} placeholder="Write your review here..."></textarea>
                  </div>

                  <div className="form-row">
                    <input type="text" placeholder="Name *" required />
                    <input type="email" placeholder="Email *" required />
                  </div>

                  <div className="form-group">
                    <label>
                      <input type="checkbox" /> Save my info for next time.
                    </label>
                  </div>
                  <button className="submit-review">SUBMIT</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="related-products mt-12 max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <div
              key={p.id}
              className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              onClick={() => {
                window.scrollTo(0, 0);
                window.location.href = `/fashion/product/${p.id}`;
              }}
            >
              <div className="relative w-full overflow-hidden aspect-[3/4]">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded shadow">
                  -13%
                </span>
              </div>

              <div className="p-4">
                <h4 className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wide">
                  {p.brand}
                </h4>
                <h3 className="text-sm font-bold text-gray-800 leading-snug line-clamp-2">
                  {p.name}
                </h3>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">{p.description}</p>

                <div className="mt-2">
                  <span className="text-base font-semibold text-black">{p.price}</span>
                  <span className="text-sm line-through text-gray-400 ml-2">
                    $7,500.00
                  </span>
                </div>
              </div>

              {/* Hover buttons (Quick View, Add to Cart) */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex gap-2 translate-y-[100px]">
                  <button className="bg-white text-xs px-3 py-1 rounded-full font-medium border hover:bg-black hover:text-white transition">
                    👁 Quick View
                  </button>
                  <button className="bg-white text-xs px-3 py-1 rounded-full font-medium border hover:bg-black hover:text-white transition">
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default ProductDetail;
