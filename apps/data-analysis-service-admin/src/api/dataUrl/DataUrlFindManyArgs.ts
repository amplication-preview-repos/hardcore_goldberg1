import { DataUrlWhereInput } from "./DataUrlWhereInput";
import { DataUrlOrderByInput } from "./DataUrlOrderByInput";

export type DataUrlFindManyArgs = {
  where?: DataUrlWhereInput;
  orderBy?: Array<DataUrlOrderByInput>;
  skip?: number;
  take?: number;
};
