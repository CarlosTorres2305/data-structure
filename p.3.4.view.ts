import {lerArquivo} from './p.3.4.model'
import { StringSearch } from './string_search';
import * as readlineSync from 'readline-sync';
import { boyerMooreEncapsulado } from './p.3.4.model';

const nomeArquivo = 'entrada.txt';
const conteudo: string = lerArquivo(nomeArquivo);
//console.log(conteudo);

let palavras = conteudo.split(/\s+/);
const delimitador = ';';

const resultado = palavras.join(delimitador);
console.log(`String coletada: ${resultado}`);
//Resultado com delimitador


let userInput:string =(readlineSync.question("Digite uma palavra: "));

const search = new StringSearch();
const desloc = boyerMooreEncapsulado(search, userInput, resultado);
const ocorrencias = desloc.ocorrencias.length;
const deslocamentos = desloc.ocorrencias;
const totalDeslocamentos = desloc.deslocamentos;



console.log(`String coletada: ${resultado}`);
console.log(`Palavra ${userInput} localizada no(s) indice(s) : ${deslocamentos}`);
console.log(`Vezes que a palavra foi encontrada ${ocorrencias}`);
console.log(`Total de deslocamentos utilizados ${totalDeslocamentos}`);



