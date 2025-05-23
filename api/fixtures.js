export default async function handler(req, res) {
  const apiKey = process.env.API_FOOTBALL_KEY;

  const today = new Date();
  const from = today.toISOString().split('T')[0];

  const toDate = new Date();
  toDate.setDate(today.getDate() + 3);
  const to = toDate.toISOString().split('T')[0];

  const leagueId = 39; // Premier League
  const season = 2024;

  const response = await fetch(
    `https://v3.football.api-sports.io/fixtures?from=${from}&to=${to}&league=${leagueId}&season=${season}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": apiKey
      }
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}
