import { db } from "$lib/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import Klass from "$lib/models/klass";

export const load = async ({ params }) => {
  const document = await getDoc(
    doc(collection(db, "classes"), params.class_id)
  );
  const klass = new Klass(document.id, document.data()?.name);
  return {
    klass: klass,
    students: await klass.students(),
  };
};
