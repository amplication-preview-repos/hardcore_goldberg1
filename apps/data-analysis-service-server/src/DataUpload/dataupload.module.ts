import { Module } from "@nestjs/common";
import { DataUploadService } from "./dataupload.service";
import { DataUploadController } from "./dataupload.controller";
import { DataUploadResolver } from "./dataupload.resolver";

@Module({
  controllers: [DataUploadController],
  providers: [DataUploadService, DataUploadResolver],
  exports: [DataUploadService],
})
export class DataUploadModule {}
