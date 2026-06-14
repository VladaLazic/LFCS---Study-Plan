import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'lfcs_progress'

function loadProgress() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveProgress(data) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // sessionStorage may be blocked in sandboxed iframes
  }
}

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress)
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch {
      return false
    }
  })

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleDay = useCallback((weekNum, dayNum) => {
    const key = `w${weekNum}d${dayNum}`
    setProgress(prev => ({ ...prev, [key]: !prev[key] }))
  }, [])

  const toggleWeek = useCallback((weekNum, dayCount) => {
    const keys = Array.from({ length: dayCount }, (_, i) => `w${weekNum}d${i + 1}`)
    setProgress(prev => {
      const allDone = keys.every(k => prev[k])
      const next = { ...prev }
      keys.forEach(k => { next[k] = !allDone })
      return next
    })
  }, [])

  const isDayDone = useCallback((weekNum, dayNum) => {
    return !!progress[`w${weekNum}d${dayNum}`]
  }, [progress])

  const isWeekDone = useCallback((weekNum, dayCount) => {
    return Array.from({ length: dayCount }, (_, i) => `w${weekNum}d${i + 1}`)
      .every(k => !!progress[k])
  }, [progress])

  const totalDays = useCallback((weeks) => {
    return weeks.reduce((sum, w) => sum + w.days.length, 0)
  }, [])

  const doneDays = useCallback((weeks) => {
    return weeks.reduce((sum, w) => {
      return sum + w.days.filter((d) => !!progress[`w${w.week}d${d.day}`]).length
    }, 0)
  }, [progress])

  return { progress, toggleDay, toggleWeek, isDayDone, isWeekDone, totalDays, doneDays, darkMode, setDarkMode }
}
