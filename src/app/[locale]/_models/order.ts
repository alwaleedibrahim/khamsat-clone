import { ICartItems } from "../_lib/cart/parseCart";

export default interface IOrder {
  amount: number;
  items: ICartItems
}
