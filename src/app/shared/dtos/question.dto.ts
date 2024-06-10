// create-question.dto.ts
export class CreateQuestionDto {
  questionText?: string;
  options?: string[];
  correctAnswer?: string;
  level?: 'easy' | 'normal' | 'difficult';
  categories?: string;
}

// update-question.dto.ts
export class UpdateQuestionDto {
  questionText?: string;
  options?: string[];
  correctAnswer?: string;
  level?: 'easy' | 'normal' | 'difficult';
  categories?: string;
}

// next-question.dto.ts
export class nextQuestionDto {
  level?: string;
  categories?: string;
}
