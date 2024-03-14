import React, { Component, ErrorInfo } from 'react';
import { PageError } from 'shared/ui/PageError/PageError';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <PageError />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
