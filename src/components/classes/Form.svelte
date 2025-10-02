<script lang="ts">
  import "../form_style.css";
  import { collection, doc, setDoc } from "firebase/firestore";
  import { db } from "$lib/firebase";
  import Klass from "$lib/models/klass";

  export let klass: Klass = new Klass("", "");
  const collectionRef = collection(db, "classes");

  function save() {
    const docRef = klass.id ? doc(collectionRef, klass.id) : doc(collectionRef);
    setDoc(docRef, klass.to_json()).then(() => {
      exit();
    });
  }
  function cancel() {
    exit();
  }
  function exit() {
    window.location.href = "/classes/" + (klass.id ? klass.id : "");
  }
</script>

<form>
  <div class="form-group">
    <label for="name">Όνομα</label>
    <input id="name" type="text" bind:value={klass.name} />
  </div>
  <div class="actions">
    <button type="button" class="cancel" onclick={cancel}>Cancel</button>
    <button type="submit" class="save" onclick={save}>Save</button>
  </div>
</form>
