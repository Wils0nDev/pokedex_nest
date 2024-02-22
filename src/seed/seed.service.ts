import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interface/poke-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpAdapter } from 'src/common/adapters/http.adapter';


@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly httpAdapter : HttpAdapter
  ){}
  
  private readonly axios : AxiosInstance = axios;

  async executeSeed() {
    await this.pokemonModel.deleteMany({})

    //const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');

    const data  = await this.httpAdapter.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
    
    
    const pokemonToInsert : {name:string, no:number}[] = []

    data.results.forEach( ({name,url})=>{
      const segments = url.split('/');
      const no = +segments[segments.length - 2]
      //await this.pokemonModel.create({name,no});
      //*Esto me va a permitir insertar registros de manera simultanea
      pokemonToInsert.push({name,no})
    })
      //* insertMany: hace una sola insercción multiple
      await this.pokemonModel.insertMany(pokemonToInsert)
      return 'Seed execute';

  }

}
