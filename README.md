# Qwik City App ⚡️

- [Qwik Docs](https://qwik.dev/)
- [Vite](https://vitejs.dev/)

---

- Email `RegEx` retrieve [here.](https://emailregex.com/)

# Issues

        September 20, 2024

- Verifying Google accounts for Custom Clerk Integration user check.

---

        September 19, 2024

- Qwik doesn't support Clerk integration.

# Clerk Integration via Clerk API

        Base URL: https://api.clerk.com/v1

### Routes:

---

- **GET** /users

  Parameters:

        email_address
        phone_number
        external_id
        username
        web3_wallet
        user_id
        organization_id
        last_active_at_since:
        limit:
        offset:
        order_by:

Retrieve the user ID then proceed. vvvv

---

- **POST** /sign_in_tokens

```application/json
        {
        "user_id": "user_2l4FiBcZsMaZonCxoVjExFwu4Ck",
        "expires_in_seconds": 2592000
        }
```

Use the token in tRPC API Requests as Bearer token.

## Express Server

This app has a minimal [Express server](https://expressjs.com/) implementation. After running a full build, you can preview the build using the command:

```
pnpm serve
```

Then visit [http://localhost:8080/](http://localhost:8080/)
