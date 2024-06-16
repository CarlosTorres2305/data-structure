import * as fs from 'fs';
import * as path from 'path';


// Função para ler o conteúdo de um arquivo de texto
function lerArquivo(nomeArquivo: string): string {
    try {
        // Define o caminho completo do arquivo
        const caminhoArquivo = path.join(__dirname, nomeArquivo);
        
        // Lê o conteúdo do arquivo de forma síncrona
        const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8');
        
        // Retorna o conteúdo do arquivo
        return conteudo;
    } catch (erro:any) {
        // Se ocorrer um erro, exibe a mensagem de erro e retorna null
        console.error(`Erro ao ler o arquivo ${nomeArquivo}: ${erro.message}`);
        return "não foi possível ler o arquivo";
    }
}


// Nome do arquivo que queremos ler


export {lerArquivo};
// Chama a função para ler o arquivo
//const conteudo:null|string = lerArquivo(nomeArquivo);

//console.log(conteudo);
