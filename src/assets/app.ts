// Toggle Theme
const themeController = document.querySelector(
	".theme-controller"
) as HTMLInputElement;
const root = document.querySelector("html") as HTMLHtmlElement;

// Initialize theme controller state based on current HTML class
const initializeThemeController = () => {
	const isDark = root.classList.contains("dark");
	themeController.checked = isDark;
};

const toggleTheme = () => {
	if (themeController.checked) {
		root.classList.add("dark");
		localStorage.setItem("theme", "dark");
	} else {
		root.classList.remove("dark");
		localStorage.setItem("theme", "light");
	}
};

// Initialize the theme controller to match current state
initializeThemeController();

// Add event listener for theme changes
themeController.addEventListener("change", toggleTheme);

// Rotate the Square on Hero Page and add blur effect on header

const square = document.querySelector(".square") as HTMLDivElement;

if (location.pathname === "/") {
	document.addEventListener("scroll", () => {
		const scrollY: number = window.scrollY;
		square.style.transform = `rotate(${scrollY / 10}deg)`;
	});
}

// Smooth scroll to recent posts section
const scrollButton = document.querySelector("#scroll-to-posts") as HTMLButtonElement;
const recentPostsSection = document.querySelector("#recent-posts") as HTMLElement;

if (scrollButton && recentPostsSection) {
	scrollButton.addEventListener("click", () => {
		const targetPosition = recentPostsSection.offsetTop - 100;
		window.scrollTo({
			top: targetPosition,
			behavior: "smooth"
		});
	});
}
