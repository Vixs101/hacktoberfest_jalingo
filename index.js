const paths = document.querySelectorAll("#nigeriaMap path");

paths.forEach(path => {
    path.addEventListener("click", () => {
        const stateId = "t-" + path.id;
        const row = document.getElementById(stateId);
        console.log(stateId);

        if (row) {
            row.scrollIntoView({ behavior: "smooth", block: "center" });
            
            row.classList.add("highlight");

            setTimeout(() => {
                row.classList.remove("highlight");
            }, 2000);
        }
    });
});