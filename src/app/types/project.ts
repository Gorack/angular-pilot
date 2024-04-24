import {Link} from "./link";
import {Member} from "./member";

export interface Project {
  id?: number;
  name: string;
  members: Member[];
  links: Link[];
  description?: string;
}
