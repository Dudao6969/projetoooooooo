'use client'

import { X, ShoppingCart, Trash2 } from 'lucide-react'
import { CartItem } from '@/types'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onRemove: (id: number) => void
  onUpdateQuantity: (id: number, quantity: number) => void
}

export default function CartDrawer({ isOpen, onClose, items, onRemove, onUpdateQuantity }: CartDrawerProps) {
  if (!isOpen) return null

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const finalPrice = item.price * (1 - (item.discount || 0) / 100)
      return total + finalPrice * item.quantity
    }, 0)
  }

  return (
    <div className="absolute right-0 top-full mt-2 w-80 bg-dark-card border border-dark-border rounded-lg shadow-xl z-50">
      <div className="p-4 border-b border-dark-border flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">Carrinho</h3>
        <button
          onClick={onClose}
          className="p-1 hover:bg-dark-bg rounded transition-colors"
        >
          <X className="w-4 h-4 text-purple-300" />
        </button>
      </div>

      {items.length === 0 ? (
        <div className="p-8 text-center">
          <ShoppingCart className="w-12 h-12 text-purple-600/30 mx-auto mb-3" />
          <p className="text-purple-400">Seu carrinho está vazio</p>
        </div>
      ) : (
        <>
          <div className="max-h-96 overflow-y-auto">
            {items.map(item => {
              const finalPrice = item.price * (1 - (item.discount || 0) / 100)
              return (
                <div key={item.id} className="p-4 border-b border-dark-border/50 hover:bg-dark-bg/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-white line-clamp-1">{item.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        {item.discount && (
                          <span className="text-xs line-through text-purple-500">
                            ${item.price.toFixed(2)}
                          </span>
                        )}
                        <span className="text-sm font-bold text-purple-400">
                          ${finalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="p-1 hover:bg-red-600/20 rounded transition-colors ml-2"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-dark-border rounded text-purple-300 hover:bg-purple-600/30 transition-colors text-xs"
                    >
                      −
                    </button>
                    <span className="text-sm text-purple-300 font-semibold min-w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-dark-border rounded text-purple-300 hover:bg-purple-600/30 transition-colors text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="p-4 border-t border-dark-border space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-purple-300 font-semibold">Total:</span>
              <span className="text-lg font-bold text-purple-400">
                ${calculateTotal().toFixed(2)}
              </span>
            </div>
            <button className="w-full btn-primary text-sm">
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  )
}
