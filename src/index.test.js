/* eslint-env jest */
import { renderHook, act } from '@testing-library/react-hooks'
import useTimingEvents from './index'

test('should add timeout', () => {
  const { result } = renderHook(() => useTimingEvents())
  let timeout

  act(() => {
    timeout = result.current.addTimeout(1)
  })

  expect(result.current.timeoutRefs.current[1]).toBe(1)
  expect(timeout).toBe(1)
})

test('should add interval', () => {
  const { result } = renderHook(() => useTimingEvents())
  let interval

  act(() => {
    interval = result.current.addInterval(1)
  })

  expect(result.current.intervalRefs.current[1]).toBe(1)
  expect(interval).toBe(1)
})

test('should add timeout with key', () => {
  const { result } = renderHook(() => useTimingEvents())

  act(() => {
    result.current.addTimeout(1, 'key')
  })

  expect(result.current.timeoutRefs.current.key).toBe(1)
})

test('should add interval with key', () => {
  const { result } = renderHook(() => useTimingEvents())

  act(() => {
    result.current.addInterval(1, 'key')
  })

  expect(result.current.intervalRefs.current.key).toBe(1)
})

test('should get timeout with key', () => {
  const { result } = renderHook(() => useTimingEvents())
  let timeout

  act(() => {
    result.current.addTimeout(1, 'key')
  })

  act(() => {
    timeout = result.current.getTimeout('key')
  })

  expect(timeout).toBe(1)
})

test('should get interval with key', () => {
  const { result } = renderHook(() => useTimingEvents())
  let interval

  act(() => {
    result.current.addInterval(1, 'key')
  })

  act(() => {
    interval = result.current.getInterval('key')
  })

  expect(interval).toBe(1)
})

test('should clear timeout with key', () => {
  const { result } = renderHook(() => useTimingEvents())

  act(() => {
    result.current.addTimeout(1, 'key')
  })

  act(() => {
    result.current.clearTimeout('key')
  })
  expect(result.current.timeoutRefs.current.key).toBe(undefined)
})

test('should clear interval with key', () => {
  const { result } = renderHook(() => useTimingEvents())

  act(() => {
    result.current.addInterval(1, 'key')
  })

  act(() => {
    result.current.clearInterval('key')
  })
  expect(result.current.intervalRefs.current.key).toBe(undefined)
})

test('should clear all timeout', () => {
  const { result } = renderHook(() => useTimingEvents())

  act(() => {
    result.current.addTimeout(1)
    result.current.addTimeout(2)
  })

  act(() => {
    result.current.clearAllTimeout()
  })

  expect(result.current.timeoutRefs.current[1]).toBe(undefined)
  expect(result.current.timeoutRefs.current[2]).toBe(undefined)
})

test('should clear all timeout', () => {
  const { result } = renderHook(() => useTimingEvents())

  act(() => {
    result.current.addInterval(1)
    result.current.addInterval(2)
  })

  act(() => {
    result.current.clearAllInterval()
  })

  expect(result.current.intervalRefs.current[1]).toBe(undefined)
  expect(result.current.intervalRefs.current[2]).toBe(undefined)
})
