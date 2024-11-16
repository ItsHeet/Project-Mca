import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProdToCart, getUserCart } from "../features/user/userSlice";
import { addToWishlist, addRating, getAProduct, getAllProducts } from "../features/products/productSlilce";
import { toast } from "react-toastify";
import Container from "../components/Container";
import watch from "../images/watch.jpg";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [star, setStar] = useState(null);
  const [comment, setComment] = useState(null);
  const [isFilled, setIsFilled] = useState(false);
  const [popularProduct, setPopularProduct] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProductId = location.pathname.split("/")[2];
  const productState = useSelector((state) => state?.product?.singleproduct);
  const productsState = useSelector((state) => state?.product?.product);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);

  useEffect(() => {
    if (getProductId) {
      dispatch(getAProduct(getProductId));
      dispatch(getUserCart());
      dispatch(getAllProducts());
    }
  }, [getProductId, dispatch]);

  useEffect(() => {
    if (cartState && getProductId) {
      const productInCart = cartState.find(item => item?.productId?._id === getProductId);
      if (productInCart) setAlreadyAdded(true);
    }
  }, [cartState, getProductId]);

  useEffect(() => {
    const popularProducts = productsState.filter(product => product.tags === "popular");
    setPopularProduct(popularProducts);
  }, [productsState]);

  const uploadCart = () => {
    if (!color) {
      toast.error("Please choose a color");
    } else {
      dispatch(addProdToCart({ productId: productState?._id, quantity, color, price: productState?.price }));
      navigate("/cart");
    }
  };

  const handleToggle = () => setIsFilled(!isFilled);

  const addRatingToProduct = () => {
    if (!star) {
      toast.error("Please add a star rating");
      return;
    } else if (!comment) {
      toast.error("Please write a review about the product");
      return;
    }
    dispatch(addRating({ star, comment, prodId: getProductId }));
    setTimeout(() => {
      dispatch(getAProduct(getProductId));
    }, 100);
  };

  const copyToClipboard = (text) => {
    const textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  if (!productState) return <p>Loading...</p>;

  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,
    img: productState?.images[0]?.url || "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };

  return (
    <>
      <Meta title={productState?.name || "Product Name"} />
      <BreadCrumb title={productState?.title} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <ReactImageZoom {...props} />
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              {productState?.images.map((item, index) => (
                <div key={index}>
                  <img src={item?.url} className="img-fluid" alt={`product-image-${index}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price"> Rs. {productState?.price}/-</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars count={5} size={24} value={productState?.totalrating} edit={false} activeColor="#ffd700" />
                  <p className="mb-0 t-review">({productState?.ratings?.length} Reviews)</p>
                </div>
                <a className="review-btn" href="#review">Write a Review</a>
              </div>

              <div className="py-3">
                {['Type', 'Brand', 'Category', 'Tags'].map((item, index) => (
                  <div className="d-flex gap-10 align-items-center my-2" key={index}>
                    <h3 className="product-heading">{item}:</h3>
                    <p className="product-data">{productState?.[item.toLowerCase()]}</p>
                  </div>
                ))}

                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">In Stock</p>
                </div>

                {!alreadyAdded && (
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color :</h3>
                    <Color setColor={setColor} colorData={productState?.color} />
                  </div>
                )}

                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  {!alreadyAdded && (
                    <div>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: "70px" }}
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                      />
                    </div>
                  )}
                  <div className={alreadyAdded ? "ms-0" : "ms-5 d-flex align-items-center gap-30"}>
                    <button
                      className="button border-0"
                      type="button"
                      onClick={() => alreadyAdded ? navigate("/cart") : uploadCart()}
                    >
                      {alreadyAdded ? "Go to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  {isFilled ? (
                    <AiFillHeart className="fs-5 me-2" onClick={handleToggle} />
                  ) : (
                    <AiOutlineHeart className="fs-5 me-2" onClick={handleToggle} />
                  )}
                </div>

                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br /> We ship all India domestic orders within <b>5-10 business days!</b>
                  </p>
                </div>

                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Product Link:</h3>
                  <a href="javascript:void(0);" onClick={() => copyToClipboard(window.location.href)}>
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p dangerouslySetInnerHTML={{ __html: productState?.description }} />
            </div>
          </div>
        </div>
      </Container>

      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-head d-flex justify-content-between align-items-end">
              <div>
                <h4 className="mb-2">Customer Reviews</h4>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={productState?.totalrating || 0}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">
                    ({productState?.ratings?.length || 0} Reviews)
                  </p>
                </div>
              </div>
              <div>
                <a href="#review-form" className="review-btn">Write a Review</a>
              </div>
            </div>

            {productState?.ratings?.map((item, index) => (
              <div key={index} className="review">
                <ReactStars
                  count={5}
                  size={24}
                  value={item?.rating || 0}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p>{item?.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container class1="related-products-wrapper py-5 home-wrapper-2">
        <div className="row">
          <h3>Related Products</h3>
          {popularProduct.map((prod, index) => (
            <ProductCard key={index} product={prod} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
