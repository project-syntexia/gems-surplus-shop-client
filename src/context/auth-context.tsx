import {
  useContextProvider,
  createContextId,
  Signal,
  component$,
  useStore,
  Slot,
} from "@builder.io/qwik";

export const AuthContext = createContextId<Signal<string>>("docs.auth-context");

export default component$(() => {
  const auth = useStore({});
  useContextProvider(AuthContext, auth);

  return (
    <>
      <Slot />
    </>
  );
});
