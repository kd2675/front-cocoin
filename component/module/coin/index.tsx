'use client'

import Lank from '@component/module/coin/Lank'
import Project from '@component/module/coin/Project'

type PropsType = {

};

const Index = (props: PropsType) => {
	return (
		<>
			<div className='mt-12 rounded-lg bg-gray-50/50'>
				<Lank></Lank>
				<Project></Project>
			</div>
		</>
	)
}

export default Index