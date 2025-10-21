import { useEffect, useRef } from "react";

/**
 * Hook for monitoring component performance
 * @param componentName - Name of the component for logging
 */
export const usePerformanceMonitor = (componentName: string) => {
  const renderCount = useRef(0);
  const lastRenderTime = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    const currentTime = Date.now();
    const timeSinceLastRender = lastRenderTime.current
      ? currentTime - lastRenderTime.current
      : 0;

    if (process.env.NODE_ENV === "development") {
      console.log(
        `🔄 ${componentName} rendered ${renderCount.current} times. ` +
          `Time since last render: ${timeSinceLastRender}ms`
      );
    }

    lastRenderTime.current = currentTime;
  });
};

/**
 * Hook for measuring component mount time
 */
export const useMountTime = (componentName: string) => {
  useEffect(() => {
    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      if (process.env.NODE_ENV === "development") {
        console.log(
          `⏱️ ${componentName} was mounted for ${endTime - startTime}ms`
        );
      }
    };
  }, [componentName]);
};

/**
 * Hook for detecting expensive re-renders
 */
export const useRenderTime = (componentName: string, threshold = 16) => {
  const renderStartTime = useRef<number>(0);

  useEffect(() => {
    renderStartTime.current = performance.now();
  });

  useEffect(() => {
    if (renderStartTime.current) {
      const renderTime = performance.now() - renderStartTime.current;
      if (renderTime > threshold && process.env.NODE_ENV === "development") {
        console.warn(
          `🐌 Slow render detected: ${componentName} took ${renderTime.toFixed(2)}ms ` +
            `(threshold: ${threshold}ms)`
        );
      }
    }
  });
};
