import axiosInstance from "./axiosInstance";
export interface IMessage {
  sender_id: string;
  receiver_id: string;
  order_id?: string;
  content: string;
}
interface IMessageListItem {
    "_id": string,
    "content": string,
    sender_id: {
        first_name: {
            "ar": string,
            "en": string
        },
        last_name: {
            "ar": string,
            "en": string
        },
        _id: "66febc9bd66445b2cf6466a1",
        profilePicture: "public/assets/1728503529598-653733283-avatar.png"
    },
    "receiver_id": string,
    "order_id": string,
    "createdAt": string,
}
export interface IMessageList {
    messages: IMessageListItem[]
}
export async function createMessage(message: IMessage, token: string): Promise<IMessage> {
  try {
    const response = await axiosInstance.post(
      `message`,
      message,
      { headers: { authorization: token } }
    );
    if (response.data) {
      return response.data.data;
    } else {
      throw new Error("Cannot send message");
    }
  } catch (err) {
    return Promise.reject(err);
  }
}

export async function getMessagesByOrder(orderId: string, token: string): Promise<IMessageList> {
  try {
    const response = await axiosInstance.get(
      `message/order/${orderId}`,
      { headers: { authorization: token } }
    );
    if (response.data) {
      return {messages: response.data.data};
    } else {
      throw new Error("Cannot get messages");
    }
  } catch (err) {
    return Promise.reject(err);
  }
}
