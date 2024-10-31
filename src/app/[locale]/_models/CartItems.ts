import { AdditionalService } from "../_lib/redux/slice/upgrades";

export interface CartItemType {
    id: string;
    name: string;
    price: number;
    image: string;
    seller: string;
    quantity: number;
    upgrades?: AdditionalService[]
  }