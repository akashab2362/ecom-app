import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { register, clearError } from "../store/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "../Layout/Loader.js";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/user.png");
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, error, alert, navigate, isAuthenticated]);
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };
  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 bg-white m-5 rounded-2xl">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                  <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                    Sign up
                  </h2>
                  <p className="mt-2 text-base text-gray-600">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      title=""
                      className="font-medium text-black transition-all duration-200 hover:underline"
                    >
                      Sign In
                    </Link>
                  </p>
                  <form
                    action="#"
                    method="POST"
                    className="mt-8"
                    encType="multipart/form-data"
                    onSubmit={registerSubmit}
                  >
                    <div className="space-y-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Full Name{" "}
                        </label>
                        <div className="mt-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            required
                            value={name}
                            name="name"
                            onChange={registerDataChange}
                            placeholder="Full Name"
                            id="name"
                          ></input>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Email address{" "}
                        </label>
                        <div className="mt-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="email"
                            required
                            name="email"
                            value={email}
                            onChange={registerDataChange}
                            placeholder="Email"
                            id="email"
                          ></input>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="password"
                            className="text-base font-medium text-gray-900"
                          >
                            {" "}
                            Password{" "}
                          </label>
                        </div>
                        <div className="mt-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="password"
                            value={password}
                            onChange={registerDataChange}
                            placeholder="Password"
                            name="password"
                            id="password"
                          ></input>
                        </div>
                      </div>
                      {/* Image Upload */}
                      <div id="registerImage" className="flex ">
                        <img
                          src={avatarPreview}
                          className="w-7 mr-3"
                          alt="Avatar Preview"
                        />
                        <input
                          type="file"
                          name="avatar"
                          accept="iamge/*"
                          onChange={registerDataChange}
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                        >
                          Create Account{" "}
                          <ArrowRight className="ml-2" size={16} />
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* <div className="mt-3 space-y-3">
                    <button
                      type="button"
                      className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                    >
                      <span className="mr-2 inline-block">
                        <svg
                          className="h-6 w-6 text-rose-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                        </svg>
                      </span>
                      Sign up with Google
                    </button>
                    <button
                      type="button"
                      className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                    >
                      <span className="mr-2 inline-block">
                        <svg
                          className="h-6 w-6 text-[#2563EB]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                        </svg>
                      </span>
                      Sign up with Facebook
                    </button>
                  </div> */}
                </div>
              </div>
              <div className="h-full w-full">
                <img
                  className="mx-auto h-full w-full rounded-md object-cover"
                  src="https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=612x612&w=0&k=20&c=wJ6yYbRrDfdmoViuQkX39s2z_0lCiNQYgEtLU--0EbY="
                  alt=""
                />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
