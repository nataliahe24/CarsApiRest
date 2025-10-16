import { type AuthInterface } from "./authInterface.js";

interface UserInterface extends AuthInterface {
  name: string;
  lastName: string;
}

export type { UserInterface };
