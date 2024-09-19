const baseUrl = import.meta.env.PUBLIC_BASE_API_URL;
const clerkBaseAPIUrl = "https://api.clerk.com/v1";

export const initialSettings = `${baseUrl}general.initialSettings`;
/**
 * Parameters:
 *
 * **limit:** _number_;
 *
 * **offset:** _number_;
 *
 * **order_by:** _'-created_at'_ | _string_;
 *
 * **email_address:** _string_; (optional).
 */
export const userList = `${clerkBaseAPIUrl}/users?`;
