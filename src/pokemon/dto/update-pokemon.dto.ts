import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';


//* Heredamos todos las propiedades de CreatePokemonDto
//* PartialType : indica que para UpdatePokemonDto estas propiedades seran opcionales
export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
