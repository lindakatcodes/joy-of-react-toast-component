import React from "react";

function useEscapeKey(cbFunction) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        cbFunction(event);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cbFunction]);
}

export default useEscapeKey;
