import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/hello-world')({
	component: HelloWorld,
});

function HelloWorld() {
	return <div>Custom greeting goes here</div>;
}
