export interface Main {
  title: string;
  body: string;
  about_us_btn: string;
}

export interface Seconary {
  title: string;
  body: string;
}

export interface Welcome {
  title: string;
  body: string;
}

export interface ContactUs {
  title: string;
  description: string;
}

export interface SendMessageForm {
  message: string;
  body: string[];
  submit_form_success: string;
  submit_form_success_description: string;
  submit_another_response: string;
  send_message_btn: string;
}

export interface MembershipForm {
  submission_success: string;
  description: string;
}

export interface NewsPage {
  title: string;
  trending: string;
}

export interface Point {
  key: number;
  point: string;
  desecription: string;
}

export interface Promises {
  title: string;
  body_end: string;
  points: Point[];
}

export interface End {
  message: string;
  join_us_request: string;
  join_for_future: string;
}

export interface IHomeContent {
  lang: string;
  main: Main;
  seconary: Seconary;
  welcome: Welcome;
  contact_us: ContactUs;
  send_message_form: SendMessageForm;
  facebook_feed_description: string;
  membership_form: MembershipForm;
  news_page: NewsPage;
  promises: Promises;
  end: End;
  get_membership_btn: string;
}
