import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSignupMutation } from "../../app/api";
import {
  setLoginEmailValues,
  setLoginUserNameValues,
} from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const userInfo = useSelector((state) => state.auth);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [onSignup] = useSignupMutation();
  const handleSubmit = async () => {
    setLoading(true);
    const postData = {
      username: userName,
      confirmPassword: confirmPassword,
      emailAddress: emailAddress,
      password: password,
    };
    try {
      const res = await onSignup(postData);
      if (res) {
        dispatch(
          setLoginEmailValues({
            email: res?.data.data.newUser.emailAddress,
          })
        );
        dispatch(
          setLoginUserNameValues({
            username: res?.data.data.newUser.username,
          })
        );
        navigate("/login");
        setLoading(false);
        toast.success(res.status ?? "you have successfully created an account");
      }
    } catch (err) {
      toast.error("there was an error: ", err);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/30 flex items-center">
          <p className="text-white text-center">
            wait while we create an account for you...
          </p>
        </div>
      )}
      <div className="flex w-full flex-col gap-8 ">
        <label htmlFor="text">
          <input
            className="pl-4 w-full rounded-3xl focus:outline-none focus:border-none py-2 px-4 text-[#5C5C5C]"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="NAME"
          />
        </label>
        <label htmlFor="emaissl">
          <input
            className="pl-4 w-full rounded-3xl focus:outline-none focus:border-none py-2 px-4 text-[#5C5C5C] "
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            type="email"
            placeholder="EMAIL"
          />
        </label>
        <label htmlFor="">
          <input
            className="pl-4 w-full focus:outline-none focus:border-none rounded-3xl py-2 px-4 text-[#5C5C5C]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="PASSWORD"
          />
        </label>
        <label htmlFor="password">
          <input
            className="pl-4 w-full focus:outline-none focus:border-none rounded-3xl py-2 px-4 text-[#5C5C5C]"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="CONFIRM PASSWORD"
          />
        </label>
        <div className="w-full focus:outline-none focus:border-none flex justify-center  ">
          <button
            className=" bg-red-500 rounded-2xl px-4 py-1 "
            onClick={handleSubmit}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
