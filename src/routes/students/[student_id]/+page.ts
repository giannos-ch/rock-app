import { db } from "$lib/firebase";
import Student from "$lib/models/student.js";
import { collection, doc, getDoc } from "firebase/firestore";

export const load = async ({ params }) => {
  const document = await getDoc(
    doc(collection(db, "students"), params.student_id)
  );
  return {
    student: new Student(
      document.id,
      document.data()?.name,
      document.data()?.telephone
    ),
  };
};
