import { db } from "$lib/firebase";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Klass from "$lib/models/klass";

export default class Student {
  id: string;
  name: string;
  telephone: string;

  constructor(id: string, name: string, telephone: string) {
    this.id = id;
    this.name = name;
    this.telephone = telephone;
  }

  to_json(): object {
    return {
      name: this.name,
      telephone: this.telephone,
    };
  }

  async classes() {
    const classes_students = await getDocs(
      query(
        collection(db, "classes_students"),
        where("student_id", "==", this.id)
      )
    );
    const class_ids = classes_students.docs.map(
      (doc: any) => doc.data().class_id
    );
    const classes = await getDocs(
      query(collection(db, "classes"), where(documentId(), "in", class_ids))
    );
    return classes.docs
      .map((doc: any) => new Klass(doc.id, doc.data().name))
      .sort((a, b) => a.name.localeCompare(b.name));
  }
}
