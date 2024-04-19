import { DocumentPage } from '@azure/ai-form-recognizer';

export interface ResponseDIContent {
  content: string;
  pages: DocumentPage[];
}
