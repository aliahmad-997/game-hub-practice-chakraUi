import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchRespone } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchRespone<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
  });

export default usePlatform;
