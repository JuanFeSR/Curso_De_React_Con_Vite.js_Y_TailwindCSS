import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../Config/index";

const createUser = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "users"), data);

    return docRef;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

const getUser = async (uid) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data();
      return userData;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error getting user: ", error);
    throw error;
  }
};

export default { createUser, getUser };
