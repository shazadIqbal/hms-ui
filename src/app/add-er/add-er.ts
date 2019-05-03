import { SelectItem } from "primeng/api";

export class AddEmergency {
  name: string;
  resources: string;
  facilities:SelectItem[];
  price: number;
  extraCharges: number;
  total: number;
}
