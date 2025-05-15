export function buildCurl(method, token) {
	return {
		method: method,
		Authorization: "Bearer " + token,
		"Content-Type": "application/json",
		Accept: "application/json",
	};
}

// function fetchRequest(uri, curl) {
// 	fetch(uri, curl).then((response) => {
// 		if (!response.ok) {
// 			console.debug("Response is broken");
// 		}

// 	});
// }
