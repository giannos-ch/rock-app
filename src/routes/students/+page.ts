import { db } from "$lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Student from "$lib/models/student.js";

export const load = async () => {
  const students = await getDocs(collection(db, "students"));
  return {
    students: students.docs
      .map((doc) => {
        return new Student(doc.id, doc.data().name, doc.data().telephone);
      })
      .sort((a, b) => a.name.localeCompare(b.name)),
  };
};
