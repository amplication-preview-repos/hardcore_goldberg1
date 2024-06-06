import { SortOrder } from "../../util/SortOrder";

export type DataFileOrderByInput = {
  createdAt?: SortOrder;
  fileContent?: SortOrder;
  filename?: SortOrder;
  fileType?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
