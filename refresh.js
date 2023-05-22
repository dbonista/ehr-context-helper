if (window.name == 'frMain') { //only load if we're in the clinical frame in Athena

	//lets load up the patient header again
	const parentElems = document.getElementsByClassName("patient-demographic-items");

	//this time, we'll add a spinner using Athena's own classes.
	Array.prototype.forEach.call(parentElems, element => {
		const listElem = document.createElement("li");
		const iconContainer = document.createElement("div");
		iconContainer.className = "chart-alert-container autostart";
		iconContainer.title = "Click to refresh patient clinical content"
		const iconDiv = document.createElement("div");
		iconDiv.className = "chart-alert-trigger";
		const refresh = document.createElement("span");
		refresh.className = "icon-streamlined-spinner"; //pulled from athena .css
		refresh.onclick = function() {
			this.classList.remove('icon-streamlined-spinner');
			this.classList.add('finite-scrolling-spinner');
			this.style.bottom = "5px";
			this.style.left = "10px";
			window.location.reload();
		};
		iconDiv.appendChild(refresh);
		iconContainer.appendChild(iconDiv);
		listElem.appendChild(iconContainer);
		element.appendChild(listElem);
	})
}