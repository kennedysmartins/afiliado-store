"use server"

const apiUrl = process.env.BACKEND_URL!


export const fetchProducts = async () => {
    const response = await fetch(`${apiUrl}/products`);
    const products = await response.json();
    return products;
}

export const deleteProduct = async (productId:string) => {
    try {
      const response = await fetch(`${apiUrl}/products/${productId}`, {
        method: "DELETE",
      })
  
      if (response.status === 204) {
        // A exclusão foi bem-sucedida (status 204)
        return true;
      } else {
        // Trate os erros, se necessário
        return false;
      }
    } catch (error) {
      // Trate os erros de rede ou outras exceções, se necessário
      return false;
    }
};
  
export const searchProducts = async (searchTerm:string) => {
try {
  console.log("Searching", searchTerm);
    if (searchTerm) {
    const response = await fetch(`${apiUrl}/products/search/${searchTerm}`)
    if (response.ok) {
        const data = await response.json();
        return data;
    }
    }
    return [];
    } catch (error) {
        console.error('Erro ao buscar produtos', error);
        return [];
    }
};



export const fetchProduct = async (id:string) => {
    try {
      const response = await fetch(`${apiUrl}/products/${id}`)
      if (response.ok) {
        const product = await response.json();
        return product;
      }
    } catch (error) {
      console.error('Erro ao buscar o produto', error);
    }
    return null;
  };
  
export const updateProduct = async (id:string, data:object) => {
try {
    const response = await fetch(`${apiUrl}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return response.ok;
} catch (error) {
    console.error('Erro ao atualizar o produto', error);
    return false;
}
};

export const createProduct = async (data:object) => {
  console.log("Criando produto")
  try {
    const response = await fetch(`${apiUrl}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    console.log(response)
    

    return response.ok;
  } catch (error) {
    console.error('Erro ao criar o produto', error);
    return false;
  }
};


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

export const authUser = async (data: Record<string, unknown>): Promise<ResponseData | false> => {
  try {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Erro ao logar');
    }

    const responseData: ResponseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Erro ao logar', error);
    return false;
  }
}

export const getUser = async (userId:string, jwt:string) => {
  try {
    const response = await fetch(`${apiUrl}/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })

    if (!response.ok) {
      throw new Error(`Erro ao logar: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Erro ao logar', error);
    return false;
  }
}

