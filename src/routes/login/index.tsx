import { component$ } from "@builder.io/qwik";
import { Form, routeAction$ } from "@builder.io/qwik-city";
import type { UserType } from "~/types/clerk-backend";
import { userList } from "~/utils/endpoints";

type UserInfoType = {
  identifier: string;
};

// TODO: Convert To `useTask` hook in QWIK
export const useFetchMyInfo = routeAction$(async (props, event) => {
  const { identifier } = props as UserInfoType;
  const emailRegEx = RegExp(
    // eslint-disable-next-line no-control-regex
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  );

  if (emailRegEx.test(identifier)) {
    const finalUserList = `${userList}limit=10&offset=0&order_by=-created_at&email_address=${encodeURI(identifier)}`;
    const response = await fetch(finalUserList, {
      headers: {
        Authorization: `Bearer ${event.env.get("CLERK_SECRET_KEY")}`,
        Accept: "application/json",
      },
      method: "GET",
    });

    return (await response.json()) as UserType[];
  }

  return "Username is not yet supported.";
});

export default component$(() => {
  const formAction = useFetchMyInfo();

  console.log({ fetched: formAction.value });

  return (
    <Form action={formAction}>
      <input
        name="identifier"
        placeholder="Input username or email address..."
      />
      <button type="submit">Submit</button>
    </Form>
  );
});
