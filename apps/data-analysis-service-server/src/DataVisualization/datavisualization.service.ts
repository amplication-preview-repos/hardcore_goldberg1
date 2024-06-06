import { Injectable } from "@nestjs/common";
import { VisualizationResult } from "../dataVisualization/VisualizationResult";

@Injectable()
export class DataVisualizationService {
  constructor() {}
  async VisualizeData(args: string): Promise<VisualizationResult> {
    throw new Error("Not implemented");
  }
}
