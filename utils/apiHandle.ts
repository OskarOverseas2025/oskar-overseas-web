import { BACKEND_BASE_URL } from "@/constants";

export async function getData(url: string) {
  const res = await fetch(`${BACKEND_BASE_URL}${url}`, { cache: "no-store" });
  if (!res.ok) {
    console.log("error");
  }
  return res?.json();
}

export async function postData(url: string, data: unknown) {
  const res = await fetch(`${BACKEND_BASE_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res?.json();
}
