import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/clients/search')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/clients/search"!</div>
}
