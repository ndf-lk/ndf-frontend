interface ENV {
  BACKEND_API: string;
  APP_DOMAIN?: string;
  APP_NAME?: string;
}

const ENVIRONMENT: ENV = {
  BACKEND_API: import.meta.env.VITE_BACKEND_API,
};
export default ENVIRONMENT;
