import { makeInvoke } from '@forge/bridge';
import { Heading, Text } from '@forge/react';
import { useEffect, useState } from 'react';

// The resolver functions this module calls, with their payload and result.
type ResolverDefinitions = {
  getText: (payload: { example: string }) => string;
};

const invoke = makeInvoke<ResolverDefinitions>();

const App = () => {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    // Calls the `getText` function of the resolver that the manifest assigns
    // to this module.
    invoke('getText', { example: 'my-invoke-variable' }).then(setText);
  }, []);

  return (
    <>
      <Heading as="h1">Nx Forge UI Kit example</Heading>
      <Text>{text ?? 'Loading...'}</Text>
    </>
  );
};

export default App;
