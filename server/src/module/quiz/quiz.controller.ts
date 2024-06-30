import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/CreatQuiz.dto';
import { pipe } from 'rxjs';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService){}

    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuiz();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createQuiz(@Body() quizData : CreateQuizDto){
        return {data : quizData};
    }
}
