if (window.name == 'frMain') { //only load if we're in the clinical frame in Athena

	//get the encounter briefing element
	const briefing = document.getElementsByClassName("encounter-stamp");

	//get data that's saved on the page meta data
	var target = {"encounter_id": ""}; //set encounter_id as blank by default
	//override NA encounter with page, if applicable
	if (document.getElementById("default-data-context")){
		const ary = JSON.parse(document.getElementById("default-data-context").content);
		for (let i = 0; i < ary.length; i++) {
			Object.assign(target, ary[i]);
		}
	}
	//set patient header(s) with new encounter element
	Array.prototype.forEach.call(briefing, element => {
		enc_elem = document.createElement("span")
		enc_elem.textContent = "ENC#" + target.encounter_id;
		element.prepend(enc_elem);
	})
}