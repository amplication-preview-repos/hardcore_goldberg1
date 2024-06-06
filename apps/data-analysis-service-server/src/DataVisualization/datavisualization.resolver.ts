import * as graphql from "@nestjs/graphql";
import { VisualizationResult } from "../dataVisualization/VisualizationResult";
import { DataVisualizationService } from "./datavisualization.service";

export class DataVisualizationResolver {
  constructor(protected readonly service: DataVisualizationService) {}

  @graphql.Query(() => VisualizationResult)
  async VisualizeData(
    @graphql.Args()
    args: string
  ): Promise<VisualizationResult> {
    return this.service.VisualizeData(args);
  }
}
