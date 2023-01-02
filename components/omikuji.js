import { useState } from 'react'
import Modal from './modal'

export default function Omikuji() {
	const [show, setShow] = useState(false);

	return (
		<div>
			{
			(function () {
				const list = [];
				for (let i = 0; i < 24; i++) {
				list.push(
					<button onClick={() => setShow(true)}className="my-4 py-2 rounded-sm shadow-sm shadow-red-400 hover:shadow-lg hover:bg-red-50 hover:shadow-red-200">
						<p className='flex justify-center text-red'>おみくじ
							<img
								className='h-5 px-2'
								src='/icons8-rabbit-64.png'>
							</img>
						</p>
					</button>
				);
				}
				return <div className="mx-auto mt-12 grid max-w-lg gap-2 px-2 text-center lg:max-w-none grid-cols-3 md:grid-cols-4 lg:grid-cols-6">{list}</div>;
			}())
			}
			<Modal show={show} setShow={setShow}>

			</Modal>
		</div>
	)
}
