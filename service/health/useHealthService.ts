import { useQuery } from '@tanstack/react-query';
import queryOptions from '@/service/health/queries';

export function useHealth() {
	return useQuery(queryOptions.health());
}