type DocumentMetaType = {
  created_at: Date;
  updated_at: Date;
};

type VerificationErrorType = {
  message: string;
  long_message: string;
  code: string;
  meta: Record<string, any>;
  clerk_trace_id: string;
};

type VerificationType = {
  status: "unverified" | "verified";
  strategy: "phone_code" | "web3_metamask_signature" | "passkey";
  external_verification_redirect_url?: string;
  nonce?: string;
  error?: VerificationErrorType;
  attempts: number;
  expire_at: number;
};

type BaseExternalIdentifierType = {
  id: string;
  object: "phone_number" | "email_address" | "web3_wallet";
  reserved_for_second_factor: boolean;
  default_second_factor: boolean;
  reserved: boolean;
  verification: VerificationType;
  linked_to: [
    {
      type: "oauth_google";
      id: string;
    },
  ];
} & DocumentMetaType;

type PhoneNumberType = {
  backup_codes: string[];
  phone_number: string;
  object: "phone_number";
} & Omit<BaseExternalIdentifierType, "object">;

type EmailAddressType = {
  object: "email_address";
  email_address: string;
} & Omit<BaseExternalIdentifierType, "object">;

type Web3WalletType = {
  object: "web3_wallet";
  web3_wallet: string;
} & Omit<BaseExternalIdentifierType, "object">;

type PasskeyType = {
  object: "passkey";
  name: string;
} & Omit<BaseExternalIdentifierType, "object">;

export type UserType = {
  id: string;
  object: "user";
  external_id: string;
  primary_email_address_id: string;
  primary_phone_number_id: string;
  primary_web3_wallet_id: string;
  username: string;
  first_name: string;
  last_name: string;
  profile_image_url: string;
  image_url: string;
  has_image: boolean;
  public_metadata: Record<string, any>;
  private_metadata: Record<string, any>;
  unsafe_metadata: Record<string, any>;
  email_addresses: EmailAddressType[];
  phone_numbers: PhoneNumberType[];
  web3_wallets: Web3WalletType[];
  passkeys: PasskeyType[];
  password_enabled: boolean;
  two_factor_enabled: boolean;
  totp_enabled: boolean;
  backup_code_enabled: boolean;
  mfa_enabled_at: 0;
  mfa_disabled_at: 0;
  external_accounts: [Record<string, any>];
  saml_accounts: [
    {
      id: string;
      object: "saml_account";
      provider: string;
      active: boolean;
      email_address: string;
      first_name: string;
      last_name: string;
      provider_user_id: string;
      public_metadata: Record<string, any>;
      verification: VerificationType;
    },
  ];
  last_sign_in_at: number;
  banned: boolean;
  locked: boolean;
  lockout_expires_in_seconds: number;
  verification_attempts_remaining: number;
  updated_at: number;
  created_at: number;
  delete_self_enabled: boolean;
  create_organization_enabled: boolean;
  create_organizations_limit: number;
  last_active_at: number;
};
