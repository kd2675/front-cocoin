import HealthService from '@api/service/health/HealthService'

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