export interface EventModel {
  id?: number;
  name: string;
  dateBegin: Date;
  dateEnd: Date;
  description?: string | null;
  address?: string | null;
}
