import Service from '@/service/Service'
import { Response } from '@/types/Response'

class HealthService extends Service {
	getHealth() {
		return this.http.get<Response<string>>(`/api/auth/ctf/health`)
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new HealthService();