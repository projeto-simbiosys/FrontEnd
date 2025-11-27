export async function sendForgotPasswordEmail(email) {
  const url = "https://qvwyaefoftznswqmstzb.supabase.co/functions/v1/mailtrap";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();
  console.log("Resposta Mailtrap:", data);
}
