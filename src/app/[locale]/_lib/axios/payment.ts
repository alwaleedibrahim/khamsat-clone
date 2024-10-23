import axiosInstance from "./axiosInstance";

export default async function createPaymentIntent(
  amount: number,
  token: string, 
  order: string
): Promise<{ clientSecret: string }> {
  try {
    const response = await axiosInstance.post(`payment/create-payment-intent`, {
      amount, order},
      {headers: { authorization: token },
    });
    if (response.data) {
      return { clientSecret: response.data.clientSecret };
    } else {
      throw new Error("Cannot create payment intent");
    }
  } catch (err) {
    return Promise.reject(err);
  }
}
