'use client'

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { CheckCircle2, XCircle, X } from 'lucide-react'
import { clsx } from 'clsx'

type ToastType = 'success' | 'error'

interface Toast {
  id: string
  message: string
  type: ToastType
}

interface ToastContextType {
  toast: (message: string, type: ToastType) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = useCallback((message: string, type: ToastType) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prev) => [...prev, { id, message, type }])

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 5000)
  }, [])

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={clsx(
              'flex items-center gap-3 p-4 rounded-lg shadow-lg border min-w-[300px] transform transition-all animate-in slide-in-from-right-8',
              t.type === 'success' 
                ? 'bg-[#1A1A1A] border-green-500/50 text-white' 
                : 'bg-[#1A1A1A] border-red-500/50 text-white'
            )}
          >
            {t.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 text-red-500 shrink-0" />
            )}
            <p className="font-body text-sm flex-1">{t.message}</p>
            <button 
              onClick={() => removeToast(t.id)}
              className="text-[#A1A1AA] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
