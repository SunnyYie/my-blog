'use client'

import { useState, useEffect, useMemo } from 'react'
import type React from 'react'

interface TypeWriterProps {
  texts: string
  delay: number
  loop?: number
}

const TypeWriter: React.FC<TypeWriterProps> = ({ texts, delay, loop = 1 }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [textArrayIndex, setTextArrayIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopCount, setLoopCount] = useState(0)

  const textArray = useMemo(() => texts.split(/(?<=[.!?])/), [texts])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (loopCount < loop) {
      // 正在写入
      if (!isDeleting && currentIndex < textArray[textArrayIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + textArray[textArrayIndex][currentIndex])
          setCurrentIndex(prevIndex => prevIndex + 1)
        }, delay)
        // 写入完成，准备删除
      } else if (!isDeleting && currentIndex === textArray[textArrayIndex].length) {
        timeout = setTimeout(() => setIsDeleting(true), 1000)
        // 正在删除
      } else if (isDeleting && currentIndex > 0 && textArrayIndex + 1 < textArray.length) {
        timeout = setTimeout(() => {
          setCurrentText(prevText => prevText.slice(0, -1))
          setCurrentIndex(prevIndex => prevIndex - 1)
        }, delay / 2)
        // 删除完成，准备写入下一个文本
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false)
        setTextArrayIndex(prevIndex => (prevIndex + 1) % textArray.length)
        // 如果是最后一个文本，增加循环次数
        if (textArrayIndex === textArray.length - 1) {
          setLoopCount(prevCount => prevCount + 1)
        }
      }
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, isDeleting, textArrayIndex, textArray, loopCount, loop])

  return (
    <span className="inline-flex">
      {currentText}
      <span className="cursor">|</span>
    </span>
  )
}

export default TypeWriter
