import { IUser } from '../user';

interface IUserMsg {
  token: string;
  userName: string;
  userId: string;
  avatarUrl: string;
  createTime: string;
  updateTime: string;
  manage: number;
  auth: number;
}

interface IUserDetail extends IUser {
  subscriber: any;
  love: { songId: string }[];
  thumb: any;
  follow: { userId: string }[];
}

interface ILogin {
  userMsg: IUserMsg;
  userDetail: IUserDetail;
  loginType: number;
}

export type { ILogin, IUserDetail, IUserMsg };
