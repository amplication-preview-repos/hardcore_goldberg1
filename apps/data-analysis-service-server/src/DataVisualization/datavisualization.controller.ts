import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DataVisualizationService } from "./datavisualization.service";
import { VisualizationResult } from "../dataVisualization/VisualizationResult";

@swagger.ApiTags("dataVisualizations")
@common.Controller("dataVisualizations")
export class DataVisualizationController {
  constructor(protected readonly service: DataVisualizationService) {}

  @common.Get("/visualize-data")
  @swagger.ApiOkResponse({
    type: VisualizationResult
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async VisualizeData(
    @common.Body()
    body: string
  ): Promise<VisualizationResult> {
        return this.service.VisualizeData(body);
      }
}
