import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DataUrlWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  url?: StringNullableFilter;
};
