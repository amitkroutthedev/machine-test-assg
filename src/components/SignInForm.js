import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
function SignInForm() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = () => {
    if (userName === "" && password === "") alert("please fill up details");
    else {
      console.log(userName + " " + password);
      navigate("/home");
    }
  };
  return (
    <div className="w-1/2 max-md:w-full flex flex-col items-center justify-center">
      <div className="flex flex-col w-1/2 max-md:w-11/12">
        <p className="text-5xl font-bold py-2 max-md:text-center">SignIn</p>
        <p className="p-2 max-md:text-center">
          <span className="font-bold pr-4">New user</span>
          <a className="text-blue-600" href="/">
            Create an account
          </a>
        </p>

        <input
          type="text"
          placeholder="Username or email"
          className="border-2 border-gray-900 p-2 my-4"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-900 p-2 my-2"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <div className="inline-flex flex-row my-2">
          <input type="radio" id="signed_in" name="signed_in" value="yes" />
          <label htmlFor="yes">Keep me signed in</label>
        </div>

        <button
          className="bg-slate-900 text-white py-2"
          onClick={submitHandler}
        >
          Sign In
        </button>
      </div>
      <div className="w-1/2 max-md:w-11/12">
        <div className="w-full inline-flex justify-center items-center">
          <hr className="w-full h-1" />
          <p className="w-full text-sm mx-2">Or Sign In With</p>
          <hr className="w-full h-1 " />
        </div>
        <div className="inline-flex flex-row w-full h-10 justify-evenly">
          <div className="p-2 rounded-full border-2 border-slate-900 inline-flex justify-center items-center">
            <FaGoogle size={15} />
          </div>
          <div className="p-2 rounded-full border-2 border-slate-900 inline-flex justify-center items-center">
            <FiFacebook size={15} />
          </div>
          <div className="p-2 rounded-full border-2 border-slate-900 inline-flex justify-center items-center">
            <FiLinkedin size={15} />
          </div>
          <div className="p-2 rounded-full border-2 border-slate-900 inline-flex justify-center items-center">
            <FiTwitter size={15} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
