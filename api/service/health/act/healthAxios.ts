import Service from '@api/service/Service'
import { BaseDataResponseType } from '@/api'

class HealthAxios extends Service {
	getHealth() {
		return this.http.get<BaseDataResponseType<string>>(`/cocoin/ctf/health`)
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new HealthAxios()
