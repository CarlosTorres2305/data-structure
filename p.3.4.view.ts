import {lerArquivo} from './p.3.4.model'
import { StringSearch } from './string_search';
import * as readlineSync from 'readline-sync';

const nomeArquivo = 'entrada.txt';
const conteudo: string = lerArquivo(nomeArquivo);
//console.log(conteudo);

let palavras = conteudo.split(/\s+/);
const delimitador = ',';

const resultado = palavras.join(delimitador);
console.log(`String coletada: ${resultado}`);
//Resultado com delimitador


let str_search = new StringSearch();
let userInput:string =(readlineSync.question("Digite uma palavra: "));



const deslocamentos = str_search.boyer_moore(userInput,resultado)
const ocorrencias = deslocamentos.length;

const totalDeslocamentos = deslocamentos.reduce((acc, val) => acc + val, 0);


console.log(`String coletada: ${resultado}`);
console.log(`Palavra ${userInput} localizada no(s) indice(s) : ${deslocamentos}`);
console.log(`Vezes que a palavra foi encontrada ${ocorrencias}`);
console.log(`Total de deslocamentos utilizados ${totalDeslocamentos}`);



