import styled from '@emotion/styled';
import { makeInvoke, Modal } from '@forge/bridge';
import { useEffect, useMemo, useState } from 'react';

// The resolver functions this module calls, with their payload and result.
type ResolverDefinitions = {
  getText: (payload: { example: string }) => string;
};

const invoke = makeInvoke<ResolverDefinitions>();

const StyledApp = styled.main`
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  padding: 16px;
`;

export function App() {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    // Calls the `getText` function of the resolver that the manifest assigns
    // to this module.
    invoke('getText', { example: 'my-invoke-variable' }).then(setText);
  }, []);

  const modal = useMemo(
    () =>
      new Modal({
        resource: 'modal-dialog',
        onClose: (payload) => {
          console.log('Modal dialog closed with', payload);
        },
        size: 'medium',
        context: {
          customKey: 'custom-value',
        },
      }),
    [],
  );

  return (
    <StyledApp>
      <h1>Nx Forge Custom UI example</h1>
      <p>{text ?? 'Loading...'}</p>
      <button type="button" onClick={() => modal.open()}>
        Open modal dialog
      </button>
    </StyledApp>
  );
}

export default App;
