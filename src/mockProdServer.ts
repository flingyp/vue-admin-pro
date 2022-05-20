import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

import userModule from '../mock/system/User'

export function setupProdMockServer() {
  createProdMockServer([...userModule])
}
