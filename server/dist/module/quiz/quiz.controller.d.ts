import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/CreatQuiz.dto';
export declare class QuizController {
    private quizService;
    constructor(quizService: QuizService);
    getAllQuiz(): string;
    createQuiz(quizData: CreateQuizDto): {
        data: CreateQuizDto;
    };
}
