import { useQuery } from '@tanstack/react-query';
import queryOptions from '@api/service/health/queries';

export function useHealth() {
	return useQuery(queryOptions.health());
}