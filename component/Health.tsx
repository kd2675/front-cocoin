'use client'
import { useHealth } from '@service/health/useHealthService'

export default function Health() {
	const health = useHealth()
	console.log(health)
	return <>{health && <h2>{health.data?.data}</h2>}</>
}
