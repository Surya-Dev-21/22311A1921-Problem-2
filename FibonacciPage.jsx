import React, { useState, useEffect } from 'react'
import { Typography, Paper, Button, Box } from '@mui/material'

const WINDOW_SIZE = 10

function generateFibonacci(n) {
  const fib = [1, 1]
  while (fib.length < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2])
  }
  return fib.slice(0, n)
}

function FibonacciPage() {
  const [windowPrevState, setWindowPrevState] = useState([])
  const [windowCurrState, setWindowCurrState] = useState([])
  const [numbers, setNumbers] = useState([])
  const [avg, setAvg] = useState(0)

  const calculateAverage = (arr) => {
    if (arr.length === 0) return 0
    const sum = arr.reduce((acc, val) => acc + val, 0)
    return sum / arr.length
  }

  const generateNumbers = () => {
    return generateFibonacci(WINDOW_SIZE)
  }

  useEffect(() => {
    const newNumbers = generateNumbers()

    const uniqueNewNumbers = newNumbers.filter(
      (num) => !windowCurrState.includes(num)
    )

    let newWindow = [...windowCurrState]

    uniqueNewNumbers.forEach((num) => {
      if (newWindow.length < WINDOW_SIZE) {
        newWindow.push(num)
      } else {
        newWindow.shift()
        newWindow.push(num)
      }
    })

    const average = calculateAverage(newWindow)

    setWindowPrevState(windowCurrState)
    setWindowCurrState(newWindow)
    setNumbers(newNumbers)
    setAvg(average)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRefresh = () => {
    const newNumbers = generateNumbers()

    const uniqueNewNumbers = newNumbers.filter(
      (num) => !windowCurrState.includes(num)
    )

    let newWindow = [...windowCurrState]

    uniqueNewNumbers.forEach((num) => {
      if (newWindow.length < WINDOW_SIZE) {
        newWindow.push(num)
      } else {
        newWindow.shift()
        newWindow.push(num)
      }
    })

    const average = calculateAverage(newWindow)

    setWindowPrevState(windowCurrState)
    setWindowCurrState(newWindow)
    setNumbers(newNumbers)
    setAvg(average)
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Fibonacci Numbers API
      </Typography>

      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Window Previous State:
        </Typography>
        <Typography>{JSON.stringify(windowPrevState)}</Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Window Current State:
        </Typography>
        <Typography>{JSON.stringify(windowCurrState)}</Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Numbers:
        </Typography>
        <Typography>{JSON.stringify(numbers)}</Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Average:
        </Typography>
        <Typography>{avg.toFixed(2)}</Typography>
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" onClick={handleRefresh}>
          Refresh
        </Button>
      </Box>
    </Box>
  )
}

export default FibonacciPage
