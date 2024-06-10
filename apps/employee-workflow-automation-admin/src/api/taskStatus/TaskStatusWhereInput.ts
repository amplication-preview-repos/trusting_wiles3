import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TaskStatusWhereInput = {
  id?: StringFilter;
  statusName?: StringNullableFilter;
};
