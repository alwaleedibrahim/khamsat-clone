export default interface ISubCategory {
  title: {
    ar: string;
    en: string;
  };
  _id: string;
  subcategories: ISubCategory[];
}
