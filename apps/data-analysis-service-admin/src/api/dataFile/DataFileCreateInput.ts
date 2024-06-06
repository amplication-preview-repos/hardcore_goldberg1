import { InputJsonValue } from "../../types";

export type DataFileCreateInput = {
  fileContent?: InputJsonValue;
  filename?: string | null;
  fileType?: "Option1" | null;
};
