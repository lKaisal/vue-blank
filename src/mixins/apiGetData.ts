interface FetchOptions {
  endpoint: string;
  parameters?: object;
}

const apiGetData = async (options: FetchOptions ) => {
  try {
    const { endpoint, parameters } = options
    const data = await fetch(endpoint)

    return data.json()
  } catch (error) {
    throw new Error(error)
  }
}

export { apiGetData }
export default apiGetData
