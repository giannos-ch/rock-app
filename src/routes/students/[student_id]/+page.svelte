<script lang="ts">
  import type { PageProps } from "./$types";

  import { collection, doc, deleteDoc } from "firebase/firestore";
  import { db } from "$lib/firebase";
  import { onMount } from "svelte";
  import List from "../../../components/List.svelte";

  let { data }: PageProps = $props();

  onMount(() => {
    if (!data.student.name) {
      window.location.href = "/students";
    }
  });

  function deleteStudent() {
    if (window.confirm("Are you sure?")) {
      const docRef = doc(collection(db, "students"), data.student.id);
      deleteDoc(docRef).then(() => {
        window.location.href = "/students";
      });
    }
  }
</script>

<div class="container">
  <h1>{data.student.name}</h1>
  <div class="actions">
    <a class="button back" href="/students">Back</a>
    <a class="button edit" href="/students/{data.student.id}/edit">Edit</a>
    <a class="button delete" href={null} onclick={deleteStudent}>Delete</a>
  </div>
  <h2>Τμήματα</h2>
  <List objects={data.classes} url="/classes/" has_new={false} />
</div>
