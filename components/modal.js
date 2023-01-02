import { HandThumbUpIcon } from '@heroicons/react/24/outline'

export default function Modal({ show, setShow, children }) {
	const closeModal = () => {
	  setShow(false);
	};
	if (show) {
	  return (
		<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-10" id="overlay" onClick={closeModal}>
			<div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0" id="content" onClick={(e) => e.stopPropagation()}>
				<div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
					<div className="sm:flex sm:items-start">
						<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-300 sm:mx-0 sm:h-10 sm:w-10">
							<HandThumbUpIcon className="h-6 w-6 text-white" aria-hidden="true" />
						</div>
						<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
							<div as="h3" className="text-lg font-medium leading-6 text-gray-900">
								結果は...
							</div>
							<div className="mt-2">
								<p className="text-sm text-gray-500">
									大吉！！<br />
									あなたは今年1年ハッピーに過ごせます！
									あああ
								</p>
							</div>
						</div>
					</div>
					<div className="mt-5 sm:mt-4 sm:ml-10 sm:pl-4">
						<button
							type="button"
							className="items-end rounded-md border border-transparent bg-red-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto sm:text-sm"
							onClick={() => setShow(false)}
						>
						やり直す
						</button>
					</div>
				</div>
		  </div>
		</div>
	  );
	} else {
	  return null;
	}
  }