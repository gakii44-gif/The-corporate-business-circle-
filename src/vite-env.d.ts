/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_REGISTRATION_FORM_ID?: string;
  readonly VITE_FORMSPREE_CONTACT_FORM_ID?: string;
  readonly APP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
