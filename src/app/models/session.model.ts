import {User} from "./user.model";

export class Session {
  public token: string;
  public id: string;
  public username: string;
  public userId : string;
  public user: User;
}
