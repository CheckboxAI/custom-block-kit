export type Category = {
  label: string;
  description: string;
};

export type SelectedCategory = {
  category: string;
  likelihood: number;
  reason: string;
};
