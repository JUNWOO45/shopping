import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  Query,
} from "react-query";

const BASE_URL = "https://fakestoreapi.com";

type AnyObj = {
  [key: string]: any;
};

// Create a client
export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client) {
      client = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 1000 * 60 * 60 * 24,
            staleTime: 1000 * 60,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    }
    return client;
  };
})();

export const fetcher = async ({
  method,
  path,
  body,
  params,
}: {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  body?: AnyObj;
  params?: AnyObj;
}) => {
  try {
    let url = `${BASE_URL}${path}`;
    const fetchOptions: RequestInit = {
      method,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": BASE_URL,
      },
    };
    if (body) {
      fetchOptions.body = JSON.stringify(body);
    }

    if (params) {
      const searchParams = new URLSearchParams(params);
      url += "?" + searchParams.toString();
    }

    const res = await fetch(url, fetchOptions);
    const json = await res.json();

    return json;
  } catch (e) {
    console.error(e);
  }
};

export const QUERY_KEYS = {
  PRODUCTS: "PRODUCTS",
};
