<script lang="ts">
  import { AppShell } from "@skeletonlabs/skeleton";
  import Icon from "@iconify/svelte";
  import { authHandlers, authStore } from "../../store/store";
  import { doc, setDoc } from "firebase/firestore";
  import { db } from "$lib/firebase/firebase";
  import TodoItem from "../../components/TodoItem.svelte";

  let todoList: string[] = [];
  let currentTodo: string = "";

  authStore.subscribe((curr) => {
    todoList = curr.data.todos;
  });

  function addTodo() {
    todoList = [...todoList, currentTodo];
    currentTodo = "";
  }

  function editTodo(index: number) {
    currentTodo = todoList[index];
    todoList = todoList.filter((_, i) => i !== index);
  }

  function deleteTodo(index: number) {
    todoList = todoList.filter((_, i) => i !== index);
  }

  async function handleLogout() {
    await authHandlers.logout();
  }

  async function saveTodos() {
    try {
      if (!$authStore.user) {
        return;
      }
      const userRef = doc(db, "users", $authStore.user.uid);
      await setDoc(userRef, { todos: todoList }, { merge: true });
    } catch (error) {
      console.error(error);
    }
  }
</script>

{#if !$authStore.loading}
  <div class="flex h-screen w-screen">
    <AppShell>
      <svelte:fragment slot="header">
        <div class="flex w-screen">
          <h3 class="text-center py-8 pl-8 text-3xl">To Do List</h3>
          <div class="flex flex-1 justify-end py-8 pr-8">
            <button
              class="btn btn-sm py-2 variant-filled-secondary"
              on:click={saveTodos}
            >
              <Icon icon="mdi-content-save" />
              Save
            </button>
            <button
              class="btn btn-sm py-2 ml-5 variant-filled-secondary"
              on:click={handleLogout}
            >
              <Icon icon="mdi-logout" />
              Logout
            </button>
          </div>
        </div>
      </svelte:fragment>
      {#if !todoList.length}
        <span class="text-center py-8 pl-8 text-xl"
          >You have nothing to do!</span
        >
      {/if}
      {#each todoList as item, index}
        <TodoItem {item} {index} {deleteTodo} {editTodo} />
      {/each}
      <svelte:fragment slot="footer">
        <div class="flex p-3">
          <input
            class="input"
            type="text"
            placeholder="Enter To Do"
            bind:value={currentTodo}
          />
          <button
            class="btn btn-sm variant-filled-secondary"
            disabled={!currentTodo}
            on:click={addTodo}
          >
            <Icon icon="mdi:play-arrow" width="1.2em" height="1.2em" />
            Add
          </button>
        </div>
      </svelte:fragment>
    </AppShell>
  </div>
{/if}
