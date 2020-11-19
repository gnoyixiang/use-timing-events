import { useRef, useEffect, useCallback } from 'react'

const useTimingEvents = () => {
  const timeoutRefs = useRef({})
  const intervalRefs = useRef({})

  const addTimeout = useCallback((timeout, key) => {
    timeoutRefs.current[key || timeout] = timeout
    return timeout
  }, [])

  const addInterval = useCallback((interval, key) => {
    intervalRefs.current[key || interval] = interval
    return interval
  }, [])

  const getTimeout = useCallback((key) => {
    return timeoutRefs.current[key]
  }, [])

  const getInterval = useCallback((key) => {
    return intervalRefs.current[key]
  }, [])

  const clearTimeout = useCallback((key) => {
    window.clearTimeout(getTimeout(key) || key)
    delete timeoutRefs.current[key]
  }, [])

  const clearInterval = useCallback((key) => {
    window.clearInterval(getInterval(key) || key)
    delete intervalRefs.current[key]
  }, [])

  const clearAllTimeout = useCallback(() => {
    Object.keys(timeoutRefs.current).forEach(key => {
      clearTimeout(key)
    })
    timeoutRefs.current = {}
  }, [])

  const clearAllInterval = useCallback(() => {
    Object.keys(intervalRefs.current).forEach(key => {
      clearInterval(key)
    })
    intervalRefs.current = {}
  }, [])

  useEffect(() => {
    return () => {
      clearAllTimeout()
      clearAllInterval()
    }
  }, [])

  return {
    addTimeout,
    addInterval,
    getTimeout,
    getInterval,
    clearTimeout,
    clearInterval,
    clearAllTimeout,
    clearAllInterval,
    timeoutRefs,
    intervalRefs
  }
}

export default useTimingEvents
