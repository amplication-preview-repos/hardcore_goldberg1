import * as graphql from "@nestjs/graphql";
import { SubmitUrlInput } from "../dataUpload/SubmitUrlInput";
import { UploadFileInput } from "../dataUpload/UploadFileInput";
import { DataUploadService } from "./dataupload.service";

export class DataUploadResolver {
  constructor(protected readonly service: DataUploadService) {}

  @graphql.Query(() => String)
  async SubmitUrl(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SubmitUrl(args);
  }

  @graphql.Mutation(() => String)
  async SubmitUrlForAnalysis(
    @graphql.Args()
    args: SubmitUrlInput
  ): Promise<string> {
    return this.service.SubmitUrlForAnalysis(args);
  }

  @graphql.Query(() => String)
  async UploadFile(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UploadFile(args);
  }

  @graphql.Mutation(() => String)
  async UploadFileForAnalysis(
    @graphql.Args()
    args: UploadFileInput
  ): Promise<string> {
    return this.service.UploadFileForAnalysis(args);
  }
}
