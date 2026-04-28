
async function räknaAlgebra() {
	let input = document.getElementById("algebraInput").value;
	
	if (input == "") {
		console.log("Ingen input");
	} else {
		
		const appId = '';
		const encodedQuery = encodeURIComponent(input);
		const url = 'https://api.wolframalpha.com/v1/result?appid=${appId}&i=${encodedQuery}';
		// const url = 'http://api.wolframalpha.com/v1/result?appid=XH2YR8V79R&i=How+far+is+Los+Angeles+from+New+York%3f';
		
		try {
			const response = await fetch(url, 
			{
				method: "GET", 
				headers: {
					"Access-Control-Allow-Origin": "http://api.wolframalpha.com/v1/result"
				}
			});
        
			if (!response.ok) {
				throw new Error(`API-fel: ${response.status}`);
			}

			const answer = await response.text();
		} catch (error) {
			console.error('Kunde inte hämta svar:', error);
		}
		
		document.getElementById("algebraSvar").innerText = answer;
	}
}