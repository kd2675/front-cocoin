'use client'
import { useHealth } from '@service/health/useHealthService'

export default function Health() {
	const { data: health } = useHealth()
	return <div>{health && <div>{health.data}</div>}</div>
}
