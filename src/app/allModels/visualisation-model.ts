export class VisualisationModel {
  deviceId: string;
  todayStatus: string;
  todayDuration: string;
  yesterdayDuration: string;
  DBYesterdayDuration: string;
}

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
export interface Food {
  value: string;
  viewValue: string;
}
