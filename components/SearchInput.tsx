import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
	return (
		<div className="glassmorphism_gray flex items-center gap-2 px-4 py-2 rounded-2xl">
			<input
				type="search"
				placeholder="Search... "
				className="bg-transparent outline-none"
			/>
			<FaSearch className="text-xl" />
		</div>
	);
};

export default SearchInput;
