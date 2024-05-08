import HealthService from '@/service/health/HealthService'

const queryKeys = {
	all: ['health'] as const
}

const queryOptions = {
	all: () => ({
		queryKey: queryKeys.all,
		queryFn: () => HealthService.getHealth(),
	})
};

export default queryOptions;