import { Module } from "@nestjs/common";
import { DataVisualizationService } from "./datavisualization.service";
import { DataVisualizationController } from "./datavisualization.controller";
import { DataVisualizationResolver } from "./datavisualization.resolver";

@Module({
  controllers: [DataVisualizationController],
  providers: [DataVisualizationService, DataVisualizationResolver],
  exports: [DataVisualizationService],
})
export class DataVisualizationModule {}
