import { InputJsonValue } from "../../types";

export type DataFileUpdateInput = {
  fileContent?: InputJsonValue;
  filename?: string | null;
  fileType?: "Option1" | null;
};
