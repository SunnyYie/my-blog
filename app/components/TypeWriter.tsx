'use client'

import { useState, useEffect } from 'react'
import type React from 'react'

interface TypeWriterProps {
  texts: string[]
  delay: number
  loop?: number
}

const TypeWriter: React.FC<TypeWriterProps> = ({ texts, delay, loop = 1 }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [textArrayIndex, setTextArrayIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopCount, setLoopCount] = useState(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (loopCount < loop) {
      if (!isDeleting && currentIndex < texts[textArrayIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + texts[textArrayIndex][currentIndex])
          setCurrentIndex(prevIndex => prevIndex + 1)
        }, delay)
      } else if (!isDeleting && currentIndex === texts[textArrayIndex].length) {
        timeout = setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && currentIndex > 0 && textArrayIndex + 1 < texts.length) {
        timeout = setTimeout(() => {
          setCurrentText(prevText => prevText.slice(0, -1))
          setCurrentIndex(prevIndex => prevIndex - 1)
        }, delay / 2)
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false)
        setTextArrayIndex(prevIndex => (prevIndex + 1) % texts.length)
        if (textArrayIndex === texts.length - 1) {
          setLoopCount(prevCount => prevCount + 1)
        }
      }
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, isDeleting, textArrayIndex, texts, loopCount, loop])

  return (
    <span className="inline-flex">
      {currentText}
      <span className="cursor">|</span>
    </span>
  )
}

export default TypeWriter
