import { db } from "$lib/firebase";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Student from "$lib/models/student.js";

export default class Klass {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  to_json(): object {
    return {
      name: this.name,
    };
  }

  async students(): Promise<Student[]> {
    const classes_students = await getDocs(
      query(
        collection(db, "classes_students"),
        where("class_id", "==", this.id)
      )
    );
    const student_ids = classes_students.docs.map(
      (doc: any) => doc.data().student_id
    );
    const students = await getDocs(
      query(collection(db, "students"), where(documentId(), "in", student_ids))
    );
    return students.docs
      .map(
        (doc: any) => new Student(doc.id, doc.data().name, doc.data().telephone)
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }
}
