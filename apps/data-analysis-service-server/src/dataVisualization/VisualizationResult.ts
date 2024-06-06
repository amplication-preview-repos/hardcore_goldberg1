import { ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("VisualizationResultObject")
class VisualizationResult {
    @Field(() => GraphQLJSON)
    chartData!: InputJsonValue;
}

export { VisualizationResult as VisualizationResult };