const userKey: string = 'courtspin-user'

export const getLocalStorage = (key: string, isJson: boolean = false) => {
  const value = localStorage.getItem(key) as string
  if (isJson) {
    return JSON.parse(value)
  }
  return value
}

export const updateLocalStorage = (key: string, value: any, action: 'SET' | 'REMOVE', isJson: boolean = false) => {
  if (action === 'REMOVE') {
    const value = localStorage.getItem('key')
    if (value) {
      localStorage.removeItem(key)
    }
  }

  if (action == 'SET') {
    if (isJson) {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  }
}

export const setUser = (data: any) => {
  updateLocalStorage(userKey, data, 'SET', true)
}

export const getUser = () => {
  return getLocalStorage(userKey, true)
}

export const clearLocalStorage = () => {
  localStorage.clear()
}