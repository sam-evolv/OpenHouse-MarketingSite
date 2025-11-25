type EventType = 'session' | 'chat' | 'pdf_download';

export async function logEvent(
  type: EventType,
  developmentId?: string,
  unitId?: string
): Promise<boolean> {
  try {
    const response = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        development_id: developmentId,
        unit_id: unitId,
      }),
    });

    if (!response.ok) {
      console.error("Event log failed:", await response.text());
      return false;
    }

    return true;
  } catch (err) {
    console.error("Event log failed:", err);
    return false;
  }
}

export function logSession(developmentId?: string, unitId?: string) {
  return logEvent('session', developmentId, unitId);
}

export function logChat(developmentId?: string, unitId?: string) {
  return logEvent('chat', developmentId, unitId);
}

export function logPdfDownload(developmentId?: string, unitId?: string) {
  return logEvent('pdf_download', developmentId, unitId);
}
