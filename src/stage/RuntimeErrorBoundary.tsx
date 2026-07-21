import { Component, type ErrorInfo, type ReactNode } from "react";

interface RuntimeErrorBoundaryProps {
  readonly children: ReactNode;
}

interface RuntimeErrorBoundaryState {
  readonly error: Error | null;
}

export class RuntimeErrorBoundary extends Component<
  RuntimeErrorBoundaryProps,
  RuntimeErrorBoundaryState
> {
  override state: RuntimeErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): RuntimeErrorBoundaryState {
    return { error };
  }

  override componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error(
      "Presentation stage failed safely.",
      error,
      info.componentStack,
    );
  }

  override render(): ReactNode {
    if (this.state.error) {
      return (
        <main className="stage stage--recovery" role="alert">
          <section className="recovery-panel">
            <p className="runtime-stage__eyebrow">Runtime interrupted</p>
            <h1>Presentation stage unavailable</h1>
            <p>
              The foundation runtime stopped safely. No presentation time is
              advancing.
            </p>
            <button
              type="button"
              onClick={() => this.setState({ error: null })}
            >
              Retry stage
            </button>
          </section>
        </main>
      );
    }
    return this.props.children;
  }
}
