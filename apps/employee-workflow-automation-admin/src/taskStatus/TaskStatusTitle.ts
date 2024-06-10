import { TaskStatus as TTaskStatus } from "../api/taskStatus/TaskStatus";

export const TASKSTATUS_TITLE_FIELD = "statusName";

export const TaskStatusTitle = (record: TTaskStatus): string => {
  return record.statusName?.toString() || String(record.id);
};
