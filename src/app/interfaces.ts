interface ISubCategories {
  id: number;
  name: string;
  category: string;
}

export interface ICategories {
  id: number;
  name: string;
  category: string | null;
  icon: string | null;
  showSubCategories: boolean;
  subCategories: ISubCategories[] | null;
}
