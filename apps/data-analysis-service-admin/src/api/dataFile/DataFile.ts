import { JsonValue } from "type-fest";

export type DataFile = {
  createdAt: Date;
  fileContent: JsonValue;
  filename: string | null;
  fileType?: "Option1" | null;
  id: string;
  updatedAt: Date;
};
