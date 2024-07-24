export function getFoto(descricao: string): string {
  const descricaoLowerCase = descricao.toLowerCase();
  const descricaoMap: { [key: string]: string } = {
    painel: '/painel-solar.jpg',
    inversor: '/inversor-solar.jpg',
    cabo: '/cabo-solar.jpg',
    estrutura: '/estrutura-solar.jpg',
    string: '/string-box-solar.jpg',
    transformador: '/transformador-solar.jpg',
    fuse: '/fusivel-solar.jpg',
  };

  for (const key in descricaoMap) {
    if (descricaoLowerCase.includes(key)) {
      return descricaoMap[key];
    }
  }

  return '/nope-img.jpg';
}

export function formataValorEmRealBrasileiro(valor: any) {
  return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

// CARRINHO DE COMPRAS
export const CARRINHO = 'carrinho_compras';

export function adicionarProdutoAoCarrinho(productId: number): void {
  const currentCart = getCarrinho();
  if (!currentCart.includes(productId)) {
    currentCart.push(productId);
    localStorage.setItem(CARRINHO, JSON.stringify(currentCart));
  }
}

export function removerProdutoDoCarrinho(productId: number): void {
  const currentCart = getCarrinho();
  const newCart = currentCart.filter(id => id !== productId);
  localStorage.setItem(CARRINHO, JSON.stringify(newCart));
}

export function getCarrinho(): number[] {
  const cart = localStorage.getItem(CARRINHO);
  return cart ? JSON.parse(cart) : [];
}