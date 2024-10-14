export default interface IUserProfile {
  username: string;
  account_type?: string;
  email: string;
  isEmailVerified?: boolean;
  first_name?: {
    ar?: string;
    en?: string;
  };
  last_name?: {
    ar?: string;
    en?: string;
  };
  profilePicture?: string;
  country?: string;
  city?: string;
  gender?: string;
  birth_date?: string;
  phone_number?: string;
  bio?: string;
  financial_info?: {
    total_balance?: number;
    pending_balance?: number;
    withdrawable_earnings?: number;
  };
}
