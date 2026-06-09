'use client'

import React, { useState } from 'react'
import { clsx } from 'clsx'

// Note: Using inline SVGs for Chevron as lucide v1.17.0 might have missing exports
const ChevronDown = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
)

interface AccordionItemProps {
  title: string
  content: string | React.ReactNode
  isOpen: boolean
  onClick: () => void
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        className="w-full flex items-center justify-between py-4 px-2 text-left hover:bg-bg-secondary transition-colors focus:outline-none"
        onClick={onClick}
      >
        <span className="font-body font-medium text-white text-base">{title}</span>
        <ChevronDown 
          className={clsx(
            "text-text-muted transition-transform duration-200", 
            isOpen ? "transform rotate-180 text-orange" : ""
          )} 
        />
      </button>
      
      {/* Content area - uses CSS transition if possible, but conditionally rendering for simplicity with React */}
      <div 
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out px-2",
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
        )}
      >
        <div className="text-text-secondary font-body text-sm leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  )
}

interface AccordionProps {
  items: {
    title: string
    content: string | React.ReactNode
  }[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First open by default

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-bg-tertiary/20">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  )
}
