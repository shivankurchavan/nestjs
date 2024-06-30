import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto{
    @IsNotEmpty({message : "title is required"})
    title : string;
    

    @IsNotEmpty()
    @Length(3)
    description : string;
}