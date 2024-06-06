import { DataFile as TDataFile } from "../api/dataFile/DataFile";

export const DATAFILE_TITLE_FIELD = "filename";

export const DataFileTitle = (record: TDataFile): string => {
  return record.filename?.toString() || String(record.id);
};
