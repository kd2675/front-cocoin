import React, {useEffect} from 'react'
import Layout from '@component/common/layout'
import {menuActions} from "@redux/reducers/menu";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";

const Index = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(menuActions.setSubMenuNum(Number(400)))
		return ()=>{dispatch(menuActions.setSubMenuNum(Number(0)))}
	}, [router])

	return (
		<>
			<Layout>
				<section className='body-font relative text-gray-600'>
					<div className='container mx-auto flex flex-wrap px-5 py-24 sm:flex-nowrap'>
						<div className='relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10 md:w-1/2 lg:w-2/3'>
							<iframe
								width='100%'
								height='100%'
								className='absolute inset-0'
								frameBorder='0'
								title='map'
								scrolling='no'
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13023.164322797797!2d126.94920803654807!3d35.31117229350809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3571eb2d1d8c8de7%3A0x6cb392bd66f53d72!2z7KCE652864Ko64-EIOuLtOyWkeq1sCDri7TslpHsnY0g6rCA7IKw66asIDIzMi0xNw!5e0!3m2!1sko!2skr!4v1690267968367!5m2!1sko!2skr'
								style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4);' }}
							></iframe>
							<div className='relative flex flex-wrap rounded bg-white py-6 shadow-md'>
								<div className='px-6 lg:w-1/2'>
									<h2 className='title-font text-xs font-semibold tracking-widest text-gray-900'>ADDRESS</h2>
									<p className='mt-1'>Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
								</div>
								<div className='mt-4 px-6 lg:mt-0 lg:w-1/2'>
									<h2 className='title-font text-xs font-semibold tracking-widest text-gray-900'>EMAIL</h2>
									<a className='leading-relaxed text-indigo-500'>example@email.com</a>
									<h2 className='title-font mt-4 text-xs font-semibold tracking-widest text-gray-900'>PHONE</h2>
									<p className='leading-relaxed'>123-456-7890</p>
								</div>
							</div>
						</div>
						<div className='mt-8 flex w-full flex-col bg-white md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3'>
							<h2 className='title-font mb-1 text-lg font-medium text-gray-900'>Feedback</h2>
							<p className='mb-5 leading-relaxed text-gray-600'>Post-ironic portland shabby chic echo park, banjo fashion axe</p>
							<div className='relative mb-4'>
								<label htmlFor='name' className='text-sm leading-7 text-gray-600'>
									Name
								</label>
								<input
									type='text'
									id='name'
									name='name'
									className='w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
								/>
							</div>
							<div className='relative mb-4'>
								<label htmlFor='email' className='text-sm leading-7 text-gray-600'>
									Email
								</label>
								<input
									type='email'
									id='email'
									name='email'
									className='w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
								/>
							</div>
							<div className='relative mb-4'>
								<label htmlFor='message' className='text-sm leading-7 text-gray-600'>
									Message
								</label>
								<textarea
									id='message'
									name='message'
									className='h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
								></textarea>
							</div>
							<button className='rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none'>Button</button>
							<p className='mt-3 text-xs text-gray-500'>Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}

export default Index
