export default interface IOrder {
  user_id: string;
  amount: number;
  items: [
    {
      service_id: string;
      quantity: number;
      price: number;
      upgrades?: [{
        id: string,
        price: number
      }];
    }
  ];
}
