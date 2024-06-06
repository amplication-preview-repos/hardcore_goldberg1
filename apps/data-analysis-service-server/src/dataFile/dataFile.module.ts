import { Module } from "@nestjs/common";
import { DataFileModuleBase } from "./base/dataFile.module.base";
import { DataFileService } from "./dataFile.service";
import { DataFileController } from "./dataFile.controller";
import { DataFileResolver } from "./dataFile.resolver";

@Module({
  imports: [DataFileModuleBase],
  controllers: [DataFileController],
  providers: [DataFileService, DataFileResolver],
  exports: [DataFileService],
})
export class DataFileModule {}
