'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Eye, EyeOff } from 'lucide-react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você adicionaria a lógica de registro
    console.log('Cadastro:', formData)
  }

  return (
  <div
  className="min-h-screen flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('/background.jpg')" }}
>
      <div className="w-full max-w-md">
        {/* Botão Voltar */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Voltar para a loja</span>
        </Link>

        {/* Card de Registro */}
        <div className="bg-dark-card border border-dark-border rounded-2xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins' }}>
            Cadastrar
          </h1>
          <p className="text-purple-400 mb-8">
            Crie sua conta para começar a comprar.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome */}
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder:text-purple-600 focus:outline-none focus:border-purple-600 transition-colors"
                placeholder="Seu nome completo"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
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

            {/* Confirmar Senha */}
            <div>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Confirmar Senha
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder:text-purple-600 focus:outline-none focus:border-purple-600 transition-colors"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Termos */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 bg-dark-bg border border-dark-border rounded cursor-pointer accent-purple-600 mt-1"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-purple-300 cursor-pointer">
                Concordo com os{' '}
                <Link href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Termos de Serviço
                </Link>
                {' '}e{' '}
                <Link href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Política de Privacidade
                </Link>
              </label>
            </div>

            {/* Botão Cadastrar */}
            <button
              type="submit"
              className="w-full btn-primary py-3 mt-6 font-semibold"
            >
              Cadastrar
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-dark-border"></div>
            <span className="text-sm text-purple-400">ou</span>
            <div className="flex-1 h-px bg-dark-border"></div>
          </div>

          {/* Link para Login */}
          <p className="text-center text-sm text-purple-400">
            Já tem conta?{' '}
            <Link href="/login" className="text-purple-300 hover:text-purple-200 font-semibold transition-colors">
              Faça login
            </Link>
          </p>
        </div>

        {/* Footer Info */}
        <p className="text-center text-white text-xs mt-8">
          Seus dados são protegidos e nunca serão compartilhados com terceiros
        </p>
      </div>
    </div>
  )
}
