import { SortOrder } from "../../util/SortOrder";

export type TaskStatusOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  statusName?: SortOrder;
  updatedAt?: SortOrder;
};
