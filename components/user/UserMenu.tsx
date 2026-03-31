'use client'

import Link from 'next/link'
import { LogIn, UserPlus } from 'lucide-react'

interface UserMenuProps {
  isOpen: boolean
  onClose?: () => void
}

export default function UserMenu({ isOpen, onClose }: UserMenuProps) {
  if (!isOpen) return null

  return (
    <div className="absolute right-0 top-full mt-2 w-48 bg-dark-card border border-dark-border rounded-lg shadow-xl z-50">
      <div className="p-2 space-y-1">
        <Link 
          href="/login"
          onClick={onClose}
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-dark-bg rounded transition-colors text-purple-300 hover:text-purple-200"
        >
          <LogIn className="w-4 h-4" />
          <span className="text-sm font-medium">Entrar</span>
        </Link>
        <Link 
          href="/register"
          onClick={onClose}
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-dark-bg rounded transition-colors text-purple-300 hover:text-purple-200"
        >
          <UserPlus className="w-4 h-4" />
          <span className="text-sm font-medium">Cadastrar</span>
        </Link>
      </div>
    </div>
  )
}
