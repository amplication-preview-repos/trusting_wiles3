import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type ClientWhereInput = {
  currentStage?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  tasks?: TaskListRelationFilter;
};
