import { useQuery } from '@tanstack/react-query';
import queryOptions from '@api/service/health/act/healthOption';

export function useHealth() {
	return useQuery(queryOptions.health());
}