import Result from "./Result";
import NotFound from "./NotFound";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   componentDidCatch(error, errorInfo) {
//     this.setState({ hasError: true });
//     console.error(error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <Result />;
//     }

//     return this.props.children;
//   }
// }

const AppRoutes = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<Result />} />
        <Route path="/images" element={<Result />} />
        <Route path="/videos" element={<Result />} />
        <Route path="/news" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
