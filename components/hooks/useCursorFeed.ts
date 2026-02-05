"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface ActivityItem {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  summary: string;
}

const PAGE_SIZE = 50;
const MAX_ITEMS = 200;

export function useCursorFeed() {
  const [items, setItems] = useState<ActivityItem[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchingRef = useRef(false);

  const fetchNext = useCallback(async () => {
    if (fetchingRef.current) return;

    fetchingRef.current = true;
    setIsLoading(true);

    try {
      const params = new URLSearchParams({
        limit: String(PAGE_SIZE),
      });

      if (nextCursor) {
        params.set("cursor", nextCursor);
      }

      const res = await fetch(`/api/activity-log?${params.toString()}`);
      const data = await res.json();

      setItems((prev) => {
        const combined = [...prev, ...data.items];

        // Enforce memory cap
        if (combined.length > MAX_ITEMS) {
          return combined.slice(combined.length - MAX_ITEMS);
        }

        return combined;
      });

      setNextCursor(data.nextCursor);
    } finally {
      fetchingRef.current = false;
      setIsLoading(false);
    }
  }, [nextCursor]);

  useEffect(() => {
    fetchNext();
  }, []);

  return {
    items,
    isLoading,
    fetchNext,
    hasMore: Boolean(nextCursor),
  };
}
