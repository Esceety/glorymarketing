/**
 * Simple Idempotency Helper for Stripe Webhook Events
 * Uses JSON file-based storage under .next/cache/stripe-events.json
 * Dev-safe and simple - suitable for low-volume production
 */

import fs from 'fs';
import path from 'path';

const CACHE_DIR = path.join(process.cwd(), '.next', 'cache');
const EVENTS_FILE = path.join(CACHE_DIR, 'stripe-events.json');

interface ProcessedEvents {
  [eventId: string]: {
    processedAt: string;
    type: string;
  };
}

function ensureCacheDir(): void {
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  }
}

function loadProcessedEvents(): ProcessedEvents {
  ensureCacheDir();
  if (!fs.existsSync(EVENTS_FILE)) {
    return {};
  }
  try {
    const content = fs.readFileSync(EVENTS_FILE, 'utf-8');
    return JSON.parse(content);
  } catch {
    return {};
  }
}

function saveProcessedEvents(events: ProcessedEvents): void {
  ensureCacheDir();
  fs.writeFileSync(EVENTS_FILE, JSON.stringify(events, null, 2), 'utf-8');
}

export function hasProcessed(eventId: string): boolean {
  const events = loadProcessedEvents();
  return eventId in events;
}

export function markProcessed(eventId: string, eventType: string): void {
  const events = loadProcessedEvents();
  events[eventId] = {
    processedAt: new Date().toISOString(),
    type: eventType,
  };
  saveProcessedEvents(events);
}
