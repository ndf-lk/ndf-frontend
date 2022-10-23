interface ENV {
  BACKEND_API: string;
  APP_DOMAIN?: string;
  APP_NAME?: string;
}

const ENVIRONMENT: ENV = {
  BACKEND_API: "http://localhost:3000",
};

export default ENVIRONMENT;
