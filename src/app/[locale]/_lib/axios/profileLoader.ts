import IUserProfile from "../../_models/userProfile";
import axiosInstance from "./axiosInstance";

export default async function profileLoader(token: string): Promise<IUserProfile> {
  try {
    const response = await axiosInstance.get(`/users/profile`, {
      headers: { Authorization: token },
    });
    if (response.data) {
      return response.data.user;
    } else {
      throw new Error("Cannot get user profile");
    }
  } catch (err) {
    return Promise.reject(err);
  }
}
