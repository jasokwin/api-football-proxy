export default async function handler(req, res) {
  const apiKey = process.env.API_FOOTBALL_KEY;

  const response = await fetch("https://v3.football.api-sports.io/fixtures?live=all", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": apiKey
    }
  });

  const data = await response.json();
  res.status(200).json(data);
}
