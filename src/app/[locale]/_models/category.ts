import ISubCategory from "./subcategory";

export default interface ICategory {
  name: {
    ar: string;
    en: string;
  };
  description?: {
    ar: string;
    en: string;
  };
  _id: string;
  subcategories?: ISubCategory[]
}
