import { useQuery } from "@tanstack/react-query";
import { fetchPhotos } from "../Api/fetchPhotos";

export const useGetPhotos = () => {
  return useQuery({
    queryKey: ["photo"],
    queryFn: fetchPhotos,
  });
};
