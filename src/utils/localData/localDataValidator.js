const SECONDS_IN_A_MINUTE = 60
const MINUTES_IN_A_HOUR = 60
const MILLISECONDS = 1000

const MILLISECONDS_IN_A_DAY =
  MILLISECONDS * SECONDS_IN_A_MINUTE * MINUTES_IN_A_HOUR

const dateExceededLimit = (
  previousTimeStamp,
  limits = MILLISECONDS_IN_A_DAY
) => {
  return Date.now() - previousTimeStamp > limits
}

export const isLocalDataValid = data =>
  !dateExceededLimit(data.previousTimeStamp)
