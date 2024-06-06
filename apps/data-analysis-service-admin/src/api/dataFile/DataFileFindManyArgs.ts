import { DataFileWhereInput } from "./DataFileWhereInput";
import { DataFileOrderByInput } from "./DataFileOrderByInput";

export type DataFileFindManyArgs = {
  where?: DataFileWhereInput;
  orderBy?: Array<DataFileOrderByInput>;
  skip?: number;
  take?: number;
};
