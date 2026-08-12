import { google } from "googleapis";

const email = process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL;
const privateKey = process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(
	/\\n/g,
	"\n"
);

if (!email) {
	throw new Error(
		"Missing GOOGLE_SERVICE_ACCOUNT_EMAIL environment variable"
	);
}

if (!privateKey) {
	throw new Error(
		"Missing GOOGLE_PRIVATE_KEY environment variable"
	);
}

const auth = new google.auth.GoogleAuth({
	credentials: {
		client_email: email,
		private_key: privateKey,
	},
	scopes: [
		"https://www.googleapis.com/auth/spreadsheets.readonly",
	],
});

const sheets = google.sheets({
	version: "v4",
	auth,
});

export async function getSheetData(
	spreadsheetId: string,
	range: string
): Promise<string[][]> {
	try {
		const response =
			await sheets.spreadsheets.values.get({
				spreadsheetId,
				range,
			});

		return response.data.values ?? [];
	} catch (error) {
		console.error(
			`[googleSheets] Failed to fetch "${range}":`,
			error
		);

		throw error;
	}
}