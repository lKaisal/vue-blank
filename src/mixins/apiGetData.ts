interface FetchOptions {
  endpoint: string;
  parameters?: object;
}

const apiGetData = async (options: FetchOptions ) => {
  try {
    const { endpoint, parameters } = options
    const headers: any = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
    const data = await fetch(endpoint, headers)

    return data.json()
  } catch (error) {
    throw new Error(error)
  }
}

export { apiGetData }
export default apiGetData
