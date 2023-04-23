export const storageDataWithTimeStamp = (data, key) => {
  const dataToBeStored = {
    data,
    previousTimeStamp: Date.now()
  }

  try {
    localStorage.setItem(key, JSON.stringify(dataToBeStored))
  } catch (error) {
    console.error('Error: Local storage is full.', error)
  }
}

export const getLocalDataWithTimeStamp = key => {
  const data = localStorage.getItem(key)

  try {
    if (data !== null) {
      return JSON.parse(data)
    }
  } catch (error) {
    console.error('Error parsing stored data.', error)
  }
}
