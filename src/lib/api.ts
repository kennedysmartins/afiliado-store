"use server"
import axios, { AxiosResponse } from "axios"
import { UserData } from "./types"

const apiUrl = process.env.BACKEND_URL!


export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/products`)
    return response.data
  } catch (error) {
    console.error("Erro ao obter produtos:", error)
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
  } catch (error) {
    // Trate os erros de rede ou outras exceções, se necessário
    console.error("Erro ao excluir produto:", error)
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
  } catch (error) {
    console.error("Erro ao buscar produtos", error)
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
  } catch (error) {
    console.error("Erro ao buscar o produto", error)
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
  } catch (error) {
    console.error("Erro ao extrair o produto", error)
  }

  return null
}
  
export const updateProduct = async (id: string, data: object) => {
  try {
    console.log(`${apiUrl}/products/${id}`)
    const response = await axios.put(`${apiUrl}/products/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    return response.status === 200
  } catch (error) {
    console.error("Erro ao atualizar o produto", error)
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

    return response 
  } catch (error) {
    console.error("Erro ao criar o produto", error)
    return false
  }
}


 // const fetchCategories = async () => {
//   try {
//     const response = await fetch(`${apiUrl}/categories`);
//     const categories = await response.json();
//     return categories;
//   } catch (error) {
//     console.error('Erro ao buscar categorias', error);
//     return [];
//   }
// };

 // const deleteCategory = async (categoryId) => {
//   try {
//     const response = await fetch(`${apiUrl}/categories/${categoryId}`, {
//       method: 'DELETE',
//     });

//     if (response.status === 204) {
//       // A exclusão foi bem-sucedida (status 204)
//       return true;
//     } else {
//       // Trate os erros, se necessário
//       return false;
//     }
//   } catch (error) {
//     // Trate os erros de rede ou outras exceções, se necessário
//     return false;
//   }
// };

 // const fetchCategoriesOrderByName = async () => {
//   try {
//     const response = await fetch(`${apiUrl}/categories/categoriesOrderByName`);
//     const categories = await response.json();
//     return categories;
//   } catch (error) {
//     console.error('Erro ao buscar categorias', error);
//     return [];
//   }
// };


 // const fetchProductsPaginated = async (page, pageSize) => {
//   try {
//     const response = await fetch(`${apiUrl}/products/paginated?page=${page}&pageSize=${pageSize}`);
//     const productsData = await response.json();
//     return productsData;
//   } catch (error) {
//     throw new Error('Erro ao obter produtos paginados. Detalhes: ' + error.message);
//   }
// };

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
  } catch (error) {
    console.error("Erro ao logar", error)
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
  } catch (error) {
    console.error("Erro ao obter usuário", error)
    return false
  }
}
