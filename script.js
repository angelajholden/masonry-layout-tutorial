function articleFilter() {
	const buttons = document.querySelectorAll(".button");
	const articles = document.querySelectorAll(".article-item");

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const category = button.getAttribute("data-category");

			// Update active button
			buttons.forEach((btn) => {
				btn.classList.remove("active");
				btn.setAttribute("aria-pressed", "false");
			});
			button.classList.add("active");
			button.setAttribute("aria-pressed", "true");

			// Filter Articles
			articles.forEach((article) => {
				const articleCategory = article.getAttribute("data-category");

				if (category === "all" || category === articleCategory) {
					article.style.display = "";
				} else {
					article.style.display = "none";
				}
			});
		});
	});
}
document.addEventListener("DOMContentLoaded", () => {
	articleFilter();
});
