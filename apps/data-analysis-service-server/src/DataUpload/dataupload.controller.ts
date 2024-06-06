import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DataUploadService } from "./dataupload.service";
import { UploadFileInput } from "../dataUpload/UploadFileInput";

@swagger.ApiTags("dataUploads")
@common.Controller("dataUploads")
export class DataUploadController {
  constructor(protected readonly service: DataUploadService) {}

  @common.Get("/:id/submit-url")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubmitUrl(
    @common.Body()
    body: UploadFileInput
  ): Promise<string> {
        return this.service.SubmitUrl(body);
      }

  @common.Post("/submit-url-for-analysis")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubmitUrlForAnalysis(
    @common.Body()
    body: UploadFileInput
  ): Promise<string> {
        return this.service.SubmitUrlForAnalysis(body);
      }

  @common.Get("/:id/upload-file")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadFile(
    @common.Body()
    body: UploadFileInput
  ): Promise<string> {
        return this.service.UploadFile(body);
      }

  @common.Post("/upload-file-for-analysis")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadFileForAnalysis(
    @common.Body()
    body: UploadFileInput
  ): Promise<string> {
        return this.service.UploadFileForAnalysis(body);
      }
}
