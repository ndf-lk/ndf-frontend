interface ENV {
  BACKEND_API: string;
  APP_DOMAIN?: string;
  APP_NAME?: string;
}

const ENVIRONMENT: ENV = {
  //BACKEND_API: "https://api.ndf.lk/",
  BACKEND_API: "http://localhost:4000/",
};
export default ENVIRONMENT;
