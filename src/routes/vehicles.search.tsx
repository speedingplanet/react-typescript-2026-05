import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/vehicles/search')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/vehicles/search"!</div>
}
