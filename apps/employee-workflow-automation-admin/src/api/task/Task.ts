import { Client } from "../client/Client";
import { Comment } from "../comment/Comment";
import { Priority } from "../priority/Priority";

export type Task = {
  assignedTo: string | null;
  client?: Client | null;
  comments?: Array<Comment>;
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  id: string;
  priority?: Priority | null;
  status: string | null;
  title: string | null;
  updatedAt: Date;
};
