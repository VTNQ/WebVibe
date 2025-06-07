import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const { id } = useParams();
  const product = location.state?.product;

  const [showInfo, setShowInfo] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showDescription, setShowDescription] = useState(true);

  if (!product) {
    return <p>Không tìm thấy sản phẩm hoặc chưa truyền dữ liệu.</p>;
  }

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
          <h1 className="product-title">{product.name}</h1>
          <span className="price">{product.price}</span>

          <p className="short-description">{product.description}</p>

          <form className="purchase-form">
            <div className="form-group">
              <label htmlFor="size">SIZE</label>
              <select id="size" name="size">
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
                />
              </div>
              <button type="submit" className="add-to-cart-btn">
                ADD TO CART
              </button>
            </div>
          </form>

          <div className="meta">
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>SKU:</strong> 562181211599</p>
            <p><strong>Category:</strong> DRESSES</p>
            <p><strong>Tag:</strong> DRESS</p>
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
    </div>
  );
};

export default ProductDetail;
