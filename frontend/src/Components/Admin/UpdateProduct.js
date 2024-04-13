import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  updateProduct,
  fetchProductDetails,
} from "../store/productSlice.js";
import "./newProduct.css";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../Layout/MetaData.js";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "./Sidebar";
import { updateProductReset } from "../store/productSlice.js";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate;
  const { productId } = useParams;

  const { error, product } = useSelector((state) => state.product);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.product);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  // const [productDetails, setProductDetails] = useState([]);
  // const [productDetailsInput, setProductDetailsInput] = useState("");
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    "Blazers, Waistcoats and Suits",
    "Bottomwear",
    "Fabrics",
    "Innerwear and Swimwear",
    "Kurtas",
    "Raincoats",
    "Sleepwear",
    "Topwear",
    "Tracksuits",
    "Winter Wear",
    "Sweatshirt & Hoodies",
  ];
  const availableSizes = ["S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(fetchProductDetails(productId));
    } else {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setSizes(product.sizes);
      setCategory(product.category);
      setStock(product.stock);
      setOldImages(product.images);
      // setProductDetails(product.productDetails);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Product Updated Successfully");
      navigate("/admin/products");
      dispatch(updateProductReset());
    }
  }, [
    dispatch,
    alert,
    error,
    navigate,
    isUpdated,
    productId,
    product,
    updateError,
  ]);

  const updateProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("description", description);
    myForm.set("price", price);
    sizes.forEach((size, index) => {
      myForm.append(`sizes[${index}]`, size);
    });
    myForm.set("category", category);
    myForm.set("stock", stock);
    myForm.set("category", category);
    images.forEach((image) => {
      myForm.append("images", image);
    });
    // productDetails.forEach((detail) => {
    //   myForm.append("productDetails", detail);
    // });
    dispatch(updateProduct({productId, myForm}));
  };

  // Function to handle changes in the product details input
  // const handleProductDetailsInputChange = (e) => {
  //   setProductDetailsInput(e.target.value);
  // };

  // Function to add product details to the productDetails state
  // const addProductDetail = (e) => {
  //   e.preventDefault();
  //   setProductDetails([...productDetails, productDetailsInput]);
  //   setProductDetailsInput("");
  // };

  // Function to remove a product detail from the productDetails state
  // const removeProductDetail = (index) => {
  //   const updatedProductDetails = [...productDetails];
  //   updatedProductDetails.splice(index, 1);
  //   setProductDetails(updatedProductDetails);
  // };

  const handleSizeChange = (e) => {
    const selectedSize = e.target.value;
    if (sizes.includes(selectedSize)) {
      // If the size is already selected, remove it
      setSizes(sizes.filter((size) => size !== selectedSize));
    } else {
      // If the size is not selected, add it
      setSizes([...sizes, selectedSize]);
    }
  };

  const updateProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title="Update Product" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={updateProductSubmitHandler}
          >
            <h1>Update Product</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="number"
                id="price"
                placeholder="Price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <DescriptionIcon />
              <textarea
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select onChange={handleSizeChange} value={sizes} multiple>
                <option value="">Choose Size</option>
                {availableSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <StorageIcon />
              <input
                type="number"
                placeholder="Stock"
                required
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            {/* <div>
              <label htmlFor="productDetails">Product Details</label>
              <input
                type="text"
                value={productDetailsInput}
                onChange={handleProductDetailsInputChange}
              />
              <button onClick={(e) => addProductDetail(e)}>Add Detail</button>
              <ul>
                {productDetails.map((detail, index) => (
                  <li key={index}>
                    {detail}{" "}
                    <button onClick={() => removeProductDetail(index)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div> */}


            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={updateProductImagesChange}
                multiple
              />
            </div>

            <div id="createProductFormImage">
              {oldImages &&
                oldImages.map((image, index) => (
                  <img key={index} src={image} alt="Old Product Preview" />
                ))}
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Update
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateProduct;
