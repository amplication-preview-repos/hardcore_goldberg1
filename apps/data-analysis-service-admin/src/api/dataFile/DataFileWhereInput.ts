import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DataFileWhereInput = {
  fileContent?: JsonFilter;
  filename?: StringNullableFilter;
  fileType?: "Option1";
  id?: StringFilter;
};
