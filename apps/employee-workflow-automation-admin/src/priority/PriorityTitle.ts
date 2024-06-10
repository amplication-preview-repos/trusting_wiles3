import { Priority as TPriority } from "../api/priority/Priority";

export const PRIORITY_TITLE_FIELD = "priorityLevel";

export const PriorityTitle = (record: TPriority): string => {
  return record.priorityLevel?.toString() || String(record.id);
};
