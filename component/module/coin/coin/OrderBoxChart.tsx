'use client'

import { Chart } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	RadialLinearScale,
	Title,
	Tooltip,
	Legend,
	BarElement,
	type ChartData,
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
	RadialLinearScale
)

type PropsType = {}

const OrderBoxChart = (props: PropsType) => {
	const data: ChartData = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				type: 'bar',
				label: 'Dataset 1',
				borderColor: 'rgb(54, 162, 235)',
				borderWidth: 2,
				data: [1, 2, 3, 4, 5],
			},
			{
				type: 'bar',
				label: 'Dataset 2',
				backgroundColor: 'rgb(255, 99, 132)',
				data: [1, 2, 3, 4, 5, 6],
				borderColor: 'red',
				borderWidth: 2,
			},
			{
				type: 'radar',
				label: 'Dataset 3',
				backgroundColor: 'rgb(75, 192, 192)',
				data: [1, 2, 3, 4, 5, 6],
			},
		],
	}
	return (
		<>
			<div className='col-span-3 rounded-lg bg-white p-4 shadow sm:p-6 xl:p-8'>
				<div className='mb-4 flex items-center justify-between'>
					<div className='flex-shrink-0'>
						<span className='text-2xl font-bold leading-none text-gray-900 sm:text-3xl'>주문 차트</span>
						<h3 className='text-base font-normal text-gray-500'>BTC</h3>
					</div>
					<div className='flex flex-1 items-center justify-end text-base font-bold text-green-500'>
						12.5%
						<svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z'
								clipRule='evenodd'
							></path>
						</svg>
					</div>
				</div>
				<div id='main-chart'></div>
				<Chart type={'bar'} data={data} />
			</div>
		</>
	)
}

export default OrderBoxChart
