"use client"

// The NavUser component has been disabled as the backend and authentication are no longer in use.
// It now renders nothing to avoid breaking imports in other parts of the application.

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  return null
}

