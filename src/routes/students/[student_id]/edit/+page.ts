import { db } from "$lib/firebase";
import Student from "$lib/models/student.js";
import Klass from "$lib/models/klass.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const load = async ({ params }) => {
  const document = await getDoc(
    doc(collection(db, "students"), params.student_id)
  );
  const allClasses = await getDocs(collection(db, "classes"));
  const classes_students = await getDocs(
    query(
      collection(db, "classes_students"),
      where("student_id", "==", params.student_id)
    )
  );

  return {
    student: new Student(
      document.id,
      document.data()?.name,
      document.data()?.telephone
    ),
    allClasses: allClasses.docs
      .map((doc) => {
        return new Klass(doc.id, doc.data().name);
      })
      .sort((a, b) => a.name.localeCompare(b.name)),
    selected_classes_ids: classes_students.docs.map(
      (doc) => doc.data().class_id
    ),
  };
};
