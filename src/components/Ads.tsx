import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const AdUnit = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      ((window as any).adsbygoogle || []).push({});
    } catch (error) {
      // Primarily used to catch adsbygoogle.push() error
      // Mainly for local dev due to Strict mode triggering effect twice
      console.log((error as Error).message);
    }
  }, [pathname]);

  return (
    <div className="ad-unit">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5558366335634162"
        data-ad-slot="4436140515"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export const AdRow = () => {
  return (
    <div className="row">
      <div className="col-6">
        <AdUnit />
      </div>
      <div className="col-6">
        <AdUnit />
      </div>
    </div>
  );
};
