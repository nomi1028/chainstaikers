"use client"
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Api } from "../../../utils/Api";
const Page = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
    emailValidate: false,
    passwordValidate: false,
  });
  const [open, setOpen] = useState(false);
  const handleEmail = (value) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(value)) {
      setUser((Prev) => ({ ...Prev, ["emailValidate"]: true }));
      return;
    } else {
      setUser((Prev) => ({ ...Prev, ["emailValidate"]: false }));
      return;
    }
  };
  const handlePassword = (value) => {
    const minLengthPattern = /.{8,}/;
    const numericPattern = /\d/;
    const specialCharPattern = /[@#$]/;
    if (minLengthPattern.test(value) && numericPattern.test(value) && specialCharPattern.test(value)) {
      setUser((Prev) => ({ ...Prev, ["passwordValidate"]: true }));
      return;
    } else {
      // setUser((Prev)=>({...Prev,["passwordValidate"]:false}))
      setUser((Prev) => ({ ...Prev, ["passwordValidate"]: true }));
      return;
    }
  };
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setUser((Prev) => ({ ...Prev, [name]: value }));
    if (name === "password") {
      handlePassword(value);
    } else if (name === "email") {
      handleEmail(value);
    }
  };
  const handlerSignIn = async (e) => {
    e.preventDefault();
    if (!user.email || !user.password) return toast.warning("Fill all fields");
    if (!user.passwordValidate) return toast.warning("Add Valid Password");
    if (!user.emailValidate) return toast.warning("Add Valid email");
    const payload = {
      email: user.email,
      password: user.password,
    };
    const response = await Api("post", "user/signin", payload);
    if (response) {
      console.log(response);
      localStorage.setItem("chain-auth-token", response?.data?.token);
      toast.success(response?.data?.message);
      // navigate("/dashboard")
    } else {
      toast.error("Failed");
    }
  };

  return (
    <section className="py-12 bg-gray-50 sm:pty-16 lg:py-20 h-screen mb-8">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8  ">
        <div className="flex  justify-center mb-6">
          <img className="flex items-center" src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg" alt="" />
        </div>
        <div className="relative max-w-md mx-auto lg:max-w-lg">
          <div className="absolute -inset-2">
            <div
              className="w-full h-full mx-auto rounded-3xl opacity-30 blur-lg filter"
              style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}
            ></div>
          </div>

          <div className="relative overflow-hidden bg-white shadow-xl rounded-xl">
            <div className="px-4 py-12 sm:px-8">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-900 font-pj">Sign in</h1>
              </div>

              <form className="mt-12 mb-6" onSubmit={handlerSignIn}>
                <div className="space-y-4">
                  <div>
                    <label for="" className="text-base font-medium text-gray-900 font-pj">
                      {" "}
                      Email{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id=""
                        placeholder="Email address"
                        onChange={handlerChange}
                        className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                      />
                      {!user.emailValidate && <p className="text-red-500 text-sm mt-1">{"Add valid Email"}</p>}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label for="" className="text-base font-medium text-gray-900 font-pj">
                        {" "}
                        Password{" "}
                      </label>

                      <a
                        title=""
                        className="text-base font-medium text-gray-500 rounded font-pj hover:text-gray-900 hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                      >
                        {" "}
                        Forgot Password?{" "}
                      </a>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        name="password"
                        id=""
                        onChange={handlerChange}
                        placeholder="Password (min. 8 character)"
                        className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                      />
                      {!user.passwordValidate && <p className="text-red-500 text-sm mt-1">{"Password must be at least 8 characters and include at least 1 numeric and 1 special character."}</p>}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-8 py-4 mt-8 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Page;
