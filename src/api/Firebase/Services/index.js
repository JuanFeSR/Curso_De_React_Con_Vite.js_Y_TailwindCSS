import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
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

const updateUser = async (uid, data) => {
  try {
    const usersRef = collection(db, "users");

    const q = query(usersRef, where("uid", "==", uid));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docId = querySnapshot.docs[0].id;

      await updateDoc(doc(db, "users", docId), data);

      console.log(`User with uid ${uid} updated successfully`);
    } else {
      console.log(`No user found with uid ${uid}`);
    }
  } catch (error) {
    console.error("Error updating user: ", error);
  }
};

const createOrders = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), data);
    const newOrder = await getDoc(docRef);
    return {
      id: docRef.id,
      ...newOrder.data(),
    };
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export default { createUser, getUser, updateUser, createOrders };
