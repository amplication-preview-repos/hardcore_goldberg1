import { Injectable } from "@nestjs/common";
import { SubmitUrlInput } from "../dataUpload/SubmitUrlInput";
import { UploadFileInput } from "../dataUpload/UploadFileInput";

@Injectable()
export class DataUploadService {
  constructor() {}
  async SubmitUrl(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SubmitUrlForAnalysis(args: SubmitUrlInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async UploadFile(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UploadFileForAnalysis(args: UploadFileInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
