import { SortOrder } from "../../util/SortOrder";

export type PriorityOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  priorityLevel?: SortOrder;
  updatedAt?: SortOrder;
};
