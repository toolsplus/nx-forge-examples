import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);
  return 'Hello, world!';
});

export const handler = resolver.getDefinitions();

export function messageLogger (payload: any) {
  console.log(`Message: ${payload.message}`);
  return `Successfully logged payload: ${payload.message}`
}
