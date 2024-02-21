<script lang="ts">
  import { authHandlers } from "../store/store";

  let formData: LoginForm = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  let { email, password, confirmPassword } = formData;
  let errorMessage: string = "";
  let isRegister: boolean = false;

  async function handleAuthenticate() {
    if (isRegister && password !== confirmPassword) {
      errorMessage = "Passwords do not match";
      return;
    }
    try {
      if (!isRegister) {
        await authHandlers.login(email, password);
      } else {
        await authHandlers.signup(email, password);
      }
    } catch (error: any) {
      console.error("There was an error", error);
      errorMessage = error.message;
    }
  }
</script>

<div class="flex justify-center items-center flex-1 min-h-screen flex-col">
  <form class="flex-col items-center justify-center">
    <h3 class="text-center py-6">{isRegister ? "Register" : "Login "}</h3>
    {#if errorMessage}
      <p class=" text-red-500 justify-center flex">
        {errorMessage}
      </p>
    {/if}
    <label class="py-4">
      <span>Email</span>
      <input
        class="input"
        type="email"
        placeholder="Email"
        bind:value={email}
      />
    </label>
    <label class="py-4">
      <span>Password</span>
      <input
        class="input"
        type="password"
        placeholder="Password"
        bind:value={password}
      />
    </label>
    {#if isRegister}
      <label class="py-4">
        <span>Confirm Password</span>
        <input
          class="input"
          type="password"
          placeholder="Confirm Password"
          bind:value={confirmPassword}
        />
      </label>
    {/if}
    <button
      class="btn btn-sm variant-filled-secondary w-full"
      on:click={handleAuthenticate}
      disabled={!email || !password || (isRegister && !confirmPassword)}
    >
      {#if isRegister}
        Register
      {:else}
        Login
      {/if}
    </button>
  </form>
  <div class="w-full py-2 items-center justify-center flex flex-col">
    <p>Or</p>
    {#if isRegister}
      <div class="flex py-2 items-center justify-center">
        <p class="pr-2">Already have an account?</p>
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={() => (isRegister = false)}
        >
          Login
        </button>
      </div>
    {:else}
      <div class="flex py-2 items-center justify-center">
        <p class="pr-2">Don't have an account?</p>
        <button
          class="btn btn-sm variant-ghost-secondary"
          on:click={() => (isRegister = true)}
        >
          Register
        </button>
      </div>
    {/if}
  </div>
</div>
