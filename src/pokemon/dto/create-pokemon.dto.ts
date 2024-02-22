import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
    //isString, MinLenth,
  @IsString()
  @MinLength(1)
  name: string;

  //isInt, isPositive, min 1
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;
}
