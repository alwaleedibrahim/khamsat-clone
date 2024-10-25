'use client'

import { useState, useEffect } from 'react';

export default function ClientSideCartProvider({ children }: { children: React.ReactNode }) {
  const [CartProvider, setCartProvider] = useState<React.ComponentType<{ children: React.ReactNode }>>(() => ({ children }) => <>{children}</>);

  useEffect(() => {
    import('react-use-cart').then((mod) => {
      setCartProvider(() => mod.CartProvider);
    });
  }, []);

  return <CartProvider>{children}</CartProvider>;
}