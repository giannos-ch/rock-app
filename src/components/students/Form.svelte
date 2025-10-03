<script lang="ts">
  import "../form_style.css";
  import { collection, doc, setDoc } from "firebase/firestore";
  import { db } from "$lib/firebase";
  import Student from "$lib/models/student";

  export let student: Student = new Student("", "", "");
  const collectionRef = collection(db, "students");

  function save() {
    const docRef = student.id
      ? doc(collectionRef, student.id)
      : doc(collectionRef);
    setDoc(docRef, student.to_json()).then(() => {
      exit();
    });
  }
  function cancel() {
    exit();
  }
  function exit() {
    window.location.href = "/students/" + (student.id ? student.id : "");
  }
</script>

<form>
  <div class="form-group">
    <label for="name">Όνομα</label>
    <input id="name" type="text" bind:value={student.name} />
  </div>
  <div class="form-group">
    <label for="class">Κινητό</label>
    <input id="class" type="text" bind:value={student.telephone} />
  </div>
  <div class="actions">
    <button type="button" class="cancel" onclick={cancel}>Cancel</button>
    <button type="submit" class="save" onclick={save}>Save</button>
  </div>
</form>
