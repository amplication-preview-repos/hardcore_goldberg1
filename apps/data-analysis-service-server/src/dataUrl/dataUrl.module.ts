import { Module } from "@nestjs/common";
import { DataUrlModuleBase } from "./base/dataUrl.module.base";
import { DataUrlService } from "./dataUrl.service";
import { DataUrlController } from "./dataUrl.controller";
import { DataUrlResolver } from "./dataUrl.resolver";

@Module({
  imports: [DataUrlModuleBase],
  controllers: [DataUrlController],
  providers: [DataUrlService, DataUrlResolver],
  exports: [DataUrlService],
})
export class DataUrlModule {}
