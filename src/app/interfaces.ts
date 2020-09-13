export interface ICategories {
  name: string;
  icon: string;
  showSubCategories: boolean;
  subCategories: string[];
}

export interface IBooks {
  [books: string]: any;
}
