export {}; // This makes the file a module; 

export type Env = {
  TRIPLE_STORE: string;
  TOPIC: string;
};

declare global {
  interface Window {
    _env_: Env;
  }
}