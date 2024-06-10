import { SortOrder } from "../../util/SortOrder";

export type ClientStageOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  stageName?: SortOrder;
  updatedAt?: SortOrder;
};
