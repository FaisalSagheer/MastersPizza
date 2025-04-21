

import { CartProvider } from './context/CartContext';
import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CartProvider>
      <body>{children}</body>
      </CartProvider>
    </html>
  )
}