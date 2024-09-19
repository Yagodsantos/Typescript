 class PilhaDeLivros {
    private livros: string[] = []

    addLivro (livro: string): void {
        this.livros.push(livro)
        console.log(`${livro} foi adicionado ao topo da piha!`)
    }

    retirarLivros(): string | undefined {
        const livro = this.livros.pop()
        if (livro) {
            console.log(`${livro} foi removido do topo da pilha`)
        } else {
            console.log(`A pilha está vazia.`)
        }
        return livro
    }

    isEmpty(): boolean {
        return this.livros.length === 0
    }

    size(): number {
        return this.livros.length
    }
}

const pilhaDeLivros = new PilhaDeLivros()
pilhaDeLivros.addLivro('O tumulo')
pilhaDeLivros.addLivro('Livro 2')
pilhaDeLivros.addLivro('Livro 3')

pilhaDeLivros.retirarLivros()
pilhaDeLivros.retirarLivros()

console.log(`A pilha de livros está vazia? ${pilhaDeLivros.isEmpty()}`)

console.log(`Tamanho da pilha: ${pilhaDeLivros.size()}`);


