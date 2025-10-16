
import {hash, compare} from "bcryptjs";

const encryptPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    const Passwordhash = await hash(password, saltRounds);
    return Passwordhash;
  };
const verifyPassword = async (password: string, hash: string) => {
    const isMatch = await compare(password, hash);
    return isMatch;
}

export { encryptPassword, verifyPassword };