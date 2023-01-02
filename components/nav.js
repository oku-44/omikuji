export default function Nav() {
	return (
		<div className="flex justify-center items-center py-4 bg-white sticky top-0 z-10 space-x-1">
				<a href="/">
					<span className="sr-only">omikuji</span>
					<img
						className="h-8 w-auto"
						src="/omikuji.png"
						alt=""
					/>
				</a>
				<a href="/" className="text-base font-medium text-gray-600">
					おみくじ引こうよ！
				</a>
				<img
					className='https://www27.a8.net/svt/bgt?aid=221230030654&wid=001&eno=01&mid=s00000008903001080000&mc=1'
				/>

		</div>
	)
}
