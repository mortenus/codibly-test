interface TSearchedItem {
  id?: number;
  name?: string;
  year?: number;
  color?: string;
  pantone_value?: string;
}

export interface TItems {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value?: string;
}

export type TSearchedItemsWrapper = TSearchedItem | TItems;
