import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../app/api";
import { toast } from "react-hot-toast";
import { setUserValues } from "../../redux/authSlice"; // Import the setUserValues action
import { useNavigate } from "react-router-dom";
export const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [onLogin] = useLoginMutation();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const postData = {
        username: username,
        password: password,
      };
      const res = await onLogin(postData);
      if (res) {
        dispatch(
          setUserValues({
            token: res.data.token,
            email: res.data.email, // Assuming you have an email field in the response
            username: res.data.username, // Assuming you have a username field in the response
          })
        );
        navigate("/movies");
        toast.success(`${res.data.username} ${res.data.message}`);
      }
    } catch (err) {
      console.error("Error logging in:", err);
      toast.error("There was an error logging in.");
    } finally {
      setLoading(false);
    }
  };

  //   const userInfo = useSelector((state) => state.auth);

  return (
    <>
      {loading && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/30 flex items-center">
          <p className="text-white text-center">
            Please wait while we log you in...
          </p>
        </div>
      )}
      <div>
        <h1 className="text-center">Login</h1>
        <div>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
        </div>
        <div>
          Email Address:{" "}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <div>
          Password:{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};
