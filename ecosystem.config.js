module.exports = {
	apps: [
		{
			name: 'cocoin-pm2',
			script: 'next prod',
			instances: 2,
			exec_mode: 'cluster',
			autorestart: true,
			watch: false,
			listen_timeout: 5000,
			kill_timeout: 5000,
			max_memory_restart: '450M',
			error_file: 'NULL',
			out_file: 'NULL',
		},
	],
}
