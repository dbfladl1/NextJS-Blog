// utils/apiRequest.ts
const BASE_URL ="http://localhost:3000";

export async function apiRequest<T>(
    url: string,
    method: "GET" | "POST" | "DELETE",
    body?: any
  ): Promise<{ ok: boolean; data: T | null; error?: any }> {
    try {
      const res = await fetch(`${BASE_URL}/api/guestbook`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        ...(body && { body: JSON.stringify(body) }),
      });
  
      let data = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }
  
      return {
        ok: res.ok,
        data: data ?? null,
        error: res.ok ? undefined : data?.error ?? "Unknown error",
      };
    } catch (err) {
      return { ok: false, data: null, error: err };
    }
  }
  