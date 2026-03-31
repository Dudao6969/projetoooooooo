'use client'

import { useState } from 'react'
import { Game, CartItem } from '@/types'
import Header from '@/components/layout/Header'
import GameCard from '@/components/game/GameCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const FEATURED_GAMES: Game[] = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    price: 59.99,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=300&fit=crop',
    rating: 4.5,
    category: 'RPG'
  },
  {
    id: 2,
    title: 'Elden Ring',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=300&fit=crop',
    rating: 4.8,
    category: 'Action'
  },
  {
    id: 3,
    title: 'The Witcher 3',
    price: 39.99,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=500&h=300&fit=crop',
    rating: 4.7,
    category: 'RPG'
  },
  {
    id: 4,
    title: 'Starfield',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=500&h=300&fit=crop',
    rating: 4.3,
    category: 'Sci-Fi'
  },
  {
    id: 5,
    title: 'Baldur\'s Gate 3',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500&h=300&fit=crop',
    rating: 4.9,
    category: 'RPG'
  },
  {
    id: 6,
    title: 'Hogwarts Legacy',
    price: 49.99,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500&h=300&fit=crop',
    rating: 4.4,
    category: 'Adventure'
  }
]

const CATEGORIES = [
  { name: 'RPG', emoji: '⚔️' },
  { name: 'Action', emoji: '💥' },
  { name: 'Estratégia', emoji: '♟️' },
  { name: 'Aventura', emoji: '🗺️' },
  { name: 'Puzzle', emoji: '🧩' },
  { name: 'Indie', emoji: '🎮' },
  { name: 'Multiplayer', emoji: '👥' },
  { name: 'Simulação', emoji: '🚗' },
]

const ALL_GAMES: Game[] = [
  ...FEATURED_GAMES,
  {
    id: 7,
    title: 'Palworld',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1535869484c0-e6e99c007bca?w=500&h=300&fit=crop',
    rating: 4.6,
    category: 'Adventure'
  },
  {
    id: 8,
    title: 'Dragon\'s Dogma 2',
    price: 59.99,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1535869484c0-e6e99c007bca?w=500&h=300&fit=crop',
    rating: 4.5,
    category: 'RPG'
  },
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [cartItems, setCartItems] = useState<CartItem[]>([]) // Carrinho inicia vazio

  const addToCart = (game: Game) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === game.id)
      if (existingItem) {
        return prev.map(item =>
          item.id === game.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { id: game.id, title: game.title, price: game.price, discount: game.discount, quantity: 1 }]
    })
  }

  const removeFromCart = (gameId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== gameId))
  }

  const updateQuantity = (gameId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(gameId)
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === gameId ? { ...item, quantity } : item
        )
      )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header 
        cartItems={cartItems}
        onRemoveFromCart={removeFromCart}
        onUpdateQuantity={updateQuantity}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            /*imagem de fundo*/
            backgroundImage: `url('https://files.catbox.moe/xb76od.png')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/50 to-transparent"></div>
        </div>

        
      </section>

      {/* Featured Games Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-dark-bg to-dark-card/20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: 'Poppins' }}>
              Descubra algo novo
            </h2>
            <div className="section-divider"></div>
          </div>

        { /* primeira parte de produtos */ }
           
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
  {FEATURED_GAMES.slice(0, 4).map((game) => (
    <div
      key={game.id}
      className="card-game flex flex-col group p-3 rounded-xl bg-zinc-900/60 backdrop-blur-sm hover:bg-zinc-900/80 transition-all duration-300"
    >
      {/* Imagem */}
      <div className="relative aspect-[3/4] mb-3 overflow-hidden rounded-md bg-zinc-800">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {game.discount && (
          <div className="absolute top-2 right-2 bg-red-600 px-2 py-0.5 rounded text-[10px] font-bold text-white">
            -{game.discount}%
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col gap-1 flex-1">
        <div>
          <h3 className="text-white font-semibold text-base leading-tight truncate">
            {game.title}
          </h3>
          <p className="text-[10px] text-purple-300 font-medium uppercase tracking-wide">
            {game.category}
          </p>
        </div>

        {/* PREÇO + BOTÃO MAIS PRA CIMA */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col">
            {game.discount && (
              <span className="text-[10px] line-through text-purple-400/60">
                ${game.price.toFixed(2)}
              </span>
            )}
            <span className="text-lg font-bold text-purple-400">
              ${(game.price * (1 - (game.discount || 0) / 100)).toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => addToCart(game)}
            className="btn-primary py-1.5 px-3 text-xs rounded-md"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* Featured Discounts Section */}
      <section className="py-16 md:py-24 bg-dark-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white" style={{ fontFamily: 'Poppins' }}>
            Descontos em Destaques
          </h2>
         <div className="flex justify-center">
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl w-full">
    {ALL_GAMES
      .slice(0, 5) /*<= aqui muda a qauntidade de produtos que vai ter na fileira ais de 5, fica para baixo*/
      .map((game) => (
        <div
          key={game.id}
          className="scale-100 hover:scale-105 transition-transform duration-200"
        >
          <GameCard 
            game={game} 
            onAddToCart={addToCart} 
          />
        </div>
      ))}
  </div>
</div>
        </div>
      </section>

      {/* parte do carrosel */}
<section className="py-16 md:py-24 bg-dark-bg overflow-hidden">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white" style={{ fontFamily: 'Poppins' }}>
      Destaques
    </h2>

    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="overflow-visible"
      >
        {ALL_GAMES.slice(0, 5).map((game) => (
            /*essa parte do swaperslide muda o tamanho do retangulo do carrossel*/
        <SwiperSlide key={game.id}>
            <div className="h-[220px] md:h-[300px] w-full rounded-lg overflow-hidden group">
              
              {/* SOMENTE IMAGEM */}
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SETA ESQUERDA */}
      <button className="custom-prev absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white w-10 h-10 flex items-center justify-center rounded-full backdrop-blur">
        ‹
      </button>

      {/* SETA DIREITA */}
      <button className="custom-next absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white w-10 h-10 flex items-center justify-center rounded-full backdrop-blur">
        ›
      </button>
    </div>
  </div>
</section>

{/*meio que inico do footer*/}

      {/* Newsletter Section */}
    {/* Newsletter + Social */}
<section className="bg-black py-12">
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10">
    
    {/* ESQUERDA - REDES */}
    <div>
      <h3 className="text-white font-bold text-lg mb-4">
        NOS SIGA NAS REDES SOCIAIS
      </h3>

      <div className="flex gap-4">
        <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
          f
        </div>
        <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
          ig
        </div>
        <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
          t
        </div>
      </div>
    </div>

    {/* DIREITA - EMAIL */}
    <div className="w-full md:w-auto">
      <h3 className="text-white font-bold text-lg mb-4 text-right md:text-left">
        FIQUE LIGADO
      </h3>

      <div className="flex items-center bg-zinc-700 rounded-full px-4 py-2 gap-3">
        <span className="text-white">📩</span>

        <input
          type="email"
          placeholder="Email"
          className="bg-transparent outline-none text-white placeholder:text-zinc-300 text-sm w-full"
        />

        <button className="text-white hover:translate-x-1 transition">
          ➤
        </button>
      </div>
    </div>

  </div>

  {/* LINHA FINAL */}
  <div className="container mx-auto px-4 mt-10 text-center text-sm text-zinc-400">
    <p>© 2026 Access Game. Todos os direitos reservados</p>
    <p className="text-xs mt-2 text-zinc-500">
      Política de privacidade | Termos de utilização | CNPJ: XXX.XXX.XXX/XXXX-XX
    </p>
  </div>
</section>


    </div>
  )
}
