export default function isServer() {
	if (typeof window === 'undefined') return true
	return false
}
