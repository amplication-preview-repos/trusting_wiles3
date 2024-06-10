import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientStageWhereInput = {
  comments?: StringNullableFilter;
  id?: StringFilter;
  stageName?: StringNullableFilter;
};
