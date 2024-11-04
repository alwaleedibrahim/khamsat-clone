export default interface IOrderListItem {
  _id: string;
  user_id: {
    first_name: {
      ar: string;
      en: string;
    };
    last_name: {
      ar: string;
      en: string;
    };
    profilePicture: string;
    _id: string;
  };
  items: [
    {
      service_id: {
        title: {
          ar: string;
          en: string;
        };
        _id: string;
        userId: {
          first_name: {
            ar: string;
            en: string;
          };
          last_name: {
            ar: string;
            en: string;
          };
          profilePicture: string;
          _id: string;
        };
      };
      quantity: number;
      upgrades: [];
      _id: string;
    }
  ];
  status: {
    ar: string;
    en: string;
  };
  order_number: number;
  createdAt: string;
  total: number;
}
