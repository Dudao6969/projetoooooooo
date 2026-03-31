'use client'

import { useState } from 'react'
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react'
import { CartItem } from '@/types'
import CartDrawer from '../cart/CartDrawer'
import UserMenu from '../user/UserMenu'

interface HeaderProps {
  cartItems: CartItem[]
  onRemoveFromCart: (id: number) => void
  onUpdateQuantity: (id: number, quantity: number) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export default function Header({ 
  cartItems, 
  onRemoveFromCart, 
  onUpdateQuantity, 
  searchQuery, 
  setSearchQuery 
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const toggleCart = () => {
    setCartOpen(!cartOpen)
    setUserMenuOpen(false)
  }

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen)
    setCartOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
      {/* Top Row - Logo and Actions */}
      <div className="container mx-auto px-4 flex items-center justify-between py-4 md:py-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
            {/* lugar que vai ficar a logo */ }
            <span className="text-white font-bold text-lg">GS</span>
          </div>
          {/* NOME DE CIMA*/ }
          <span className="text-xl font-bold hidden sm:inline gradient-text">Access game</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 relative">
          {/* Carrinho */}
          <div className="relative">
            <button 
              onClick={toggleCart}
              className="p-2 hover:bg-dark-card rounded-lg transition-colors hidden sm:flex relative"
            >
              <ShoppingCart className="w-5 h-5 text-purple-300" />
              {cartItems.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-600 rounded-full text-white text-xs flex items-center justify-center font-bold">
                  {cartItems.length}
                </span>
              )}
            </button>

            <CartDrawer 
              isOpen={cartOpen} 
              onClose={() => setCartOpen(false)} 
              items={cartItems}
              onRemove={onRemoveFromCart}
              onUpdateQuantity={onUpdateQuantity}
            />
          </div>

          {/* Usuário */}
          <div className="relative">
            <button 
              onClick={toggleUserMenu}
              className="p-2 hover:bg-dark-card rounded-lg transition-colors hidden sm:flex"
            >
              <User className="w-5 h-5 text-purple-300" />
            </button>

            <UserMenu isOpen={userMenuOpen} onClose={() => setUserMenuOpen(false)} />
          </div>

          <button
            className="md:hidden p-2 hover:bg-dark-card rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

  

{/* Botoes que ficm do lado do trem de pesquisa*/}
<div className="border-t border-dark-border">
  <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center gap-6">
    
    {/* Search Bar - Movida para primeiro para aparecer à esquerda */}
    <div className="w-full md:w-auto md:flex-1 md:max-w-xs">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
        <input
          type="text"
          placeholder="Pesquisar loja..."
          className="w-full pl-10 pr-4 py-2 bg-dark-card border border-dark-border rounded-lg text-purple-100 placeholder:text-purple-600 focus:outline-none focus:border-purple-600 transition-colors"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>

    {/* Navigation Desktop - Agora aparece depois (à direita) da barra */}
    <nav className="hidden md:flex items-center gap-8">
      <a href="#" className="text-sm font-medium text-purple-200 hover:text-purple-400 transition-colors">Novidades</a>
      <a href="#" className="text-sm font-medium text-purple-200 hover:text-purple-400 transition-colors">Produtos</a>
    </nav>

  </div>
</div>


      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-dark-border bg-dark-card">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-sm font-medium text-purple-200 hover:text-purple-400 transition-colors">Novidades</a>
              <h3>produtos</h3>
              <a href="#" className="text-sm font-medium text-purple-200 hover:text-purple-400 transition-colors">Camisetas</a>
              <a href="#" className="text-sm font-medium text-purple-200 hover:text-purple-400 transition-colors">Moletom</a>
              <a href="#" className="text-sm font-medium text-purple-200 hover:text-purple-400 transition-colors">Periféricos</a>
              <a href="#" className="text-sm font-medium text-purple-200 hover:text-purple-400 transition-colors">Colecionaveis</a>
            </nav>
            {/* Mobile Actions */}
            <div className="flex items-center gap-4 pt-4 border-t border-dark-border">
              <button 
                onClick={() => {
                  setCartOpen(!cartOpen)
                  setMobileMenuOpen(false)
                }}
                className="flex items-center gap-2 text-purple-200"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Carrinho ({cartItems.length})</span>
              </button>
              <button 
                onClick={() => {
                  setUserMenuOpen(!userMenuOpen)
                  setMobileMenuOpen(false)
                }}
                className="flex items-center gap-2 text-purple-200"
              >
                <User className="w-5 h-5" />
                <span>Conta</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
