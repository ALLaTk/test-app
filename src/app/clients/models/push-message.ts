export type PushMessageModalWindow = {
  heading: string;
  user_id: string;
  date_start: string;
  push_message: string;
}

export type PushMessage = {
  user_id: string;
  date_start: string;
  push_message: string;
}

export type ResponsePushMessage = {
  users_count: number;
  message_id: number;
}
