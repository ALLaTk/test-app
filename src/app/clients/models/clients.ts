export type ClientsResponse = {
  meta: {
    size: number,
    limit: number,
    offset: number,
  };
  passes: Clients[];
}

export type Clients = {
  order(order: any): unknown;
  B1: string;
  B2: null;
  B3: null;
  B4: null;
  B5: null;
  B6: null;
  H1: null;
  H2: null;
  H3: null;
  S1: null;
  S2: null;
  S3: null;
  backgroundColor: null;
  barcode: string;
  birthday: string;
  bonus: string;
  bonus_last: null;
  car_number: null;
  created_at: string;
  date_last: string;
  delivery_form: null
  discount: string;
  email: string;
  fio: string;
  first_name: string;
  gender: null;
  inactive_bonus: null;
  key1: null;
  key2: null;
  key3: null;
  key4: null;
  key5: null;
  key6: null;
  last_name: string;
  link: string;
  loyalty_level: string;
  o_s: string;
  pat_name: string;
  phone: string;
  referal: null;
  referal_id: null;
  sms_verify: boolean;
  summ: string;
  summ_all: string;
  summ_last: null;
  template: string;
  trg_action_type: null;
  trg_action_value: null;
  trg_date_type: null;
  trg_date_value: null;
  user_id: number;
  visits: string;
  visits_all: string;
  write_off_last: null;
}
