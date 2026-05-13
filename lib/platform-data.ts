import { controlDoc } from "@/lib/apps/control-doc"
import type { PlatformApp } from "@/lib/platform-types"

export type { PlatformApp } from "@/lib/platform-types"

export const activePlatformApps: PlatformApp[] = [controlDoc]

export function getPlatformAppBySlug(slug: string): PlatformApp | undefined {
  return activePlatformApps.find((app) => app.slug === slug)
}
