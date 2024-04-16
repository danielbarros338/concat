export interface GPTRequest {
  messages: Array<GPTObjectArrRequest>;
  model: string;
  frequency_penalty: number;
  max_tokens: number | null;
  n: number | null;
  presence_penalty: number | null;
  response_format: GPTResponseFormat;
}

export interface GPTObjectArrRequest {
  role: string;
  content: string;
}

export interface GPTResponseFormat {
  type: string;
}
