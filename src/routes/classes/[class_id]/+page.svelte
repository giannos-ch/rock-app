<script lang="ts">
  import type { PageProps } from "./$types";

  import { collection, doc, deleteDoc } from "firebase/firestore";
  import { db } from "$lib/firebase";
  import List from "../../../components/List.svelte";
  import Collapsible from "../../../components/Collapsible.svelte";

  let { data }: PageProps = $props();

  function deleteKlass() {
    if (window.confirm("Are you sure?")) {
      const docRef = doc(collection(db, "classes"), data.klass?.id);
      deleteDoc(docRef).then(() => {
        window.location.href = "/classes";
      });
    }
  }
</script>

<div class="container">
  <h1>{data.klass?.name}</h1>
  <div class="actions">
    <a class="button back" href="/classes">Back</a>
    <a class="button edit" href="/classes/{data.klass?.id}/edit">Edit</a>
    <a class="button delete" href={null} onclick={deleteKlass}>Delete</a>
  </div>
  <Collapsible header_text="Μαθητές">
    <List objects={data.students} url="/students/" has_new={false} />
  </Collapsible>
  <Collapsible header_text="Μαθήματα">
    <List objects={[]} url="/subjects/" />
  </Collapsible>
</div>

<style>
  .actions {
    margin-bottom: 1em;
  }
</style>
