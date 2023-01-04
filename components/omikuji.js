import { useState } from 'react'
import Modal from './modal'

export default function Omikuji() {
	const [show, setShow] = useState(false);
	const [result, setResult] = useState();
	const onClickResult = () => {
		let arr = [
			{name:"大吉", description:"今年の運勢は最高です！"},
			{name:"中吉", description:"今年の運勢はとても良さそうです！"},
			{name:"吉", description:"今年の運勢は悪くありません！"},
			{name:"凶", description:"今年の運勢は良く無いかも...です"},
		];
		let index = Math.floor(Math.random() * arr.length);
		setResult(arr[index]);
	  };
	return (
		<div>
			{
			(function () {
				const list = [];
				for (let i = 0; i < 24; i++) {
				list.push(
					<button
						onClick={() => {setShow(true);onClickResult();}}
						className="my-4 py-2 rounded-md  hover:bg-red-100 border-2 border-red-300 "
					>
						<p className='flex justify-center text-gray-600'>おみくじ
							<img
								className='h-5 px-2'
								src='/icons8-rabbit-64.png'>
							</img>
						</p>
					</button>
				);
				}
				return <div className="mx-auto grid max-w-lg gap-2 px-2 text-center lg:max-w-none grid-cols-3 md:grid-cols-4 lg:grid-cols-6">{list}</div>;
			}())
			}
			<Modal show={show} setShow={setShow} result={result}>
			</Modal>
		</div>
	)
}
