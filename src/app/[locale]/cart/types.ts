// types.ts
export interface Upgrade {
    _id: string;
    title: {
      ar: string;
      en: string;
    };
    price: number;
    deliveryTime: string;
  }
  
  export interface CartItemType {
    id: string;
    name: string;
    price: number;
    image: string;
    seller: string;
    quantity: number;
    selectedUpgrades?: Upgrade[];
  }
  