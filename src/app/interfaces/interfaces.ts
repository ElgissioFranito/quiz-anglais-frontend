// user.interface.ts
export interface UserInterface {
    _id?: string; // Identifiant unique généré par MongoDB
    name: string;
    mail?: string;
    password?: string;
  }
  

// question.interface.ts
export interface QuestionInterface {
    _id?: string;
    questionText: string;
    options: string[]; // Tableau des options de réponse
    correctAnswer: string;
    level: 'easy' | 'normal' | 'difficult'; // Difficulté de la question
    categories: string; // Catégories (par exemple, "vocabulaire", "grammaire", etc.)
  }
  

// reponse.interface.ts
export interface ReponseInterface {
    _id?: string;
    userId: string; // ID de l'utilisateur (référence à un document utilisateur)
    questionId: string; // ID de la question (référence à un document question)
    response: string; // Réponse donnée par l'utilisateur
    isCorrecte: boolean; // Indicateur si la réponse est correcte
  }
  

// score.interface.ts
export interface ScoreInterface {
    _id?: string;
    userId: string; // ID de l'utilisateur (référence à un document utilisateur)
    quizId?: string; // ID du quiz (si vous avez plusieurs quiz)
    score: number;
  }
  