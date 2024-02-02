

export const LanguageSwitcher = () => {
	languages.map((language, index) => (
		<Menu.Item key={index}>
			{({ active }) => (
				<a
					href="#"
					className={`${
						language.active ? "bg-green-500 text-white" : "text-gray-900"
					} group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
				>
					<img
						src={language.icon}
						className="w-5 h-5 mr-2"
						alt={language.name}
					/>
					{language.name}
				</a>
			)}
		</Menu.Item>
	));
};
