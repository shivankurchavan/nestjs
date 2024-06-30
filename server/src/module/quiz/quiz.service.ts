import { Injectable } from "@nestjs/common";

@Injectable()
export class QuizService {
    getAllQuiz(): string {
        return 'This will return a quiz';
    }
}