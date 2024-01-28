"use server"
import axios, { AxiosResponse } from "axios"
import { UserData } from "./types"

const apiUrl = process.env.BACKEND_URL!


export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/products`)
    return response.data
  } catch (error:any) {
    console.error("Erro ao obter produtos:", error.message)
    throw error // Você pode tratar o erro de outra maneira, se preferir.
  }
}

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${apiUrl}/users`)
    return response.data
  } catch (error: any) {
    console.error("Erro ao obter usuários:", error.message)
    throw error // Você pode tratar o erro de outra maneira, se preferir.
  }
}

export const deleteProduct = async (productId: string) => {
  try {
    const response = await axios.delete(`${apiUrl}/products/${productId}`)

    if (response.status === 204) {
      // A exclusão foi bem-sucedida (status 204)
      return true
    } else {
      // Trate os erros, se necessário
      return false
    }
  } catch (error:any) {
    // Trate os erros de rede ou outras exceções, se necessário
    console.error("Erro ao excluir produto:", error.message)
    return false // Você pode tratar o erro de outra maneira, se preferir.
  }
}

export const deleteUser = async (userId: string) => {
  try {
    const response = await axios.delete(`${apiUrl}/users/${userId}`)

    if (response.status === 204) {
      // A exclusão foi bem-sucedida (status 204)
      return true
    } else {
      // Trate os erros, se necessário
      return false
    }
  } catch (error: any) {
    // Trate os erros de rede ou outras exceções, se necessário
    console.error("Erro ao excluir o usuário:", error.message)
    return false // Você pode tratar o erro de outra maneira, se preferir.
  }
}
  
export const searchProducts = async (searchTerm: string) => {
  try {
    console.log("Searching", searchTerm)

    if (searchTerm) {
      const response = await axios.get(
        `${apiUrl}/products/search/${searchTerm}`
      )

      if (response.status === 200) {
        const data = response.data
        return data
      }
    }

    return []
  } catch (error:any) {
    console.error("Erro ao buscar produtos", error.message)
    return []
  }
}



export const fetchProduct = async (id: string) => {
  try {
    const response = await axios.get(`${apiUrl}/products/${id}`)

    if (response.status === 200) {
      const product = response.data
      return product
    }
  } catch (error:any) {
    console.error("Erro ao buscar o produto", error.message)
  }

  return null
}

export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(`${apiUrl}/users/${id}`)

    if (response.status === 200) {
      const user = response.data
      return user
    }
  } catch (error:any) {
    console.error("Erro ao buscar o usuário", error.message)
  }

  return null
}

export const extractProduct = async (url: string) => {
  try {
    const response = await axios.post(`${apiUrl}/extractor`, {
      url,
    })

    if (response.status === 200) {
      const product = response.data
      return product
    }
  } catch (error:any) {
    console.error("Erro ao extrair o produto", error.message)
  }

  return null
}
  
export const updateProduct = async (id: string, data: object) => {
  try {
    const response = await axios.put(`${apiUrl}/products/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    return response.status === 200
  } catch (error:any) {
    console.error("Erro ao atualizar o produto", error.message)
    return false
  }
}
export const updateUser = async (id: string, data: object, image: File) => {
  try {
    const formData = new FormData()
    formData.append("image", image)

    const response = await axios.put(`${apiUrl}/users/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    return response.status === 200
  } catch (error) {
    console.error("Erro ao atualizar o usuário", error)
    return false
  }
}

export const createProduct = async (data: object) => {
  console.log("Criando produto")

  try {
    const response = await axios.post(`${apiUrl}/products`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    return response.data
  } catch (error:any) {
    console.error("Erro ao criar o produto", error.message)
    return false
  }
}

export const createUser = async (data: object) => {
  console.log("Registrando usuário")

  try {
    const response = await axios.post(`${apiUrl}/users`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    return response.data
  } catch (error:any) {
    console.error("Erro ao criar o usuário", error.message)
    return error.message
  }
}

interface ResponseData {
  [key: string]: any;
}

export const authUser = async (
  data: Record<string, unknown>
): Promise<ResponseData | false> => {
  try {
    const response: AxiosResponse = await axios.post(
      `${apiUrl}/auth/login`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    if (response.status !== 200) {
      throw new Error("Erro ao logar")
    }

    const responseData: ResponseData = response.data
    return responseData
  } catch (error:any) {
    console.error("Erro ao logar", error.message)
    return false
  }
}

export const getUser = async (
  userId: string,
  jwt: string
): Promise<UserData | false> => {
  try {
    const response: AxiosResponse = await axios.get(
      `${apiUrl}/user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    )

    if (response.status !== 200) {
      throw new Error(`Erro ao obter usuário: ${response.status}`)
    }

    const responseData: UserData = response.data
    return responseData
  } catch (error:any) {
    console.error("Erro ao obter usuário", error.message)
    return false
  }
}

export const getAllStoreConfigs = async () => {
  try {
    const response = await axios.get(`${apiUrl}/store`)
    const storeConfigs = response.data
    if (storeConfigs.length > 0) {
      return storeConfigs
    } else {
      console.warn("A lista de configurações da loja está vazia.")
      return null // Ou outra lógica apropriada para lidar com a lista vazia
    }
  } catch (error:any) {
    console.error("Erro ao obter configurações da loja:", error.message)
    throw error
  }
}

export const updateStoreConfigs = async (id: string, data: object) => {
  console.log("Atualizando configurações da loja")

  try {
    const response = await axios.put(`${apiUrl}/store/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    return response.status === 200
  } catch (error:any) {
    console.error("Erro ao atualizar configuração da loja:", error.message)
    return false
  }
}

export const createDefaultStoreConfigs = async () => {
  console.log("Criando configurações padrões da loja")
  try {
    const response = await axios.post(`${apiUrl}/store/createDefaultConfig`)
    return response.data
  } catch (error:any) {
    console.error("Erro ao criar configurações padrão da loja:", error.message)
    throw error
  }
}
