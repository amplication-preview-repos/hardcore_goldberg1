import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataUrlService } from "./dataUrl.service";
import { DataUrlControllerBase } from "./base/dataUrl.controller.base";

@swagger.ApiTags("dataUrls")
@common.Controller("dataUrls")
export class DataUrlController extends DataUrlControllerBase {
  constructor(protected readonly service: DataUrlService) {
    super(service);
  }
}
