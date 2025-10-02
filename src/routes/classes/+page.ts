import { db } from "$lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Klass from "$lib/models/klass";

export const load = async () => {
  const classes = await getDocs(collection(db, "classes"));
  return {
    classes: classes.docs
      .map((doc) => {
        return new Klass(doc.id, doc.data().name);
      })
      .sort((a, b) => a.name.localeCompare(b.name)),
  };
};
