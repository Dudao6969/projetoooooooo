'use client' 
// Diz que esse componente roda no navegador (necessário no Next.js moderno)

import { Star } from 'lucide-react'
//  Importa o ícone de estrela (avaliação)

import { Game } from '@/types'
//  Importa o tipo "Game" (estrutura dos dados do jogo)


//  Define as propriedades que o componente recebe
interface GameCardProps {
  game: Game //  dados do jogo (imagem, preço, nome etc)
  onAddToCart: (game: Game) => void //  função para adicionar ao carrinho
}


//  Componente principal
export default function GameCard({ game, onAddToCart }: GameCardProps) {

  //  Calcula o preço final com desconto
  const finalPrice = game.price * (1 - (game.discount || 0) / 100)
  //  se não tiver desconto, usa 0 automaticamente

  return (

    //  CARD PRINCIPAL DO JOGO
    <div className="card-game overflow-hidden group">
      {/* card-game vem do seu CSS global */}

      {/*  IMAGEM DO JOGO */}
      <div className="relative h-48 overflow-hidden">
        
        <img
          src={game.image} // 🖼️ imagem do jogo
          alt={game.title} // 🔤 texto alternativo (acessibilidade)
          className="w-full h-full object-cover 
          group-hover:scale-110 transition-transform duration-300"
          //  efeito zoom ao passar o mouse
        />

        {/*  GRADIENTE ESCURO EM CIMA DA IMAGEM */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>

        {/*  AVALIAÇÃO DO JOGO */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-dark-bg/80 px-3 py-1 rounded-full">
          
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          {/*  ícone estrela */}

          <span className="text-sm font-semibold text-yellow-400">
            {game.rating}
          </span>
          {/*  nota do jogo */}
        </div>
      </div>


      {/*  PARTE DE BAIXO DO CARD */}
      <div className="p-4">

        {/*  NOME DO JOGO */}
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
          {game.title}
        </h3>
        {/* line-clamp-2 limita o texto a 2 linhas */}

        {/*  CATEGORIA DO JOGO */}
        <p className="text-sm text-white mb-4">
          {game.category}
        </p>

        {/*  PREÇOS */}
        <div className="flex items-center justify-between mb-4">

          <div className="flex items-baseline gap-2">

            {/*  PREÇO ANTIGO (se tiver desconto) */}
            {game.discount && (
              <span className="text-sm line-through text-gray-500">
                ${game.price.toFixed(2)}
              </span>
            )}

            {/* 💵 PREÇO FINAL */}
            <span className="text-xl font-bold text-purple-400">
              ${finalPrice.toFixed(2)}
            </span>
          </div>

          {/* 🔥 TAG DE DESCONTO */}
          {game.discount && (
            <span className="text-xs bg-red-600 px-2 py-1 rounded font-bold">
              -{game.discount}%
            </span>
          )}
        </div>

        {/* 🛒 BOTÃO DE COMPRA */}
        <button 
          onClick={() => onAddToCart(game)} 
          // 👉 chama a função e envia o jogo

          className="w-full btn-primary text-sm"
          // btn-primary vem do seu CSS global
        >
          Comprar
        </button>
      </div>
    </div>
  )
}
