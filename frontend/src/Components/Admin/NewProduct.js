import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../store/productSlice.js";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../Layout/MetaData.js";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "./Sidebar";
import { newProductReset } from "../store/productSlice.js";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.product);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [sizes, setSizes] = useState([]);
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [productDetails, setProductDetails] = useState([]);
  const [productDetailsInput, setProductDetailsInput] = useState("");
  const [images, setImages] = useState([]);
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
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Product Created Successfully");
      navigate("/admin/dashboard");
      dispatch(newProductReset());
    }
  }, [dispatch, alert, error, navigate, success]);

  const createProductSubmitHandler = (e) => {
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
    productDetails.forEach((detail) => {
      myForm.append("productDetails", detail);
    });
    dispatch(createProduct(myForm));
  };

  // Function to handle changes in the product details input
  const handleProductDetailsInputChange = (e) => {
    setProductDetailsInput(e.target.value);
  };

  // Function to add product details to the productDetails state
  const addProductDetail = (e) => {
    e.preventDefault();
    setProductDetails([...productDetails, productDetailsInput]);
    setProductDetailsInput("");
  };

  // Function to remove a product detail from the productDetails state
  const removeProductDetail = (index) => {
    const updatedProductDetails = [...productDetails];
    updatedProductDetails.splice(index, 1);
    setProductDetails(updatedProductDetails);
  };

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

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

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
      <MetaData title="Create Product" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1 className="text-xl">Create Product</h1>

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
            <div>
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
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
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
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;
