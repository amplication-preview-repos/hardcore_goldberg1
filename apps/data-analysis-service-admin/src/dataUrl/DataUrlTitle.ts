import { DataUrl as TDataUrl } from "../api/dataUrl/DataUrl";

export const DATAURL_TITLE_FIELD = "url";

export const DataUrlTitle = (record: TDataUrl): string => {
  return record.url?.toString() || String(record.id);
};
