import styled from '@emotion/styled';
import { view } from '@forge/bridge';

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
  return (
    <StyledApp>
      <h1>A modal dialog</h1>
      <p>
        The page that opened this dialog receives the payload passed to
        view.close() in its onClose callback.
      </p>
      <button type="button" onClick={() => view.close({ closedBy: 'button' })}>
        Close
      </button>
    </StyledApp>
  );
}

export default App;
