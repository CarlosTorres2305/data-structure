import * as readlineSync from 'readline-sync';
export function menu(): void {
    let op: boolean = true;
    while (op == true) {
        console.log('-----Menu-----');
        console.log('1 - Dúvidas');
        console.log('2 - Reclamações');
        console.log('3 - Sair');
        let userInput:number = parseInt(readlineSync.question("opcao: "));
        switch (userInput) {
            case 1: {
                console.log("Suas dúvidas devem ser encaminhadas para o email: duvidas@email.com");
                break;
            }
            case 2: {
                let recl = readlineSync.question("Escreva sua reclamacao: ");
                break;
            }
            case 3: {
                op = false;
                break;
            }
            default: {
                console.log('opção inválida');
            }
        }
    }

}

