export async function externalFetch(request) {
	//TODO This is not called, have to add credential in header
	console.log("externalFetch");
	return fetch(request);
}
