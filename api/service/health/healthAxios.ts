import Service from '@api/service/Service'
import { BaseResponseType } from '@/api'

class HealthAxios extends Service {
	getHealth() {
		return this.http.get<BaseResponseType<string>>(`/api/auth/ctf/health`)
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new HealthAxios()
