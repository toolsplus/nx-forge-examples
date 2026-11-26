import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);
  return 'Hello, world!';
});

export const handler = resolver.getDefinitions();

// Rovo calls this action function with the inputs declared in the manifest.
export function messageLogger(payload: { message: string }) {
  console.log(`Message: ${payload.message}`);
  return `Successfully logged payload: ${payload.message}`;
}
