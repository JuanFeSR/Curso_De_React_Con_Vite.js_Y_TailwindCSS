import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../api/Firebase/Config";
import { useNavigate } from "react-router-dom";

const GoogleSignInButton = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        provider: user.providerData[0].providerId,
      });
      navigate("/");
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  return (
    <button
      type="button"
      className="w-2/3 m-4 rounded-xl p-2 text-white bg-black hover:bg-gray-800 active:bg-gray-600 focus:outline-none"
      onClick={signInWithGoogle}
    >
      Sign In With Google
    </button>
  );
};

export default GoogleSignInButton;
