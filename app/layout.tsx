import type { Metadata } from 'next'
import './globals.css'

/*EU DEIXEI COMO RECADO PQ É UMA PARTE QUEU EU TIREI DA PAGINA INICIAL MAS CASO QUEIRA RECICLAR RESOLVI DEIXAR AQUI*/

/*export const metadata: Metadata = {
  title: 'Games Store - Loja de Jogos Minimalista',
  description: 'Descubra os melhores jogos com preços incríveis',
}*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
