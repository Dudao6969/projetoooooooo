'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você adicionaria a lógica de autenticação
    console.log('Login:', { email, password })
  }

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Botão Voltar */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Voltar para a loja</span>
        </Link>

        {/* Card de Login */}
        <div className="bg-dark-card border border-dark-border rounded-2xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins' }}>
            Entrar
          </h1>
          <p className="text-purple-400 mb-8">
            Acesse sua conta para continuar suas compras.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder:text-purple-600 focus:outline-none focus:border-purple-600 transition-colors"
                placeholder="seu@email.com"
                required
              />
            </div>

            {/* Senha */}
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder:text-purple-600 focus:outline-none focus:border-purple-600 transition-colors"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Lembrar de mim */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 bg-dark-bg border border-dark-border rounded cursor-pointer accent-purple-600"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-purple-300 cursor-pointer">
                Lembrar de mim
              </label>
            </div>

            {/* Botão Entrar */}
            <button
              type="submit"
              className="w-full btn-primary py-3 mt-6 font-semibold"
            >
              Entrar
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-dark-border"></div>
            <span className="text-sm text-purple-400">ou</span>
            <div className="flex-1 h-px bg-dark-border"></div>
          </div>

          {/* Links Adicionais */}
          <div className="space-y-3 text-center text-sm">
            <p className="text-purple-400">
              Não tem conta?{' '}
              <Link href="/register" className="text-purple-300 hover:text-purple-200 font-semibold transition-colors">
                Cadastre-se
              </Link>
            </p>
            <Link href="#" className="block text-purple-400 hover:text-purple-300 transition-colors">
              Esqueceu a senha?
            </Link>
          </div>
        </div>

        {/* Footer Info */}
        <p className="text-center text-purple-500 text-xs mt-8">
          Ao entrar, você concorda com nossos Termos de Serviço e Política de Privacidade
        </p>
      </div>
    </div>
  )
}
