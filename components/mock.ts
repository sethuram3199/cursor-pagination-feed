export const BASE_ACTIVITY_LOGS = [
  {
    id: "1",
    timestamp: "2024-01-20T10:12:00Z",
    actor: "System",
    action: "Car created",
    summary: "Car with VIN CAR-001 added to fleet",
  },
  {
    id: "2",
    timestamp: "2024-01-20T09:50:00Z",
    actor: "Admin",
    action: "Mileage updated",
    summary: "Mileage updated to 12,450 km",
  },
  {
    id: "3",
    timestamp: "2024-01-20T09:20:00Z",
    actor: "Service Agent",
    action: "Service scheduled",
    summary: "Annual service scheduled",
  },
  {
    id: "4",
    timestamp: "2024-01-20T08:55:00Z",
    actor: "System",
    action: "Engine status updated",
    summary: "Engine marked as healthy",
  },
  {
    id: "5",
    timestamp: "2024-01-20T08:30:00Z",
    actor: "Admin",
    action: "Ownership transferred",
    summary: "Ownership transferred to John Doe",
  },
];

const DAY_MS = 24 * 60 * 60 * 1000;

export function generateActivityLogs(total: number) {
  const logs = [];
  const baseSize = BASE_ACTIVITY_LOGS.length;

  for (let i = 0; i < total; i++) {
    const baseIndex = i % baseSize;
    const sliceIndex = Math.floor(i / baseSize);

    const base = BASE_ACTIVITY_LOGS[baseIndex];

    const baseTime = new Date(base.timestamp).getTime();
    const shiftedTime = new Date(baseTime - sliceIndex * DAY_MS).toISOString();

    logs.push({
      ...base,
      id: String(i + 1),
      timestamp: shiftedTime,
    });
  }

  return logs;
}
