export default function Nav() {
	return (
		<div className="bg-white sticky top-0 z-10 flex items-center px-4 py-4 space-x-10 shadow-md">
			<div className=''>
			</div>
			<div className='flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0'>
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

		</div>
	)
}
