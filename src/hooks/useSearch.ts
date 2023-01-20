import { useState } from "react";

export interface IModalOptions {
  openModal: (str: string) => void;
  closeModal: () => void;
  isOpen: (str: string) => boolean;
}

const useSearch = (arr: any[], fields: string[]) => {
  const [search, setSearch] = useState<string>("");

  return {
    handleChange: (key: string) => setSearch(key),
    value: search,
    result: search.length > 2 ? arr.filter((item) => {
      return fields.some((key) =>  item[key] === search)
    }) : arr
  }
};

export default useSearch;
