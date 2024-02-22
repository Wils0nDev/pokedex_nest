import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';
import { Model, isValidObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Response } from 'express';
import { PaginationDto } from 'src/common/dto/pagination-pokemon.dto';

@Injectable()
export class PokemonService {
  private pokemons: Pokemon[] = [];

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}
  public async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();

    try {
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll(paginationDto:PaginationDto) {
    const {offset = 0, limit = 10 } = paginationDto
    return await this.pokemonModel.find()
    .limit(limit)
    .skip(offset)

  }

  async findOne(term: string) {
    let pokemon: Pokemon;
    if (!isNaN(+term)) {
      pokemon = await this.pokemonModel.findOne({ no: term });
    }

    //MongoId
    if (isValidObjectId(term)) {
      pokemon = await this.pokemonModel.findById(term);
    }
    //name
    if (!pokemon) {
      pokemon = await this.pokemonModel.findOne({
        name: term.toLocaleLowerCase().trim(),
      });
    }

    if (!pokemon)
      throw new NotFoundException(
        `Pokemon con id,name o no  ${term} no se encontro`,
      );

    return pokemon;
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {
    const pokemon = await this.findOne(term);
    if (updatePokemonDto.name) {
      updatePokemonDto.name = updatePokemonDto.name.toLocaleLowerCase();
    }

    try {
      //* new: true , nos regreesa el nuevo objeto
      const updatePokemon = await pokemon.updateOne(updatePokemonDto, {
        new: true,
      });
      console.log(updatePokemon);

      return { ...pokemon.toJSON(), ...updatePokemonDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

 async remove(id: string) {

   // const pokemon = await this.findOne(id);
    const{ deletedCount } = await this.pokemonModel.deleteOne({_id: id}) 
    if(deletedCount === 0 ){
      throw new BadRequestException(`Pokemon con id "${id}" no encontrado `)
    }
     return
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `El Pokemon ya existe en BD ${JSON.stringify(error.keyValue)}`,
      );
    }
    throw new InternalServerErrorException(
      `No puede actualizar el pokemon - revise el log`,
    );
  }

  async fillPokemonsWithSeedData(createPokemonDto:CreatePokemonDto[]){
    try {
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (error) {
      this.handleExceptions(error);
    }
  }
}
