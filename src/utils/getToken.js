const endPoint = "https://prod-in2.100ms.live/hmsapi/doctors.app.100ms.live/";
export default async function GetToken(role) {
  const response = await fetch(`${endPoint}api/token`, {
    method: "POST",
    body: JSON.stringify({
      user_id: "2234", // a reference user id assigned by you
      role: role, // stage, viewer
      room_id: "63ec8a09cd8175701aac03af", // copied from the dashboard
    }),
  });
  const { token } = await response.json();
  console.log("-----------", token);
  return token;
}
