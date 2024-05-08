import Service from '@/service/Service';
import { Health } from '@/types/Health'

class HealthService extends Service {
	getHealth() {
		return this.http.get<Health>(
			`/api/auth/ctf/health`,
		);
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new HealthService();