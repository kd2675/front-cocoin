import HealthService from '@api/service/health/healthAxios'

const queryKeys = {
	health: ['health'] as const
}

const queryOptions = {
	health: () => ({
		queryKey: queryKeys.health,
		queryFn: () => HealthService.getHealth(),
	})
};

export default queryOptions;