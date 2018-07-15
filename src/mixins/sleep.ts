const sleep = (ms: number): Promise<boolean> => new Promise(resolve => setTimeout(resolve(true), ms))

export { sleep }
export default sleep
