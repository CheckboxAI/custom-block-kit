export type Category = {
  label: string;
  description: string;
};

export type SelectedCategory = {
  category: string;
  confidence: number;
  reason: string;
};
